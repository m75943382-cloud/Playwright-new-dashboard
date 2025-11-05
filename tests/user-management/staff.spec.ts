import { test, expect } from '@playwright/test';
import { clickWithDelay, fillWithDelay } from '../../utils/action.utils';

test('test', async ({ page }) => {
  await page.goto('https://sm.wefaq.site/new-dashboard/login');
  // Login with delays
  const emailField = page.getByRole('textbox', { name: 'Email address*' });
  await clickWithDelay(emailField, page);
  await fillWithDelay(emailField, page, 'mohamed.gamaan@emlenotes.com');
  
  const passwordField = page.getByRole('textbox', { name: 'Password*' });
  await clickWithDelay(passwordField, page);
  await fillWithDelay(passwordField, page, 'Mohamed@123');
  
  await clickWithDelay(page.getByRole('button', { name: 'Sign in' }), page);
  await clickWithDelay(page.getByRole('link', { name: 'Staff' }), page);
  await clickWithDelay(page.getByRole('link', { name: 'View' }).nth(5), page);
  
  // Team management actions with delays
  await clickWithDelay(page.getByRole('button', { name: 'Add to Team' }), page);
  await clickWithDelay(page.getByRole('button', { name: 'Member Clear selection' }), page);
  await clickWithDelay(page.getByRole('option', { name: 'Owner' }), page);
  await clickWithDelay(page.getByRole('dialog').getByRole('button', { name: 'Active Clear selection' }), page);
  await clickWithDelay(page.getByRole('switch', { name: 'Is Instructor' }), page);
  await clickWithDelay(page.getByRole('spinbutton', { name: 'Balance' }), page);
  await clickWithDelay(page.getByRole('button', { name: 'Cancel' }), page);
});