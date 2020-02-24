import { getBrowser } from "../services/Browser";
import lighthouse from "lighthouse";
import { parseScores } from "../services/LightHouse";
import { sites } from "../config";

async function scanAllsites() {
  sites;
  const browser = await getBrowser();
  const { lhr } = await lighthouse(sites[0].site, {
    port: new URL(browser.wsEndpoint()).port,
    output: "json",
    logLevel: "info"
  });

  await browser.close();
  const result = parseScores(lhr, 1);
  return result;
}

export default scanAllsites;
