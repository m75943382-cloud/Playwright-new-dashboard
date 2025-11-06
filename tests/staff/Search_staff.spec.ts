 import { test, expect } from '@playwright/test';
 
 test.use({
   storageState: 'auth.json'
 });
 
 test('test', async ({ page }) => {
  await page.goto('https://sm.wefaq.site/new-dashboard');
  await page.getByRole('link', { name: 'Staff' }).click();
  await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('test');
  await page.getByRole('link', { name: 'View' }).first().click();
  await page.getByRole('link', { name: 'Edit', exact: true }).click();
  await page.getByRole('spinbutton', { name: 'Allowed Devices*' }).click();
  await page.getByRole('spinbutton', { name: 'Allowed Devices*' }).fill('2');
  await page.getByRole('button', { name: 'Save changes' }).click();
  });