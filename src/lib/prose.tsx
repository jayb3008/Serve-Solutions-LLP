/**
 * Inline links inside article prose.
 *
 * The blog `Block` model is plain text, so there was no way to cite a source
 * at the point a claim is made — and an audit of the built site found exactly
 * two external domains linked sitewide (both social profiles). Outbound
 * citations to primary sources are a corroboration signal for both classic
 * ranking and AI-generated answers, which prefer passages that name and link
 * what they are relying on.
 *
 * Rather than widen the `Block` union, paragraph and list text now accept the
 * markdown link form `[label](https://…)`, which stays readable in the data
 * file and renders to a real anchor here.
 */
/* eslint-disable react-refresh/only-export-components --
   This is a helper module in src/lib, not a component module. It has to be
   .tsx because it returns JSX, which is the only reason the rule fires. */
import type { ReactNode } from "react";

/** Absolute https links only — this is for outbound citations, not routing. */
const LINK = /\[([^\]]+)\]\((https:\/\/[^\s)]+)\)/g;

export function renderInline(text: string): ReactNode {
  LINK.lastIndex = 0;

  const out: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = LINK.exec(text)) !== null) {
    if (match.index > cursor) out.push(text.slice(cursor, match.index));
    out.push(
      <a
        key={match.index}
        href={match[2]}
        className="prose-link"
        /* No `nofollow`: these are editorial citations, and vouching for the
           source is the entire point. `noopener` because of the new tab. */
        target="_blank"
        rel="noopener"
      >
        {match[1]}
      </a>,
    );
    cursor = match.index + match[0].length;
  }

  // Uncited copy — the overwhelming majority — renders as a bare string, so
  // the prerendered HTML for those paragraphs is unchanged.
  if (!out.length) return text;

  if (cursor < text.length) out.push(text.slice(cursor));
  return out;
}
