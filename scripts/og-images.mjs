// Build-time Open Graph card generation.
//
// Every article previously used /logo.png as its Article.image and og:image.
// At 1024x512 that is below Google's 1200px minimum width for Article
// structured data, so the posts were ineligible for image-bearing rich
// results, and 59 pages shared one social preview.
//
// This renders a branded 1200x630 card per post: satori lays the card out and
// emits SVG, resvg rasterises it. Both run in plain Node, so no browser is
// needed during the build.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'dist', 'images', 'og');

const WIDTH = 1200;
const HEIGHT = 630;

// Brand tokens, mirroring src/index.css.
const INK = '#121518';
const ACCENT = '#e31e24';
const PAPER = '#faf9f7';
const MUTED = '#6b7280';

const fontFile = (p) => fs.readFile(path.join(root, 'node_modules', p));

const [serif, sans, sansBold] = await Promise.all([
  fontFile('@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff'),
  fontFile('@fontsource/inter/files/inter-latin-400-normal.woff'),
  fontFile('@fontsource/inter/files/inter-latin-600-normal.woff'),
]);

const fonts = [
  { name: 'Instrument Serif', data: serif, weight: 400, style: 'normal' },
  { name: 'Inter', data: sans, weight: 400, style: 'normal' },
  { name: 'Inter', data: sansBold, weight: 600, style: 'normal' },
];

/** Satori accepts React-element-shaped objects; no JSX transform needed here. */
const h = (type, props, ...children) => ({
  type,
  props: { ...props, children: children.length > 1 ? children : children[0] },
});

function card({ title, category, meta }) {
  // Long headlines need to step down or they overflow the card.
  const titleSize = title.length > 78 ? 52 : title.length > 52 ? 62 : 72;

  return h(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: PAPER,
        padding: '64px 72px',
        // Accent rule down the left edge, echoing the site's section borders.
        borderLeft: `14px solid ${ACCENT}`,
      },
    },
    h(
      'div',
      { style: { display: 'flex', flexDirection: 'column' } },
      h(
        'div',
        {
          style: {
            display: 'flex',
            fontFamily: 'Inter',
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: ACCENT,
            marginBottom: 32,
          },
        },
        category,
      ),
      h(
        'div',
        {
          style: {
            display: 'flex',
            fontFamily: 'Instrument Serif',
            fontSize: titleSize,
            lineHeight: 1.1,
            letterSpacing: -1,
            color: INK,
          },
        },
        title,
      ),
    ),
    h(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: `1px solid rgba(18,21,24,0.12)`,
          paddingTop: 28,
        },
      },
      h(
        'div',
        {
          style: {
            display: 'flex',
            fontFamily: 'Inter',
            fontSize: 24,
            fontWeight: 600,
            color: INK,
          },
        },
        'Satvix Tech Solutions',
      ),
      h(
        'div',
        { style: { display: 'flex', fontFamily: 'Inter', fontSize: 20, color: MUTED } },
        meta,
      ),
    ),
  );
}

export async function generateOgImages(posts) {
  await fs.mkdir(outDir, { recursive: true });

  let written = 0;
  for (const post of posts) {
    const svg = await satori(
      card({
        title: post.title,
        category: post.cat ?? 'Writing',
        meta: [post.date, post.read].filter(Boolean).join(' · '),
      }),
      { width: WIDTH, height: HEIGHT, fonts },
    );

    const png = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } })
      .render()
      .asPng();

    await fs.writeFile(path.join(outDir, `${post.slug}.png`), png);
    written += 1;
  }

  return written;
}
