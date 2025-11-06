import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sm.wefaq.site/new-dashboard');
  await page.getByRole('link', { name: 'Staff' }).click();
  await page.getByRole('link', { name: 'New Staff' }).click();
  await page.getByRole('textbox', { name: 'Name (English)*' }).click();
  await page.getByRole('textbox', { name: 'Name (English)*' }).fill('test');
  await page.getByRole('textbox', { name: 'Name (Arabic)*' }).click();
  await page.getByRole('textbox', { name: 'Name (Arabic)*' }).fill('اختبار');
  await page.getByRole('textbox', { name: 'Mobile Number*' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number*' }).fill('1234567893');
  await page.getByRole('textbox', { name: 'Country Code*' }).click();
  await page.getByRole('textbox', { name: 'Country Code*' }).fill('+20');
  await page.getByRole('button', { name: 'Select an option' }).first().click();
  await page.getByRole('option', { name: 'Inactive' }).click();
  await page.getByRole('button', { name: 'Select an option' }).click();
  await page.getByRole('option', { name: 'begin' }).click();
  await page.getByRole('textbox', { name: 'Password*', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('Mo@12345');
  await page.getByRole('textbox', { name: 'Confirm Password*' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password*' }).fill('Mo@12345');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('textbox', { name: 'Job Title*' }).click();
  await page.getByRole('textbox', { name: 'Job Title*' }).fill('doc');
  await page.getByRole('button', { name: 'Create', exact: true }).click();

  await page.goto('https://sm.wefaq.site/new-dashboard');
  await page.getByRole('link', { name: 'Staff' }).click();
  await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('test');
  await page.getByRole('link', { name: 'View' }).first().click();
  await page.getByRole('link', { name: 'Edit', exact: true }).click();
  await page.getByRole('spinbutton', { name: 'Allowed Devices*' }).click();
  await page.getByRole('spinbutton', { name: 'Allowed Devices*' }).fill('2');
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.getByRole('navigation').filter({ hasText: 'Dashboard Global search' }).getByRole('link').click();
  await page.getByRole('link', { name: 'Staff' }).click();
  await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('test');
  await page.getByRole('button', { name: 'Actions' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Delete' }).click();
});