import { type Page, type Locator } from "@playwright/test";

// Declaring locators 
export class LoginFunction {
    readonly page: Page
    readonly userNameField: Locator
    readonly passwordField: Locator
    readonly heading: Locator
    readonly lgnButton: Locator
    readonly LgnButtonLabel: Locator
    readonly userNameLabel: Locator
    readonly passwordLabel: Locator
    readonly success_lgn: Locator
    readonly logOutBtn: Locator
    readonly errorMsg: Locator


// Locators for login functionality 
constructor(page: Page) {
    this.page = page
    this.userNameField = page.locator('.mb-3:nth-child(1) input')
    this.passwordField = page.locator('.mb-3:nth-child(2) input')
    this.heading = page.locator('.container h1')
    this.lgnButton = page.locator('[type=submit]')
    this.LgnButtonLabel = page.locator('[type=submit]')
    this.userNameLabel = page.locator('.mb-3:nth-child(1) label')
    this.passwordLabel = page.locator('.mb-3:nth-child(2) label')
    this.logOutBtn = page.locator('.button')
    this.errorMsg = page.locator('#flash')
    this.success_lgn = page.locator('.subheader')
}

// Method to access the environment URL (BASE URL) 
async goto() {
    await this.page.goto(process.env.BASE_URL)
}

// Method to login 
async lgnBtn() {
    await this.lgnButton.click()
}


// Function to fill username and password dynamically
async fieldFill(username: string, password: string) {
    await this.userNameField.fill(username)
    await this.passwordField.fill(password)
    await this.lgnBtn()
}

// Switch cases to switch through buttons dynamically 
async clickButton(arg: string) {
    switch (arg) {
        case 'loginClick': 
            return await this.lgnButton.click()
        case 'lougOutClick':
            return await this.logOutBtn.click()
    }
}}