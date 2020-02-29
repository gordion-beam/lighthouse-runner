import config from "../../config";
import bqSchema from "./bigQuery-schema.json";

const { BigQuery } = require(`@google-cloud/bigquery`);
const bigquery = new BigQuery({
  projectId: config.projectId
});

const loadFile = async (uuid: string) => {
  const metadata = {
    sourceFormat: "NEWLINE_DELIMITED_JSON",
    schema: { fields: bqSchema },
    jobId: uuid
  };
  return bigquery
    .dataset(config.datasetId)
    .table(config.tableName)
    .load(`/tmp/${uuid}.json`, metadata);
};

export default loadFile;
