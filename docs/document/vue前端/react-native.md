

## 第1章 ReactNative简介

### 1.1  简介

React Native是Facebook在React.js推出的一个用于开发Android和iOS App的一个框架，主要编程语言是JavaScript，UI使用JSX 基于JavaScript，可以用简洁的语法高效绘制DOM，进而构建“可预期的”、“声明式的”Web用户界面的UI框架（库）。

React并不是一套MVC框架，它专注于MVC中View层的构建，要想实现完整的MVC 架构，还需要Model 和Controller 的结构，比如伴随React推出的Flux架构，还有后续出现的Redux、Mobx等。



### 1.2 架构原理

旧架构 native  → bridge → js 

新架构 ative → jsi → js



通过 jsi 可以让 js直接调用 native 模块, 实现同步操作, 无需再序列化反序列化

native各个模块分离出核心依赖, 成为社区项目





## 第2章 ReactNative基础

### 2.1 开发环境搭建

安装node环境  yarn yrm

```
// npm 版
npm install nrm -g
nrm use taobao

// yarn 版
npm install yrm -g
yrm use taobao
```





安装 jdk11 以上环境 必须

安装AndroidStudio 和 android12s



配置环境变量

```
ANDROID_HOME
C:\Users\19735\AppData\Local\Android\Sdk
```



配置path

```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
%ANDROID_HOME%\tools\bin
%ANDROID_HOME%\tools
```



搭建ios环境

```
brew install watchman
brew install cocoapods
Xcode
```



安装cscode插件

```
es7/React/redux/react-native/snippets
```





### 2.2 创建项目

```
npx react-native init aswpro
```



注意 最新版本 如果报错 需要卸载全局安装的 react-native-cli 

```
npm uninstall -g react-native-cli
```





### 2.3 基础语法

父传子

```jsx
import React from 'react';
import { Text, View } from 'react-native';

const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
}

export default Cafe;
```



state

```jsx
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
       I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  );
}



export default Cat;
```







### 2.4 stylesheet

没有继承性

名称采用小驼峰

尺寸没有单位

特殊样式名



行内写法

```js
 <Text style={{fontSize:50}}>你好</Text>
```



变量写法

```jsx
import { StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
    	<View style={{fontSize: 30}}>
      	<Text style={[styles.red , styles.fontLarge]}>hello rn</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  sectionContainer: {
    color: "#e33"
  },
  fontLarge: {
    fontSize: 40
  }
})
```



引入写法

```js
import { styles } from "./global.js";
```

```js
import { StyleSheet } from "react-native";

 export const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    }
});
```



### 2.5 平台判断

在js里判断

```jsx
import { Platform, StyleSheet } from 'react-native';

if(Platform.OS === 'android') {
	alert("当前是安卓应用")
} else if(Platform.OS === 'ios') {
	alert("当前是ios应用")
}
```



在css里判断

```jsx
const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100
});
```



select 选择

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'blue'
      }
    })
  }
});
```



特定拓展名 框架会自动引入

```jsx
BigButton.ios.js
BigButton.android.js

import BigButton from './BigButton';
```



### 2.6 动画

```jsx
import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // 透明度初始值设为0

  React.useEffect(() => {
    Animated.timing(                  // 随时间变化而执行动画
      fadeAnim,                       // 动画中的变量值
      {
        toValue: 1,                   // 透明度最终变为1，即完全不透明
        duration: 10000,              // 让动画持续一段时间
      }
    ).start();                        // 开始执行动画
  }, [fadeAnim])

  return (
    <Animated.View                 // 使用专门的可动画化的View组件
      style={{
        ...props.style,
        opacity: fadeAnim,         // 将透明度绑定到动画变量值
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// 然后你就可以在组件中像使用`View`那样去使用`FadeInView`了
export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
    </View>
  )
}
```



### 2.7 状态栏

```jsx
import React, { useState } from "react";
import { Button, Text, StyleSheet, StatusBar, View } from "react-native";

import Constants from "expo-constants";

const App = () => {
  const styleTypes = ['default','dark-content', 'light-content'];
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar);
  };

  const changeStyleStatusBar = () => {
    const styleId = styleTypes.indexOf(styleStatusBar) + 1;

    if(styleId === styleTypes.length){
      return setStyleStatusBar(styleTypes[0]);
    }
    return setStyleStatusBar(styleTypes[styleId]);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>StatusBar Style: {styleStatusBar}</Text>
        <Text style={styles.textStyle}>StatusBar Visibility: {!visibleStatusBar ? 'Visible': 'Hidden'}</Text>
      </View>
      <StatusBar backgroundColor="blue" barStyle={styleStatusBar} />
      <View>
        <StatusBar hidden={visibleStatusBar} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Toggle StatusBar" onPress={() => changeVisibilityStatusBar()} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Change StatusBar Style" onPress={() => changeStyleStatusBar()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ECF0F1',
    padding: 8
  },
  buttonContainer:{
    padding: 10
  },
  textStyle:{
    textAlign: 'center'
  }
});

