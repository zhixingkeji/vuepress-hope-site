import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-theme-hope@2.0.0-beta.91@vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-theme-hope@2.0.0-beta.91@vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-theme-hope@2.0.0-beta.91@vuepress-theme-hope/lib/client/layouts/Slide.js")),
  "Blog": defineAsyncComponent(() => import("E:/Code/Project/vuepress-hope-site/node_modules/_vuepress-theme-hope@2.0.0-beta.91@vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
