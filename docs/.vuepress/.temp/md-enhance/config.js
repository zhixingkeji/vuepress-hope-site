import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
import ChartJS from "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/ChartJS";
import ECharts from "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/ECharts";
import CodeDemo from "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/CodeDemo";
import CodeTabs from "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import FlowChart from "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Tabs from "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Tabs";
const Playground = defineAsyncComponent(() => import("/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Playground"));
import "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/Users/wangle/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


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