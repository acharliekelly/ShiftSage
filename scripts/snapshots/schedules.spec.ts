import { test, expect } from '@playwright/test';
import { BASE } from './constants';
import { snapshotPath } from './utils';

test.describe('Schedules - Baseline Screens', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE}/parking/login`);
    await page.fill('#username', 'admin');
    await page.fill('#exampleInputPassword1', 'admin123');
    await page.click('button[type="submit"]');
    await page.waitForLoadState('networkidle');
  });

  test('week default', async ({ page }) => {
    await page.goto(`${BASE}/parking/schedule`);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('schedule');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

});