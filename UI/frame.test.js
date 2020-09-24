const playwright = require('playwright');
jest.setTimeout(50000);
let browser;
afterAll(async()=>{
    await browser.close();
});
describe('Ui test',()=>{
    let page;
    test("Frame", async ()=>{
     browser = await playwright.chromium.launch({headless:false, slowMo:1000});
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto ('https://www.w3schools.com/html/html_iframe.asp');
        await page.waitForTimeout(1000); 
        const frames = page.frames();
        const frame  = frames [1];
        await frame.waitForSelector('iframe');
        await frame.click('a[href="/default.asp"]');
        await frame.click('a[href="/html/default.asp"]')
        await page.waitForTimeout(1000);
    });
});
