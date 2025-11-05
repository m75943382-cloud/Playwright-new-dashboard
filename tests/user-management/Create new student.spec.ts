import { test, expect } from '@playwright/test';
import { clickWithDelay, fillWithDelay } from '../../utils/action.utils';

test.use({
  storageState: 'auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://sm.wefaq.site/new-dashboard');
  await clickWithDelay(page.getByRole('link', { name: 'Students' }), page);
  await clickWithDelay(page.getByRole('link', { name: 'New student' }), page);
  await clickWithDelay(page.getByRole('textbox', { name: 'Name (English)*' }), page);
  await fillWithDelay(page.getByRole('textbox', { name: 'Name (English)*' }), page, 'e2e-test-Create new student');
  await clickWithDelay(page.getByRole('textbox', { name: 'Name (Arabic)*' }), page);
  await fillWithDelay(page.getByRole('textbox', { name: 'Name (Arabic)*' }), page, 'مستخدم جديد');
  await clickWithDelay(page.getByRole('textbox', { name: 'Mobile Number*' }), page);
  await fillWithDelay(page.getByRole('textbox', { name: 'Mobile Number*' }), page, '1004711823');
  await clickWithDelay(page.getByRole('textbox', { name: 'Country Code*' }), page);
  await fillWithDelay(page.getByRole('textbox', { name: 'Country Code*' }), page, '+20');
  await clickWithDelay(page.getByRole('button', { name: 'Select an option' }).first(), page);
  await clickWithDelay(page.getByRole('option', { name: 'Active', exact: true }), page);
  await clickWithDelay(page.getByRole('button', { name: 'Select an option' }), page);
  await clickWithDelay(page.getByRole('option', { name: 'begin' }), page);
  await clickWithDelay(page.getByRole('textbox', { name: 'Password*', exact: true }), page);
  await fillWithDelay(page.getByRole('textbox', { name: 'Password*', exact: true }), page, 'Mo@12345');
  await clickWithDelay(page.getByRole('textbox', { name: 'Confirm Password*' }), page);
  await fillWithDelay(page.getByRole('textbox', { name: 'Confirm Password*' }), page, 'Mo@12345');
  await clickWithDelay(page.getByRole('tab', { name: 'Academic Information' }), page);
  await clickWithDelay(page.getByRole('tabpanel', { name: 'Educational Background Field' }).getByRole('img'), page);
  await clickWithDelay(page.getByTitle('Nursing'), page);
  await clickWithDelay(page.getByRole('button', { name: 'Select student type' }), page);
  await page.waitForTimeout(3000);
  await clickWithDelay(page.getByText('Under Graduate'), page);
  await clickWithDelay(page.getByRole('spinbutton', { name: 'Graduation Year' }), page);
  await page.waitForTimeout(3000);
  await fillWithDelay(page.getByRole('spinbutton', { name: 'Graduation Year' }), page, '2026');
   await page.waitForTimeout(3000);
  await clickWithDelay(page.getByRole('button', { name: 'Create', exact: true }), page);
   //await page.waitForTimeout(50000);
});
