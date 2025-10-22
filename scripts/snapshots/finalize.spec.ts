import { test, expect } from '@playwright/test';
import { BASE } from './constants';
import { snapshotPath } from './utils';


test.describe('Finalize - Baseline Screens', () => {
  test.beforeEach(async ({ page }) => {
    // Log In
    await page.goto(`${BASE}/parking/login`);
    await page.fill('#username', 'admin');
    await page.fill('#exampleInputPassword1', 'admin123');
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');
  });


  test.afterEach(async ({ page }) => {
    // Log out
    await page.click('.nav-link[href="/parking/logout"]');
    await page.waitForSelector('.row a[href="/parking/login"]')
  });

  test('finalize page', async ({ page }) => {
    await page.goto(`${BASE}/parking/finalize`);
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('finalize');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  // TODO: finalize, backup, import

});