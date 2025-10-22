import { test, expect } from '@playwright/test';
import { BASE, MONITOR_ID, MONITOR_NAME } from './constants';

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

  test('open Monitors, Shifts & Time Off page',  async ({ page }) => {
    await page.goto(`${BASE}/parking/edit`);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'docs/ui-baseline/monitors/2025-10-21_monitors_default.png', fullPage: true });
  });

  test('add monitor', async ({ page }) => {
    await page.goto(`${BASE}/parking/edit`);

    await page.fill('#addMonitorId', MONITOR_ID);
    await page.fill('#addMonitorDisplayName', MONITOR_NAME);

    const addMonitorShift = page.locator('#addMonitorShiftTime');
    await addMonitorShift.selectOption({ index: 0 });

    const addMonitorShiftLocation = page.locator('#addMonitorShiftLocation');
    await addMonitorShiftLocation.selectOption({ index: 0 });

    await page.fill('#addMonitorHours', '99');
    await page.fill('#addMonitorSeniority', "10/21/2025");
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'docs/ui-baseline/monitors/2025-10-21_monitors_added.png', fullPage: true });
  });

  test('delete monitor', async ({ page }) => {
    await page.goto(`${BASE}/parking/edit`); 
    await page.click('table tr:first-of-type button.btn-danger');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'docs/ui-baseline/monitors/2025-10-21_monitors_deleted.png', fullPage: true });
  });

  test('edit monitor', async ({ page }) => {
    await page.goto(`${BASE}/parking/edit`); 
    // TODO: find entry
  })

});