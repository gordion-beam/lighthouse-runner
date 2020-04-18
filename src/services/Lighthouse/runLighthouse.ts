import lighthouse from "lighthouse";
import getBrowser from "./getBrowser";
import convertLighthouseResultToJson from "./convertLighthouseResultToJson";
import config from "../../config";
interface RunLighthouse {
  siteUrl: string;
}
const runLightHouse = async (props: RunLighthouse) => {
  const browser = await getBrowser();
  const { lighthouse: lhConfig } = config;
  const { lhr } = await lighthouse(props.siteUrl, {
    port: new URL(browser.wsEndpoint()).port,
    output: lhConfig.output,
    logLevel: lhConfig.logLevel,
    "only-categories": lhConfig.categories
  });
  await browser.close();
  return convertLighthouseResultToJson(lhr, props.siteUrl);
};

export default runLightHouse;
