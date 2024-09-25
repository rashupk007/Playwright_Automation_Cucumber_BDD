const playwright = require('@playwright/test')

const {Before, After} = require("@cucumber/cucumber")

Before(async function(){
    const browser = await playwright.chromium.launch({headless:false})
    this.context = await browser.newContext()
    this.page = await this.context.newPage()
})

After(async function(){
    await this.context.close()
})