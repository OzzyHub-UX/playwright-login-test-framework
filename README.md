# Playwright - Testing Login Functionality 

This project focuses on testing the login functionality of expand testing application ensuring its reliability, functionality, and user-friendliness. It includes a series of test cases designed to cover various scenarios and edge cases related to the login process.

## Overview of the Playwright Framework 

-TypeScript              : Main programming Language
-NPM                     : Managing dependencies 
-Package.json            : Metadata about the project including dependencies and their versions
-Playwright.config file  : Aiding in cross-browser testing & managing our environments & configurations
-Test Folder             : Used to organize our tests (Smoke, regression, end-to-end, API and backend)
-Page Object Model (POM) : Design pattern, which centralizes page-related locators and methods within the folder
-Playwright Fixtures     : Along with the (POM), enabling us to develop custom fixtures for our test file.
-Test-data               : in a separate folder and we store this test data in a JSON format 
-Dotenv                  : We manage sensitive information by utilizing environment variables, which are securely stored using the dotenv package (environment settings, user data, database configurations and authentication keys)
-Visual Regression       : Aiding in debugging and visualizing our tests
-Built-In-Reports        : Playwright generates built in detailed HTML, JSON, or JUnit reports.
-ESLint W/ Typescript    : as defined in our tsconfig.json, to maintain code quality and standards throughout the framework
-Prettier                :
-Git/Github              : Version Control System

### Steps to Produce Project

    Login Test Functionality 

Prerequisites: git & node.js & vscode

Make working directory and folder structure for playwright project 
Open Command Line
Cd desktop
Mkdir playwright-login-test-framework

 Open VS Code & Install Playwright
Run command in the CLI npm init playwright@latest
Choose between TypeScript or JavaScript (default is TypeScript)
Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
Add a GitHub Actions workflow to easily run tests on CI
Install Playwright browsers (default is true).

Running the Example Test 
Trigger by using npx playwright test 
By default, tests will be run on all 3 browsers, Chromium, Firefox, and Webkit using 3 workers. This can be configured in the playwright.config file. Tests will run in headless mode by default, meaning no browser will open when running the tests.

Running Built In HTML Test Reports
After your test is completed, an HTML Reporter will be generated, which shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests, and flaky tests. 
Run command in the CLI npx playwright show-report

Running the Example Test in UI Mode
Running your tests with UI Mode helps for a better developer experience with time travel debugging and watch mode. 
Run command in the CLI npx playwright test —ui




 