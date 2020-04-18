import sitesList from "./assets/sitesList";

export default {
  projectId: "gordion-project",
  datasetId: "lighthouse_runs",
  topicName: "lighthouse-run-command",
  tableName: "lighthouse_reports",
  subscriptionName:
    process.env.NODE_ENV === "local"
      ? "lighthouse-runner-test"
      : "lighthouse-runner",
  lighthouse: {
    categories: "pwa",
    logLevel: "info",
    output: "json"
  },
  sitesList
};
