import sitesList from "./assets/sitesList";

export default {
  projectId: "gordion-project",
  bigquery: {
    datasetId: "lighthouse_runs",
    tableName: "lighthouse_reports",
  },
  pubsub: {
    topicName: "lighthouse-run-command",
    subscriptionName:
      process.env.NODE_ENV === "local"
        ? "lighthouse-runner-test"
        : "lighthouse-runner",
  },
  lighthouse: {
    categories: "pwa",
    logLevel: "info",
    output: "json",
  },
  sitesList,
};
