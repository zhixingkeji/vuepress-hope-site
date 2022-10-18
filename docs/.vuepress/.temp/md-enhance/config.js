import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
<<<<<<< HEAD
<<<<<<< HEAD
import ChartJS from "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/ChartJS";
import ECharts from "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/ECharts";
import CodeDemo from "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/CodeDemo";
import CodeTabs from "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import FlowChart from "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Tabs from "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Tabs";
const Playground = defineAsyncComponent(() => import("C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Playground"));
import "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "C:/Project/vuepress-hope-site/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/tex.scss";
=======
=======
>>>>>>> 815481ce3079460341bfa9ef9afd3199c8319e8d
import ChartJS from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/ChartJS";
import ECharts from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/ECharts";
import CodeDemo from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/CodeDemo";
import CodeTabs from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import FlowChart from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Tabs from "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Tabs";
const Playground = defineAsyncComponent(() => import("D:/Project/MyProject/hope/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/components/Playground"));
import "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "D:/Project/MyProject/hope/node_modules/_vuepress-plugin-md-enhance@2.0.0-beta.91@vuepress-plugin-md-enhance/lib/client/styles/tex.scss";
<<<<<<< HEAD
>>>>>>> 815481ce3079460341bfa9ef9afd3199c8319e8d
=======
>>>>>>> 815481ce3079460341bfa9ef9afd3199c8319e8d


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