import { expect, test } from "../../fixtures/page-object-fixtures"

test.describe('ExpandTesting - Login Functionality 01', () => {

    test('Test Case 01 - Validate the login form', async ({ loginFunction }) => {
        
        /**
         * Navigate to https://practice.expandtesting.com/login
         * Validate that the username input box is displayed 
         * Validate that the username input box is not required
         * Validate that the label of the username input box is "Username"
         * Validate that the password input box is displayed
         * Validate that the password input box is not required
         * Validate that the label of the password input box is "Password"
         * Validate the "Login" button is displayed
         * Validate the "Login" button is clickable
         * Validate that the button text is "Login"
         */

        await expect (loginFunction.userNameField).toBeVisible()
        await expect (loginFunction.userNameField).not.toHaveAttribute('required')
        await expect (loginFunction.userNameLabel).toHaveText('Username')

        await expect (loginFunction.passwordField).toBeVisible()
        await expect (loginFunction.passwordField).not.toHaveAttribute('required')
        await expect (loginFunction.passwordLabel).not.toHaveAttribute('Password')

        await expect (loginFunction.lgnButton).toBeVisible()
        await expect (loginFunction.lgnButton).toBeEnabled()
        await expect (loginFunction.LgnButtonLabel).toHaveText('Login')
    })

    test('Test Case 02 - Validate the valid login', async ({ loginFunction }) => {

        /**
         * Navigate to https://practice.expandtesting.com/login
         * Enter the username as "practice"
         * Enter the password as "SuperSecretPassword!"
         * Click on the "Login" button
         * Validate the success message is displayed as "Welcome to the Secure Area. When you are done click logout below."
         * Validate the logout button displayed with the text "Logout"
         */

        // Calling .env for Username and Password 
        await loginFunction.fieldFill(process.env.USERNAME_TEST, process.env.PASSWORD_TEST) 
        await expect (loginFunction.success_lgn).toHaveText('Welcome to the Secure Area. When you are done click logout below.')
        await expect (loginFunction.logOutBtn).toHaveText('Logout')
    })

    test('Test Case 03 - Validate the logout', async ({ loginFunction }) => {

    /**
     * Navigate to https://practice.expandtesting.com/login
     * Enter the username as "practice"
     * Enter the password as "SuperSecretPassword!"
     * Click on the "Login" button
     * Click on the "Logout" button
     * Validate that the login form is displayed 
     */

        // Calling .env for Username and Password 
        await loginFunction.fieldFill(process.env.USERNAME_TEST, process.env.PASSWORD_TEST)
        await loginFunction.clickButton('logoutClick')
        await expect (loginFunction.success_lgn).not.toBeVisible
    })

    test('Test Case 04 - Validate the invalid login with empty credentials', async ({ loginFunction }) => {

        /**
         * Navigate to https://practice.expandtesting.com/login
         * Leave username empty
         * Leave password empty 
         * Click on the "Login" button
         * Validate the failure message is displayed as "Your username is invalid!"
         */

        await loginFunction.clickButton('loginClick')
        await expect (loginFunction.errorMsg).toHaveText('Your username is invalid!')
    })


    // Negative Test Cases For Login Functionality 

    /** 
         * Navigate to https://techglobal-training.com/frontend/project-2
         * Enter the username as "John"
         * Enter the password as "SuperSecretPassword!"
         * Click on the "Login" button
         * Validate the failure message is displayed as "Invalid Username entered!" above the form
        */

        /**
         * Navigate to https://techglobal-training.com/frontend/project-2
         * Enter the username as "practice"
         * Enter the password as "Test1234!"
         * Click on the "Login" button
         * Validate the failure message is displayed as "Invalid Password entered!" above the form
        */

        /**
         * Navigate to https://techglobal-training.com/frontend/project-2
         * Enter the username as "I love testing"
         * Enter the password as "Password"
         * Click on the "Login" button
         * Validate the failure message is displayed as "Invalid Username entered!" above the form
        */

        const invalidLoginData = [
            {
                username: 'John',
                password: 'SuperSecretPassword!',
                message: 'Your username is invalid!',
            },
            {
                username: 'practice',
                password: 'Test1234!',
                message: 'Your password is invalid!',
            },
            {
                username: 'I love testing',
                password: 'Password',
                message: 'Your username is invalid!'
            }
        ]

        invalidLoginData.forEach((data, index) => {
            test(`Test Case 0${index + 5} - Validate invalid login scenarios: Username: ${data.username} 
            and Password: ${data.password}`, async ({loginFunction}) => {

                await loginFunction.fieldFill(data.username, data.password)
                await expect (loginFunction.errorMsg).toHaveText(data.message)

            })
        })

        
    })