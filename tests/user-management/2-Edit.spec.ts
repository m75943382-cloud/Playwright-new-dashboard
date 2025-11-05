import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sm.wefaq.site/new-dashboard');
  await page.waitForTimeout(1000); // Wait for page to load
  
  await page.getByRole('link', { name: 'Students' }).click();
  await page.waitForTimeout(1000); // Wait for navigation
  
  await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
  await page.waitForTimeout(500); // Wait for search box interaction
  
  await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('e2e-test-Create new student');
  await page.waitForTimeout(1000); // Wait for text input
  
  await page.getByRole('searchbox', { name: 'Search', exact: true }).press('Enter');
  await page.waitForTimeout(2000); // Wait for search results to load
  
  await page.getByRole('link', { name: 'Edit', exact: true }).click();
  await page.waitForTimeout(1000); // Wait for edit page to load
  
  await page.getByRole('button', { name: 'Inactive Clear selection' }).click();
  await page.waitForTimeout(1000); // Wait for dropdown to open
  
  await page.getByRole('option', { name: 'Inactive' }).click();
  await page.waitForTimeout(1000); // Wait for selection to be made
  
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.waitForTimeout(2000); // Wait for save operation to complete
});
