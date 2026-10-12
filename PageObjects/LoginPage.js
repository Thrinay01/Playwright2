class LoginPage {

  constructor(page)
  
  { 
     this.page = page;
     this.signInButton = page.locator("[name='login']");
     this.userName =  page.locator("#userEmail");
     this.password = page.getByPlaceholder("enter your passsword");
  }

  async goTo()
  {
    await this.page.goto("https://rahulshettyacademy.com/client");
  }

   async validLogin(username,password)
  {
    
     await  this.userName.fill(username);
     await  this.password.fill(password);
     await  this.signInButton.click();
  }
}

    module.exports = {LoginPage};