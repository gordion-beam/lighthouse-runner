import { PubSub } from "@google-cloud/pubsub";
import config from "../config";

const pubSubClient = new PubSub({
  projectId: config.projectId
});

const messageHandler = message => {
  console.log(`Received message ${message.id}:`);
  console.log(`\tData: ${message.data}`);
  console.log(`\tAtt
  ributes: ${message.attributes}`);
  message.ack();
};

export async function listenForMessages(cb: () => any) {
  console.log("start listen ..");
  const subscription = pubSubClient.subscription(config.subscriptionName);
  subscription.on("message", message => {
    console.log("Got message");
    messageHandler(message);
    cb();
  });
}
