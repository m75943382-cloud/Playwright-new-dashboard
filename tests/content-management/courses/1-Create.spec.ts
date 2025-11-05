import { test, expect } from '@playwright/test';
import { clickWithDelay, fillWithDelay } from '../../../utils/action.utils';

test.use({
  storageState: 'auth.json'
});

test.describe('Content Management - Create then Edit Course', () => {
  test('create a course then edit the created course', async ({ page }) => {
    const courseName = 'e2e-test';

    // Calculate tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDay = tomorrow.getDate();

    // Go to dashboard and open New course
    await page.goto('https://sm.wefaq.site/new-dashboard');
    await clickWithDelay(page.getByRole('link', { name: 'Courses' }), page);
    await clickWithDelay(page.getByRole('link', { name: 'New course' }), page);
    
    const nameField = page.getByRole('textbox', { name: 'Name*' });
    await clickWithDelay(nameField, page);
    await fillWithDelay(nameField, page, courseName);

    // Fill in Course ID
    const courseIdField = page.getByRole('textbox', { name: 'Course ID*' });
    await clickWithDelay(courseIdField, page);
    await fillWithDelay(courseIdField, page, `ID-${Date.now()}`);

    const overview = page.getByRole('textbox', { name: 'Overview' });
    await clickWithDelay(overview, page);
    await fillWithDelay(overview, page, 'for testing');

    const price = page.getByRole('spinbutton', { name: 'Price*' });
    await clickWithDelay(price, page);
    await fillWithDelay(price, page, '300');

    const duration = page.getByRole('spinbutton', { name: 'Enrollment duration' });
    await clickWithDelay(duration, page);
    await fillWithDelay(duration, page, '360');

    await clickWithDelay(page.getByRole('button', { name: 'Select an option' }), page);
    await clickWithDelay(page.getByRole('option', { name: 'Eman Adel' }), page);
    
    const maxStudents = page.getByRole('spinbutton', { name: 'Max Students on Leaderboard' });
    await clickWithDelay(maxStudents, page);
    await fillWithDelay(maxStudents, page, '10');

    const passScore = page.getByRole('spinbutton', { name: 'Pass Score (%)' });
    await clickWithDelay(passScore, page);
    await fillWithDelay(passScore, page, '50');

    // Set publish date to tomorrow dynamically
    const publishDate = page.getByRole('textbox', { name: 'Publish Date' });
    await clickWithDelay(publishDate, page);
    await clickWithDelay(page.getByRole('option', { name: tomorrowDay.toString(), exact: true }), page);

    const expiryDate = page.getByRole('textbox', { name: 'Expiry Date' });
    await clickWithDelay(expiryDate, page);
    await clickWithDelay(page.getByRole('option', { name: '30' }), page);
    
    await clickWithDelay(page.locator('label').filter({ hasText: 'Visible to Students' }), page);
    await clickWithDelay(page.getByRole('checkbox', { name: 'Display Price' }), page);
    await clickWithDelay(page.getByRole('checkbox', { name: 'Allow Offline Access' }), page);
    await clickWithDelay(page.getByRole('checkbox', { name: 'Display Students Count' }), page);
    await clickWithDelay(page.getByRole('switch', { name: 'Enable Marketing' }), page);
    
    await clickWithDelay(page.getByRole('tab', { name: 'Security Settings' }), page);
    await clickWithDelay(page.getByRole('switch', { name: 'National ID Verification' }), page);
    await clickWithDelay(page.getByRole('switch', { name: 'Face Recognition' }), page);
    await clickWithDelay(page.getByRole('switch', { name: 'Headphone Required' }), page);
    await clickWithDelay(page.getByRole('switch', { name: 'Notification Security' }), page);
    
    await clickWithDelay(page.getByRole('button', { name: 'Create', exact: true }), page);
    await page.waitForTimeout(2000);
  });
});