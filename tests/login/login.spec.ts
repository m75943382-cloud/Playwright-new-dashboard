import { test, expect } from '@playwright/test';
import { loginAs } from '../../utils/auth.utils';
import { authConfig } from '../../config/auth.config';

test('successful login with valid credentials', async ({ page }) => {
  await loginAs(page, 'admin');
  // Verify successful login
  await expect(page).toHaveURL(authConfig.baseUrl);
});