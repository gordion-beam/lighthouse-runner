import { getBrowser } from "./services/Browser";
import lighthouse from "lighthouse";
import { parseScores } from "./services/LightHouse";

async function helloWorld(site) {
  const browser = await getBrowser();
  const { lhr } = await lighthouse(site, {
    port: new URL(browser.wsEndpoint()).port,
    output: "json",
    logLevel: "info"
  });

  await browser.close();
  return parseScores(lhr.categories);
}

export default helloWorld;
