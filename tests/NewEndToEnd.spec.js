
const {test,expect} = require('@playwright/test');

test('login', async ({browser}) => 
    
    {
        const context = await browser.newContext();
         const  page = await context.newPage();

         const productName = 'ZARA COAT 3';
          const userName = 'dummy123@gmail.com';
          const password = 'Password@10';

          // login

       await page.goto("https://rahulshettyacademy.com/client");

       await page.locator("#userEmail").fill(userName);

       await page.getByPlaceholder("enter your passsword").fill(password);

       await page.locator("[name='login']").click();

       //searchProductAndAddToCart

       const product = page.locator(".card-body");

       await expect (product.first()).toBeVisible();

       console.log(await product.first().textContent());

       for(let i = 0; i < await product.count() ;i++){

        const productTitle = await page.locator("h5").nth(i).textContent();

        console.log(productTitle);

        if(productTitle == productName){

            await page.locator("button.btn.w-10.rounded").nth(i).click();

            break;

        }  
    }
    //goToCart

    await page.locator("[routerlink*='dashboard/cart']").click();

    await page.locator("div li").first().waitFor();

     const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();

     await expect(bool).toBeTruthy;

     //click on checkout

     await page.locator("[type='button']").last().click();
          
    })


