const {Given, When, Then, setDefaultTimeout} = require("@cucumber/cucumber")

const {expect} = require('@playwright/test')

const {LoginPage} = require("../../pageObjects/LoginPage")
const {UserRegistrationPage} = require("../../pageObjects/UserRegistrationPage")

const playwright = require('@playwright/test')

const data = require('../../TestData/testData.json')

setDefaultTimeout(60*1000)

Given('I am on the login page', async function () {
    this.loginPage = new LoginPage(this.page)
    this.userRegistrationPage = new UserRegistrationPage(this.page)
    await this.loginPage.launchApplication(data.url)
});

When('I enter valid username and password', async function () {
    await this.loginPage.validLogin(data.username, data.password)
});

When('I enter valid username and invalid password', async function () {
    await this.loginPage.validLogin(data.username, data.invalidPassword)
});

When('I click Login button with blank username and password', async function () {
    await this.loginPage.validLogin(data.invalidUsername5, data.invalidPassword1)
});

When('I enter valid username and click Login button with blank password', async function () {
    await this.loginPage.validLogin(data.username, data.invalidPassword1)
});

When('I enter invalid username without \'@gmail.com\'', async function () {
    await this.loginPage.validLogin(data.invalidUsername, data.password)
});

When('I enter invalid username without \'com\'', async function () {
    await this.loginPage.validLogin(data.invalidUsername1, data.password)
});

When('I click on \'Don\'t have an account? Register here\' link', async function () {
    await this.loginPage.navigateToRegisterPageUsingDontHaveAccountRegisterHereLink()
});

When('I click on \'Forgot password?\' link', async function () {
    await this.loginPage.navigateToForgotPasswordPage()
});

Then('I should be able to login successfully', async function () {
    await expect(this.loginPage.homePageIdentifier).toBeVisible()
});

Then('\'Incorrect email or password\' error message should be displayed', async function () {
    await expect(this.loginPage.errorMessage).toHaveText("Incorrect email or password.")
});

Then('\'Email is required\' and \'Password is required\' should be displayed', async function () {
    await expect(this.loginPage.requiredFields).toHaveCount(2)
    await expect(this.loginPage.requiredFields.first()).toHaveText("*Email is required")
    await expect(this.loginPage.requiredFields.last()).toHaveText("*Password is required")
});

Then('\'Password is required\' error message should be displayed', async function () {
    await expect(this.loginPage.requiredFields).toHaveCount(1)
    await expect(this.loginPage.requiredFields.last()).toHaveText("*Password is required")
});

Then('\'Enter Valid Email\' error message should be displayed', async function () {
    await expect(this.loginPage.requiredFields).toHaveCount(1)
    await expect(this.loginPage.requiredFields.last()).toHaveText("*Enter Valid Email")
});

Then('User should be navigated to Register Page', async function () {
    await expect(this.userRegistrationPage.registerButton).toBeVisible()
});

Then('User should be navigated to Forgot Password Page', async function () {
    await expect(this.loginPage.enterNewPasswordHeader).toBeVisible()
});