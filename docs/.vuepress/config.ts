import { defineUserConfig } from '@vuepress/cli';
import theme from './theme';

const base = (process.env.BASE as '/' | `/${string}/`) || '/';

export default defineUserConfig({
  base,

  dest: './dist',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '编程小站',
      description: 'vuepress-theme-hope 的演示',
    },
  },

  theme,

  shouldPrefetch: false,
});
