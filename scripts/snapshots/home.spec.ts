import { test, expect } from '@playwright/test';
import { BASE } from './constants';
import { snapshotPath } from './utils';

test.describe('Home - Baseline Screens', () => {

  test('home snapshot', async ({ page }) => {
    page.goto(`${BASE}/parking/overtime`);
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('home');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

});