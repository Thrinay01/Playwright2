
const { test, expect } = require('@playwright/test');
const { describe } = require('node:test');

test('childWindow', async({browser}) =>

    {
         const context = await browser.newContext();
         const page = await context.newPage();

         await page.goto("https://rahulshettyacademy.com/loginpagePractise/");   

         const documentLink = page.locator("a[href*=documents]");
         
         await expect(documentLink).toHaveAttribute("class","blinkingText");

        
        const [newpage] = 
         promise.all(
            [ 
                context.waitForEvent('page');
                await page.locator(documentLink).click();

            ]



        )

         
         

        const text =  await childpage.locator("p[class*=red]").textContent();

        console.log(text);        








    }



)
