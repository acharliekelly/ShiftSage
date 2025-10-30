import { test, expect } from '@playwright/test';
import { BASE } from './constants';
import { snapshotPath } from './utils';


test.describe('Finalize - Baseline Screens', () => {

  test('finalize page', async ({ page }) => {
    await page.goto(`${BASE}/parking/finalize`);
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('finalize');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  // TODO: finalize, backup, import

});