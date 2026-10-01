
const { test,expect } = require('@playwright/test');

test('pop-up', async({page}) =>

    {

        // handle java pop-up's

        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

        await page.goto("https://www.google.com");

        await page.goBack();

      // await page.goForward();

        await expect(page.getByPlaceholder('Hide/Show Example')).toBeVisible();

    //   await expect (page.locator("#displayed-text")).toBeVisible();

        await page.locator("#hide-textbox").click();

     //    await expect (page.locator("#displayed-text")).toBeHidden();

       await expect(page.getByPlaceholder('Hide/Show Example')).toBeHidden();

      // await page.on('dialog', dialog => dialog.accept()); - every dialog

       page.once('dialog', dialog => dialog.dismiss());

       await page.locator("[value='Confirm']").click();

        page.once('dialog', dialog => dialog.accept());

        await page.locator("#alertbtn").click();
      
        //hover

        await page.locator("#mousehover").hover();

       // await page.locator("[href*='top']").click();

       await page.getByRole('link' , {name : 'Top',exact : true}).click();

        ///iframes 

        const framepage = page.frameLocator("#courses-iframe");

        await framepage.getByRole('link', {name : 'All Access plan'}).click();

        const text = await framepage.locator(".text h2").textContent();

       const output =  await text.split(" ")[1];

       console.log(output);



        

    




















    }
)


