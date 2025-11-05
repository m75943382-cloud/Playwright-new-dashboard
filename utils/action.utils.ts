import { Locator, Page } from '@playwright/test';

/**
 * Utility helpers to perform actions with a short delay after each action.
 * This helps stabilize tests against UI animations and async rendering.
 */
export async function clickWithDelay(locator: Locator, page: Page, delay = 300) {
  await locator.click();
  await page.waitForTimeout(delay);
}

export async function fillWithDelay(locator: Locator, page: Page, value: string, delay = 300) {
  await locator.fill(value);
  await page.waitForTimeout(delay);
}

export async function selectOptionWithDelay(locator: Locator, page: Page, option: any, delay = 300) {
  await locator.selectOption(option);
  await page.waitForTimeout(delay);
}

export async function waitShort(page: Page, delay = 300) {
  await page.waitForTimeout(delay);
}
