import { listenForMessages } from "./services/Pubsub";
import scanAllWebsites from "./modules/scanAllSites";
listenForMessages(scanAllWebsites);
