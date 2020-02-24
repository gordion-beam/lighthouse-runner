import { listenForMessages } from "./services/Pubsub";
import scanAllWebsites from "./modules/scanAllWebsites";
listenForMessages(scanAllWebsites);
