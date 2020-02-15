import puppeteer from 'puppeteer';

async function helloWorld(site) {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser'
  });
  const page = await browser.newPage();
  await page.goto(site);
  const firstPar = await page.$eval('title', el => el.innerText);
  await browser.close();
  return firstPar;
}

export default helloWorld;