export default App;
```





## 第3章 内置组件

### 3.1 View 视图

### 3.2 Text 文本

### 3.3 Alert 提示框

### 3.4 Button 按钮

```jsx
createTwoButtonAlert = () => {
  Alert.alert(
  	"警告标题",
    "警告内容",
    // 按钮组
    [
      {
        text: "取消", 
        onPress: ()=> {
        	console.log('cancel'),
      	},
         style: 'cancel'
      },
      {
        text: "确定", 
        onPress: ()=> {
        	console.log('OK'),
      	}
        style: 'default'
      }
    ]
  )
}

<Button
  title="两个按钮"
  onPress={this.createTwoButtonAlert}
  color={'green'}
/>
```



### 3.5 Switch  开关

```jsx
//开关
<Switch
  //长条颜色
  trackColor={{false: 'red',true: 'green'}}
  //圆点颜色
  thumbColor={'blue'}
  //绑定值
  value={this.state.hideStatusBar}
  //值改变回调
  onValueChange={this.toggleStatusBar}
  />
```





### 3.6 StatusBar  状态栏

```jsx
//隐藏手机状态栏
<StatusBar
  hidden={true}
  />
```



### 3.7 ActivityIndicator  加载指示器

```jsx
<ActivityIndicator
  color="blue"
  size={'large'}
  
  // size={30} 数字指定大小只对安卓有效
  />
```



### 3.8 Image  图片

```jsx
<Image
  style={[styles.Item1]}
  // 第1种 本地路径
  source={require("./images/2.jpg")}
  
   // 第2种 网络路径
  source={{
    uri: 'https://reactive.dev/img/tiny_logo.png'
  }}
  
   // 第3种 base64
   source={{
    uri: "data:image/png;base64,asd;asda;ajsdkjsal;kdjllakd=="
  }}
  />

  //图片判断
const icon = this.props.active
  ? require('./my-icon-active.png')
  : require('./my-icon-inactive.png');
<Image source={icon} />;
```



### 3.9 TextInput  输入框

```jsx
<TextInput 
  placeholder="请输入"
  style={[styles.input]}
  value={this.state.username}
  
  //文字改变
  onChangeText={(val) => {
    this.setState({
      username: val
    })
  }}
 
  //密码模式
  secureTextEntry={true}
  
  //弹出数字键盘
  keyboardType='number-pad'
  
  //文本域
  multiline={true} 
  numberOfLines={5}  
  textAlignVertical="top"  //placeholder提示文字在顶部对齐
  
  //自动获取焦点
  autoFocus={true}
  />
```



### 3.10 Touchable  触碰

```jsx
// TouchableHighlight 触碰后高亮
<TouchableHighlight></TouchableHighlight>

// TouchableOpacoty  触碰后,模糊显示
<TouchableOpacoty></TouchableOpacoty>

// TouchableWithoutFeedback  触碰后 无任何响应
<TouchableWithoutFeedback></TouchableWithoutFeedback>
```



### 3.11 ScrollView  滚动视图

```jsx
<ScrollView
  style={[style.scrollView]}
  //设置样式 可以继承
  contentContainerStyle={{margin: 30}}
  //隐藏滚动条
  showsVerticalScrollIndicator={false}
  
  //设置水平滚动
  horizontal={true}
  >
	<view>长本文</view>
