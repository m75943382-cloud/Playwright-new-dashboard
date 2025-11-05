import { test as setup, expect } from '@playwright/test';
import { clickWithDelay, fillWithDelay } from '../utils/action.utils';

setup('authenticate', async ({ page }) => {
  await page.goto('https://sm.wefaq.site/new-dashboard/login');
  
  const emailField = page.getByRole('textbox', { name: 'Email address*' });
  await fillWithDelay(emailField, page, 'admin@app.com');
  
  const passwordField = page.getByRole('textbox', { name: 'Password*' });
  await fillWithDelay(passwordField, page, '12345678');
  
  await clickWithDelay(page.getByRole('button', { name: 'Sign in' }), page);
  
  // Wait for successful navigation
  await expect(page).toHaveURL('https://sm.wefaq.site/new-dashboard');
  
  // Save signed-in state
  await page.context().storageState({ path: 'auth.json' });
});