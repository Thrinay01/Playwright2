
const {test, expect} = require ('@playwright/test');



test('Login-AddCart-Verify', async ({page}) => 

    {
          const productName = 'ZARA COAT 3';
          const userName = 'dummy123@gmail.com';
          const password = 'Password@10';

       await page.goto("https://rahulshettyacademy.com/client");

       await page.locator("#userEmail").fill(userName);

       await page.locator("[type='password']").fill(password);

       await page.locator("[type='submit']").click();

       //await page.pause();

       const product = page.locator(".card-body") ; 

       await expect (product.first()).toBeVisible();

       for(let i=0; i < await product.count(); i++)

        {
           
          const productTitle = await product.nth(i).locator("b").textContent();


          if (productTitle == productName )

            {
              //  await product.nth(i).locator(".btn.w-10").click();

              // await product.nth(i).getByText("Add To Cart").click();

              await product.nth(i).getByRole('button',{ name : 'Add To Cart'}).click();

                break;
            }
        }

    // click on cart & verify

    await page.locator("[routerlink*=cart]").click();

    await page.locator("div li").first().waitFor();

    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();

    await expect(bool).toBeTruthy;

    //click on checkout

    await page.locator("text=Checkout").click();

  //dynamic drop down
     
     await page.locator("[placeholder*='Country']").waitFor();

     await page.locator("[placeholder*='Country']").pressSequentially("ind", {delay: 100});

     const dropDownValues =  page.locator(".ta-results");

     await dropDownValues.waitFor();

    const optionsCount =  await dropDownValues.locator("button").count();

    console.log(optionsCount);

    for (let i = 0; i < optionsCount ; i++ ) 

      {
        const text = await dropDownValues.locator("button").nth(i).textContent();

        console.log(text);

        if (text == " India")

          {
            await dropDownValues.locator("button").nth(i).click();
            break;
          }

       }

    
     await expect (page.locator(".user__name [type='text']").first()).toHaveText("dummy123@gmail.com");

    //enter details
    
    await page.locator("[type='text']").nth(1).fill("123");

     await page.locator("[type='text']").nth(2).fill("dummy");

     await page.locator("[name='coupon']").fill("cop123");

     await page.locator("[type='submit']").click();

     const bool1 = await page.getByText("* Invalid Coupon").isVisible();

     await expect (bool).toBeTruthy();
    

     //click on place order

     await page.locator(".action__submit").click();

      const thanks = page.getByText(" Thankyou for the order. ").isVisible();

      await expect(thanks).toBeTruthy;

      const orderId = await page.locator("label.ng-star-inserted").textContent();

      console.log(orderId);

      await expect(page.locator("div.title").first()).toHaveText("ZARA COAT 3");

      await page.locator("[routerlink*='myorders']").last().click();

      //Find your order & click on View


      const rows = page.locator("tbody tr");

      await rows.first().waitFor();

      const totalOrderCount = await rows.count();

      for (let i = 0; i < totalOrderCount ; i++)

        {
           const orderIDFromTable = await rows.nth(i).locator("th").textContent();

           console.log(orderIDFromTable);

           if (orderId.includes(orderIDFromTable))

            {
              await rows.nth(i).locator("button").first().click();

              break;
            }
         }

         // get  data from details paage and assert
     
        const orderIDFromDetails =  await page.locator(".col-text").textContent();

       await expect (orderId.includes(orderIDFromDetails)).toBeTruthy();

       const billingAddress = await page.locator("div.address").first().textContent();

       console.log(billingAddress);

       const address = page.locator("div.address");

       const checkEmail = await (page.getByText(" dummy123@gmail.com ")).first().isVisible();

       const checkCountry = await (page.getByText(" Country - India ")).last().isVisible();

       expect(checkEmail).toBeTruthy();

       expect(checkCountry).toBeTruthy();


    } )