</ScrollView>
```



### 3.12 SafeAreaView  自动适应刘海屏

```jsx
<SafeAreaView></SafeAreaView>
```



### 3.13 SectionList  分组列表

```jsx
<SectionList
  //绑定数据
  sections={DATA}
  
  //设置key
  keyExtractor={(item,index) => item + index}
  
  //渲染项目
  renderItem={({item}) => <Item title={item} />}
  
  //渲染标题
  renderSectionHeader={({section: {title}}) => (
  	<Text>{title}</Text>
  )}
  
  //item间的分隔符
  ItemSeparatorComponent={()=> {
    return <View></View>
  }}
  
  //列表为空时展示组件
  ListEmptyComponent={()=>{
    return <Text></Text>
  }}
  
  //上拉刷新
  onEndReachedThreshold={0.1}
  onEndReached={()=>{
    alert("到底了")
  }}
  
  //下拉刷新
  refreshing={false}
  onRefresh={()=> {
    alert("下拉刷新")
  }}
  
  />

const DATA = [
  {
    title: "标题1",
    data: ["内容1","内容2","内容3"]
  },
  {
    title: "标题2",
    data: ["内容1","内容2","内容3"]
  }
]
```



### 3.14 FlatList 高性能列表

```jsx
<FlatList
  data={this.state.list}
  renderItem={this.renderItem}
  keyExtractor { item => item.id}
  
  //排列方向为垂直
  horizontal={true}
  
  //初始化滚动索引
  initialScrollIndex={1}
  
  //默认加载数据,可以用来指定首屏 懒加载
  initialNumToRender={4}
  
  //指定列数
  numColumns={1}
  
  ></FlatList>


renderItem = ({index, item}) => {
  return(
    <View></View>
  )
}
```



### 3.15 Animated 动画组件

```jsx
decay  //加速
spring  //弹跳
timing  //时间渐变

//淡入淡出效果

//扫描效果



state = {
  fadeAnim: new Animated.Value(0)
}

fadein = () => {
  Abunated.timing(this.state.fadeAnim, {
    toValue: 1, //目标值
    duration: 5000, //动画执行时间
    useNativeDriver: true //开启原生方式
  }).start(()=>{
    alert("我显示了")
  })
}


fadeout = () => {
  Abunated.timing(this.state.fadeAnim, {
    toValue: 0, //目标值
    duration: 5000, //动画执行时间
    useNativeDriver: true //开启原生方式
  }).start(()=>{
    alert("我隐藏了")
  })
}
```





### 3.16 WebView 内置浏览器

```jsx
//安装依赖
yarn add react-native-webview

//添加ios配置
cd ios
pod install

//添加安卓配置 android/gradle/gradle.properties
android.useAndroidX=true
android.enableJetifier=true


<WebView>
	source={{ uri: "http://ubfubute.red"}}
  style={{}}
</WebView>
```

 

### 3.17 Picker  下拉框

```jsx
//安装
yarn add @react-native-picker/picker

//ios配置
npx pod-install

<Picker>
	selectedValue={this.state.color}
	onValueChange={
    (itemValue, itemIndex)=>{
      
    }
  }
</Picker>
```



### 3.18 Swiper  轮播效果

不好用 有白屏效果

```jsx
//安装
yarn add react-native-swiper

//使用
<ScrollView>
<Swiper
  style={[styles.wrappper]}
  showsButtons={true}
  autoplay={true}
  >
	  <Image 
    source={require("./images/1.jpg")}
    />
  	<Image 
    source={require("./images/1.jpg")}
    />  
</  Swiper>
</ScrollView>
```



### 3.19 AsyncStorage  持久化

入门案例

```jsx
//安装
npm install @react-native-async-storage/async-storage

//引入
import AsyncStorage from '@react-native-async-storage/async-storage';

  //存储方法
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
      alert("保存成功")
    } catch (e) {
      // saving error
    }
  }

  
  //获取数据
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      alert(jsonValue)

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  // 调用
<View>
  <Button title={"存储"} onPress={()=>storeData("123")}></Button>
  <Button title={"获取"} onPress={()=>getData()}></Button>
</View>
```



封装api

```js
import AsyncStorage from '@react-native-async-storage/async-storage';


class Storage {
    //存储
    static setItem(key,value){
        return AsyncStorage.setItem(key,JSON.stringify(value))
    }
    
