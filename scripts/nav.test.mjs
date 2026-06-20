// Navbar interaction test (manual). Requires Playwright + Chromium:
//   npm i -D playwright && npx playwright install chromium
// Then, with the built site served (npm run build && npm run preview):
//   BASE=http://localhost:4173 node scripts/nav.test.mjs
import { chromium } from 'playwright';

const base = process.env.BASE || 'http://localhost:4399';
const results = [];
const check = (name, cond) => results.push([name, !!cond]);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

async function loadHome() {
  await page.goto(base + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500); // let the intro loader finish
}

// ---- Desktop: Services dropdown ----
await loadHome();
const svc = page.locator('.navdrop', { hasText: 'What we do' }).first();
const svcPanel = svc.locator('.mega').first();

check('services panel hidden before hover', (await svcPanel.evaluate(el => getComputedStyle(el).visibility)) === 'hidden');

await svc.locator('.nav-item').hover();
await page.waitForTimeout(450);
check('services panel visible on hover',
  (await svcPanel.evaluate(el => getComputedStyle(el).visibility)) === 'visible' &&
  (await svcPanel.evaluate(el => getComputedStyle(el).opacity)) === '1');

// move cursor down into the panel — must stay open (the bug was: it closed here)
const firstLink = svcPanel.locator('a.mega__link').first();
await firstLink.hover();
await page.waitForTimeout(350);
check('services panel STAYS open when moving into it',
  (await svcPanel.evaluate(el => getComputedStyle(el).opacity)) === '1');

// panel sits within the viewport (not clipped off-screen)
const box = await svcPanel.boundingBox();
check('services panel within viewport', box && box.x >= -2 && (box.x + box.width) <= 1442);

// no grid ITEM overflows the right edge (the bug from the screenshot:
// the 3rd column spilled outside the card and was clipped at the viewport)
const rights = await svcPanel.locator('a.mega__link').evaluateAll(
  (els) => els.map((e) => Math.round(e.getBoundingClientRect().right))
);
const maxRight = Math.max(...rights);
check(`no service item overflows viewport (max right=${maxRight} <= 1440)`, maxRight <= 1440);
check('services grid shows all 12 items', rights.length === 12);

// clicking a link navigates
await firstLink.click();
await page.waitForTimeout(900);
check('clicking a service link navigates', page.url().includes('/services/'));

// ---- Desktop: Industries dropdown ----
await loadHome();
const ind = page.locator('.navdrop', { hasText: 'Industries' }).first();
await ind.locator('.nav-item').hover();
await page.waitForTimeout(450);
check('industries panel visible on hover',
  (await ind.locator('.mega').first().evaluate(el => getComputedStyle(el).visibility)) === 'visible');

// ---- Desktop: Company dropdown (hover) ----
await loadHome();
const comp = page.locator('.navdrop', { hasText: 'Company' }).first();
await comp.locator('.nav-item').hover();
await page.waitForTimeout(450);
check('company panel visible on hover',
  (await comp.locator('.mega').first().evaluate(el => getComputedStyle(el).visibility)) === 'visible');

// ---- Desktop: parent trigger is a link to its hub ----
await loadHome();
await page.locator('.navdrop', { hasText: 'What we do' }).first().locator('.nav-item').click();
await page.waitForTimeout(900);
check('parent "What we do" navigates to /services hub', page.url().endsWith('/services'));

// ---- Mobile menu ----
await page.setViewportSize({ width: 390, height: 844 });
await loadHome();
const hamburger = page.locator('.nav-hamburger');
check('hamburger shown on mobile', await hamburger.isVisible());
await hamburger.click();
await page.waitForTimeout(300);
check('mobile menu opens', await page.getByRole('link', { name: 'Careers' }).first().isVisible());
// expand an accordion
await page.getByRole('button', { name: /What we do/ }).click();
await page.waitForTimeout(300);
check('mobile accordion expands', await page.getByRole('link', { name: 'Web Development' }).first().isVisible());

await browser.close();

let ok = true;
console.log('\n──── NAVBAR TEST RESULTS ────');
for (const [n, c] of results) { console.log(`${c ? '✓ PASS' : '✗ FAIL'}  ${n}`); if (!c) ok = false; }
console.log('─────────────────────────────');
console.log(ok ? 'ALL PASSED' : 'SOME FAILED');
process.exit(ok ? 0 : 1);
