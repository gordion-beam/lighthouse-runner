import * as LighthouseService from "../services/Lighthouse";
import * as BigQuery from "../services/BigQuery";
import * as config from "../config";
import * as utils from "../utils";

async function scanAllsites() {
  const { tempFilePath, fileId } = utils.getTemporaryFilePath();
  const lighthouseJson = await LighthouseService.runLighthouse({
    siteUrl: config.sites[0].site
  });
  await utils.writeFile(tempFilePath, utils.toNdjson(lighthouseJson));
  await BigQuery.LoadFile({ fileId, siteName: config.sites[0].site });
  await utils.deleteFile(tempFilePath);
}

export default scanAllsites;
