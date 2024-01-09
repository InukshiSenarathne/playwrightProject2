// searchBookTest.ts

import { chromium } from 'playwright';

async function runTest() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the website
  await page.goto('https://onlinelibrary.wiley.com/');

  // Search for the book "crystal"
  await page.fill('input[name="search"]', 'crystal');
  await page.press('input[name="search"]', 'Enter');

  // Wait for the search results page to load
  await page.waitForSelector('.search-results');

  // Check if the book "crystal" is visible in the search results
  const isBookVisible = await page.isVisible('.search-results .book-title:has-text("crystal")');
  console.log('Is the book "crystal" visible in search results?', isBookVisible);

  // Close the browser
  await browser.close();
}

// Run the test
runTest();
