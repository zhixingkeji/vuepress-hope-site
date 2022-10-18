---
title: vue3教程

date: 2021-11-14 09:15:04

[//]: # (sidebar: heading)

---

## 第1章 入门

### 1.1 vue介绍

Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。



### 1.2 编程范式

命令式编程：以往的编程例如jq，js 都是先执行什么再执行什么。

例如，先创建div元素，定义message，把message放到div中显示



声明式编程：Vue只需要声明div中需要显示什么，由vue对象进行管理元素

好处是前后端完全分离，响应式后端数据更改后前端自动修改）



### 1.3 设置活动模板

设置，编辑器，活动模板，在Vue下添加vue，和代码，定义在html里响应

之后在敲代码时输入vue按tab键会自动导出模板里的代码





## 第2章 使用

### 2.1 vue 安装

```bash
$ npm install -g vue@next
```





### 2.2 vue-cli脚手架

安装

```
cnpm install -g @vue/cli
```



检查

```
vue --version
```



命令行创建项目

```sh
vue create myproject
```



gui界面

```sh
vue ui
```



安装插件

```
vue add element-plus
```



配置 vue.config.js

```js
module.exports = {
    //部署生产环境和开发环境下的URL：可对当前环境进行区分
    publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
     // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 
    assetsDir: "assets",
    // 输出文件目录：在npm run build时，生成文件的目录名称
    outputDir: 'dist',
    // 代码保存时进行eslint检测
    lintOnSave: false,
	// 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 
    productionSourceMap: false,  
    // webpack-dev-server 相关配置
	devServer: {
    	// 自动打开浏览器
        open: true,
        // 主机
        host: 'localhost',
        // 端口
        port: 9930,
        // https
        https: false,
        // 热更新
        hotOnly: true,

    	proxy: 'http://localhost:4000'
	},
    
    
   	chainWebpack: config => {
    	const svgRule = config.module.rule('svg')
		// 清除已有的所有 loader。
    	// 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()

    // 添加要替换的 loader
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
    
}
```





### 2.3 计算属性

#### 2.3.1 computed

一般的, computed函数只有get方法, 所以不能 plusOne++ , 如果需要 需要对其设置 set 方法

```js
const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
})
```



### 2.4 监听属性

#### 2.4.1 watchEffect

立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数

```javascript
const count = ref(0)

watchEffect(() => console.log(count.value))
// -> logs 0

setTimeout(() => {
  count.value++
  // -> logs 1
}, 100)
```

#### 2.4.2 watch

侦听单一源

```javascript
// 侦听一个 getter
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)

// 直接侦听一个 ref
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})
```



### 2.5 条件渲染

#### 2.5.1 v-if

```html
<h2 v-if="score>=90">{{message}}</h2>
<h2 v-else-if="score>=80">{{message}}</h2>
<h2 v-else-if="score>=70">{{message}}</h2>
<h2 v-else>{{message}}</h2>
```





#### 2.5.2 v-show 和 v-if 的区别

v-if 为 false 的时候，是从虚拟dom里删除，当为true时再添加渲染。

v-show 只是把行内元素样式改为不显示，但是还在dom里。

v-show 适合频繁切换显示隐藏，因为不用新添加dom。





### 2.6 列表渲染

#### 2.6.1 遍历数组

```html
<li v-for="item in names"> {{ item }} </li>

<li v-for="(item, index) in names">{{index+1}} {{ item }} </li>
```



注意 如果是遍历的是图片路径需要特殊处理

```js
//先使用js导入图片 名称为图片的文件名
import lunbo1 from "~@/assets/swiper/lunbo1.png"
import lunbo2 from "~@/assets/swiper/lunbo2.png"

//创建数组存放图片
 const lunbo_list = [ lunbo1, lunbo2 ]
 
//在页面上使用
<div v-for="item in lunbo_list">
    <img :src="item"/>
</div>
```





#### 2.6.2 遍历对象

```html
<li v-for="value in obj"> {{ value }} </li>

<li v-for="(value,key) in obj">{{key}} : {{ value }} </li>

<li v-for="(value,key,index) in obj">{{key}} . {{key}} : {{ value }} </li>
```



#### 2.6.3 与数据响应有关的数组方法

| 方法    | 描述                                                 |
| ------- | ---------------------------------------------------- |
| push    | 将一个元素添加到数组末尾，并返回新数组的长度         |
| pop     | 从数组中删除并返回最后一个元素                       |
| shift   | 从数组中删除并返回第一个元素                         |
| unshitf | 将一个或多个元素添加到数组的开头，并返回新数组的长度 |
| splice  | 从数组中删除或向数组添加元素                         |
| sort    | 对数组元素排序，返回排序后的数组                     |
| reserve | 将数组中的元素位置颠倒，返回颠倒后的数组             |



#### 2.6.4 列表渲染中的key

虚拟dom会进行判断，是否进行复用，

如果key值一样则复用，否则创建新的缓存

当某一层有很多相同节点时，也就是列表节点，我们希望插入一个新的节点，

所以我们需要使用key来给每个节点做一个唯一的标识，

diff就会识别两者的不同，找到正确位置进行插入，

而不是将整个列表重新排序插入，提高虚拟DOM的效率

```html
<li v-for="item in names" :key="item"> {{ item }} </li>
```







### 2.7 事件处理

#### 2.7.1 v-on

语法糖简写为 `@`



#### 2.7.2 多事件处理

```html
<!-- 这两个 one() 和 two() 将执行按钮点击事件 -->
<button @click="one($event), two($event)">
  Submit
</button>
```



#### 2.7.3 事件修饰符

`.stop `

`.prevent`

`.capture `

`.self`

`.once`

`.passive`

```html
<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div @click.self="doThat">...</div>
```





### 2.8 v-model

表单输入绑定

```html
<input v-model="message" placeholder="edit me" />
<p>Message is: {{ message }}</p>
```





### 2.9 动态样式绑定

普通样式与动态样式共存

```html
//html
<div
  class="static"
  :class="{ 'active': isActive, 'text-danger': hasError }">
</div>

//js
const isActive = ref(true)
const hasError = ref(false)

//结果
<div class="static active"></div>
```



绑定数据对象

```vue
//html
<div :class="classObject"></div>

//js
data: {
  classObject: {
    active: true,
  }
}
```



绑定计算属性

```vue
//html
<div :class="classObject"></div>

//js
export default {
  data() {
    return {
    isActive: true,
    };
  },
  computed: {
  classObject: function () {
    return {
      active: this.isActive,
    }
  }
}

//结果
<div class="active"></div>
```



单纯数组

```vue
//html
<div :class="[activeClass, errorClass]"></div>

//js
data() {
    return {
      activeClass: "active",
      errorClass: "disActive"
    };
  },

//结果
<div class="active disActive"></div>
```



三元运算符

```vue
//html
<div :class="[isActive?'active':'disActive']"></div>

//js
data() {
    return {
      isActive: false,
    };
},

//结果
<div class="disActive"></div>
```







### 2.10 生命周期

#### 2.10.1 生命周期介绍



#### 2.10.2 setup

接收两个参数

1. `props`

props是响应式的, 使用普通的解构赋值会消除响应性

```js
// MyBook.vue

import { toRefs } from 'vue'

setup(props) {
  const { title } = toRefs(props)

  console.log(title.value)
}
```



2. `context`

不是响应式的, 可以使用结构赋值

```js
// MyBook.vue

export default {
  setup(props, context) {
    // Attribute (非响应式对象，等同于 $attrs)
    console.log(context.attrs)

    // 插槽 (非响应式对象，等同于 $slots)
    console.log(context.slots)

    // 触发事件 (方法，等同于 $emit)
    console.log(context.emit)

    // 暴露公共 property (函数)
    console.log(context.expose)
  }
}
```



#### 2.10.3 生命周期钩子

| 选项式 API        | Hook inside         |
| ----------------- | ------------------- |
| `beforeMount`     | `onBeforeMount`     |
| `mounted`         | `onMounted`         |
| `beforeUpdate`    | `onBeforeUpdate`    |
| `updated`         | `onUpdated`         |
| `beforeUnmount`   | `onBeforeUnmount`   |
| `unmounted`       | `onUnmounted`       |
| `errorCaptured`   | `onErrorCaptured`   |
| `renderTracked`   | `onRenderTracked`   |
| `renderTriggered` | `onRenderTriggered` |
| `activated`       | `onActivated`       |
| `deactivated`     | `onDeactivated`     |



```js
export default {
  setup() {
    // mounted
    onMounted(() => {
      console.log('Component is mounted!')
    })
  }
}
```



### 2.11 模板语法

#### 2.11.1 文本

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值

```html
<span>Message: {{ msg }}</span>
```



#### 2.11.2 v-html

原始html

```html
<span v-html="rawHtml"/>
```



#### 2.11.3 v-pre

不用任何解析，保留原格式输出



#### 2.11.4 v-cloak

在没渲染加载完成之前不显示





## 第3章 组件

### 3.1 组件注册

组件内引用

```js
import ComponentA from './ComponentA.vue'

export default {
  components: {
    ComponentA
  }
  // ...
}
```



全局注册组件

```js
//main.js
import Btns from "@/components/Btns";
app.component("Btns",Btns)
```







### 3.2 父传子props传值

**父组件发送**

在组件标签上绑定一个变量即可

```vue
<son :data=12></son>
```



**子组件接收**

```js
props: {
    // 类型检查
    height: Number,
        
    // 类型检查 + 其他验证
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: value => {
        return value >= 0
      }
    }
  }


setup(props,content){
    //接收变量
    const age = props.age
}
```



### 3.3 子传父emit

**子组件发送**

```js
setup(props,content){
    function menuClick (menuName) {
        // 通过⾃定义事件回传值
        context.emit('menuClick', { menuName })
    }
}
```



父组件接收

```js
<son @menuClick="menuClick"></son>

setup(){
	//父组件传给子组件的值
	let parentValue = ref()
    
 	const menuClick = (value) => {
    	parentValue.value = value
    }
}
```





### 3.4 父子双向绑定







### 3.5 加强组件传值

provide不限层级，只要是处于A页面下的子组件 或者孙子组件都可以。

`provide` 和 `inject` 都需要放在setup中才能够使用，不在里头会报错像下面这样。

```js
父组件发送
provide(key, 'foo') // 若提供非字符串值将出错

子组件接收
const foo = inject(key) // foo 的类型: string | undefined
```









### 3.6 模板使用

```js
<template #title></template>
```





### 3.7 css样式隔离

```vue
<style sooped lang="scss">
</style>
```





### 3.8 异步组件

#### 3.8.1 keep-alive

#### 保持组件活性介绍

vue内部的一个组件，保留组件的状态。



```html
<keep-alive>
		<router-view/>
</keep-alive>
```



#### 3.8.2 被保持状态的组件的方法

activated（），deactivated（）



#### 3.8.3 包含和排除

keep-alive标签内的属性，include 和 exclude

keep-alive exclude="About"  //排除about组件的保留记录





### 3.9 组件插槽

匿名插槽

```vue
<!-- my-button子组件定义 -->
<template>
    <button>
        <slot>默认按钮</slot>
    </button>
</template>

<!-- 父组件调用my-button -->
<my-button>
	提交按钮
</my-button>

<!-- 父组件页面渲染为 -->
<button>
    提交按钮
</button>
```





具名插槽

```vue
<!-- my-layout子组件定义 -->
<template>
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <!-- 其实就是<slot name="default"></slot> -->
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<!-- 父组件调用my-layout -->
<my-layout>
    <!-- 填充内容顺序无关 -->
    <template v-slot:footer>
    	<p>我来组成脚丫子</p>
  	</template>
    
    <!-- v-slot:header可以简写为#header -->
	<template v-slot:header>
    	<h1>我来组成头部</h1>
  	</template>

    <!-- v-slot:default可以忽略不写 -->
  	<template v-slot:default>
        <p>我来组成身体</p>
  	</template>
</my-layout>

<!-- 父组件页面渲染为 -->
<div>
    <header>
        <h1>我来组成头部</h1>
    </header>
    <main>
    	<p>我来组成身体</p>
    </main>
    <footer>
        <p>我来组成脚丫子</p>
    </footer>
</div>
```





作用域插槽

```vue
<!-- todo-list子组件定义 -->
app.component('todo-list', {
  data() {
    return {
      items: [
        { "thing1":"阅读", "thing2":"看电视" },
        { "thing1":"背单词", "thing2":"玩游戏" }
      ]
    }
  },
  template: `
    <ul>
        <li v-for="(item, index) in items">
            <!-- data即插槽prop，绑定item，index也是插槽prop，绑定index，备用内容为item.thing1 -->
        	<slot :data="item" :index="index">{{ item.thing1 }}</slot>
        </li>
    </ul>
  `
})

<!-- 正常用法：父组件调用todo-list -->
<todo-list>
  <!-- 这里default就是具名插槽的用法，slotProps来接收子组件数据，命名随意 -->
  <template v-slot:default="slotProps">
    <i class="fas fa-check"></i>
    <span class="green">{{ slotProps.index }} + ' - ' + {{ slotProps.data.thing2 }}</span>
  </template>
</todo-list>

<!-- 特殊用法：只有默认插槽时，v-slot可以写在组件上 -->
<todo-list v-slot:default="slotProps">
  <template>
    <i class="fas fa-check"></i>
    <span class="green">{{ slotProps.index }} + ' - ' + {{ slotProps.data.thing2 }}</span>
  </template>
</todo-list>

<!-- 特殊用法：v-slot有解构的用法 -->
<todo-list v-slot:default="{index, data}">
  <template>
    <i class="fas fa-check"></i>
    <span class="green">{{ index }} + ' - ' + {{ data.thing2 }}</span>
  </template>
</todo-list>

<!-- 父组件页面渲染为 -->
<ul>
    <li>
        <i class="fas fa-check"></i>
        <span class="green">0 - 看电视</span>
    </li>
    <li>
        <i class="fas fa-check"></i>
    	<span class="green">1 - 玩游戏</span>
    </li>
</ul>
```







### 3.10 组件切换

```vue
<template>
  <div class="home">
    <ElButton v-for="item in info" 
              :key="item.name" 
              @click="form(item.value)">
        {{item.name}}
    </ElButton>
 	//is赋值组件名称
    <Component :is="componentShow" /> 
  </div>
</template>
 
<script>
import FormDemo from "../components/formDemo"; // 引入组件1
import Cartogram from "../components/cartogram"; //引入组件2
 
export default {
    components: {
      FormDemo,
      Cartogram,
    },
    setup () {
      	let componentShow = ref(null);
        let info = ref([
             { name: "表单", value: FormDemo },
             { name: "统计", value: Cartogram },
        ])
        let form = (val) => {
            //把组件名赋值给公用组件
            componentShow.value = val; 
        }
      return {
       	componentShow,
      	info,
        form
      }
    },
}
</script>
```





## 第4章 第三方库





### 4.1 elementUI组件库

安装element-plus

```sh
vue add element-plus
```



安装 element icon

```sh
cnpm install --save @element-plus/icons-vue 
```



全局注册 plugins/element.js

```js

import ElementPlus from 'element-plus'
import '../element-variables.scss'
import * as ElIcons from '@element-plus/icons-vue'


export default (app) => {
  for (const name in ElIcons){
    app.component(name,(ElIcons)[name])
  }

  app.use(ElementPlus)
}

```



修改组件样式配色等

```scss
// 样式穿透语法 ::v-deep
// 可以穿透scoped作用域 
::v-deep .el-tabs__active-bar{
    //使用开发者工具查看当前class
  background-color:  #4880FF!important;
}
```



dialog对话框 禁止页面滚动

```vue
<div @mousewheel="forbidScroll">
    <el-dialog>...</el-dialog>
</div>

// 禁用鼠标滚动 达到不能滚动页面的效果
setup(){
    function forbidScroll(e) {
     	e.preventDefault && e.preventDefault();
     	e.returnValue = false;
      	e.stopPropagation && e.stopPropagation();
      	return false;
    }   
}
```



回到顶部组件

```vue
 <el-backtop :bottom="100">...</el-backtop>
```



树形控件

```vue
 <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
```





### 4.2 表单验证模块





### 4.3 deepcopy 深拷贝





### 4.4 别名

alias 解决引入文件路径问题

使用import导入时可以简写

在标签内使用src时需要在前加 `~`

`import TabBar from "@/views/TabBar" `

`<img src="~@/assets/img/home.svg">`



webpack.base.conf.js 文件

```js
resolve: {
    extensions: [ '.js', '.vue', '.json' ],
    alias: {
        '@': resolve('src'),
        'assets': resolve('@/assets'),
        'components': resolve('@/components'),
        'views': resolve('@/views'),
    }
}
```



### 4.5 使用网页md编辑器组件

#### 4.5.1 vue3下安装

```bash
npm i mavon-editor@3.0.0-beta
```



main.js中引入

```js
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

app.use(mavonEditor)
```

组件内使用

```html
<mavon-editor v-model="formLabelAlign.content"></mavon-editor>
```





#### 4.5.2 vue2下安装

npm i mavon-editor



#### 4.5.3 解析

npm install markdown-it --save

npm install github-markdown-css





### 4.6 mitt 

```sh
cnpm install mitt
```





### 4.7 path



### 4.8 boostrape

安装

```
cnpm i bootstrap@3
cnpm i autoprefixer  
cnpm i @popperjs/core
cnpm i jquery
```



引入 main.js

```
import 'bootstrap'
import $ from 'jquery'
```



组件中引入

```
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
```





### 4.9 swiper

安装

```
cnpm i swiper
```



使用

```vue
<template>
	  <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,         
        }"
        class="mySwiper"
    >
    	<swiper-slide>s1</swiper-slide>
    	<swiper-slide>s1</swiper-slide>
    </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
    //自动翻页
import { Autoplay } from 'swiper';
    //左右翻页箭头和翻页条
import {Pagination, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
    
export default {
  name: "Rotation",
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
  	const modules = [Pagination, Navigation, Autoplay]
  },
  return {
      modules
  }  
</script>

<style scoped lang="scss">
.Rotation {
  //容器0 轮播图
  .mySwiper{
    width: 100%;
    height: fit-content;
    //margin: 0 calc((100% - 10.40rem) / 2);

    img {
      width: 100%;
      //height: 6rem;
    }
  }
}
</style>
```



### 4.10 draggable

安装

```
cnpm i -S vuedraggable@next 
```



引入

```js
import draggable from 'vuedraggable'

components: {
    draggable
}   
```



例子

```js
<template>
  <div class="AboutView">
    <!--使用draggable组件 v-model绑定数组-->
    <draggable v-model="myArray"  @start="onStart" @end="onEnd" item-key="id" animation="1000" chosen-class="chosen">
      <template #item="{element}">
        <div class="item" >{{element.name}}</div>
      </template>

    </draggable>
  </div>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from "vue";
import draggable from 'vuedraggable'
export default {
  name: "AboutView",
  components: {
    draggable
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()

    let drag = ref(false)

    let  myArray= ref([
      {id:10,name:'www.itxst.com'},
      {id:20,name:'www.baidu.com'},
      {id:30,name:'www.taobao.com'},
      {id:40,name:'www.yahoo.com'}
    ])

    const onStart = ()=>{
      drag.value= true;
    }
    //拖拽结束事件
    const onEnd = () => {
      drag.value = false;
    }

    return {
      myArray,
      drag,
      onStart,
      onEnd
    }

  }
}
</script>

<style scoped lang="scss">
.AboutView {
  /*被拖拽对象的样式*/
  .item {
    padding: 6px;
    background-color: #fdfdfd;
    border: solid 1px #eee;
    margin-bottom: 10px;
    cursor: move;


    &:hover {
      background-color: #f1f1f1;

    }
  }

  .chosen {
    border: solid 2px #3089dc !important;
  }

}

</style>
```



### 4.11 screenfull 

安装

```
cnpm install screenfull
```



引入

```
import screenfull from "screenfull";
```



例子

```vue
<template>
  <div class="screen_full">
    <button @click="requestFullScreen">
        当前屏幕全屏</button>

    <button @click="toggleFullscreen()">
        让指定元素全屏</button>
    
      <div id="log" style="background: red;width: 100px;height: 100px"></div>
  </div>
</template>

<script>
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
import {ref} from "vue";
import screenfull from "screenfull";

export default {
  name: "screen_full",
  setup() {
 
    const requestFullScreen = () => {
      if (screenfull.isEnabled) {
        screenfull.toggle()
      }
    }

    const toggleFullscreen = () => {
      const ele = document.getElementById('log');//指定全屏区域元素
      if (screenfull.isEnabled) {
        screenfull.request(ele);
      }
    }

    return {
      requestFullScreen,
      toggleFullscreen
    }

  }
}
</script>

<style scoped lang="scss">
.screen_full {

}


#log {
  overflow: auto; //超出全屏内容出现滚动条
}
</style>
```





### 4.12 codemirror

安装

```
cnpm install vue-codemirror
```



### 4.13 day.js

```
cnpm install dayjs
```



### 4.14 mock

模拟接口



### 4.15  Video.js





### 4.100 其他

```json
"clipboard": "2.0.4", //复制到剪贴板
"codemirror": "5.45.0", // 代码编辑器
"dropzone": "5.5.1", //Dropzone 将显示文件预览和上传进度
"file-saver": "2.0.1",//保存文件
"jszip": "3.2.1", //创建压缩文件等
"nprogress": "0.2.0",//进度条

"vue-splitpane": "1.0.4",//分屏
"vuedraggable": "2.20.0",//拖放
"xlsx": "0.14.1"//excel操作

"gsap": "^3.6.1", //动画库
"husky": "1.3.1", //现代原生 Git 钩子变得简单
"plop": "2.3.0",//文件生成模板
```










## 第5章 axios

### 5.1 概念

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中

### 5.2 特点

-   从浏览器中创建 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
-   从 node.js 创建 [http](http://nodejs.org/api/http.html) 请求
-   支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
-   拦截请求和响应
-   转换请求数据和响应数据
-   取消请求
-   自动转换 JSON 数据
-   客户端支持防御 XSRF



### 5.3 安装

```shell
cnpm install axios
```



### 5.4 发送请求

原生请求

```js
// 获取远端图片
axios({
  method:'get',
  url:'http://bit.ly/2mTM3nY',
  responseType:'stream'
})
  .then(function(response) {
  response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
});
```

封装的请求方法

```js
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
axios.all()  //执行并发请求
```

### 5.5 配置拦截

### 5.6 封装项目api



## 第6章 vue-router

### 6.1 vue路由



动态路由

```js
// router.js
{path: goods/:id}

//组件中
const id = route.param.id
```





路由导航

```js
router.push("/home")
```





路由元信息

```js
// router.js
{
    path: '/home',
        name: 'home',
        component: HomeView,
        meta:{
            index: 0
    },
}

```





路由拦截认证





在组件中获取 router  route

```js
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
  }
}
```



路由跳转后不在顶部解决方案

```js
router.afterEach((to, from, next) => {
  console.log(to, from, next)
  console.log(route.meta.index)
  if (route.meta.index === 100){
    window.scrollTo(0, 0)
  }
})
```



内外部合并路由跳转

```js
//产品矩阵的路由跳转按钮
const routeClick = (url)=> {
	//通过是否包含http关键字判断内外部链接
	if(url.search("http") !== -1){
		//外部链接
		window.open(url);
	}else{
		//内部链接
		router.push(url)
    }
}
```



路由守卫



路由拦截



路由跳转



router和route的区别



## 第7章 vuex

### 7.1 vuex介绍



### 7.2 核心模块

-   state里定义数据

-   getters里定义getter方法

-   muation里定义set方法

-   action 定义异步的set方法

-   modules 定义模块



src / store / index.js

```js
import { createStore } from 'vuex'

import cart from './module/cart.js'

export default createStore({
    state: {
        a: 1,
        list: ["保留","123","不知道"]
    },
    
    getters: {
         checkedAll(state) {
            return state.list.length
        },
    },
    mutations: {
            checkAllCommit(state){
            console.log("点击全选")
        },
    },
    actions: {
        checkAll({commit, getters}){
            console.log("checkAll")
        }
    },
    modules: {
        cart
    }
})
```



src / store / module / cart.js

```js
export default {
    state: {
        a: 1,
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    }
}
```





### 7.3 在组件内获取vuex

```js
import {useStore} from "vuex";

setup(){
    //在组件内获取store
    const store = useStore()
	return {
        store
    }
},
methods: {
    //在组件获取Action
  	...mapActions(['checkAll']),
    //在组件内获取Mutations
    ...mapMutations(['selectOne'])    
},

computed:{
    //在组件内获取State
    ...mapState({
      list : state => state.cart.list,
      selectedList : state => state.cart.selectedList,
    }),

    //在组件内获取Getters
    ...mapGetters(['checkedAll','totalCount'])
  }
```





### 7.4 持久化vuex

-   vuex和其他存储的区别


cookie 

localstore  本地存储空间

sessionstore  会话存储空间 区别





-   将 vuex 的数据序列化存到 localstore , 并从中反序列化读









### 7.5 提交方法

组件内提交

```js
store.commit('SET_TOKEN',jwt)
```





### 7.6 异步方法





## 第8章 解决方案

### 8.1 webstrom vue模板

```
```





### 8.2 对话框显示方案

父子组件,父组件按钮打开一个对话框,对话框是他的子组件,

实现是否显示对话框的双向绑定.



**子组件 UserAdd**

```js
//html
<el-dialog
    title="新增用户"
    :model-value="adduserbtn"
    @close="onClose"    //点右上角的叉子
    @open="onOpen"      //打开时
>
    <span>你好</span>    
	<template #footer>
    	<span class="dialog-footer">
            <el-button 
				type="primary" 
				@click="onCancel"
       		 >取消</el-button>
        	<el-button 
				type="primary" 
				@click="handelConfirm"
       		 >确定</el-button>
      	</span>
	</template>
</el-dialog>        

//script
props: {
  adduserbtn: {
    type: Boolean,
    default: false,
    required: true
  }
},

setup(props, context) {
    let adduserbtn = ref(props.adduserbtn)
    watch(() => props.adduserbtn, (val) => {
      //查看父组件传过来的值是否变化，从而修改值
      adduserbtn.value = val
    });
    watch(() => adduserbtn.value, (val) => {
      //查看子组件值是否变化，在赋值给父组件
      context.emit('update:adduserbtn', val)
    });
    
    //关闭操作
    let close = ()=>{
        adduserbtn.value = false
    }
    
    
    //窗口打开
    let onOpen = () => {
    	...
    }

    //窗口关闭
    let onClose = () => {
      	close()
      	...
    }

    //提交按钮
    let handelConfirm = () => {
      	close()
        ...
    }
    
     //取消按钮
    let onCancel = () => {
     	close()
        ...
    }
}
    

//style
给对话框之外添加遮罩层 并且无法点击
设置滚轮不能滚动
    
```



**父组件**

```html
//html
<UserAdd v-model:adduserbtn="adduserbtn"></UserAdd>

//script
let adduserbtn = ref(false)
```





### 8.3 复制内容到剪贴板

```js
text = "123" 

if(navigator.clipboard) {
	navigator.clipboard.writeText(text);
}
```



### 8.4 生产和开发环境配置

/ vue.config.js

```js
publicPath: process.env.NODE_ENV === 
    'production' ? './' : '/'
```





### 8.5 升级为https连接

public / index.html  

```html
<html>	
    <head>
		<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    </head>
</html>
```



踩坑记录, 加上这个meta以后 , 上传到云服务器后, 请求的资源都变成了https开头的, 但是nginx默认是http连接 , 所以访问不到



### 8.6 回到顶部组件

```vue
<!--    锚点-->
<div id="head"></div>

<!--    按钮-->
<el-button @click="gohead('#head')" >回到顶部</el-button>

<!--    js-->
const gohead = (id)=>{
    console.log("回到顶部")
    document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
	});
}
```





### 8.7 路由过渡动画

-   路由视图

    ```vue
    <router-view v-slot="{ Component }">
    	<transition :name="transName" mode="out-in">
    		<component :is="Component" />
    	</transition>
    </router-view>
    ```




-   过渡模式 mode

default：淡入和淡出过渡同时发生

in-out：新元素首先淡入。 然后当前元素淡出。

out-in：当前元素先淡出。 然后新元素开始淡入。



-   过渡周期

`v-enter-from` / `v-leave-from`  过渡的初始状态，过度开始后将其删除

`v-enter-active` / `v-leave-active`  过渡的激活状态

`v-enter-to` / `v-leave-to`  过渡的结束状态





1.   始终向右滑动淡出

动画样式

```css
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-to {
  position: absolute;
  left: 100%;
}

.fade-leave-from {
  position: absolute;
  left: 0;
}
```



 

2.   上下压缩动画



3.   根据index值不同不同方向滑动

添加路由元信息

```js
  {
    path:'/app', 
    name:"views",  
    component: views, 
    meta:{ index: 0 },
  },
  {
    path: '/choiceAddress', 
    name: 'choiceAddress',  
    component: addrespage,
    meta:{ index:  1 },
  },
```



监听 route

```js
// 类名
let silderName = ref("slide-left")

//旧路由
let oldroute = ref();
oldroute.value = route.meta.index;


watch(route,(to,from)=>{
      console.log("当前路由",route.meta.index)
      console.log("旧路由",oldroute.value)

      //判断为前进、还是后退，同时更改类名
      if(route.meta.index < oldroute.value){
        silderName.value = 'slide-left';
      }else{
        silderName.value = 'slide-right';
      }

      //更新旧路由
      oldroute.value = route.meta.index;
    })
```



样式

```css
.slide-left-enter-active, .slide-right-enter-active{
  transition: all .5s;
}

.slide-left-enter-from, .slide-left-leave-to {
  transform: translateX(-100vw);
}

.slide-right-enter-from, .slide-right-leave-to{
  transform: translateX(100vw);
}
```







### 8.8 网页换肤

1.换肤组件

```vue
<template>
  <el-button type="primary" @click="changeTheme('white')">
    白天主题</el-button>
 
  <el-button type="primary" @click="changeTheme('dark')">
    黑夜主题</el-button>
</template>

<script>
export default {    
  setup(props, content) {
    //获取原型对象    
    const { proxy } = getCurrentInstance(); 
    
    //点击事件
	const changeTheme = (num)=> {
      localStorage.setItem('themeColor',num);
      proxy.$resetSetItem('themeColor',num);
    }
    
    return {
      changeTheme
    }
  }
}    
</script>    
    
```



2.main.js

```js
//改变皮肤函数 
const resetSetItem  = (key, newVal) => {
  if (key === 'themeColor') {
  // 创建一个StorageEvent事件
  var newStorageEvent = document.createEvent('StorageEvent');
  const storage = {
    setItem: function (k, val) {
      sessionStorage.setItem(k, val);
      // 初始化创建的事件
	  newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);
		// 派发对象
	  window.dispatchEvent(newStorageEvent)
				}
			}
			return storage.setItem(key, newVal);
		}
	};

//把函数挂载app对象上
app.config.globalProperties.$resetSetItem  = resetSetItem ;

```



3.index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script>
      var coverSupport = 'CSS' in window && typeof CSS.supports === 'function' && (CSS.supports('top: env(a)') ||
        CSS.supports('top: constant(a)'))
      document.write(
        '<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' +
        (coverSupport ? ', viewport-fit=cover' : '') + '" />')
    </script>
    <title></title>
 
     <!--首先引入默认的皮肤样式-->
      <link rel="stylesheet" href="./src/static/theme/dark.scss">
  </head>

  <body>

    <div id="app"><!--app-html-->
    </div>
    <script type="module" src="/src/main.js"></script>
  </body>
  <style>

  </style>
</html>



<!--主题变换第三步, -->
<script>
    //在js添加默认引入的dark.css,
    // 如果不引入，ivew自带的样式会覆盖在html中引入的dark.css,所以需要在js重新引入，
    // 用来覆盖ivew的默认样式
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "./src/static/theme/dark.css";
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
    //监听sessionStorage切换主题
    window.addEventListener('setItem', () => {
        var themeColor = sessionStorage.getItem('themeColor');
        let url = "./src/static/theme/" + themeColor + ".scss"
        changeStyles(url);
    })

    function changeStyles(url) {
        var links = document.getElementsByTagName("link")
        console.log(links)
        //替换之前引入的css
        if (links.length != 0) {
            for (var i = 0; i < links.length; i++) {
                // links[i].parentNode.removeChild(links[i]);
                links[i].href = url
            }
        }
        var links = document.getElementsByTagName("link")
        //console.log(links)

    }

</script>
```



4.创建主题scss文件

```scss
// src/static/theme/dark.scss
view {
  background-color: red;
}
```



```scss
// src/static/theme/white.scss
view {
  background-color: green;
}
```







### 8.9 全局挂载函数

src/tools/tools.js

```js
//产品矩阵的路由跳转按钮
import router from "@/router";

export const routeClick = (url)=> {
  url = url + ""
  //点击立即咨询
  if(url.search("http") !== -1){
    window.open(url);
  }else{
    //点击了解更多按钮
    router.push(url)
  }
}
```



main.js

```js
import {routeClick} from './tools/tools.js'
app.config.globalProperties.$routeClick = routeClick;
```



组件中使用

```js
<el-button @click="routeClick('https://baidu.com')"
>免费体验</el-button>

import {getCurrentInstance} from "vue";

setup(){
 	const { proxy } = getCurrentInstance();//关键代码
    const routeClick = proxy.$routeClick;//关键代码
    return {
      routeClick
    }
}
```



### 8.10 图片压缩



安装依赖

```
cnpm install imagemin-pngquant --save-dev 
cnpm install image-webpack-loader --save-dev 
cnpm install compression-webpack-plugin --save-dev
cnpm install autoprefixer -S  
cnpm install @popperjs/core -S
```



vue.config.js

```js
chainWebpack: config => {

    //压缩图片方法
    // 解决ie11兼容ES6
    // config.entry('main').add('babel-polyfill')
    // 开启图片压缩
    config.module.rule('images')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({ bypassOnDebug: true })
    // 开启js、css压缩
    if (process.env.NODE_ENV === 'development') {
      config.plugin('compressionPlugin')
          .use(new CompressionPlugin({
            test:/\.js$|\.html$|.\css/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false // 不删除源文件
          }))
    }
},
transpileDependencies: [
    'biyi-admin', // 指定对第三方依赖包进行babel-polyfill处理
]
  
```



### 8.11 滚动事件简单版

```js
//当滚动到指定距离后触发改变
$(window).scroll(function(){
	let srcollTop = $(window).scrollTop();
	if(srcollTop < 250){
		$("#affect").css("display","none")
	}else{
		$("#affect").css("display","")
	}
})
```



### 8.12 滚动弹幕



### 8.13 多语言切换



### 8.14 3d可视化
