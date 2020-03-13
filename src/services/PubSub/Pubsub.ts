import { PubSub } from "@google-cloud/pubsub";
import config from "../../config";

const pubSubClient = new PubSub({
  projectId: config.projectId
});



export async function listenForMessages(cb: () => any) {
  console.log("start listen ..");
  const subscription = pubSubClient.subscription(config.subscriptionName);
  subscription.on("message", message => {
    console.log("Got message");
    cb();
    messageHandler(message);
  });
}
