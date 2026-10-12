
const { LoginPage } = require('../PageObjects/LoginPage');

const { DashboardPage } = require('../PageObjects/DashboardPage');

const {CheckoutPage}  = require('../PageObjects/CheckoutPage');

class POManager
{
    constructor(page)
    {
        this.page = page;
        this.LoginPage =  new LoginPage(page);
        this.DashboardPage = new DashboardPage(page);
        this.CheckoutPage = new CheckoutPage(page);
    }

    getLoginPage()
    {
       return this.LoginPage;
    }

    getDashboardPage()

    {
        return this.DashboardPage;
    }
 
    getCheckoutPage()
    {
       return this.CheckoutPage;
    }
}

module.exports = { POManager};