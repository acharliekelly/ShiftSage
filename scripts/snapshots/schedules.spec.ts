import { test, expect } from '@playwright/test';

// Base URL where Express serves current EJS version
const BASE = process.env.APP_URL ?? 'https://localhost:3000';

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
    await page.screenshot({ path: 'docs/ui-baseline/schedules/2025-10-21_week-default.png', fullPage: true });
  });

});