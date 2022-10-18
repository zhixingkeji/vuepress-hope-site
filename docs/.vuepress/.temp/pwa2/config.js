import { defineClientConfig } from "@vuepress/client";
<<<<<<< HEAD
<<<<<<< HEAD
import { setupPWA } from "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-pwa2@2.0.0-beta.91@vuepress-plugin-pwa2/lib/client/composables/setup";
import SWUpdatePopup from "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-pwa2@2.0.0-beta.91@vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup";
=======
import { setupPWA } from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-pwa2@2.0.0-beta.91@vuepress-plugin-pwa2/lib/client/composables/setup";
import SWUpdatePopup from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-pwa2@2.0.0-beta.91@vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup";
>>>>>>> 815481ce3079460341bfa9ef9afd3199c8319e8d
=======
import { setupPWA } from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-pwa2@2.0.0-beta.91@vuepress-plugin-pwa2/lib/client/composables/setup";
import SWUpdatePopup from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-pwa2@2.0.0-beta.91@vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup";
>>>>>>> 815481ce3079460341bfa9ef9afd3199c8319e8d


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});