import { test, expect } from '@playwright/test';

import { BASE, MONITOR_ID, MONITOR_NAME, TEST_DATE } from './constants';

test.describe('Holiday - Baseline Screens', () => {
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

  test('open holidays', async ({ page }) => {
    await page.goto(`${BASE}/parking/holiday`);
    await page.screenshot({ path: 'docs/ui-baseline/holiday/2025-10-21_holiday_default.png', fullPage: true });
  });

  test('add university holiday', async ({ page }) => {
    await page.goto(`${BASE}/parking/holiday`);
    await page.fill('#holidayName', 'TEST HOLIDAY');
    await page.fill('#addHoliday', '10/21/2025');
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'docs/ui-baseline/holiday/2025-10-21_holiday_add.png', fullPage: true });
  });

  test('add blackout date', async ({ page }) => {
    await page.goto(`${BASE}/parking/holiday`);
    await page.fill('#blackoutName', "TEST BLACKOUT");
    await page.fill('#blackoutStart', TEST_DATE);
    await page.fill('#blackoutEnd', "10/31/25");
    await page.click('#displayBlackout button[type="submit"]');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'docs/ui-baseline/holiday/2025-10-21_blackout_add.png', fullPage: true });
  });

  test('delete holiday', async ({ page }) => {
    await page.goto(`${BASE}/parking/holiday`);
    await page.click('#displayHoliday table tr:last-of-type td:last-of-type button[type="submit"]');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'docs/ui-baseline/holiday/2025-10-21_holiday_delete.png', fullPage: true });
  });

  test('delete blackout', async ({ page }) => {
    await page.goto(`${BASE}/parking/holiday`);
    await page.click('#displayBlackout table tr:last-of-type td:last-of-type button[type="submit"]');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'docs/ui-baseline/holiday/2025-10-21_blackout_delete.png', fullPage: true });
  })

});