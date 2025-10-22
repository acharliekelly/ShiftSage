import { test } from '@playwright/test';
import { BASE } from './constants';
import { snapshotPath } from './utils';


test.describe('ExtraOT - Baseline Screens', () => {
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

  test('open ExtraOT page',  async ({ page }) => {
    await page.goto(`${BASE}/parking/extraOT`);
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('extraOT');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  test('add hours', async ({ page }) => {
    await page.goto(`${BASE}/parking/extraOT`);
    await page.selectOption('#extraOTMonitorID', '?');
    await page.fill('#hoursAdded', "1");
    await page.fill('#comment', "some reason");
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('extraOT', 'added');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  test('delete hours', async ({ page }) => {
    await page.goto(`${BASE}/parking/extraOT`); 
    await page.click('table tr:first-of-type button.btn-danger');
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('extraOT', 'deleted');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

});