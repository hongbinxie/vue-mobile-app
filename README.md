# 简介

## 1.项目描述

1. 该项目初设定为一个简单的移动端 Vue（SPA）项目，请求的数据是mock的
2. 使用了Vue2+Vue Router+Vuex，搭配了一些第三方库、Vue 插件来进行实现

## 2.项目运行环境

1. 安装[Node](http://nodejs.cn/download/)，点击链接进入官网安装

   ​	ps：该项目不需要用到Node搭建后台，但我们需要用到Node附带安装的集中包管理工具NPM，当然您也可以使用yarn等同类工具替代

   ​	建议：安装后，使用淘宝镜像CNPM来替代NPM（因为NPM是从国外服务器下载插件，受网络影响大）

   ```
   npm install -g cnpm --registry=https://registry.npm.taobao.org
   ```

2. 全局安装Vue CLI

   ```
   cnpm i -g @vue/cli
   ```

3. 创建vue项目

   ```
   vue create vue-mobile-app
   ```

4. 启动CLI服务

   ```
   cd vue-mobile-app
   npm run serve
   ```

## 3.当前的主要目录结构

为了方便操作，我是如下创建的：

```
├───public.....................项目根目录
├───src........................项目源码目录
	│  	App.vue................根组件 
   	│  	main.js................项目全局配置文件
   	│  	route.js...............路由配置文件
   	│  	store.js...............Vuex状态管理配置文件
    ├───assets.................资源目录		
    │   ├───css
    │   ├───font
    │   ├───img
    │   └───js
    └───components.............组件目录
        ├───home...............首页目录
        │   	Home.vue.......首页入口文件
        │   	Banner.vue.....以下是首页各模块组件，就不细说了	 
        │    	Icons.vue
        │   	Tabs.vue
        │   	Scroll.vue
        │   	Swiper.vue
        │   	Spike.vue
        │   	Like.vue
        │   	Footer.vue
        └───city...............城市列表页目录
        │   	City.vue.......城市列表页入口文件	   
        │   	Header.vue
        │		List.vue
        └───details............详情页目录
        │		Details.vue.......城市列表页入口文件	   
        │   	Header.vue
        └───	Banner.vue						
```

## 4.Vue 插件或第三方库

1. 使用 vue-router 开发单页面应用

2. 使用 vuex 管理应用组件状态

3. 使用 animate 实现页面动画效果

4. 使用 swiper 实现移动端触摸滑动效果

5. 使用 axios 实现请求数据

6. 使用 fastClick 解决click事件在移动端300ms延迟的问题

   