### 7.1 项目简介 

一个商城app





### 7.2 相关技术栈

uniapp vue3 springboot 





### 7.3 前端页面介绍

-   商城app

首页页面、分类页面、购物车页面、个人中心页面。



-   平台oa管理系统

首页

员工管理

任务管理

考勤管理

文件改日

消息列表

部门管理

会议管理

审批管理

角色分配

店铺管理

审核管理





-   店铺后台管理系统

商品管理

活动管理

客服管理







### 7.4 后台系统介绍

登录注册功能





### 7.5 数据库设计

- 商品表

id 商品主键

name 名称

简介

price 原价

折扣

好评率    

分类

品牌

库存

销量

缩略图片链接

详情图片链接列表

isstatus 状态

isdelete 逻辑删除



- 评论表

id 评论主键

goodid 商品id

userid 用户id

内容

时间

评分

isstatus 状态

isdelete 逻辑删除



- 用户表

id 主键

name 昵称

year 年龄

phone 手机号

createtime 创建时间

viptime 会员到期时间

isstatus 状态

收货地址

总消费金额



isdelete 逻辑删除





- 权限





- 角色






- 订单表

id 主键订单号

goodid 商品信息

userid 用户信息

实付款

createtime 创建时间

isstatus 状态

isdelete 逻辑删除



-   评论



-   收藏





### 7.6 项目难点

