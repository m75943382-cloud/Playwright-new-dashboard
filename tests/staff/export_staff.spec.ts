import { test, expect } from '@playwright/test';
import { clickWithDelay, fillWithDelay } from '../../utils/action.utils';

test('test', async ({ page }) => {
  await page.goto('https://sm.wefaq.site/new-dashboard/login');
  
  const emailField = page.getByRole('textbox', { name: 'Email address*' });
  await clickWithDelay(emailField, page);
  await fillWithDelay(emailField, page, 'mohamed.gamaan@emlenotes.com');
  
  const passwordField = page.getByRole('textbox', { name: 'Password*' });
  await clickWithDelay(passwordField, page);
  await fillWithDelay(passwordField, page, 'Mohamed@123');
  
  await clickWithDelay(page.getByRole('button', { name: 'Sign in' }), page);
  await clickWithDelay(page.getByRole('link', { name: 'Staff' }), page);
  
  const selectAllCheckbox = page.getByRole('checkbox', { name: 'Select/deselect all items for' });
  await clickWithDelay(selectAllCheckbox, page);

  const downloadPromise = page.waitForEvent('download');
  await clickWithDelay(page.getByRole('button', { name: 'Export' }), page);
  const download = await downloadPromise;
});