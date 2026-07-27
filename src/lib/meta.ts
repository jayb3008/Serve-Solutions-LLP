/**
 * Meta-description helpers.
 *
 * Google renders roughly 155-160 characters of a description before
 * truncating. The site had 40 pages under 70 characters (industry and service
 * pages used only their one-line `tagline`, which reads well as a hero line
 * but carries no entity, service or reason to click) and 21 over 160.
 */

const MAX = 158;
const MIN_USEFUL = 70;

/**
 * Trim to `max` characters without cutting a word in half.
 * Prefers ending on a sentence boundary when one falls in the last third,
 * so the result reads as finished rather than clipped.
 */
export function clampDescription(text: string, max = MAX): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;

  const window = clean.slice(0, max);

  // A sentence ending late in the window makes a natural stopping point.
  const sentenceEnd = Math.max(
    window.lastIndexOf(". "),
    window.lastIndexOf("! "),
    window.lastIndexOf("? "),
  );
  if (sentenceEnd > max * 0.66) return window.slice(0, sentenceEnd + 1);

  const lastSpace = window.lastIndexOf(" ");
  let cut = lastSpace > 0 ? window.slice(0, lastSpace) : window;

  // Drop trailing punctuation, then any dangling function word — "…DPDP and…"
  // reads worse than "…DPDP…".
  const DANGLING = /\s+(?:and|or|but|the|a|an|to|for|with|of|in|on|at|as|by|from|that|which)$/i;
  cut = cut.replace(/[,;:—-]+$/, "");
  while (DANGLING.test(cut)) cut = cut.replace(DANGLING, "");

  return cut.replace(/[,;:—-]+$/, "") + "…";
}

/**
 * Build a description from a short hook plus supporting detail.
 * The hook carries the voice, the detail carries the keywords and the
 * specifics that earn the click. Falls back to the hook alone if there is
 * nothing to add.
 */
export function buildDescription(hook: string, ...detail: (string | undefined)[]): string {
  const parts = [hook, ...detail].filter((s): s is string => Boolean(s && s.trim()));
  if (!parts.length) return "";

  let out = parts[0].trim();
  for (const next of parts.slice(1)) {
    if (out.length >= MIN_USEFUL) break;
    out = `${out.replace(/\s+$/, "")} ${next.trim()}`;
  }
  return clampDescription(out);
}
