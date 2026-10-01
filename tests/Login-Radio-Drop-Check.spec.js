
const { test, expect } = require ('@playwright/test');

test('login', async ({page}) => { 

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator("#username").fill("rahulshettyacademy");

    //Give wrong password

     await page.locator("[name='password']").fill("Learning");
 
     await page.locator(".btn.btn-info").click(); 

     //TO GET THE TEXT FROM LOCATOR
     
     console.log(await page.locator("[style*='block']").textContent());

     //TO avlidate the text we got from locator - assertions

     await expect (page.locator("[style*='block']")).toContainText('Incorrect');
 
    //to clear

     await page.locator("[name='password']").fill("");

     await page.locator("[name='password']").fill("Learning@830$3mK2");

    //radio

    await page.locator(".radiotextsty").last().click();

     //static dropdown

     const dropdown = page.locator("select.form-control")

     await dropdown.selectOption("consult");

     //check box

     await page.locator("[type='checkbox']").click();

   // await page.pause();

    await page.locator(".btn.btn-info").click(); 

    //console.log(await page.locator(".card-title").first().textContent());

    //console.log(await page.locator(".card-title").nth(1).textContent());

    //console.log(await page.locator(".card-title").nth(2).textContent());

    //console.log(await page.locator(".card-title").last().textContent());

     await page.waitForLoadState('networkidle');

     console.log(await page.locator(".card-title").first().textContent());

     console.log(await page.locator(".card-title").allTextContents()); 




   

})

   
