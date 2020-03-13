import config from "../../config";
import bqSchema from "./bigQuery-schema.json";

const { BigQuery } = require(`@google-cloud/bigquery`);
const bigquery = new BigQuery({
  projectId: config.projectId
});

interface LoadFile {
  fileId: string;
  siteName: string;
}

const loadFile = async (props: LoadFile) => {
  console.log(`BigQuery job starting for ${props.siteName}`);
  const metadata = {
    sourceFormat: "NEWLINE_DELIMITED_JSON",
    schema: { fields: bqSchema },
    jobId: props.fileId
  };
  const result = await bigquery
    .dataset(config.datasetId)
    .table(config.tableName)
    .load(`/tmp/${props.fileId}.json`, metadata);
  console.log(`BigQuery job with ID ${props.fileId} finished.`);
  return result;
};

export default loadFile;
