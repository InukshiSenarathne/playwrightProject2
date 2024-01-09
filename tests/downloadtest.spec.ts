// downloadTest.ts

import { test, expect } from '@playwright/test';

test('Check if users can download a PDF version of an article', async ({ page }) => {
  // Navigate to the article page or search for the crystal book
  // ... (Code to navigate to the article or search for the book)

  // Click on the download link or button to download the PDF
  const downloadButton = await page.$('your-selector-for-download-button');
  expect(downloadButton).toBeTruthy(); // Ensure the download button is found
  await downloadButton!.click();

  // Wait for the download to complete (adjust the waiting time as needed)
  await page.waitForTimeout(5000); // 5 seconds (adjust as needed)

  // Check if the downloaded file exists
  const isDownloaded = await page.evaluate(() => {
    // Replace 'your-filename.pdf' with the expected PDF file name
    const expectedFileName = 'your-filename.pdf';

    // Check if the file exists
    const downloads = (window as any).__downloads__;
    return downloads.some((download: any) => download._url.includes(expectedFileName));
  });

  expect(isDownloaded).toBeTruthy();
});
