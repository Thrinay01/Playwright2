import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');

  if (await page.getByRole('button', { name: 'Dismiss' }).isVisible()){

    await page.getByRole('button', { name: 'Dismiss' }).click();
 }
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('laptop');
  await page.getByRole('button', { name: 'Go', exact: true }).click();

  await expect(page.getByRole('link', { name: 'ASUS ROG Strix G16 (2025)' })).toBeVisible();

  await expect(page.getByRole('heading', { name: 'ASUS ROG Strix G16 (2025)' })).toContainText('ASUS ROG Strix G16 (2025) Gaming Laptop, 16” FHD+ 16:10 165Hz/3ms, NVIDIA® GeForce RTX™ 5060, Intel® Core™ i7 Processor 14650HX, 16GB DDR5, 1TB Gen 4 SSD, Wi-Fi 7, Windows 11 Home, G615JMR-AS74');
  
  await page.locator('#a-autoid-3').getByRole('button', { name: 'Add to cart' }).click();
 
  await page.getByRole('link', { name: 'item in cart' }).click();
  
  await expect(page.getByRole('list', { name: 'Shopping Cart' }).locator('h3')).toContainText('ASUS ROG Strix G16 (2025) Gaming Laptop, 16” FHD+ 16:10 165Hz/3ms, NVIDIA® GeForce RTX™ 5060, Intel® Core™ i7 Pr…');
 
  await page.getByRole('button', { name: 'Proceed to checkout Check out' }).click();
});