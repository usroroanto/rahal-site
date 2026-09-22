/**
 * Amélioration progressive des formulaires : validation en place, états chargement / erreur / succès.
 * Sans JavaScript, le formulaire est envoyé classiquement et la page revient avec un paramètre d'état.
 */

type Rule = (value: string, form: HTMLFormElement) => string | null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const WHATSAPP_RE = /^\+?[0-9 .()-]{6,20}$/;

const rules: Record<string, Rule> = {
  prenom: (v) => (v.trim().length < 2 ? 'Indique ton prénom.' : null),
  email: (v) => (EMAIL_RE.test(v.trim()) ? null : 'Indique une adresse email valide.'),
  whatsapp: (v, form) => {
    const value = v.trim();
    const consent = form.querySelector<HTMLInputElement>('input[name="consentement"]')?.checked;
    if (value && !WHATSAPP_RE.test(value)) return 'Indique un numéro valide (avec l’indicatif, ex. +33 6 12 34 56 78).';
    if (consent && !value) return 'Indique ton numéro WhatsApp pour recevoir les infos par ce canal.';
    return null;
  },
  sujet: (v) => (v.trim() ? null : 'Choisis un sujet.'),
  message: (v) => (v.trim().length < 10 ? 'Écris un message d’au moins quelques mots.' : null),
};

function setFieldError(form: HTMLFormElement, name: string, message: string | null) {
  const input = form.querySelector<HTMLInputElement>(`[name="${name}"]`);
  const error = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
  if (error) error.textContent = message ?? '';
  if (input) {
    if (message) input.setAttribute('aria-invalid', 'true');
    else input.removeAttribute('aria-invalid');
  }
}

function validate(form: HTMLFormElement): boolean {
  let firstInvalid: HTMLElement | null = null;
  for (const [name, rule] of Object.entries(rules)) {
    const input = form.querySelector<HTMLInputElement>(`[name="${name}"]`);
    if (!input) continue;
    const message = rule(input.value, form);
    setFieldError(form, name, message);
    if (message && !firstInvalid) firstInvalid = input;
  }
  firstInvalid?.focus();
  return !firstInvalid;
}

function showStatus(el: HTMLElement | null, message: string, kind: 'error' | 'info') {
  if (!el) return;
  el.textContent = message;
  el.className = `form-status form-status--${kind}`;
}

function showSuccess(root: HTMLElement, form: HTMLFormElement, data: { prenom?: string; programmeUrl?: string | null }) {
  const success = root.querySelector<HTMLElement>('[data-success]');
  if (!success) return;
  const name = success.querySelector<HTMLElement>('[data-success-name]');
  if (name) name.textContent = data.prenom ? `Merci ${data.prenom}. ` : 'Merci. ';
  const link = success.querySelector<HTMLAnchorElement>('[data-success-link]');
  if (link) {
    if (data.programmeUrl) {
      link.href = data.programmeUrl;
      link.hidden = false;
    } else {
      link.hidden = true;
    }
  }
  form.hidden = true;
  success.hidden = false;
  success.querySelector<HTMLElement>('h2, h3')?.focus();
}

export function enhanceForm(name: string) {
  const root = document.querySelector<HTMLElement>(`[data-form-root="${name}"]`);
  const form = root?.querySelector<HTMLFormElement>('form');
  if (!root || !form) return;

  const status = root.querySelector<HTMLElement>('[data-status]');
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]');
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]');
  const idleLabel = submitLabel?.textContent ?? '';

  const setLoading = (loading: boolean) => {
    if (submit) {
      submit.disabled = loading;
      submit.setAttribute('aria-busy', String(loading));
    }
    if (submitLabel) submitLabel.textContent = loading ? 'Envoi en cours…' : idleLabel;
  };

  // Retour d'un envoi sans JavaScript (paramètre d'état dans l'URL).
  const params = new URLSearchParams(window.location.search);
  const state = params.get(name);
  if (state === 'ok') {
    const link = root.querySelector<HTMLAnchorElement>('[data-success-link]');
    showSuccess(root, form, { programmeUrl: link && link.getAttribute('href') ? link.getAttribute('href') : null });
  } else if (state === 'erreur') {
    showStatus(status, 'L’envoi a échoué. Vérifie les champs et réessaie, ou écris-nous directement.', 'error');
  } else if (state === 'indisponible') {
    showStatus(status, 'L’envoi n’est pas encore disponible. Réessaie plus tard ou écris-nous directement.', 'error');
  }

  // Efface l'erreur d'un champ dès qu'on le corrige.
  form.addEventListener('input', (event) => {
    const target = event.target as HTMLInputElement;
    if (target?.name && rules[target.name]) setFieldError(form, target.name, null);
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    showStatus(status, '', 'info');
    if (status) status.className = 'form-status';
    if (!validate(form)) return;

    setLoading(true);
    const payload: Record<string, string> = {};
    new FormData(form).forEach((value, key) => {
      payload[key] = typeof value === 'string' ? value : '';
    });

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
        errors?: Record<string, string>;
        programmeUrl?: string | null;
      };

      if (response.ok && data.ok) {
        showSuccess(root, form, { prenom: payload.prenom, programmeUrl: data.programmeUrl ?? null });
        return;
      }

      if (data.errors) {
        for (const [field, message] of Object.entries(data.errors)) setFieldError(form, field, message);
      }
      showStatus(status, data.message ?? 'L’envoi a échoué. Réessaie dans quelques minutes.', 'error');
    } catch {
      showStatus(status, 'Impossible de joindre le serveur. Vérifie ta connexion et réessaie.', 'error');
    } finally {
      setLoading(false);
    }
  });
}
