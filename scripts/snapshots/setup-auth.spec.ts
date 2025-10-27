import { test as setup } from '@playwright/test';
import path from 'path';
import { BASE } from './constants';

const authFile = path.join(__dirname, 'storageState.json');

// TODO: Mask demo credentials with env vars before deployment

// only run manually when session changes
setup('authenticate', async ({ page }) => {
  // fill in demo credentials
  await page.goto(`${BASE}/parking/login`);
  await page.fill('#username', process.env.PLAYWRIGHT_USER!);
  await page.fill('#exampleInputPassword1', process.env.PLAYWRIGHT_PASSWORD!);
  await page.click('button[type="submit"]');

  // wait for known post-login element
  await page.waitForLoadState('networkidle');

  await page.context().storageState({ path: authFile });

  console.log('✅ Auth state saved to', authFile);
});

// Run manually:
// bash
//$ npx playwright test scripts/snapshots/setup-auth.spec.ts