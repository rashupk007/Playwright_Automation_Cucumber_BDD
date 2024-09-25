const {Given, When, Then, setDefaultTimeout} = require("@cucumber/cucumber")

const {expect} = require('@playwright/test')

const {DashboardPage} = require("../../pageObjects/DashboardPage")
const {LoginPage} = require("../../pageObjects/LoginPage")

const playwright = require('@playwright/test')

const testData = require('../../TestData/testData.json')

setDefaultTimeout(60*1000)

Given('I am on the dashboard page', async function () {
    this.dashboardPage = new DashboardPage(this.page)
    this.loginPage = new LoginPage(this.page)
    await expect(this.dashboardPage.products.locator("b").first()).toBeVisible()
});

When('I click on the Add to Cart button for Single Product', async function () {
    expect(await this.dashboardPage.searchProductAndAddToCart(testData.productNameZaraCoat)).toBeTruthy()
});

When('I click on the Add to Cart button for Multiple Products', async function () {
    const addingProducts = await this.dashboardPage.searchAndAddMultipleProductsToCart(testData.multipleProducts)
    await expect(addingProducts).toBeTruthy()
});

When('I click on the Add to Cart button for Same Product multiple times', async function () {
    const addingProducts = await this.dashboardPage.searchAndAddMultipleProductsToCart(testData.multipleSameProducts)
    await expect(addingProducts).toBeTruthy()
});

When('I click on the View button of product', async function () {
    expect(await this.dashboardPage.searchProductAndViewDetails(testData.productNameAdidas)).toBeTruthy()
});

When('I filter using Product Text ZARA COAT 3', async function () {
    await this.dashboardPage.filterUsingTextSearch(testData.productNameZaraCoat)
});

When('I filter using Invalid Product Text', async function () {
    await this.dashboardPage.filterUsingTextSearch(testData.invalidProductName)
});

When('I filter using Min Price and Max Price', async function () {
  await this.dashboardPage.filterUsingPriceRangeMinAndMax(testData.minPrice, testData.maxPrice)
});

When('I filter using Invalid Min Price and Max Price', async function () {
    await this.dashboardPage.filterUsingPriceRangeMinAndMax(testData.invalidMinPrice, testData.invalidMaxPrice)
});

When('I filter using Fashion Categories Checkbox', async function () {
    await this.dashboardPage.filterCategoriesFasion()
});

When('I filter using Electronics Categories Checkbox', async function () {
    await this.dashboardPage.filterCategoriesElectronics()
});

When('I filter using Household Categories Checkbox', async function () {
    await this.dashboardPage.filterCategoriesHousehold()
});

When('I filter using Shirts Categories Checkbox', async function () {
    await this.dashboardPage.filterSubCategoriesShirts()
});

When('I filter using Mobiles Categories Checkbox', async function () {
    await this.dashboardPage.filterSubCategoriesMobiles()
});

When('I filter using Shoes Categories Checkbox', async function () {
    await this.dashboardPage.filterSubCategoriesShoes()
});

When('I filter using T-Shirts Categories Checkbox', async function () {
    await this.dashboardPage.filterSubCategoriesTShirts()
});

When('I filter using Laptops Categories Checkbox', async function () {
    await this.dashboardPage.filterSubCategoriesLaptops()
});

When('I filter using Men Categories Checkbox', async function () {
    await this.dashboardPage.filterSearchForMen()
});

When('I filter using Women Categories Checkbox', async function () {
    await this.dashboardPage.filterSearchForWomen()
});

When('I filter using Fashion and Shirts Categories Checkbox', async function () {
    await this.dashboardPage.filterCategoriesFasion()
    await this.dashboardPage.filterSubCategoriesShirts()
});

When('I filter using Electronics and Laptops Categories Checkbox', async function () {
    await this.dashboardPage.filterCategoriesElectronics()
    await this.dashboardPage.filterSubCategoriesLaptops()
});

When('I filter using Household, Shoes and Men Categories Checkbox', async function () {
    await this.dashboardPage.filterCategoriesHousehold()
    await this.dashboardPage.filterSubCategoriesShoes()
    await this.dashboardPage.filterSearchForMen()
});

When('I filter using Electronics, Mobiles and Women Categories Checkbox', async function () {
    await this.dashboardPage.filterCategoriesElectronics()
    await this.dashboardPage.filterSubCategoriesMobiles()
    await this.dashboardPage.filterSearchForWomen()
});

When('I click on Sign Out button', async function () {
    await this.dashboardPage.signOutFromApplication()
});

Then('Product should be added to the Cart', async function () {
  await expect(this.dashboardPage.addToCartSuccessMessage).toHaveText("Product Added To Cart")
});

Then('Multiple Product should be added to the Cart', async function () {
    await expect(this.dashboardPage.multipleItemsAddedToCard).toHaveText(testData.multipleProducts.length.toString())
});

Then('Same Product should be added to the Cart multiple times', async function () {
    await expect(this.dashboardPage.multipleItemsAddedToCard).toHaveText(testData.multipleSameProducts.length.toString())
});

Then('I should be able to view the product details', async function () {
    await expect(this.dashboardPage.viewPageProductName).toHaveText(testData.productNameAdidas)
});

Then('Product ZARA COAT only should be displayed as per the filter criteria', async function () {
    await expect(this.dashboardPage.products).toHaveCount(1)
    await expect(this.dashboardPage.products).toContainText(testData.productNameZaraCoat)
});

Then('No Products Found should be displayed and there should not be products displayed in the page', async function () {
    await expect(this.dashboardPage.noProductsFoundErrorFiltering).toHaveText("No Products Found")
    await expect(this.dashboardPage.products).toHaveCount(0)
});

Then('Products should be displayed as per filtered criteria', async function () {
    await expect(this.dashboardPage.products).toHaveCount(2)
});

Then('Product IPHONE PRO only should be displayed as per the filter criteria', async function () {
    await expect(this.dashboardPage.products).toHaveCount(1)
    await expect(this.dashboardPage.products).toContainText(testData.productNameIphone)
});

Then('Product ADIDAS ORIGINAL only should be displayed as per the filter criteria', async function () {
    await expect(this.dashboardPage.products).toHaveCount(1)
    await expect(this.dashboardPage.products).toContainText(testData.productNameAdidas)
});

Then('User should be logged out from the Application', async function () {
    await expect(this.loginPage.loginButton).toBeVisible()
});