import { test, expect } from '@playwright/test';
import { clickWithDelay, fillWithDelay } from '../../utils/action.utils';

test('test', async ({ page }) => {
  await page.goto('https://sm.wefaq.site/new-dashboard/login');
  const emailField = page.getByRole('textbox', { name: 'Email address*' });
  await fillWithDelay(emailField, page, 'mohamed.gamaan@emlenotes.com');
  
  const passwordField = page.getByRole('textbox', { name: 'Password*' });
  await clickWithDelay(passwordField, page);
  await fillWithDelay(passwordField, page, 'aiusdfh65456afd');
  
  await clickWithDelay(page.getByRole('button', { name: 'Sign in' }), page);
});