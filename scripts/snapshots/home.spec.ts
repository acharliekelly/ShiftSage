import { test, expect } from '@playwright/test';

// Base URL where Express serves current EJS version
const BASE = process.env.APP_URL ?? 'https://localhost:3000';

test.describe('Home - Baseline Screens', () => {
  test.beforeEach(async ({ page }) => {
    // Log In
    await page.goto(`${BASE}/parking/login`);
    await page.fill('#username', 'admin');
    await page.fill('#exampleInputPassword1', 'admin123');
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');
    // await page.screenshot({ path: 'docs/ui-baseline/home/2025-10-21_home.png', fullPage: true });
  });


  test.afterEach(async ({ page }) => {
    // Log out
    await page.click('.nav-link[href="/parking/logout"]');
    await page.waitForSelector('.row a[href="/parking/login"]')
  });

});