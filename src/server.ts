import { listenForMessages } from "./services/PubSub/Pubsub";
import scanAllWebsites from "./modules/scanAllSites";
listenForMessages(scanAllWebsites);
