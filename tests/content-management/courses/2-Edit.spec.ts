import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sm.wefaq.site/new-dashboard');
  await page.getByRole('link', { name: 'Courses' }).click();
  await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('e2e-test');
  await page.goto('https://sm.wefaq.site/new-dashboard/courses?search=e2e-test');
  await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('e2e-test');
  await page.getByRole('searchbox', { name: 'Search', exact: true }).press('Enter');
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Edit', exact: true }).click();
  await page.getByRole('spinbutton', { name: 'Price*' }).click();
  await page.getByRole('spinbutton', { name: 'Price*' }).fill('101');
  await page.getByRole('checkbox', { name: 'Display Price' }).uncheck();
  await page.getByRole('tab', { name: 'Security Settings' }).click();
  await page.getByRole('switch', { name: 'Face Recognition' }).click();


  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Save changes' }).click();
});