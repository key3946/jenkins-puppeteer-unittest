const fs = require('fs');
const assert = require('assert');
const puppeteer = require('puppeteer');
exports.getUrl = async function getUrl(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    let t = await page.title();
    await browser.close();
    return t;
};