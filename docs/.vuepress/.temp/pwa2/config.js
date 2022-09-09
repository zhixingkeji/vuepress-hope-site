import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-pwa2@2.0.0-beta.91@vuepress-plugin-pwa2/lib/client/composables/setup";
import SWUpdatePopup from "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-pwa2@2.0.0-beta.91@vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});