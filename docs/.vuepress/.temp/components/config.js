<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useStyleTag } from "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/composables";
import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import Badge from "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/components/Badge";
import FontIcon from "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/components/FontIcon";
import BackToTop from "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/components/BackToTop";
=======
import { useStyleTag } from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/composables";
import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import Badge from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/components/Badge";
import FontIcon from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/components/FontIcon";
import BackToTop from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/components/BackToTop";
>>>>>>> 815481ce3079460341bfa9ef9afd3199c8319e8d
=======
import { useStyleTag } from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/composables";
import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import Badge from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/components/Badge";
import FontIcon from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/components/FontIcon";
import BackToTop from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/components/BackToTop";
>>>>>>> 815481ce3079460341bfa9ef9afd3199c8319e8d
=======
import { useStyleTag } from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/composables";
import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import Badge from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/components/Badge";
import FontIcon from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/components/FontIcon";
import BackToTop from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-components@2.0.0-beta.91@vuepress-plugin-components/lib/client/components/BackToTop";
>>>>>>> 815481ce3079460341bfa9ef9afd3199c8319e8d


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", Badge);
    app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});