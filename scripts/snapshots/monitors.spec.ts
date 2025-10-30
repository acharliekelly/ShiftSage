import { test } from '@playwright/test';
import { BASE, MONITOR_ID, MONITOR_NAME } from './constants';
import { snapshotPath } from './utils';

test.describe('Monitors - Baseline Screens', () => {

  test('open Monitors, Shifts & Time Off page',  async ({ page }) => {
    await page.goto(`${BASE}/parking/edit`);
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('monitors');
    await page.screenshot({ path: shotpath, fullPage: true });
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
    const shotpath = snapshotPath('monitors', 'add');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  test('delete monitor', async ({ page }) => {
    await page.goto(`${BASE}/parking/edit`); 
    await page.click('table tr:first-of-type button.btn-danger');
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('monitors', 'delete');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  test('edit monitor', async ({ page }) => {
    await page.goto(`${BASE}/parking/edit`); 
    // TODO: find entry
  });

});