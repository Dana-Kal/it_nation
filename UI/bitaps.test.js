const playwright = require('playwright');
jest.setTimeout(90000);
let browser;
afterAll(async()=>{
    await browser.close();
});
describe('Ui test',()=>{
    let page;
    test("Launch browser", async ()=>{
     browser = await playwright.chromium.launch({headless:false});
        const context = await browser.newContext();
             page = await context.newPage();
                await page.goto ('https://bitaps.com/');
         
    });
     test("Next page", async ()=>{
        await page.click('[href="/blocks"]');
        await page.waitForTimeout(1000);
        await page.goBack();
    });
    test("Search", async ()=>{
        await page.fill('#search-box','transaction');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(3000);
        await page.goBack();
});
it('change language', async () => {
    await page.click('[href="/blocks"]')
    await page.waitForTimeout(2000);
    await page.goBack();
});

    test("Earth", async ()=>{
        await page.mouse.down('#myearth');
        await page.mouse.move(0, 30);
        await page.mouse.move(30, 30);
        await page.mouse.move(30, 0);
        await page.mouse.move(45, 0);
        await page.mouse.up();


});

   
});   