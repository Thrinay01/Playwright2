import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('button', { name: 'Dismiss' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('steel water bottle');
  await page.getByRole('button', { name: 'Go', exact: true }).click();

  await expect(page.getByRole('link', { name: 'Sponsored Ad - Konokyo 17 oz' })).toBeVisible();

  const product = page.getByRole('link', { name: 'Sponsored Ad - Konokyo 17 oz' })

  await product .click();
  await product.getByRole('button', { name: 'Add to cart', exact: true }).click();
  await page.getByRole('button', { name: 'Proceed to checkout (2 items' }).click();
  await expect(page.getByRole('button', { name: 'Proceed to checkout (2 items' })).toBeVisible();
});