import { test } from '@playwright/test';
import { BASE } from './constants';
import { snapshotPath } from './utils';

test.describe('Overtime - Baseline Screens', () => {

  test('open Overtime Sheets',  async ({ page }) => {
    await page.goto(`${BASE}/parking/overtime`);
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('overtime');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  // TODO: test other features

});