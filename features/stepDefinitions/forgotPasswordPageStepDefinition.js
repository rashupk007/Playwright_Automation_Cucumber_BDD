const {When, Then, setDefaultTimeout} = require("@cucumber/cucumber")

const {expect} = require('@playwright/test')

const {LoginPage} = require("../../pageObjects/LoginPage")
const {ForgotPasswordPage} = require("../../pageObjects/ForgotPasswordPage")
const {UserRegistrationPage} = require("../../pageObjects/UserRegistrationPage")

const playwright = require('@playwright/test')

const testData = require('../../TestData/testData.json')

setDefaultTimeout(60*1000)

When('I click on Forgot Password link', async function () {
    this.loginPage = new LoginPage(this.page)
    this.userRegistrationPage = new UserRegistrationPage(this.page)
    this.forgotPasswordPage = new ForgotPasswordPage(this.page)
    await this.loginPage.navigateToForgotPasswordPage(testData.url)
    await expect(this.forgotPasswordPage.userEmail).toBeVisible()
});

When('I change the password for valid username and password', async function () {
    await this.forgotPasswordPage.changePasswordValid(testData.username, testData.password, testData.password)
});

When('I change the password for blank username and password', async function () {
    await this.forgotPasswordPage.changePasswordValid(testData.invalidUsername5, testData.invalidPassword1, testData.invalidPassword1)
});

When('I change the password for invalid username', async function () {
    await this.forgotPasswordPage.changePasswordValid(testData.invalidUsername6, testData.password, testData.password)
});

When('I change the password without providing values in password and confirm password fields', async function () {
    await this.forgotPasswordPage.changePasswordValid(testData.username, testData.invalidPassword1, testData.invalidPassword1)
});

When('I change the password by providing different values in password and confirm password fields', async function () {
    await this.forgotPasswordPage.changePasswordValid(testData.username, testData.password, testData.invalidPassword)
});

When('I change the password by providing email id without @gmail.com', async function () {
    await this.forgotPasswordPage.changePasswordValid(testData.invalidUsername, testData.password, testData.password)
});

When('I change the password by providing email id without com', async function () {
    await this.forgotPasswordPage.changePasswordValid(testData.invalidUsername1, testData.password, testData.password)
});

When('I click on Login link', async function () {
    await this.forgotPasswordPage.navigateToLoginPage()
});

When('I click on Register link', async function () {
    await this.forgotPasswordPage.navigateToRegisterPage()
});

Then('Password should be changed successfully', async function () {
    await expect(this.forgotPasswordPage.passwordChangeSuccessMessage).toBeVisible()
    await expect(this.forgotPasswordPage.passwordChangeSuccessMessage).toHaveText("Password Changed Successfully")
});

Then('All the field should be marked as Required fields', async function () {
    await expect(this.forgotPasswordPage.requiredFields).toHaveCount(3)
});

Then('User Not Found error message should be displayed', async function () {
    await expect(this.forgotPasswordPage.userNotFoundErrorMessage).toBeVisible()
    await expect(this.forgotPasswordPage.userNotFoundErrorMessage).toHaveText("User Not found.")
});

Then('Password and Confirm Password fields should be marked as Required fields', async function () {
    await expect(this.forgotPasswordPage.requiredFields).toHaveCount(2)
    await expect(this.forgotPasswordPage.requiredFields.first()).toHaveText("*Password is required")
    await expect(this.forgotPasswordPage.requiredFields.last()).toHaveText("*Confirm Password is required")
});

Then('Password and Confirm Password must match with each other error message should be displayed', async function () {
    await expect(this.forgotPasswordPage.requiredFields).toHaveCount(1)
    await expect(this.forgotPasswordPage.requiredFields.last()).toHaveText("Password and Confirm Password must match with each other.")
});

Then('Enter Valid Email error message should be displayed', async function () {
    await expect(this.forgotPasswordPage.requiredFields).toHaveCount(1)
    await expect(this.forgotPasswordPage.requiredFields.last()).toHaveText("*Enter Valid Email")
});

Then('Login page should be displayed', async function () {
    await expect(this.loginPage.userName).toBeVisible()
});

Then('Registration page should be displayed', async function () {
    await expect(this.userRegistrationPage.firstName).toBeVisible()
});