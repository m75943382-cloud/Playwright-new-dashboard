import { Page } from '@playwright/test';
import { clickWithDelay, fillWithDelay } from './action.utils';
import { authConfig } from '../config/auth.config';

export async function loginAs(page: Page, userType: 'admin' = 'admin') {
    const credentials = authConfig.credentials[userType];
    
    await page.goto(`${authConfig.baseUrl}/login`);
    const emailField = page.getByLabel('Email address*');
    await fillWithDelay(emailField, page, credentials.email);
    
    const passwordField = page.getByLabel('Password*');
    await fillWithDelay(passwordField, page, credentials.password);
    
    await clickWithDelay(page.getByRole('button', { name: 'Sign in' }), page);
    
    // Wait for successful login
    await page.waitForURL(`${authConfig.baseUrl}`);
}