    //获取
    static getItem(key){
        return AsyncStorage.getItem(key).then(value => {
            if(value && value !==""){
                const jsonValue = JSON.parse(value)
                return jsonValue
            }
        }).catch(()=> null)
    }
    
    //更新
    static update(key,newValue){
        return AsyncStorage.getItem(key).then(oldValue =>{
            newValue = typeof newValue === "string" ? newValue : Object.assign({},JSON.parse(oldValue),newValue)
            return AsyncStorage.setItem(key,JSON.stringify(newValue))
        })
    }
    
    //删除指定的key
    static delete(key) {
        return AsyncStorage.removeItem(key)
    }
    
    //删除所有的key
    static clear(key) {
        return AsyncStorage.clear()
    }
}

export default Storage
```

测试

```jsx
import Storage from "../../tools/Storage"
<Button title={"清空"} onPress={()=>Storage.clear()}></Button>
```





### 3.20 Geolocation  获取定位信息

```jsx
// 安装
yarn add @react-native-community/geolocation

//安卓配置 
// android/app/src/main/AndroidManifest.xml 追加
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

import Geolocation from '@react-native-community/geolocation'  

componentDidMount(){
  
  //如果本地没有位置信息 则获取地理位置
  const location = storage.get("coords")
  if(location === undefined || location == ""){
    Geolocation.getCurrentPosition(
  	info => {
     console.log(info)
      AsyncStorage.setItem("coords",JSON.stringify(info.coords))
    },
    error => Alert.alert("报错",JSON.stringify(error)),
    {
      timeout: 20000
    })
  }
}
```





### 3.21 Camera  调用摄像头

```jsx
//安装
npm i react-native-vision-camera

//配置 android/app/src/main/AndroidManifest.xml

//相机权限
<uses-permission android:name="android.permission.CAMERA" />
//读权限
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
//写权限
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
// 录像权限
<uses-permission android:name="android.permission.RECORD_AUDIO" />


//调用
import { Camera, useCameraDevices } from "react-native-vision-camera";

function App() {
  const devices = useCameraDevices()
  const device = devices.back

  const newCameraPermission =  Camera.requestCameraPermission()
  const newMicrophonePermission =  Camera.requestMicrophonePermission()
  
  if (device == null) return <LoadingView />
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
  )
}
```



### 3.22 ImagePicker

 ```jsx
//安装
yarn add react-native-image-picker

//配置
同相机配置

//使用

 ```



### 3.23 自定义组件









## 第4章 路由和导航

### 4.1 简介





### 4.2 基础组件

```sh
//安装
yarn add @react-navigation/native react-native-reanimated react-native-gesture-handler  react-native-screens react-native-safe-area-context @react-native-masked-view/masked-view @react-navigation/bottom-tabs @react-navigation/material-top-tabs react-native-tab-view react-native-pager-view

//ios下链接
npx pod-install ios

//安卓 rn>0.6 后自动链接

// index.js 
import "react-native-gesture-handler"
import {NavigationContainer} from "@react-navigation/native"
export default functionApp(){
  return (
  	// Navigation标签包裹最外层
  	<NavigationContainer>
			...
	</NavigationContainer>
  )
}

```



### 4.3 stack 导航 

rn 中默认没有类似history对象

如果想在 rn 中跳转 需要将路由声明在 stack 中

```jsx
//安装
yarn add @react-navigation/stack

import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator(); 

<Stack.Navigator
  //配置默认加载的路由, 不填则匹配第一个路由
  initialRouteName="Home"
  //隐藏标题
  screenOptions={{headerShown: false}}
  >
  <Stack.Screen name="Home" component={HomeScreen} 
    options={{
      title: "标题",
      headerStyle: {
        backgroundColor: "tomato"
      },
      headerRight: ()=>(
        <Text>Hello</Text>
      )
    }}
    />
  <Stack.Screen name="News" component={NewsScreen} />
</Stack.Navigator>


fuction HomeScreen(prop) {
  return (
  	<View>
    	<Button onPress={()=> prop.navigation.navigate("News")}></Button>
    </View>
  )
}

