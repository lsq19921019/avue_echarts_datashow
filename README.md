# 数据大屏解决方案

## 介绍
数据大屏解决方案采用vue-cli项目编写，可以完美嵌套与任何项目，此项目只是大屏的解决方案，如果想要用于生产或更多场景的支持需要自己根据情况二次开发。  

## 2种数据源
- 在线api（本项目采用了mock拦截方式模拟，具体文件/mock/index.js）
- 静态数据
- ...

## 20+常用组件
- 图表
  - 柱状图
  - 折线图
  - 饼图
  - 象形图
  - 雷达图
  - 散点图
  - 漏斗图
  - 地图
- 文字
  - 文本框
  - 跑马灯
  - 超链接
  - 实时时间
- 媒体
  - 图片
  - 图片框
  - 轮播图
  - iframe
  - video
- 指标
  - 翻牌器
  - 环形图
  - 进度条
  - 仪表盘
  - 字符云
- 表格
  - 选项卡
  - 表格
- ...

## 自定义组件
- 组件配置
- /src/components/test/index
- /src/components/test/option
- 添加组件
- /src/option/base.js
- /src/option/components.js

## 其他例子
- [数据格式化例子](https://data.avuejs.com/build/16)
- [选项卡例子](https://data.avuejs.com/build/18)
- [地图事件例子](https://data.avuejs.com/build/19)

## 核心方法
### 提示事件
>如果数据移动到图表上需要展示的数据个性化定制（可以添加html标签和样式）  

```
//name 移动上去的当前数据名字
//data 接口返回的数据

(name,data) => {
  return 返回需要展示的文本
}
```
### 数据处理
>如果接口返回的数据格式和组件规定的格式不一致，数据处理方法去处理加工数据  

```
//data 接口返回的数据

(data) => {
  return //这里处理成标准的数据格式,详情参考下面附录1
}
```
### 点击事件
>图表的点击事件

```
//name  点击的当前数据名字
//type  点击的当前数据类型
//value 点击的当前数据值
//data  接口返回的数据

({name,type,value,data}) => {
  //做一些点击的逻辑
}
```
### 标题事件
>组件顶部显示的文字(如柱状图顶部)

```
//name  点击的当前数据名字
//data  接口返回的数据

({name,data}) => {
 return 返回要展示的数据
}
```

## 通用属性
```
{
  name:'组件名称',
  title:'组件别名',
  icon:'组件图标',
  left:'组件x位置',
  top:'组件y位置',
  display:'组件隐藏',
  dataType:'数据请求格式| 0-静态数据 | 1-动态数据',
  dataMethod:'数据请求方式| get | post,
  url:'动态数据的请求地址',
  time:'数据的刷新间隔',
  //组件的配置
  component:{ 
    width:'组件的宽度',
    height:'组件的高度',
    name:'加载组件名',
    prop:'加载组件的类型',
  },
  //属性配置
  option:{ 
      //每个组件的独立属性
  }
}
```
## 技术栈
- vue //底层核心包  
- axios //发送ajax请求数据的  
- element-ui //底层ui支持包  
- echart //底层的图表支持包  
- echarts-wordcloud //字浮云支持包  
- avue //大屏组件支持包  
- swiper //滑动和轮播支持包  
- Sortable和vuedraggable // 图拽支持包  

## 附录1
### 柱状图
>数据格式

```
...
{
  "categories": [
    "苹果",
  ],
  "series": [{
    "name": "手机品牌",
    "data": [
      1000879,
    ]
  }]
}
...
```
### 折线图
>数据格式

```
...
{
  "categories": [
    "苹果",
  ],
  "series": [{
    "name": "手机品牌",
    "data": [
      1000879,
    ]
  }]
}
...
```
### 饼图
>数据格式

```
...
[{
    "name": "PC",
    "value": 97,
    "url": "http://www.baidu.com"
}]
...
```
### 象型图
>数据格式

```
...
{
  "categories": [
    "苹果",
  ],
  "series": [{
    "name": "手机品牌",
    "data": [
      1000879,
    ]
  }]
}
...
```
### 雷达图
>数据格式

```
...
{
  indicator: [{
    name: '销售',
    max: 6500
  }],
  series: [{
    data: [{
      value: [4300, 10000, 28000, 35000, 50000, 19000],
      name: '预算分配（Allocated Budget）'
    }]
  }]
}
...
```
### 散点图
>数据格式

```
...
[{
  data: [
    [1, 8.04],
    [2, 6.95]
]},
{
  data: [
    [1, 4.04],
    [2, 3.95]
  ]
}]
...
```
### 漏斗图
>数据格式

```
...
[{
    value: 335,
    name: '直接访问'
  },
  {
    value: 310,
    name: '邮件营销'
  },
  {
    value: 234,
    name: '联盟广告'
}]
...
```
### 轮播图
>数据格式

```
...
[{
    value: 图片地址1,
},
{
  value: 图片地址2,
}]
...
```

### 地图
>数据格式

```
...
[
    "name": "测试坐标1",
    "value": 1,
    "lng": 118.30078125,
    "lat": 36.91915611148194,
    "zoom": 1
  },
  {
    "name": "测试坐标2",
    "value": 1,
    "lng": 112.21435546875,
    "lat": 37.965854128749434,
    "zoom": 1
  }
]
...
```

## 项目部署

```
//nginx为例子
location /{
    root /data/avue/avue-data;
    index index.html;
    error_page 404 /index.html; //根据vue路由特性，这句一定要配置，否则会出现404问题
}  
```
