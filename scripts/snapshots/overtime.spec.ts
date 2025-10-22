import { test, expect } from '@playwright/test';
import { BASE, MONITOR_ID, MONITOR_NAME } from './constants';

test.describe('Overtime - Baseline Screens', () => {
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

  test('open Overtime Sheets',  async ({ page }) => {
    await page.goto(`${BASE}/parking/overtime`);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'docs/ui-baseline/overtime/2025-10-21_overtime_default.png', fullPage: true });
  });

  // TODO: test other features

});