fuction NewsScreen(prop) {
  return (
  	<View>
    	<Button onPress={()=> prop.navigation.navigate("Home")}></Button>
    </View>
  )
}
```



### 4.4 BottomTab 底部导航

```jsx
// 安装
yarn add @react-navigation/bottom-tabs


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator

<Tab.Navigator
	screenOptions={({route})=> ({
        tabBarIcon: ({focused, color ,size})=> {
            let iconName
            if(route.name == "Home") {
                iconName = focused ? "add-circle" : "add-circle-outline"
            }else if(route.name == "New"){
                iconName = focused ? "person" : "person-outline"
            }
            return <Iconicons
					name={"add-circle"} size={size},color={color} />
    })}
    tabBarOptions={{
    	activeTintColor: "tomato",
        inactiveTintColor: "gray"
    }}
>
	<Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
    <Tab.Screen name="News" component={NewsScreen}></Tab.Screen> 
</Tab.Navigator>
```





### 4.6 Drawer 抽屉导航

```jsx
yarn add @react-navigation/drawer
import {createDrawerNavigator} from "@react-navigation/drawer"
const Drawer = createDrawerNavigator()

function HomeScreen(prop){
    return (
    	<View>
             <Button title={"打开"} onPress={()=> prop.navigation.openDrawer()}></Button>
			<Button title={"切换"} onPress={()=> prop.navigation.toggleDrawer()}></Button>
        </View>
    )
}


<Drawer.Navigator
    drawerStyle={{
        width: 180,
        backgroundColor: "#dfb"
    }}
    //弹出位置
    drawerPosition={"right"}
    //不遮挡屏幕 整个屏幕移动
    drawerType={"slide"}
    //设置菜单项样式
    drawerContentOptions={{
        activeTintColor: "red",
            itemStyle: {
                marginVertical: 20
            }
    }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} 
          options={{
            title: "首页",
            drawerIcon: ({focused, color ,size})=> {
            	let iconName
            	if(route.name == "Home") {
                	iconName = focused ? "add-circle" : "add-circle-outline"
            	}else if(route.name == "New"){
                	iconName = focused ? "person" : "person-outline"
            	}
            		return <Iconicons
				   name={"add-circle"} size={size},color={color} />
   		   })}
        }}
          />
</Drawer.Navigator>
```





### 4.7 MaterialTopTab 拖动切换导航

```jsx
yarn add @react-natigation/material-top-tabs react-native-tab-view
import {createMaterialTopTabNavigator} from "@react-natigation/material-top-tabs"

const MTab = createMaterialTopTabNavigator()

<MTab.Navigator
	tabStyle: {
        borderWidth: 1,
        borderColor: "red"
    },
    labelStyle: {
        fontSize: 20
    },
    
>
    <MTab.Screen name="O1" component={O1} options={{
        title: "待付款"
    	tabBarIcon: ({focused, color ,size})=> {
            let iconName
            if(route.name == "Home") {
                iconName = focused ? "add-circle" : "add-circle-outline"
            }else if(route.name == "New"){
                iconName = focused ? "person" : "person-outline"
            }
            return <Iconicons
					name={"add-circle"} size={size},color={color} />
  			  })}
        	tabBarOptions={{
    			activeTintColor: "tomato",
       		 inactiveTintColor: "gray"
        	}}
    }}></MTab.Screen>
      <MTab.Screen name="O2" component={O1} options={{title: "待发货"}}></MTab.Screen>
	  <MTab.Screen name="O3" component={O1} options={{title: "待收货"}}></MTab.Screen>
      <MTab.Screen name="O3" component={O1} options={{title: "待评价"}}></MTab.Screen>
</MTab.Navigator>
```





### 4.8 路由嵌套

```jsx
fuction Home() {
    return (
        <Tab.Navigator>
        	<Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Message" component={Message} />
        </Tab.Navigator>
    )
}

fuction App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            	<Stack.Screen name="Home" component={Home} />
            	<Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
```







### 4.9 路由传参

```jsx
//传递参数
navigation.navigate("路由名称",{
    other: 123, 
    itemID: 44
})

//接受参数
const { itemID, other } = route.params
```



### 4.10 路由鉴权

```
```





## 第5章 常用库

### 5.1 element-ui

element 的移动端 ui

```js
yarn add @rneui/themed @rneui/base
yarn add react-native-safe-area-context

