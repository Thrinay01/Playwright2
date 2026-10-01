
const {test,expect} = require('@playwright/test');

const {POManager} = require('../PageObjects/POManager');

const dataset = JSON.parse(JSON.stringify(require('../testData/loginTestData.json')));

for(const data of dataset){

test(`login for ${data.productName}`, async ({browser}) => 
    
    {
         const context = await browser.newContext();
         const  page = await context.newPage();
         

     //here we are creating an object and sending 'page' as an argument to the class

     const poManager = new POManager(page);
  
      const loginpage = poManager.getLoginPage();

      await loginpage.goTo();
      await loginpage.validLogin(data.username,data.password);

      const dashboardpage = poManager.getDashboardPage();

      await dashboardpage.searchAndAddToCart(data.productName);
      await dashboardpage.goToCart();

      const checkoutpage = poManager.getCheckoutPage();

      await checkoutpage.checkOut();
          
    })
}

