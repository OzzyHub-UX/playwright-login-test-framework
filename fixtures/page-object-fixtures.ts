import { test as base} from '@playwright/test'
import { LoginFunction } from '../pages/LoginFunction'

type MyFixture = {
    loginFunction: LoginFunction
}

// Extending my base test to include custom fixtures
export const test = base.extend<MyFixture>({

    // Defining the fixture name and providing the fixture function
    loginFunction: async ({ page }, use) => {

    // Creating the todoPage fixture instance 
    const loginFunction = new LoginFunction(page)

    // Setup phase (beforeEach)
    await loginFunction.goto()

    // Test runner pauses the execution to allow the test to perform actions
    await use(loginFunction)
    
    },
})

export { expect } from '@playwright/test'