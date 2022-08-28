import { navbar } from 'vuepress-theme-hope';
import { version } from 'vuepress-theme-hope/package.json';

export const en = navbar([
  //  首页
  '/',


  //  教程
  {
    text: '教程',
    icon: 'edit',
    prefix: "/document/",
    children: [
      {
        text: "vue前端",
        icon: "edit",
        prefix: "article/",
        link:"vue前端"
      },
      {
        text: "java后端",
        icon: "edit",
        prefix: "article/",
        link:"java后端"
      },
      {
        text: "python全栈",
        icon: "edit",
        prefix: "article/",
        link:"python全栈"
      },
      {
        text: "linux运维",
        icon: "edit",
        prefix: "article/",
        link:"linux运维"
      },
      {
        text: "数据库",
        icon: "edit",
        prefix: "article/",
        link:"数据库"
      },
      {
        text: "编程基础",
        icon: "edit",
        prefix: "article/",
        link:"编程基础"
      },
      {
        text: "高数英语",
        icon: "edit",
        prefix: "article/",
        link:"高数英语"
      },



    ],
  },

  //  项目
  { text: "项目", icon: "creative", link: "/project/" },

  //服务
  { text: '服务', icon: 'creative', link: '/service' },




  //  关于
  {
    text: "关于",
    icon: 'note',
    children: [
      {
        text: 'B站',
        link: 'https://vuepress-theme-hope.github.io/v2/zh/',
      },
      {
        text: '抖音',
        link: 'https://vuepress-theme-hope.github.io/v1/zh/',
      },
      {
        text: '微信',
        link: 'https://vuepress-theme-hope.github.io/v1-demo/zh/',
      },
    ],
  },
]);
