---
title: ES语法

date: 2022-03-13 16:16:10


---





## 第1章 ES6语法

### 1.1 class 类

```js
//增加类的概念
class Person {
  
  //构造器
  constructor(brand, price) {
    this.brand = brand
    this.price = price
    
  }
  
  //静态变量 只属于该类 该类的实例上没有该属性
  static name = "手机"
  
  //成员方法
  call() {
    console.log("call")
  }
  
  //get和set方法
  get price (){
    return "价格"
  }
	
}
```



继承类

```js
class Student extends Person {
    constructor(brand,age,name){
        //如果使用了继承 必须在构造器里调用super
        //super关键字必须在构造器的最前面
      
        super(brand,age)
        this.name = name
    }
    
      //类中定义的方法都是放在类的原型对象上,供实例调用
        //如果该类中没有方法则顺着原型链向上找, 找到顶层还没有则报错
    study(){
        console.log("我很爱学习")
    }
    
}
```





### 1.2 模块化

好处: 防止命名冲突 代码复用 高维护性

```js
// 第一种暴露方式
let a = 1
let b = 2 
export {a,b}

// 第二种暴露方式
export default {
  a: 1,
  b: 2
}

// 第一种导入方式
import * from "./src/test.js"

// 第二种导入方式
import {school, teacher} from "./src/test.js" 
import {default} from "./src/test.js" 
```





### 1.3 箭头函数

箭头函数中的this是静态的, 始终指向声明该函数的所在的作用域指向的this, 如果没有this就会一直往上找, 直到找到window对象

无法使用call函数改变箭头函数的this指向

不能作为构造实例化对象

不能使用 arguements 对象

```js
const a = (params)=>{
  ...
}
```



### 1.4 函数参数默认值

```js
//如果传了age则用传入的参数, 如果传则默认为25
function foo(sex,age = 25,){
  // ...
}

let sty = foo("男")
```



### 1.5 模板字符串

```js
//解析html标签
let str = `<ul><li>沈腾</li></ul>`

//引用变量
const name = '小豪';
const str = `Your name is ${name}`;
```



### 1.6 解构赋值

```js
const {data} = obj
等于下面的写法
const a = obj.data


//多重结构赋值 + 重命名
let obj = {a: {b:{c:1}}}
let {a: {b:{c:data}}} = obj
console.log(data) // 1 
```





### 1.7 延展操作符

```js
//1.数组的合并
const a = ["一天","快乐"]
const b = ["每天","开心"]
const ab = [...a,...b]

//2.数组的克隆 (浅拷贝)
const a = [1,2,3]
const b = [...a]

//3.将伪数组转为数组
const divlist = document.querySelectAll('div')
const divArr = [...divlist]
```





### 1.8 对象属性简写

```js
const name = "张三"
let student = {
	name,   // 对象属性name:name 可以简写为 name
  
  study(){  // 对象方法study: function(){ } 可以简写
    console.log("我爱学习")  
  }
  
}
```





### 1.9 Promise

解决异步获取参数的问题 解决回调地狱 但是终极解决方案是 async await

```js
const p = new Promise(function(resolve, reject){
  fs.readFile("./resouces/未学.md",(err,data)=>{
    // 判断如果失败
    if(err) reject(err)
    
    //如果成功
    resolve(data)
  })
})

p.then(function(value){
  console.log(value.toString())
},function(reason){
  console.log("读取失败")
})
```





### 1.10 Let与Const

使用let或const定义的变量具有块级作用域域性质,在同一个代码块中不允许重复声明



### 1.11 字符串或数组方法

map filter reduce



### 1.12 rest参数

使用延展符后所有参数会放到列表里, 可以调用列表的方法

注意 rest参数要放到最后

```js
function data(a,b...args){
  console.log(a)
  console.log(b)
  console.log(args)
}

data(1,2,3,4,5)

结果: a=1, b=2, args = [ 3,4,5 ]
```



### 1.13 Symbol 新的数据类型

原始7大数据类型: undefined null string boolean number object symbol

作用: 给对象添加独一无二的属性或方法

```js
let game = {
  name: "狼人杀",
  [Symbol('say')]: function(){
    console.log("我可以发言了")
  }
}
```



### 1.14 迭代器



```js
const xiyou = ["唐僧","孙悟空","沙和尚","猪八戒"]
let iterator = xiyou[Symbol.iterator]()
console.log(iterator.next()) // {value: '唐僧', done: false}
console.log(iterator.next()) // {value: '孙悟空', done: false}
console.log(iterator.next()) // {value: '沙和尚', done: false}
console.log(iterator.next()) // {value: '猪八戒', done: false}
console.log(iterator.next()) // {value: undefined, done: true}
```





### 1.15 生成器

解决了异步任务

```js
//获取用户数据
fuction getUsers(){
  setTimeout(()=>{
    let data = "用户数据"
    iterator.next(data)
  })
}

//获取订单数据
fuction getOrders(){
  setTimeout(()=>{
    let data = "订单数据"
    iterator.next(data)
  })
}

//获取商品数据
fuction getGoods(){
  setTimeout(()=>{
    let data = "商品数据"
    iterator.next(data)
  })
}

//生成器函数
function * gen(){
  let users = yield getUsers()
  let orders = yield getOrders()
  let goods = yield getGoods()
}

//调用生成器函数
let iterator = gen()
iterator.next()
```



