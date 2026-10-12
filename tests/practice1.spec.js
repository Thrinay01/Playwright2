
const { test, expect } = require('@playwright/test');

test('login', async ({browser})=>
    
    {

    const context =  await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://www.amazon.com/");

   // const pop1 = await page.getByLabel('Dismiss');

  //  if(await pop1.isVisible()){
  //       await pop1.click();     
   // }

    await page.getByPlaceholder("Search Amazon").fill('pen stand');

    await page.getByRole('button', {name : 'submit'}).click();

   await page.getByRole('listitem', has-text)


})