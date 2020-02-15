import { getBrowser } from './services/Browser';

async function helloWorld(site) {
  const browser = await getBrowser();
  const page = await browser.newPage();
  await page.goto(site);
  const firstPar = await page.$eval('title', el => el.innerText);
  await browser.close();
  return firstPar;
}

export default helloWorld;
