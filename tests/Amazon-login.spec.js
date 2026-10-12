const { test, expect, request} = require('@playwright/test');

test('login-flipkart', async ({browser}) =>

    {

    const context =  await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://www.amazon.com");

    await expect(page.locator("#nav-link-accountList")).toBeVisible();

    await page.locator("#nav-link-accountList").click();

    await page.getByLabel("Enter mobile number or email").fill("lucky.udaya123@gmail.com");

    console.log( await page.getByLabel("Enter mobile number or email").textContent());

    console.log( await page.getByLabel("Enter mobile number or email").inputValue());

   // await page.getByRole('button' , {name : Continue}).click();

   await page.locator("//input[@type='submit']").click();

   await page.locator("#ap_password").fill('Lucky@123');

 //  await page.getByRole('button', {name : 'Sign in'});

    await page.locator("#signInSubmit").click();

    await page.getByRole('searchbox', {name : 'Search Amazon'}).fill('samsung galaxy');

     await page.getByRole('button', {name : 'Go', exact : true}).click();

     const product = page.getByRole("listitem")
      .filter({hasText : 'Galaxy S26 Ultra, Unlocked Android Smartphone, 256GB, Black'});

     console.log(await product.count());

     await product.click();

     await page.pause();





   

    

    












    }








)