npm install react-native-vector-icons
npx react-native link react-native-vector-icons


// 使用
import { Button } from '@rneui/themed';

```



### 5.2 Ionicons图标库

```jsx
//安装
npm install --save react-native-vector-icons

//链接 android/app/build.gradle 追加
apply from "../../node_modules/react-native-vector-icons/fonts.gradle"

//引入
import Iconicons from "react-native-vector-icons/Ionicons"

<Iconicons
	name={"add-circle"} size={size},color={color}
></Iconicons>

```



### 5.3 轮播图

https://github.com/race604/react-native-viewpager

https://github.com/FuYaoDe/react-native-app-intro

https://github.com/appintheair/react-native-looped-carousel



### 5.4 状态管理 redux 

安装

```js
npm install redux react-redux redux-thunk --save
```



redux/store.js

```js
import {createStore,applyMiddleware} from "redux"
import reducers from "./reducers"
import redixThunk from "redux-thunk"

const store = createStore( reducers, applyMiddleware(redixThunk) )
export default store
```



redux/reducers/index.js

```js
import { combineReducers } from "redux"
import Counter from "./Counter"
//import User from "./User"

export default combineReducers ({
    Counter,
    //User
}) 
```



redux/reducers/Counter.js

```js
import actionTypes from "../action/actionType"
const initState = {
    num: 1
}

export default (state = initState,action) => {
    switch(action.type){
        case actionTypes.COUNTER_INCREMENT:
            return {
                ...state,
                num: state.num + action.payload
            }
            
        case actionTypes.COUNTER_INCREMENT:
            return {
                ...state,
                num: state.num - action.payload
            }
        default:
            return state
    }
}
```



redux/actions/actionType.js

```js
export default {
    COUNTER_INCREMENT: "COUNTER_INCREMENT",
    COUNTER_DECREMENT: "COUNTER_DECREMENT"
}
```



redux/actions/Counter.js

```js
import actionTypes from "./actionTypes"

//递增
export const increment = (value) => {
    return {
        type: actionTypes.COUNTER_INCREMENT,
        payload: value
    }
}
//递减
export const decrement = (value) => {
    return {
        type: actionTypes.COUNTER_DECREMENT,
        payload: value
    }
}
```



App.js

```jsx
import {Provider as StoreProvider} from "react-redux"
import store from "./src/redux/store"

<StoreProvider store={store}>
	<NavigationContainer></NavigationContainer>    
</StoreProvider>
```



Counter.jsx

```jsx
import {connect} from "react-redux"
import {increment,decrement} from "../../redux/action/Counter"

const mapStateToProps = state => {
    return {
        num: state.Counter.num
    }
}

const Counter = ()=>{
    return(
    	<View>
            <Text>{props.num}</Text>
            <Button title={"+"} onPress={()=>{props.increment(1)}}></Button>
            <Button title={"-"} onPress={()=>{props.decrement(1)}}></Button>
        </View>
    )
}

export default connect(mapStateToProps,{increment,decrement})(Counter)
```





### 5.5 线性渐变组件 



### 5.6 其他

自动管理Timer组件 https://github.com/reactjs/react-timer-mixin

点击图片放大缩小 https://github.com/ascoders/react-native-image-viewer

动画 https://github.com/oblador/react-native-animatable

轮播 https://github.com/nick/react-native-carousel

音视频播放react-native-video https://github.com/react-native-community/react-native-video

持久化存储react-native-storage https://github.com/sunnylqm/react-native-storage

地图 https://github.com/lelandrichardson/react-native-maps

二维码 https://github.com/ideacreation/react-native-barcodescanner

扫描二维码 https://github.com/lazaronixon/react-native-qrcode-reader

加密 https://www.npmjs.com/package/crypto-js

国际化 https://github.com/joshswan/react-native-globalize

图片和base64互转 https://github.com/xfumihiro/react-native-image-to-base64

判断横竖屏 https://github.com/yamill/react-native-orientation

app 引导页 https://github.com/fuyaode/react-native-app-intro

手势解锁密码 https://link.jianshu.com/?t=https://github.com/spikef/react-native-gesture-password









## 第?章 













