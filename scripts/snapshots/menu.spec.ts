import { test } from '@playwright/test';
import { BASE } from './constants';
import { snapshotPath } from './utils';

test.describe('Menu - Baseline Screens', () => {

  test('nav menu: ExtraOT', async ({ page }) => {
    await page.goto(`${BASE}/parking/home`);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.click('.navbar a.nav-link[href="/parking/extraOT"]');
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('navmenu', 'menu_extraOT');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  test('nav menu: Monitors, Shifts, TO', async ({ page }) => {
    await page.goto(`${BASE}/parking/home`);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.click('.navbar a.nav-link[href="/parking/edit"]');
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('navmenu', 'menu_monitors');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  test('nav menu: Holidays', async ({ page }) => {
    await page.goto(`${BASE}/parking/home`);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.click('.navbar a.nav-link[href="/parking/holiday"]');
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('navmenu', 'menu_holiday');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  test('nav menu: Overtime', async ({ page }) => {
    await page.goto(`${BASE}/parking/home`);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.click('.navbar a.nav-link[href="/parking/overtime"]');
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('navmenu', 'menu_overtime');
    await page.screenshot({ path: shotpath, fullPage: true });
  });


  test('nav menu: Schedule', async ({ page }) => {
    await page.goto(`${BASE}/parking/home`);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.click('.navbar a.nav-link[href="/parking/schedule"]');
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('navmenu', 'menu_schedule');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  test('nav menu: Export Overtime', async ({ page }) => {
    await page.goto(`${BASE}/parking/home`);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.click('.navbar a.nav-link[href="/parking/exportovertime"]');
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('navmenu', 'menu_exportovertime');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

  test('nav menu: Finalize', async ({ page }) => {
    await page.goto(`${BASE}/parking/home`);
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.click('.navbar a.nav-link[href="/parking/finalize"]');
    await page.waitForLoadState('networkidle');
    const shotpath = snapshotPath('navmenu', 'menu_finalize');
    await page.screenshot({ path: shotpath, fullPage: true });
  });

});

