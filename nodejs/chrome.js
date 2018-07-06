const puppeteer = require('puppeteer');
exports.getUrl = async function getUrl(url) {
    const browser = await puppeteer.launch({args: ['--no-sandbox']});
    const page = await browser.newPage();

    await page.goto(url);
    let t = await page.title();
    await browser.close();
    return t;
};