---
title: node基础

date: 2021-11-14 09:36:17


---

## 第1章 node 基础

### 1.1 node安装

**mac os 安装**

`brew install node`



**win10安装**

官网下载最新版安装, 不要勾选安装 `chocolate` 功能

在系统变量下添加键 `NODE_HOME`, 值为安装根目录

在Path下面新增`` %NODE_HOME%\bin`

安装cnpm  `npm install -g cnpm --registry=https://registry.npmmirror.com`





**linux安装**

```
apt-get install curl
curl -sL https://deb.nodesource.com/setup | bash -
apt-get install nodejs
apt-get install npm
```



### 1.2 常用指令



`node -v`   查看node版本

`node hello.js`   执行文件

`npm -v`  查看npm版本

`npm install express`   安装模块

`cnpm install express`   安装模块



### 1.3 nvm版本管理工具

介绍

切换node版本的工具



下载地址

https://github.com/coreybutler/nvm-windows/releases



常用指令

nvm -v  查看版本

nvm -ls  列出所有安装的版本

nvm install node  安装最新版本node

nvm list available  列出所有可安装的版本

nvm install 11.13.0  安装指定版本号的Node


nvm use 11.13.0  使用特定版本的Node


nvm uninstall 11.13.0  卸载版本号的Node

nvm on ：开启node.js版本管理

nvm off ：关闭node.js版本管理





### 1.4 pnpm

```
cnpm install pnpm -g
pnpm config get registry // 查看源
pnpm config set registry http://registry.npm.taobao.org // 切换淘宝源

pnpm install 包
pnpm i 包
pnpm add 包    // -S  默认写入dependencies
pnpm add -D    // -D devDependencies
pnpm add -g    // 全局安装
pnpm remove 包         //移除包
pnpm remove 包 --global   //移除全局包
pnpm up                //更新所有依赖项
pnpm upgrade 包        //更新包
pnpm upgrade 包 --global   //更新全局包
设置存储路径：pnpm config set store-dir /path/to/.pnpm-store

```









## 第2章 基本语法

### 2.1 回调函数

`function foo2(value, callback1, callback2) { }`

阻塞代码实例

```js
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");
```



非阻塞代码实例

```js
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");
```



### 2.2 事件循环

事件驱动程序

```js
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
 
// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}
 
// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});
 
// 触发 connection 事件 
eventEmitter.emit('connection');
 
console.log("程序执行完毕。");
```



### 2.3 模块

```js
//hello.js 
function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 
module.exports = Hello;
```

```js
//main.js
var Hello = require('./hello');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello(); 
```





## 第3章 文件系统

### 3.1 读取文件

```js
var fs = require("fs");

// 异步读取
fs.readFile('input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");
```



### 3.2 打开文件

```js
var fs = require("fs");

// 异步打开文件
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("文件打开成功！");     
});
```



### 3.3 获取文件信息

```js
var fs = require('fs');

fs.stat('/Users/liuht/code/itbilu/demo/fs.js', function (err, stats) {
    console.log(stats.isFile());         //true
    console.log(stats.isDirectory());
})
```



### 3.4 写入文件

```js
var fs = require("fs");

console.log("准备写入文件");
fs.writeFile('input.txt', '我是通 过fs.writeFile 写入文件的内容',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
   console.log("--------我是分割线-------------")
   console.log("读取写入的数据！");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString());
   });
});
```



### 3.5 删除文件

```js
var fs = require("fs");

console.log("准备删除文件！");
fs.unlink('input.txt', function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("文件删除成功！");
});
```



### 3.6 创建目录

```js
var fs = require("fs");
// tmp 目录必须存在
console.log("创建目录 /tmp/test/");
fs.mkdir("/tmp/test/",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});
```



### 3.7 读取目录

```js
var fs = require("fs");

console.log("查看 /tmp 目录");
fs.readdir("/tmp/",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});
```



### 3.8 删除目录

```js
var fs = require("fs");
// 执行前创建一个空的 /tmp/test 目录
console.log("准备删除目录 /tmp/test");
fs.rmdir("/tmp/test",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("读取 /tmp 目录");
   fs.readdir("/tmp/",function(err, files){
      if (err) {
          return console.error(err);
      }
      files.forEach( function (file){
          console.log( file );
      });
   });
});
```





## 第4章 常用内置模块

### 4.1 path

`__dirname` 指向被执行 js 文件所在目录的绝对路径



`__filename` 指向被执行 js 文件的绝对路径



`path.join()`

将多个参数值合并成一个路径

```javascript
const path = require('path')
const fs = require('fs')
path.join(__dirname, '/files/1.txt')
```



`path.basename()`

-   获取路径中的文件名(无后缀)

```javascript
const path = require('path')
const fpath = '/a/b/c/index.html'
path.basename(fpath, '.html') //输出 index
```



`extname()`

-   获取路径中文件的后缀名

```javascript
const path = require('path')
const fpath  = '/a/b/c/index.html'
path.extname(fpath) //输出 html
```



`sep`

-   返回操作系统指定的路径分割符

```javascript
const path = require('path');
console.log(path.sep);
console.log(path.win32.sep);
console.log(path.posix.sep);
```



`normalize()`

-   将非标准的路径转换成标准路径，解析像 ‘.’ ，’…’，或多个杠。

```javascript
const path = require('path');
console.log(path.normalize('./a/b/../../c'));
console.log(path.normalize('./a//b//.././c'));
```



`resolve()`

-   返回绝对路径

```javascript
const path = require('path');
path.resolve(__dirname,'./demo');
```



`isAbsolute()`

-   判断是否为绝对路径

```javascript
const path = require('path')
path.isAbsolute('E:/a')
```



`parse()`

-   解析一个路径，返回一个带有属性的对象

```javascript
const path = require('path');
path.parse('./demo/test/a/1.txt');
```



`relative()`

-   返回参数一到参数二的相对路径

```javascript
const path = require('path');
path.relative('./demo/test', './demo/test/a/1.txt');
```



### 4.2 fs



### 4.3 os



### 4.4 http 



### 4.5 url



### 4.6 events



### 4.7 QueryString



### 4.8 stream







## 第5章 常用第三方库

Danfo.js  结构化数据处理 类似pandas

electron  跨桌面端开发

jimp 图片裁剪

opencvjs 图像处理







## 第6章 express服务器