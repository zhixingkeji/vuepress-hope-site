

## 第1章 ReactNative简介

### 1.1  简介

React Native是Facebook在React.js推出的一个用于开发Android和iOS App的一个框架，主要编程语言是JavaScript，UI使用JSX 基于JavaScript，可以用简洁的语法高效绘制DOM，进而构建“可预期的”、“声明式的”Web用户界面的UI框架（库）。

React并不是一套MVC框架，它专注于MVC中View层的构建，要想实现完整的MVC 架构，还需要Model 和Controller 的结构，比如伴随React推出的Flux架构，还有后续出现的Redux、Mobx等。



#### 1.2 架构原理

旧架构 native  → bridge → js 

新架构 ative → jsi → js



通过 jsi 可以让 js直接调用 native 模块, 实现同步操作, 无需再序列化反序列化

native各个模块分离出核心依赖, 成为社区项目



## 第2章 ReactNative基础

### 2.1 开发环境搭建

安装node环境 cnpm yarn

安装jdk11环境 

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



安装插件

```
es7/React/redux/react-native/snippets

```





### 2.2 创建项目

````
react-native init myproject
cd myproject
yarn android
````



### 2.3 基础语法

```jsx
//判断平台
if(Platform.OS === 'android') {
	alert("当前是安卓应用")
} else if(Platform.OS === 'ios') {
	alert("当前是ios应用")
}
```



### 2.4 stylesheet

没有继承性

名称采用小驼峰

尺寸没有单位

特殊样式名



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
  red: {
    color: "#e33"
  },
  fontLarge: {
    fontSize: 40
  }
})
```



### 2.5 flexbox

概念 : container item main-axis cross-axis

默认主轴方向 : column

主轴上的对齐方式 : justifyContent

交叉轴的对齐方式 : alignItems

在主轴上的比例 : flex





## 第3章 组件和api

### 3.1 核心组件

```
View  视图
Text  文本
Alert  提示框
Button  按钮
Switch  开关
StatusBar  状态栏
ActivityIndicator  加载指示器
Image  图片
TextInput  输入框
Touchable  触碰
ScrollView  滚动视图
SafeAreaView  自动适应刘海屏
SectionList  分组列表
FlatList	高性能列表
Animated	动画组件
```



Alert  提示框
Button  按钮

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



Switch  开关
StatusBar  状态栏

```jsx
//隐藏手机状态栏
<StatusBar
  hidden={true}
  />

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



ActivityIndicator  加载指示器

```jsx
<ActivityIndicator
  color="blue"
  size={'large'}
  
  // size={30} 数字指定大小只对安卓有效
  />
```



Image  图片

```jsx
<Image
  style={[styles.Item1]}
  // 第1种 本地路径
  source={require("./images/2.jpg")}
  
   // 第2种 本地路径
  source={{
    uri: 'https://reactive.dev/img/tiny_logo.png'
  }}
  
   // 第3种 base64
   source={{
    uri: "data:image/png;base64,asd;asda;ajsdkjsal;kdjllakd=="
  }}
  />
```



TextInput  输入框

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



Touchable  触碰

```jsx
// TouchableHighlight 触碰后高亮
<TouchableHighlight></TouchableHighlight>

// TouchableOpacoty  触碰后,模糊显示
<TouchableOpacoty></TouchableOpacoty>

// TouchableWithoutFeedback  触碰后 无任何响应
<TouchableWithoutFeedback></TouchableWithoutFeedback>
```



ScrollView  滚动视图

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



SafeAreaView  自动适应刘海屏

```jsx
<SafeAreaView></SafeAreaView>
```



SectionList  分组列表

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



FlatList	高性能列表

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



Animated	动画组件

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



### 3.2 第三方组件

```
Webview  内置浏览器
Picker  下拉框
Swiper  轮播效果
AyncStorage  持久化存储系统
Geolocation  获取定位信息
Camera  调用摄像头
ImagePicker
```



WebView 内置浏览器

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

 

Picker  下拉框

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



Swiper  轮播效果

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



AsyncStorage  持久化存储系统

```jsx
//安装
yarn add @react-native-async-storage/async-storage

//修改配置

//语法
const storeData = async (value) =>{
	try {
		await AsyncStorage.setItem("@storage_Key",value)
	}catch(e) {
	
	}
}
```



Geolocation  获取定位信息

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





Camera  调用摄像头

```jsx
//安装
npm install --save react-native-camera 

//配置 android/app/src/main/AndroidManifest.xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />

//配置 android/app/build.gradle
android {
  ...
  defaultConfig {
    ...
    missingDimensionStrategy 'react-native-camera','general'
  }
}

//使用
<RNCamera
  ref={ref => {
    this.camera = ref
  }}
></RNCamera>
```



ImagePicker

 ```jsx
//安装
yarn add react-native-image-picker

//配置
同相机配置

//使用

 ```



### 3.3 自定义组件

```

```







## 第4章 路由和导航

### 4.1 简介





### 4.2 基础组件

```
//安装
yarn add @react-navigation/native
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

//ios下链接
npx pod-install ios

//安卓 rn>6 后自动链接

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



### 4.5 图标库

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







## 第5章 项目实战













