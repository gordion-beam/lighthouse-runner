import { PubSub } from "@google-cloud/pubsub";
import config from "../../config";

const pubSubClient = new PubSub({
  projectId: config.projectId
});

export default pubSubClient;
