import { test, expect } from '@playwright/test';
import { clickWithDelay, fillWithDelay } from '../../../utils/action.utils';

test.use({
  storageState: 'auth.json'
});

test.describe('Complete Course E2E Test - Create, Edit, Delete', () => {
  test('create, edit, then delete a course', async ({ page }) => {
    const courseName = 'e2e-test';

    // ============================================
    // STEP 1: CREATE COURSE
    // ============================================
    
    // Calculate tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDay = tomorrow.getDate();

    // Go to dashboard and open New course
    await page.goto('https://sm.wefaq.site/new-dashboard');
    await clickWithDelay(page.getByRole('link', { name: 'Courses' }), page);
    await clickWithDelay(page.getByRole('link', { name: 'New course' }), page);
    
    // Fill in course name
    const nameField = page.getByRole('textbox', { name: 'Name*' });
    await clickWithDelay(nameField, page);
    await fillWithDelay(nameField, page, courseName);

    // Fill in Course ID
    const courseIdField = page.getByRole('textbox', { name: 'Course ID*' });
    await clickWithDelay(courseIdField, page);
    await fillWithDelay(courseIdField, page, `ID-${Date.now()}`);

    // Fill in Overview
    const overview = page.getByRole('textbox', { name: 'Overview' });
    await clickWithDelay(overview, page);
    await fillWithDelay(overview, page, 'for testing');

    // Fill in Price
    const price = page.getByRole('spinbutton', { name: 'Price*' });
    await clickWithDelay(price, page);
    await fillWithDelay(price, page, '300');

    // Fill in Duration
    const duration = page.getByRole('spinbutton', { name: 'Enrollment duration' });
    await clickWithDelay(duration, page);
    await fillWithDelay(duration, page, '360');

    // Select instructor
    await clickWithDelay(page.getByRole('button', { name: 'Select an option' }), page);
    await clickWithDelay(page.getByRole('option', { name: 'Eman Adel' }), page);
    
    // Fill in Max Students
    const maxStudents = page.getByRole('spinbutton', { name: 'Max Students on Leaderboard' });
    await clickWithDelay(maxStudents, page);
    await fillWithDelay(maxStudents, page, '10');

    // Fill in Pass Score
    const passScore = page.getByRole('spinbutton', { name: 'Pass Score (%)' });
    await clickWithDelay(passScore, page);
    await fillWithDelay(passScore, page, '50');

    // Set publish date to tomorrow dynamically
    const publishDate = page.getByRole('textbox', { name: 'Publish Date' });
    await clickWithDelay(publishDate, page);
    await clickWithDelay(page.getByRole('option', { name: tomorrowDay.toString(), exact: true }), page);

    // Set expiry date
    const expiryDate = page.getByRole('textbox', { name: 'Expiry Date' });
    await clickWithDelay(expiryDate, page);
    await clickWithDelay(page.getByRole('option', { name: '30' }), page);
    
    // Toggle checkboxes and switches
    await clickWithDelay(page.locator('label').filter({ hasText: 'Visible to Students' }), page);
    await clickWithDelay(page.getByRole('checkbox', { name: 'Display Price' }), page);
    await clickWithDelay(page.getByRole('checkbox', { name: 'Allow Offline Access' }), page);
    await clickWithDelay(page.getByRole('checkbox', { name: 'Display Students Count' }), page);
    await clickWithDelay(page.getByRole('switch', { name: 'Enable Marketing' }), page);
    
    // Navigate to Security Settings tab
    await clickWithDelay(page.getByRole('tab', { name: 'Security Settings' }), page);
    await clickWithDelay(page.getByRole('switch', { name: 'National ID Verification' }), page);
    await clickWithDelay(page.getByRole('switch', { name: 'Face Recognition' }), page);
    await clickWithDelay(page.getByRole('switch', { name: 'Headphone Required' }), page);
    await clickWithDelay(page.getByRole('switch', { name: 'Notification Security' }), page);
    
    // Create the course
    await clickWithDelay(page.getByRole('button', { name: 'Create', exact: true }), page);
    await page.waitForTimeout(2000);

    console.log('✓ Course created successfully');

    // ============================================
    // STEP 2: EDIT COURSE
    // ============================================
    
    // Navigate to courses page
    await page.goto('https://sm.wefaq.site/new-dashboard');
    await page.getByRole('link', { name: 'Courses' }).click();
    
    // Search for the created course
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill(courseName);
    await page.getByRole('searchbox', { name: 'Search', exact: true }).press('Enter');
    await page.waitForTimeout(2000);

    // Open the course
    await page.getByRole('link', { name: 'e2e-test', exact: true }).first().click();
    
    // Wait for the page to load and then click the Edit button
    await page.waitForURL('**/courses/*'); // Wait for course details page to load
    await page.getByRole('link', { name: 'Edit', exact: true }).click();

    // Edit price
    await page.getByRole('spinbutton', { name: 'Price*' }).click();
    await page.getByRole('spinbutton', { name: 'Price*' }).fill('101');
    
    // Uncheck Display Price
    await page.getByRole('checkbox', { name: 'Display Price' }).uncheck();
    
    // Navigate to Security Settings and toggle Face Recognition
    await page.getByRole('tab', { name: 'Security Settings' }).click();
    await page.getByRole('switch', { name: 'Face Recognition' }).click();

    // Save changes
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Save changes' }).click();
    await page.waitForTimeout(2000);

    console.log('✓ Course edited successfully');

    // ============================================
    // STEP 3: DELETE COURSE
    // ============================================
    
    // Navigate back to courses page
  /*await page.goto('https://sm.wefaq.site/new-dashboard');
   await page.getByRole('link', { name: 'Courses' }).click();
   await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
   await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('e2e-test');
   await page.goto('https://sm.wefaq.site/new-dashboard/courses?search=e2e-test');
   await page.getByRole('searchbox', { name: 'Search', exact: true }).fill('e2e-test');
   await page.getByRole('searchbox', { name: 'Search', exact: true }).press('Enter');
   await page.waitForTimeout(1000);
 
  await page.getByRole('link', { name: 'e2e-test', exact: true }).first().click();
  await page.getByRole('link', { name: 'View' }).nth(3).click();*/
  await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Delete' }).click();

  
  
    

    console.log('✓ Course deleted successfully');
    console.log('✓ Complete E2E test finished successfully');
  });
});
