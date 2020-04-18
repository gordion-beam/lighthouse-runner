import { PubSub } from "@google-cloud/pubsub";
import acknowledge from "./Acknowledge";
import config from "../../config";

const pubSubClient = new PubSub({
  projectId: config.projectId
});

export async function listenForMessages(cb: () => any) {
  console.log("start listen ..");
  const subscription = pubSubClient.subscription(config.subscriptionName);
  subscription.on("message", async message => {
    console.log("Got message");
    await cb();
    acknowledge(message);
  });
}
