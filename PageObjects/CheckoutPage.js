
class CheckoutPage{

    constructor(page)
    {
        this.page = this.page;
        this.checkoutbutton = page.locator("[type='button']");
    }

    async checkOut()
    {
        await this.checkoutbutton.last().click();

    } 

     }

     module.exports = { CheckoutPage }