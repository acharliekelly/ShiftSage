import { test, expect } from '@playwright/test';
import { BASE } from './constants';
import { snapshotPath } from './utils';

test.describe('Export Overtime - Baseline Screens', () => {
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

  test('open export page', async ({ page }) => {
    await page.goto(`${BASE}/parking/exportovertime`);
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('export');
    await page.screenshot({ path: shotpath, fullPage: true });
  })

});