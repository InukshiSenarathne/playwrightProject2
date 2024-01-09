// loginTest.ts

import { chromium } from 'playwright';

async function runTest() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the login page
  await page.goto('https://onlinelibrary.wiley.com/');

  // Find login form elements and fill in credentials
  await page.fill('input[name="username"]', 'senarathneinukshi@gmail.com');
  await page.fill('input[name="password"]', 'WileyLib@123*');

  // Click the login button
  await page.click('button[type="submit"]');

  // Wait for navigation or element that confirms successful login
  await page.waitForNavigation();

  // Example: Check if user is redirected to a dashboard or homepage
  const pageTitle = await page.title();
  console.log('Page title after login:', pageTitle);

  // Close the browser
  await browser.close();
}

// Run the test
runTest();
