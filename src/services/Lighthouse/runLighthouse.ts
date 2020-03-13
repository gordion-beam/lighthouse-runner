import lighthouse from "lighthouse";
import getBrowser from "./getBrowser";
import convertLighthouseResultToJson from "./convertLighthouseResultToJson";

interface RunLighthouse {
  siteUrl: string;
}
const runLightHouse = async (props: RunLighthouse) => {
  const browser = await getBrowser();
  const { lhr } = await lighthouse(props.siteUrl, {
    port: new URL(browser.wsEndpoint()).port,
    output: "json",
    logLevel: "info"
  });
  await browser.close();
  return convertLighthouseResultToJson(lhr, props.siteUrl);
};

export default runLightHouse;
