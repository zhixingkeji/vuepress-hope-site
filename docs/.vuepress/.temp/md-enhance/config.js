import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
import ChartJS from "E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/ChartJS";
import ECharts from "E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/ECharts";
import CodeDemo from "E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/CodeDemo";
import CodeTabs from "E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import FlowChart from "E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Tabs from "E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Tabs";
const Playground = defineAsyncComponent(() => import("E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Playground"));
import "E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("ECharts", ECharts);
    app.component("CodeDemo", CodeDemo);
    app.component("CodeTabs", CodeTabs);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
    app.component("Playground", Playground);
    
  }
});