import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
  await page.goto('https://sm.wefaq.site/new-dashboard/login');
  await page.getByRole('textbox', { name: 'Email address*' }).fill('mohamed.gamaan@emlenotes.com');
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('Mohamed@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  });
});
