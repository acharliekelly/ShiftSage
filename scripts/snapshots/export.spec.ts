import { test, expect } from '@playwright/test';
import { BASE } from './constants';
import { snapshotPath } from './utils';

test.describe('Export Overtime - Baseline Screens', () => {
  
  test('open export page', async ({ page }) => {
    await page.goto(`${BASE}/parking/exportovertime`);
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('export');
    await page.screenshot({ path: shotpath, fullPage: true });
  })

});