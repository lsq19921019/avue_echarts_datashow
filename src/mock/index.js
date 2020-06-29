import Mock from 'mockjs'
import { getResult } from './utils.js'
//柱状图
Mock.mock(/\/bar/, 'get', (res) => {
  const data = {
    "categories": [
      "苹果",
      "三星",
      "小米",
      "oppo",
      "vivo"
    ],
    "series": [{
      "name": "手机品牌",
      "data": [
        1000879,
        3400879,
        2300879,
        5400879,
        3400879
      ]
    }]
  }
  return getResult(data)
})
//折线图
Mock.mock(/\/line/, 'get', () => {
  const data = {
    "categories": [
      "苹果",
      "三星",
      "小米",
      "oppo",
      "vivo"
    ],
    "series": [{
      "name": "手机品牌",
      "data": [
        1000879,
        3400879,
        2300879,
        5400879,
        3400879
      ]
    }]
  }
  return getResult(data)
})
//饼图图
Mock.mock(/\/pie/, 'get', () => {
  const data = [{
    "name": "苹果",
    "value": 1000879,
    "url": "http://www.baidu.com"
  }, {
    "name": "三星",
    "value": 3400879,
    "url": "http://www.baidu.com"
  }, {
    "name": "小米",
    "value": 2300879,
    "url": "http://www.baidu.com"
  }, {
    "name": "oppo",
    "value": 5400879,
    "url": "http://www.baidu.com"
  }, {
    "name": "大疆",
    "value": 3000,
    "url": "http://www.baidu.com"
  }, {
    "name": "抖音",
    "value": 2000,
    "url": "http://www.baidu.com"
  }]
  return getResult(data)
})
//表格1
Mock.mock(/\/table1/, 'get', () => {
  const data = [
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    }
  ]
  return getResult(data)
})
//表格2
Mock.mock(/\/table2/, 'get', () => {
  const data = [{
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }, {
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }, {
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }, {
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }, {
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }, {
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }, {
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }, {
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }]
  return getResult(data)
})
//翻牌器
Mock.mock(/\/table3/, 'get', () => {
  const data = [{
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }]
  return getResult(data)
})
//表格4
Mock.mock(/\/table4/, 'get', () => {
  const data = [{
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }]
  return getResult(data)
})

//字符云
Mock.mock(/\/wordCloud/, 'get', () => {
  const data = [{
    name: '三星',
    value: '1234'
  }, {
    name: '小米',
    value: '1234'
  }, {
    name: '华为',
    value: '1234'
  }, {
    name: 'oppo',
    value: '1234'
  }, {
    name: '抖音',
    value: '1234'
  }, {
    name: '快手',
    value: '1234'
  }, {
    name: '淘宝',
    value: '1234'
  }, {
    name: '百度',
    value: '1234'
  }, {
    name: '京东',
    value: '1234'
  }, {
    name: '天猫',
    value: '1234'
  }, {
    name: '字符1',
    value: '1234'
  }, {
    name: '字符1',
    value: '1234'
  }]
  return getResult(data)
})
//象型图
Mock.mock(/\/pictorialBar/, 'get', () => {
  const data = {
    "categories": [
      "苹果",
      "三星",
      "小米",
      "oppo",
      "vivo"
    ],
    "series": [{
      "name": "手机品牌",
      "data": [
        1000879,
        3400879,
        2300879,
        5400879,
        3400879
      ]
    }]
  }
  return getResult(data)
})
//雷达图
Mock.mock(/\/radar/, 'get', () => {
  const data = {
    indicator: [{
      name: '销售',
      max: 6500
    },
    {
      name: '管理',
      max: 16000
    },
    {
      name: '信息技术',
      max: 30000
    },
    {
      name: '客服',
      max: 38000
    },
    {
      name: '研发',
      max: 52000
    },
    {
      name: '市场',
      max: 25000
    }
    ],
    series: [{
      data: [{
        value: [4300, 10000, 28000, 35000, 50000, 19000],
        name: '预算分配（Allocated Budget）'
      },
      {
        value: [5000, 14000, 28000, 31000, 42000, 21000],
        name: '实际开销（Actual Spending）'
      }
      ]
    }]
  }
  return getResult(data)
})
//散点图
Mock.mock(/\/scatter/, 'get', () => {
  const data = [{
    "data": [
      [1, 8.04],
      [2, 6.95]
    ]
  },
  {
    "data": [
      [1, 4.04],
      [2, 3.95]
    ]
  }]
  return getResult(data)
})
//仪表盘
Mock.mock(/\/gauge/, 'get', () => {
  const data = {
    min: 1,
    max: 10,
    label: '名称',
    value: 4,
    unit: '%'
  }
  return getResult(data)
})
//轮播图
Mock.mock(/\/swiper/, 'get', () => {
  const data = [
    {
      value: 'https://img.alicdn.com/tfs/TB1v28TC8v0gK0jSZKbXXbK2FXa-1880-640.jpg',
    }, {
      value: 'https://img.alicdn.com/tfs/TB1uevcCrj1gK0jSZFuXXcrHpXa-1880-640.jpg',
    }]
  return getResult(data)
})
//漏斗图
Mock.mock(/\/funnel/, 'get', () => {
  const data = [{
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
  return getResult(data)
})