### 1.16 Set 集合

```js
//创建元素
let s = new Set([1,2,3,3,4])

//获取集合长度
console.log(s.size)

//添加元素
s.add(5)

//删除元素
s.delete(1)

//判断元素是否存在
console.log(s.has(3))

//清空集合
s.clear()

//实现了 iteartor接口
for (let v of s) {
  console.log(v)
}

// 实例 应用场景
let arr = [1,2,3,4,5,4,3,2,1,]
let arr2 = [4,5,6,5,6]

//1.去重
let result = [...new Set(arr)]

//2.交集
let result = [...new Set(arr)].filter(item => new Set(arr2).has(item))

//3.并集
let union = [..new Set([...arr,...arr2])]

//4.差集
let diff = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)) )
```





### 1.17 Map 数据结构

键值对, 键不限于字符串类型

```js
let m = new Map ()

size  //获取长度
set  //新增
get  //获取
has  //判断
clear  //清空
```











## 第2章 ES7语法

### 2.1  includes

```js
const books = ['西游','三国','科技']
books.includes('西游') //  如果存在则返回元素下标0
books.includes('快穿') // 如果不存在则返回-1
```



### 2.2 指数操作符

```js
console.log(2**10);   // 2的10次方等于1024
console.log(Math.pow(2,10))
```





## 第3章 ES8语法

### 3.1 async await

```js
//异步终极解决方案
async getData(){
    const res = await apiGetTableData(); // await 异步任务
    // do something    
}
```



### 3.2 Object.values

```js
Object.values({a: 1, b: 2, c: 3}); 
// [1, 2, 3]
```



### 3.3 Object.entries

```js
Object.entries({a: 1, b: 2, c: 3}); 
// [["a", 1], ["b", 2], ["c", 3]]
```



### 3.4 String.padding

```js
// 右对齐
'hello'.padStart(10); // "     hello"
// 左对齐
'hello'.padEnd(10)    //"hello     "
```



## 第4章 ES9语法

### 4.1 拓展运算符可以应用于对象



### 4.2 正则拓展

正则捕获分组

```js
const str = "abc"
const reg =  (?<txt>.*)  
// 以前使用 (.*) 捕获内容 现在可以在括号内的最前面加上?<name>, 尖括号内可以是任何名字
const result = reg.exec(str) 
console.log(result.group.txt)
//分组后的结果多了个group属性, 可以获取到用 ?<name> 声明的值
```



反向断言

```js
```



dotAll模式

```js
```









## 第5章 ES10语法

### 5.1 Object.fromEntries

```js
// 可以把二维数组转为对象 与Objedt.entries互为逆运算
const m = new Map()
m.set("name","wangle")
const result = Object.fromEntries(m)
```



### 5.2 字符串方法拓展

```js
let str = '   love   ' 
str.trimStart()  //清除左侧空白 
str.trimEnd()  //清除右侧空白
```





### 5.3 数组方法拓展

```js
flat方法 将多维数组展开 参数默认为1 即把二维数组展开成一维数组
const arr = [1,2,3,[4,5,6,[7,8]]]
arr.flat(2)  //[1,2,3,4,5,6,7,8]

flatMap方法
```





### 5.4 Symbol.description

```js
let s = Symbol("name")
console.log(s.description)  // name
```





## 第6章 ES11语法

### 6.1 私有属性

```js
class student {
  //公有属性
  name;
  
  //私有属性 外部不能直接访问
  #age;
  
  //构造器
  constructor(name,age){
    this.name = name;
    this.#age = age 
  }
  
  //提供外部访问私有属性的方法
  intro(){
    console.log(this.name)
    console.log(this.#age)
  }
}
```





### 6.2 string.matchAll





### 6.3 可选链操作符

```js
//需要达到的效果
const dbhost = config.db.host
//但是如果某个属性不存在则会报错 普通改写
const dbhost = config && config.db && config.db.host
// 使用可选操作符后
const dbhost = config?.db?.host
```





### 6.4 动态import

```js
//动态引入模块 当按钮被点击时 引入js
btn.onclick= function(){
  import('./hello.js').then(module => {
    module.helloMethods()
  })
}
```





### 6.5 Bigint类型

```js
BigInt(2) + BigInt(10000000000000)
```





### 6.6 绝对全局对象

```js
console.log(globalThis)  // 始终指向全局对象
```







## 第7章 ES12语法

### 7.1 string.replaceAll

```js
let str = '你好haha,我是haha'
str.replaceAll('haha','hehe')
// str = 你好hehe,我是hehe
```



### 7.2 逻辑赋值运算符

```js
??=    &&=    ||?

a ||= b  //等同于 a = a || b
```





### 7.3 WeakRef

获取对象的弱引用 就不会被回收掉了

```js
let ref = new WeakRef(object)
```



### 7.3 下划线分隔符

```js
let x = 23333
let x = 23_333  //只让阅读更清晰 不会编译到代码里 不会影响程序运行
```



