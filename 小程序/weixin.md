# 开发工具

## 开发模式

小程序模式
插件模式

## 编译模式

普通编译：显示首页
添加编译模式：控制谁当首页显示

# 小程序结构目录

## 框架

默认使用自带框架，mina，所以目录结构是mina的目录结构

## 对比

html---wxml
css---wxss
js---js
无---json,配置文件

## 目录结构

### pages

放页面wxml、wxss、js、json

#### json

用来修改单独样式，覆盖app.json，直接写样式+属性，window这种不用谢

### utils

放公用方法

### app.js

入口文件

### app.json

统一制定配置

#### pages

配置路径，配置好之后会在pages下自动生成文件夹，但是删除需要手动删除文件夹

#### window

用于设置小程序的状态栏、导航条、标题、窗口背景色。

#### tabbar

如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。

### app.wxss

全局样式

### sitemap

指定当前页面是否在微信内搜索到