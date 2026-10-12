const { test, expect, request } = require('@playwright/test');

const loginPayLoad = {userEmail: "dummy123@gmail.com", userPassword: "Password@10"};



test('loginWithAPI', async () =>

    {
        const apiContext = await request.newContext();

        const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data : loginPayLoad
      //      Content-Type : application/json
        }
    )

        expect (loginResponse.ok()).toBeTruthy();

        const loginResponseJson = await loginResponse.json();

        const token =  loginResponseJson.token;

        const message = loginResponseJson.message;

        console.log(token);

        console.log('this is the meesage ' + message);

}

)
