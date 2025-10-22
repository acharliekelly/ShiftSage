import { test, expect } from '@playwright/test';

// Base URL where Express serves current EJS version
const BASE = process.env.APP_URL ?? 'https://localhost:3000';

test.describe('Menu - Baseline Screens', () => {
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

  test('nav menu: ExtraOT', async ({ page }) => {
      await page.goto(`${BASE}/parking/home`);
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.click('.navbar a.nav-link[href="/parking/extraOT"]');
      await page.waitForLoadState('networkidle');
      await page.screenshot({ path: 'docs/ui-baseline/navmenu/2025-10-21_menu_extraOT.png', fullPage: true });
  });

  test('nav menu: Monitors, Shifts, TO', async ({ page }) => {
      await page.goto(`${BASE}/parking/home`);
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.click('.navbar a.nav-link[href="/parking/edit"]');
      await page.waitForLoadState('networkidle');
      await page.screenshot({ path: 'docs/ui-baseline/navmenu/2025-10-21_menu_monitors.png', fullPage: true });
  });

  test('nav menu: Holidays', async ({ page }) => {
      await page.goto(`${BASE}/parking/home`);
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.click('.navbar a.nav-link[href="/parking/holiday"]');
      await page.waitForLoadState('networkidle');
      await page.screenshot({ path: 'docs/ui-baseline/navmenu/2025-10-21_menu_holiday.png', fullPage: true });
  });

  test('nav menu: Overtime', async ({ page }) => {
      await page.goto(`${BASE}/parking/home`);
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.click('.navbar a.nav-link[href="/parking/overtime"]');
      await page.waitForLoadState('networkidle');
      await page.screenshot({ path: 'docs/ui-baseline/navmenu/2025-10-21_menu_overtime.png', fullPage: true });
  });

  test('nav menu: ExtraOT', async ({ page }) => {
      await page.goto(`${BASE}/parking/home`);
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.click('.navbar a.nav-link[href="/parking/extraOT"]');
      await page.waitForLoadState('networkidle');
      await page.screenshot({ path: 'docs/ui-baseline/navmenu/2025-10-21_menu_extraOT.png', fullPage: true });
  });

  test('nav menu: Schedule', async ({ page }) => {
      await page.goto(`${BASE}/parking/home`);
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.click('.navbar a.nav-link[href="/parking/schedule"]');
      await page.waitForLoadState('networkidle');
      await page.screenshot({ path: 'docs/ui-baseline/navmenu/2025-10-21_menu_schedule.png', fullPage: true });
  });

  test('nav menu: Export Overtime', async ({ page }) => {
      await page.goto(`${BASE}/parking/home`);
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.click('.navbar a.nav-link[href="/parking/exportovertime"]');
      await page.waitForLoadState('networkidle');
      await page.screenshot({ path: 'docs/ui-baseline/navmenu/2025-10-21_menu_exportovertime.png', fullPage: true });
  });

  test('nav menu: Finalize', async ({ page }) => {
      await page.goto(`${BASE}/parking/home`);
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.click('.navbar a.nav-link[href="/parking/finalize"]');
      await page.waitForLoadState('networkidle');
      await page.screenshot({ path: 'docs/ui-baseline/navmenu/2025-10-21_menu_finalize.png', fullPage: true });
  });

});

