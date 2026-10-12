
const { expect } = require('@playwright/test');

class DashboardPage{

    constructor(page) 
    {
          this.page = page;
          this.products = page.locator(".card-body");
          this.productTitle = page.locator("h5");  
          this.cart =  page.locator("[routerlink*='dashboard/cart']");
          this.cartItem = page.locator("h3:has-text('ZARA COAT 3')");
    }


    async searchAndAddToCart(productName)
    {


       console.log(await this.products.first().textContent());

       for(let i = 0; i < await this.products.count() ;i++){

        const productTitleName = await this.productTitle.nth(i).textContent();

        console.log(productTitleName);

        if(productTitleName == productName){

            await this.page.locator("button.btn.w-10.rounded").nth(i).click();

           break;

        }  
    }
}

 async goToCart()
 {
    await this.cart.click();

    await this.page.locator("div li").first().waitFor();

     const bool = await this.cartItem.isVisible();

     await expect(bool).toBeTruthy;
 }

}


module.exports = { DashboardPage };


