
const  {test, expect}  = require('@playwright/test');

test ('getMethods', async ({page}) =>

    {
        await page.goto("https://rahulshettyacademy.com/angularpractice/");

        await page.getByLabel("Check me out if you Love IceCreams!").check();

        await page.getByLabel("Employed").click();

        await page.getByLabel("Gender").selectOption("Female");

        //await page.getByRole("label", {name : 'Name'}).fill("dummy50");

        await page.getByPlaceholder("Password").fill("abc123");

        await page.getByRole("button", {name:'submit'}).click();

        const msg = await page.getByText("Success! The Form has been submitted successfully!.").isVisible;

        await expect(msg).toBeTruthy;

        await page.getByRole("link", {name:'Shop'}).click();

        const title = await page.getByText("Nokia Edge") .isVisible();

        expect(title).toBeTruthy;

        await page.locator("app-card").filter({hasText : 'Nokia Edge'}).getByRole("button").click();

        await page.pause();


   

    }




)


