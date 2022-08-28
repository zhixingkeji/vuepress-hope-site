import { sidebar } from 'vuepress-theme-hope';

export const zh = sidebar({
  '/': [

    //  首页
    '',
    //  服务
    // 'home',
    //
    // 'slide',


    {
      text: '如何使用',
      icon: 'creative',
      prefix: 'guide/',
      link: 'guide/',
      children: 'structure',
    },

    //  教程
    {
      text: '文章',
      icon: 'note',
      prefix: 'posts/',
      children: [
        {
          text: '文章 1-4',
          icon: 'note',
          collapsable: true,
          prefix: 'article/',
          children: ['article1', 'article2', 'article3', 'article4'],
        },
        {
          text: '文章 5-12',
          icon: 'note',
          children: [
            {
              text: '文章 5-8',
              icon: 'note',
              collapsable: true,
              prefix: 'article/',
              children: ['article5', 'article6', 'article7', 'article8'],
            },
            {
              text: '文章 9-12',
              icon: 'note',
              children: ['article9', 'article10', 'article11', 'article12'],
            },
          ],
        },
      ],
    },
  ],

  //教程

  //项目
  "/project/": [

    {
      text: "项目1 心医官网",


      link: "心医项目",


    },
    {
      text: "项目2 unishop",
      link: "unishop"
    },
    {
      text: "项目3 ui可视化",
      link: "ui可视化"
    },
    {
      text: "项目4 后台管理系统",
      link: "后台管理系统"
    },


  ],


  //vue前端笔记
  "/document/vue前端": [
    //html
    {
      text: "html教程",

      icon: "edit",
      link: "html",


    },

    //css
    {
      text: "css教程",

      icon: "edit",
      collapsable: true,
      children: [
        {
          text: "css",
          link: "css"

        },
        {
          text: "scss",
          link: "scss"

        },
        {
          text: "less",
          link: "less"

        },

      ]

    },


    //js
    {
      text: "js教程",

      icon: "edit",
      collapsable: true,
      children: [

        //js
        {
          text: "javascript",
          link: "javascript"

        },



        //ts
        {
          text: "typescript",
          link: "typescript"

        },

        //es
        {
          text: "ES语法规范",
          link: "es"

        },

        //node
        {
          text: "node",
          link: "node"

        },

      ]


    },

    //vue
    {
      text: "vue教程",

      icon: "edit",
      collapsable: true,
      children: [
        {
          text: "vue2",
          link: "vue2"

        },
        {
          text: "vue3",
          link: "vue3"
        },

        {
          text: "uniapp",
          link: "uniapp",
        },
        {
          text: "electron",
          link: "electron",
        },

        {
          text: "vuepress",
          link: "vuepress",
        },

        {
          text: "webpack",
          link: "webpack",
        },

      ]


    },

    //react
    {
      text: "react教程",

      icon: "edit",
      link: "react",


    },

  ],


  //编程基础笔记
  "/document/编程基础": [

    //  网络安全
    {
      text: "网络安全",
      icon: "edit",

      link: "网络安全",

    },

    //  php教程
    {
      text: "php教程",
      icon: "edit",

      link: "php",

    },

    //  md教程
    {
      text: "md教程",
      icon: "edit",

      link: "markdown",

    },

    //  计算机二级公共基础
    {
      text: "计算机二级公共基础",
      icon: "edit",

      link: "计算机二级公共基础",

    },

    //  网络基础
    {
      text: "网络基础",
      icon: "edit",

      link: "网络基础",

    },

  ],


  //数据库笔记
  "/document/数据库": [

    {
      text: "mysql教程",
      icon: "edit",

      link: "mysql",


    },
    {
      text: "redis教程",

      icon: "edit",
      link: "redis",


    },
    {
      text: "mongodb教程",
      icon: "edit",
      link: "mongodb",
    },

    {
      text: "elasticsearch教程",
      icon: "edit",
      link: "elasticsearch",
    },
  ],


  //java后端笔记
  "/document/java后端": [


    {
      text: "java教程",
      icon: "edit",
      collapsable: true,
      children: [
        {
          text: "java基础",
          link: "java"
        },
        {
          text: "安卓",
          link: "android"
        },
        {
          text: "maven",
          link: "maven"
        },
        {
          text: "tomcat",
          link: "tomcat"
        },
        {
          text: "servlet",
          link: "servlet"
        },
        {
          text: "数据结构",
          link: "数据结构"
        },

        {
          text: "算法",
          link: "算法"
        },

        {
          text: "设计模式",
          link: "设计模式"
        },


      ]
    },


    {
      text: "spring教程",
      icon: "edit",
      collapsable: true,
      children: [
        {
          text: "spring",
          link: "spring"
        },
        {
          text: "springboot",
          link: "springboot"
        },
        {
          text: "springmvc",
          link: "springmvc"
        },
        {
          text: "mybatis",
          link: "mybatis"
        },
        {
          text: "mybatisplus",
          link: "mybatisplus"
        },

        {
          text: "jwt",
          link: "jwt"
        },
        {
          text: "shiro",
          link: "shiro"
        },
        {
          text: "security",
          link: "springsecurity"
        },
        {
          text: "restful-api",
          link: "restful"
        },

      ]
    },


    {
      text: "springcloud教程",
      icon: "edit",
      collapsable: true,
      children: [
        {
          text: "springcould",
          link: "springcould"
        },
        {
          text: "rocketmq",
          link: "rocketmq"
        },
        {
          text: "dubbo",
          link: "dubbo"
        },

      ]
    },
  ],


  //python全栈笔记
  "/document/python全栈": [

    //python
    {
      text: "python教程",
      icon: "edit",
      collapsable: true,
      children: [
        {
          text: "python教程",
          link: "python",
        },
        {
          text: "pyautogui教程",
          link: "pyautogui",
        },
        {
          text: "软件测试",
          link: "软件测试",
        }
      ]


    },


    //爬虫
    {
      text: "爬虫教程",
      icon: "edit",
      collapsable: true,
      children: [
        {
          text: "selenium教程",
          link: "selenium",
        },
        {
          text: "scrapy教程",
          link: "scrapy",
        },
      ]


    },


    //后端
    {
      text: "后端",
      collapsable: true,

      icon: "edit",
      children: [
        {
          text: "flask教程",
          link: "flask",
        },
        {
          text: "django教程",
          link: "django",
        }
      ]

    },


    //大数据
    {
      text: "大数据",

      icon: "edit",
      collapsable: true,
      children: [
        {
          text: "hadoop教程",
          link: "flask",
        },
        {
          text: "spark教程",
          link: "django",
        },
        {
          text: "flink教程",
          link: "flink",
        }
      ]

    },

    //深度学习
    {
      text: "深度学习",

      icon: "edit",
      collapsable: true,
      children: [
        {
          text: "pytorch教程",
          link: "pytorch",
        },
        {
          text: "机器学习教程",
          link: "机器学习",
        },
        {
          text: "深度学习环境搭建",
          link: "深度学习环境搭建",
        },
        {
          text: "pandas教程",
          link: "pandas",
        },
        {
          text: "opencv",
          link: "opencv",
        },
        {
          text: "yolov5",
          link: "yolov5",
        }

      ]

    },

  ],


  //linux运维笔记
  "/document/linux运维": [

    {
      text: "git教程",
      icon: "edit",

      link: "git",


    },
    {
      text: "docker教程",

      icon: "edit",
      link: "docker",


    },
    {
      text: "k8s教程",
      icon: "edit",

      link: "k8s",


    },
    {
      text: "jenkins教程",
      icon: "edit",

      link: "jenkins",


    },
    {
      text: "prometheus教程",
      icon: "edit",

      link: "prometheus",


    },
    {
      text: "nginx教程",
      icon: "edit",

      link: "nginx",


    },
    {
      text: "linux教程",
      icon: "edit",

      link: "linux",


    },
    {
      text: "shell教程",
      icon: "edit",

      link: "shell",


    },
    {
      text: "win教程",
      icon: "edit",

      link: "win",


    },
    {
      text: "mac教程",
      icon: "edit",

      link: "mac",


    },
  ],


  //高数英语笔记
  "/document/高数英语": [

    {
      text: "初等数学",
      icon: "edit",

      link: "初等数学",


    },
    {
      text: "高等数学",

      icon: "edit",
      link: "高等数学",


    },
    {
      text: "线性代数",

      icon: "edit",
      link: "线性代数",


    },

    {
      text: "概率统计",

      icon: "edit",
      link: "概率统计",


    },

    {
      text: "离散数学",

      icon: "edit",
      link: "离散数学",


    },

    {
      text: "英语四级",

      icon: "edit",
      link: "英语四级",


    },
  ],


});
