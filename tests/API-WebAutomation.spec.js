
const {test, expect, request } = require ('@playwright/test');

const logInPayLoad = {userEmail: "dummy123@gmail.com", userPassword: "Password@10"};

const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"6960eac0c941646b7a8b3e68"}]};

let token;

let orderId;

test.beforeAll( async ()=> 

      { 

       const apiContext = await request.newContext();

       const logInResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",

        {
           data : logInPayLoad

        });

        expect(logInResponse.ok()).toBeTruthy();

        const logInResponseJson = await logInResponse.json();

        token = logInResponseJson.token;

        console.log(token);

       const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",

        {
           data : orderPayLoad,
           headers :{ 
                      'Authorization' : token,
                      'content-type'  : 'application/json'

                     },

          });           

          const orderResponseJson =  await orderResponse.json();

          orderId = orderResponseJson.orders[0];   
          
      } );

        

        test('login', async ({page}) => {

            await page.addInitScript(value => {

            window.localStorage.setItem('token', value);
          
            },token);

          await page.goto("https://rahulshettyacademy.com/client");
      
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

       const checkCountry = await (page.getByText(" Country - Cuba ")).last().isVisible();

       expect(checkEmail).toBeTruthy();

       expect(checkCountry).toBeTruthy();


    } )

     
    

      
    
    

     


             



    

