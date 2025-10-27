import { test } from '@playwright/test';
import { BASE, TEST_DATE } from './constants';
import { snapshotPath } from './utils';

test.describe('Holiday - Baseline Screens', () => {

  test('open holidays', async ({ page }) => {
    await page.goto(`${BASE}/parking/holiday`);
    const shotpath = snapshotPath('holiday');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  test('add university holiday', async ({ page }) => {
    await page.goto(`${BASE}/parking/holiday`);
    await page.fill('#holidayName', 'TEST HOLIDAY');
    await page.fill('#addHoliday', '10/21/2025');
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('holiday', 'add_holiday');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  test('add blackout date', async ({ page }) => {
    await page.goto(`${BASE}/parking/holiday`);
    await page.fill('#blackoutName', "TEST BLACKOUT");
    await page.fill('#blackoutStart', TEST_DATE);
    await page.fill('#blackoutEnd', "10/31/25");
    await page.click('#displayBlackout button[type="submit"]');
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('holiday', 'add_blackout');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  test('delete holiday', async ({ page }) => {
    await page.goto(`${BASE}/parking/holiday`);
    await page.click('#displayHoliday table tr:last-of-type td:last-of-type button[type="submit"]');
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('holiday', 'delete_holiday');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  test('delete blackout', async ({ page }) => {
    await page.goto(`${BASE}/parking/holiday`);
    await page.click('#displayBlackout table tr:last-of-type td:last-of-type button[type="submit"]');
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('holiday', 'delete_blackout');
    await page.screenshot({ path: shotpath, fullPage: true });
  })

});