import { test, expect } from '@playwright/test';

// Test Case 1: Verify Customer Update Form Fields are Visible
// Description: Ensure that all input fields in the customer update form are visible.
test('should successfully log in with valid credentials', async ({ page }) => {
  // Navigate to the login page.
  await page.goto('http://localhost:4200/login') 
  // Fill in the username field with a valid username.
  // Fill in the password field with a valid password.
    const usernameField = await page.locator('input[name="name"]').fill('tester');
    const passwordField = await page.locator('input[name="password"]').fill('tester@123');
  // Submit the form.
  await page.locator('button[type=submit]').click();

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Login Successful');
    await dialog.dismiss();
  });
  //await page.click('#alert-button');
  // Page redirected to http://localhost:4200/customer-update
await expect(page.url()).toBe('http://localhost:4200/customer-update?username=tester');


// Check if the username input field is visible.
// Check if the  password input field is visible.
// Check if the  firstname number input field is visible.
// Check if the  lastname input field is visible.
// Check if the  email input field is visible.
// Check if the phone number input field is visible.
// Check if the  date of birth number input field is visible.
await page.locator('input[name="username"]');
await page.locator('input[name="password"]');
await page.locator('input[name="firstName"]');
await page.locator('input[name="lastName"]');
await page.locator('input[name="email"]');
await page.locator('input[name="phone"]');
await page.locator('input[name="dateofBirth"]');
// Expected Result: All input fields should be visible.
  });




// Test Case 2: Verify Error Message for Empty password
// Description: Ensure that an error message is displayed when the password field is left empty and the form is submitted.

test.describe('Missing data1', () => {
  test('should display error message for empty password', async ({ page }) => {
    // Navigate to the login page.
    await page.goto('http://localhost:4200/login') 
    // Fill in the username field with a valid username.
    // Fill in the password field with a valid password.
    const usernameField = await page.locator('input[name="name"]').fill('tester');
    const passwordField = await page.locator('input[name="password"]').fill('tester@123');
    // Submit the form.
    await page.locator('button[type=submit]').click();

    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Login Successful');
      await dialog.dismiss();
    });

    //empty password
      await page.locator('input[name="password"]')
      await page.locator('input[name="firstName"]').fill('Name');
      await page.locator('input[name="lastName"]').fill('Lastname');
      await page.locator('input[name="email"]').fill('something@a.a');
      await page.locator('input[name="phone"]').fill('1234567891');
      await page.locator('input[name="dateofBirth"]').fill('1980-02-12');


          await page.locator('button[type=submit]').click();
      // Check for the error message "Username is required is required."
      await expect(page.locator('text=Password is required.')).toBeVisible();


// Submit the form.

// Expected Result: The error message "Username is required is required." should be displayed.
    await page.locator('button[type=submit]').click();
// Check for the error message "Username is required is required."
const errorMessage = await page.locator('text=Password is required.');
await expect(errorMessage).toBeVisible();
});
} );




// Test Case 3: Verify Error Message for Invalid Email
// Description: Ensure that an error message is displayed when an invalid email is entered in the email field.

// Steps:
// Navigate to the customer update page.
// Fill in the customer name field.
// Enter an invalid email in the email field.
// Fill in the other required fields.
// Submit the form.
// Check for the error message indicating that the email is invalid.
// Expected Result: The error message indicating that the email is invalid should be displayed.

// Test Case 4: Verify Successful Customer Update
// Description: Ensure that the customer details are successfully updated when valid data is entered.

// Steps:
// Navigate to the customer update page.
// Fill in all required fields with valid data.
// Submit the form.
// Check for a success message or redirection to the customer details page.
// Expected Result: The customer details should be successfully updated, and a success message should be displayed or the user should be redirected to the customer details page.

// Test Case 5: Verify Error Message for Empty Required Fields
// Description: Ensure that error messages are displayed when required fields are left empty and the form is submitted.

// Steps:
// Navigate to the customer update page.
// Leave one or more required fields empty.
// Submit the form.
// Check for error messages indicating that the required fields are empty.
// Expected Result: Error messages indicating that the required fields are empty should be displayed.