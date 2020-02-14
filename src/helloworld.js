const puppeteer = require('puppeteer');

async function helloWorld() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser'
  });
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/%22Hello,_World!%22_program');
  const firstPar = await page.$eval('#mw-content-text p', el => el.innerText);
  await browser.close();
  console.log(firstPar)
  return firstPar;
}

module.exports = helloWorld;
