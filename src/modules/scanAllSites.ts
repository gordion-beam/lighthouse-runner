import { getBrowser } from "../services/Browser";
import lighthouse from "lighthouse";
import { lhrToJson } from "../services/LightHouse";
import { LoadFile } from "../services/BigQuery";
import { sites } from "../config";
import { v1 as uuidv1 } from "uuid";
import * as utils from "../utils";

async function scanAllsites() {
  const uuid = uuidv1();
  const filePath = `/tmp/${uuid}.json`;
  const browser = await getBrowser();
  const { lhr } = await lighthouse(sites[0].site, {
    port: new URL(browser.wsEndpoint()).port,
    output: "json",
    logLevel: "info"
  });
  await browser.close();
  const json = lhrToJson(lhr, sites[0].name);
  await utils.writeFile(filePath, utils.toNdjson(json));
  console.log(
    `${sites[0].name}: BigQuery job with ID ${uuid} starting for ${sites[0].site}`
  );
  await LoadFile(uuid);
  console.log(`BigQuery job with ID ${uuid} finished.`);
  await utils.deleteFile(filePath);
  console.log(`Delete file: ${filePath}`);
}

export default scanAllsites;
