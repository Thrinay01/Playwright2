 //import annotation from playwright module
 
 const test = require('@playwright/test');

 test('navigatetourl', async ({browser})=>
    {
         //your code starts here

         const context = await browser.newContext();

         const page = await context.newPage();

         await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    })

    
    test.only('navigate', async ({page}) => {
    

         await page.goto("https:www.google.com");

       const name = await page.title();
 
       console.log(name);

    })

