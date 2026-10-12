const { test, expect , request } = require('@playwright/test');

test('eventRegister', async ({page}) =>

    {
        await page.goto("https://eventhub.rahulshettyacademy.com/");

      await  expect(page.locator("h2.text-2xl")).toContainText("The #1 QA Practice Hubfor Automation Engineers");

      await page.getByRole('link', {name : 'Register'}).click();

      await page.getByPlaceholder("you@email.com").fill("lucky.udaya1236@gmail.com");

      await page.getByTestId("register-password").fill('Lucky@123');

      await page.getByPlaceholder("Repeat your password").fill('Lucky@123');

      await page.locator("#register-btn").click();

    } )
    
    test.only('evenLoginPage', async({page}) => 

        {

        await page.goto("https://eventhub.rahulshettyacademy.com/");

         await page.getByPlaceholder("you@email.com").fill("lucky.udaya1233@gmail.com");

         await page.locator("#password").fill("Lucky@123");

        await page.getByRole('button', {name : 'Sign In'}).click();

      await expect(page.getByText('Home', {exact : true})).toBeVisible();

       await expect(page.getByText('Events', {exact : true})).toBeVisible();

      //  await expect(page.getByText('My Bookings', {exact : true})).toBeVisible();

     //    await expect(page.getByText('API Docs', {exact : true})).toBeVisible();

     const eventCard = page.getByRole('article').filter({hasText: 'World Tech Summit'});

     await expect(eventCard).toHaveCount(1);

      await eventCard.getByRole('link', {name : 'Book Now'}).click();
  
    await expect(page).toHaveURL(/\/events\//);

    await expect(page.locator("h1.text-2xl")).toContainText('World Tech Summit');

    await page.getByRole('button', {name : 'Confirm Booking'}).click();

    await expect(page.getByText('Name must be at least 2 chars')).toBeVisible();

    await expect(page.getByText('Enter a valid email')).toBeVisible();

    await expect(page.getByText('Enter a valid 10-digit phone')).toBeVisible();

    await page.getByPlaceholder("Your full name").fill('first1');

    await page.getByPlaceholder("you@email.com").fill('lucky.udaya123@gmail.com');

    await page.locator('#phone').fill('+91 9678965427');

     await page.getByRole('button', {name : 'Confirm Booking'}).click();

     await expect(page.getByText('Booking Confirmed!')).toBeVisible();

     await expect(page.getByText('Your tickets are reserved.')).toBeVisible();
     
     await page.getByRole('button', {name : 'View My Bookings'}).click();

     await expect(page.getByText('My Bookings', { exact : true})).toBeVisible();

     const bookingId = await page.locator('#booking-id').textContent();
    
     console.log(bookingId);



    



       
     


        } 
)
