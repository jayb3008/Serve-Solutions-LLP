/**
 * Shared shapes for the service and industry content files.
 *
 * Both were typed `Record<string, any>`, which switched off checking for every
 * consumer downstream: the `.map()` callbacks in ServiceDetail and
 * IndustryDetail each had to re-annotate their parameter as `any` to satisfy
 * the linter, and a typo in a field name would have surfaced as a blank
 * section at runtime rather than a build error.
 */
import type { LucideIcon } from 'lucide-react';

/** One card in a "what we are good at" grid. */
export type Capability = {
  title: string;
  desc: string;
};

/** One numbered step in a service's delivery workflow. */
export type WorkflowStep = {
  /** Zero-padded display number, e.g. "01". */
  step: string;
  title: string;
  desc: string;
};

export type Service = {
  title: string;
  /** Canonical URL for the service, e.g. "/web-development". The
      `/services/<key>` path is prerendered too but kept out of the sitemap. */
  seoPath: string;
  icon: LucideIcon;
  tagline: string;
  overview: string;
  keywords: string;
  capabilities: Capability[];
  workflow: WorkflowStep[];
  tech: string[];
  image: string;
};

export type Industry = {
  title: string;
  icon: LucideIcon;
  tagline: string;
  overview: string;
  keywords: string;
  capabilities: Capability[];
  image: string;
};
