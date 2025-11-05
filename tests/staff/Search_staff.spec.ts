import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sm.wefaq.site/new-dashboard/login');
  await page.getByRole('textbox', { name: 'Email address*' }).click();
  await page.getByRole('textbox', { name: 'Email address*' }).fill('mohamed.gamaan@emlenotes.com');
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('Mohamed@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Staff' }).click();
  await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('ali');
  await page.getByRole('link', { name: 'Omar Goma Ali No email' }).click();
});