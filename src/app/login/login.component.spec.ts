// Test Cases:

// Test Case 1: Verify Username and Password Fields are Visible
// Description: Ensure that the username and password input fields are visible on the login page.

// Steps:
// Navigate to the login page.
// Check if the username input field is visible.
// Check if the password input field is visible.
// Expected Result: Both the username and password input fields should be visible.

// Test Case 2: Verify Error Message for Empty Username
// Description: Ensure that an error message is displayed when the username field is left empty and the form is submitted.

// Steps:
// Navigate to the login page.
// Leave the username field empty.
// Fill in the password field.
// Submit the form.
// Check for the error message "First Name is required."
// Expected Result: The error message "First Name is required." should be displayed.

// Test Case 3: Verify Error Message for Empty Password
// Description: Ensure that an error message is displayed when the password field is left empty and the form is submitted.

// Steps:
// Navigate to the login page.
// Fill in the username field.
// Leave the password field empty.
// Submit the form.
// Check for the error message "Password is required."
// Expected Result: The error message "Password is required." should be displayed.

// Test Case 4: Verify Error Message for Invalid Credentials
// Description: Ensure that an error message is displayed when invalid credentials are entered.

// Steps:
// Navigate to the login page.
// Fill in the username field with an invalid username.
// Fill in the password field with an invalid password.
// Submit the form.
// Check for the error message indicating invalid credentials.
// Expected Result: An error message indicating invalid credentials should be displayed.

// Test Case 5: Verify Successful Login
// Description: Ensure that the user can successfully log in with valid credentials.

// Steps:
// Navigate to the login page.
// Fill in the username field with a valid username.
// Fill in the password field with a valid password.
// Submit the form.
// Check for successful login indication (e.g., redirection to the dashboard).
// Expected Result: The user should be successfully logged in and redirected to the Customer Update page.