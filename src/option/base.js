
//基础公共url
var baseUrl = '.'
// var baseUrl = 'http://localhost:3000'
//基础组件库
export default [{
  "label": '图表',
  "icon": 'icon-bar',
  "children": [{
    "label": '柱形图',
    "option": {
      "name": "柱状图",
      "title": "柱状图",
      "icon": 'icon-bar',
      "dataType": 1,
      "dataMethod": 'get',
      "data": {
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
      },
      "dataFormatter": "",
      "url": baseUrl + "/bar",
      "time": 5000,
      "component": {
        "width": 600,
        "height": 300,
        "name": "bar",
        "prop": "bar",
      },
      "option": {
        "gridX": 90,
        "gridY": 0,
        "gridX2": 0,
        "gridY2": 0,
        "legend": true,
        "nameColor": "#eee",
        "lineColor": "#eee",
        "xNameFontSize": 16,
        "yNameFontSize": 16,
        "labelShow": true,
        "labelShowColor": '#fff',
        "labelShowFontSize": 14,
        "labelShowFontWeight": 300,
        "yAxisInverse": false,
        "xAxisInverse": false,
        "xAxisShow": true,
        "yAxisShow": true,
        "xAxisSplitLineShow": false,
        "yAxisSplitLineShow": false,
        "barWidth": 30,
        "barRadius": 8,
        "barColor": [{
          "color1": "#83bff6",
          "color2": "#188df0",
          "postion": 90,
          "$index": 0,
          "_show": true
        }, {
          "color1": "#23B7E5",
          "color2": "#564AA3",
          "postion": 50,
          "$index": 1,
          "_show": true
        }],
        "barMinHeight": 2
      }
    }
  }, {
    "label": '折线图',
    "option": {
      "name": "折线图",
      "title": "折线图",
      "icon": 'icon-line',
      "dataType": 1,
      "dataMethod": 'get',
      "dara": {
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
      },
      "dataFormatter": "",
      "url": baseUrl + "/bar",
      "time": 5000,
      "component": {
        "width": 600,
        "height": 300,
        "name": "line",
        "prop": "line",
      },
      "option": {
        "gridX": 90,
        "gridY": 0,
        "gridX2": 0,
        "gridY2": 0,
        "nameColor": "#eee",
        "lineColor": "#eee",
        "lineWidth": 5,
        "xNameFontSize": 16,
        "yNameFontSize": 16,
        "labelShow": false,
        "labelShowFontSize": 14,
        "labelShowFontWeight": 300,
        "yAxisInverse": false,
        "xAxisInverse": false,
        "xAxisShow": true,
        "yAxisShow": true,
        "xAxisSplitLineShow": false,
        "yAxisSplitLineShow": false,
        "barWidth": 30,
        "barRadius": 8,
        "barColor": [{
          "color1": "#83bff6",
          "color2": "#188df0",
          "postion": 90,
          "$index": 0,
          "_show": true
        }, {
          "color1": "#23B7E5",
          "color2": "#564AA3",
          "postion": 50,
          "$index": 1,
          "_show": true
        }],
        "barMinHeight": 2
      }
    }
  }, {
    label: '饼图',
    option: {
      "name": "饼图",
      "title": "饼图",
      "icon": 'icon-pie',
      "dataType": 1,
      "dataMethod": 'get',
      "time": 5000,
      "url": baseUrl + "/pie",
      "data": [{
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
      }],
      "dataFormatter": "",
      "resize": false,
      "component": {
        "width": 600,
        "height": 300,
        "name": "pie",
        "prop": "pie",
      },
      "option": {
        "legend": true,
        "labelShow": true,
        "barColor": [
          {
            "color1": "#83bff6"
          },
          {
            "color1": "#23B7E5"
          },
          {
            "color1": "rgba(154, 168, 212, 1)"
          },
          {
            "color1": "#188df0"
          },
          {
            "color1": "#564AA3"
          }
        ]
      }
    }
  }, {
    label: '象形图',
    option: {
      "title": "象形图",
      "name": "象形图",
      "icon": "icon-pictorialBar",
      "dataType": 1,
      "dataMethod": 'get',
      "time": 5000,
      "url": baseUrl + "/pie",
      "data": [{
        "name": "苹果",
        "value": 1000879,
      }, {
        "name": "三星",
        "value": 3400879,
      }, {
        "name": "小米",
        "value": 2300879,
      }, {
        "name": "oppo",
        "value": 5400879,
      }, {
        "name": "大疆",
        "value": 3000,
      }, {
        "name": "抖音",
        "value": 2000,
      }],
      "dataFormatter": "",
      "component": {
        "width": 600,
        "height": 300,
        "name": "pictorialbar",
        "prop": "pictorialbar",
      },
      "option": {
        symbolSize: 30,
        split: 30,
        symbol: '/img/source/source256.png',
        fontSize: '24',
        xAxisShow: false,
        yAxisShow: true,
        color: '#4dffff',
        nameColor: '#564AA3',
        xNameFontSize: '24',
        yNameFontSize: '24',
      }
    }
  }, {
    label: '雷达图',
    option: {
      "title": "雷达图",
      "name": "雷达图",
      "icon": "icon-radar",
      "dataType": 1,
      "dataMethod": 'get',
      "time": 5000,
      "url": baseUrl + "/radar",
      "data": {
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
      },
      "dataFormatter": "",
      "component": {
        "width": 970,
        "height": 400,
        "name": "radar",
        "prop": "radar",
      },
      "option": {
        width: '100%',
        height: 600,
        titleShow: true,
        title: '各部门开销',
        subtext: '最近一个月',
        titleColor: '#666',
        tipBackgroundColor: 'rgba(50,50,50,0.7)',
        tipColor: "#fff",
        shape: 'polygon',
        radius: "75%",
        splitNumber: 4,
        radarNameColor: '#fff',
        radarNameSize: 18,
        titleFontSize: 18,
        areaOpacity: 0.3,
        legend: true,
        // labelShow: true,
        "barColor": [{
          "color1": "#564AA3",
        },
        {
          "color1": "#188df0",
        }
        ]
      },
    }
  }, {
    label: '散点图',
    option: {
      "title": "散点图",
      "name": "散点图",
      "icon": "icon-scatter",
      "dataType": 1,
      "dataMethod": 'get',
      "time": 5000,
      "url": baseUrl + "/scatter",
      "data": [{
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
      }],
      "dataFormatter": "",
      "component": {
        "width": 600,
        "height": 300,
        "name": "scatter",
        "prop": "scatter",
      },
      "option": {
        lineSize: 25,
        barColor: [{
          postion: 0.2,
          color1: '#91c7ae'
        },
        {
          postion: 0.8,
          color1: '#63869e'
        },
        {
          postion: 1,
          color1: '#c23531'
        }]
      }
    }
  }, {
    label: '漏斗图',
    option: {
      "title": "漏斗图",
      "name": "漏斗图",
      "icon": "icon-funnel",
      "dataType": 1,
      "dataMethod": 'get',
      "time": 5000,
      "url": baseUrl + "/funnel",
      "data": [{
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
      }],
      "dataFormatter": "",
      "component": {
        "width": 400,
        "height": 300,
        "name": "funnel",
        "prop": "funnel",
      },
      "option": {
        radius: true,
        "barColor": [{
          "color1": "#83bff6",
        },
        {
          "color1": "#23B7E5",
        },
        {
          "color1": "rgba(154, 168, 212, 1)",
        },
        {
          "color1": "#188df0",
        },
        {
          "color1": "#564AA3",
        }
        ]
      }
    }
  }, {
    label: '地图',
    option: {
      "name": "地图",
      "title": "地图",
      "icon": "icon-map",
      "data": [],
      "dataFormatter": "",
      "component": {
        "width": 800,
        "height": 500,
        "name": "map",
        "prop": "map",
      },
      "option": {
        "borderWidth": 1,
        "scale": 87,
        "type": 0,
        "borderColor": "#0dffff",
        "areaColor": "#061d33",
        "banner": true,
        "bannerTime": 3000,
        "fontSize": 14,
        "zoom": 0.5,
        "empAreaColor": "rgba(35, 183, 229, 0.42)",
        "empColor": "#fff",
        "color": "rgba(13, 255, 255, 1)",
      }
    },
  }, {
    label: '我的组件',
    option: {
      "name": "我的组件",
      "title": "我的组件",
      "icon": "icon-map",
      "data": [],
      "dataFormatter": "",
      "component": {
        "width": 800,
        "height": 500,
        "name": "my",
        "prop": "my",
      },
      "option": {
        "fontSize": 20,
      }
    }
  }, {
    label: '自定义组件',
    option: {
      "name": "自定义组件",
      "title": "自定义组件",
      "icon": "icon-map",
      "dataFormatter": "",
      "dataType": 0,
      "data": {
        value: '文本框'
      },
      "component": {
        "width": 800,
        "height": 500,
        "name": "test",
        "prop": "test",
      },
      "option": {
        'value':'文本框',
        "fontSize": 20,
      }
    }
  }]
}, {
  "label": '文字',
  "icon": 'icon-text',
  "children": [{
    "label": '文本框',
    "option": {
      "title": "文本框",
      "name": "文本框",
      "icon": 'icon-text',
      "dataType": 0,
      "dataFormatter": "",
      "data": {
        value: '文本框'
      },
      "component": {
        "width": 100,
        "height": 40,
        "name": "text",
        "prop": "text"
      },
      "option": {
        "textAlign": "center",
        "fontSize": 26,
        "fontWeight": "normal",
        "color": "#fff"
      },
    },
  }, {
    "label": '跑马灯',
    "option": {
      "title": "跑马灯",
      "name": "跑马灯",
      "icon": 'icon-scroll',
      "top": 0,
      "left": 0,
      "dataType": 0,
      "data": {
        value: "跑马灯"
      },
      "dataFormatter": "",
      "component": {
        "width": 100,
        "height": 50,
        "name": "text",
        "prop": "text"
      },
      "option": {
        scroll: true,
        speed: 70,
        "textAlign": "center",
        "fontSize": 26,
        "fontWeight": "normal",
        "color": "#fff"
      },
    },
  }, {
    "label": '超链接',
    "option": {
      "title": "超链接",
      "name": "超链接",
      "icon": 'icon-link',
      "top": 0,
      "left": 0,
      "data": {
        "value": "超链接"
      },
      "dataFormatter": "",
      "component": {
        "width": 100,
        "height": 50,
        "name": "text",
        "prop": "text"
      },
      "option": {
        link: true,
        linkHref: 'http://avue.top',
        linkTarget: '_self',
        "textAlign": "center",
        "fontSize": 26,
        "fontWeight": "normal",
        "color": "#fff"
      },
    },
  }, {
    "label": '实时时间',
    "option": {
      "name": "实时时间",
      "title": "实时时间",
      "icon": 'icon-datetime',
      "top": 78,
      "left": 1604,
      "component": {
        "width": 250,
        "height": 50,
        "name": "datetime",
        "prop": "datetime",
      },
      "option": {
        "format": 'yyyy-MM-dd hh:mm:ss',
        "color": "#fff",
        'textAlign': 'left',
        "fontSize": 24,
        "fontWeight": "normal"
      }
    },
  }]
}, {
  "label": '媒体',
  "icon": 'icon-img',
  "children": [{
    "label": '图片',
    "option": {
      "title": "图片",
      "name": "图片",
      "icon": 'icon-img',
      "top": 0,
      "left": 0,
      "dataType": 0,
      "data": {
        value: ''
      },
      "dataFormatter": "",
      "component": {
        "width": 140,
        "height": 140,
        "name": "img",
        "prop": "img",
      },
      "option": {
        duration: '1000',
      }
    }
  }, {
    "label": '图片框',
    "option": {
      "title": "图片框",
      "name": "图片框",
      "icon": 'icon-img',
      "top": 0,
      "left": 0,
      "component": {
        "width": 140,
        "height": 140,
        "name": "imgborder",
        "prop": "imgborder",
      },
      "option": {
        backgroundColor: 'rgba(180, 181, 198, 0.1)',
      }
    }
  }, {
    label: '轮播图',
    option: {
      "title": "轮播图",
      "name": "轮播图",
      "icon": 'icon-banner',
      "top": 0,
      "left": 0,
      "dataType": 1,
      "dataMethod": 'get',
      "time": 5000,
      "url": baseUrl + "/swiper",
      "data": [
        {
          value: 'https://img.alicdn.com/tfs/TB1v28TC8v0gK0jSZKbXXbK2FXa-1880-640.jpg',
        }, {
          value: 'https://img.alicdn.com/tfs/TB1uevcCrj1gK0jSZFuXXcrHpXa-1880-640.jpg',
        }],
      "dataFormatter": "",
      "component": {
        "width": 670,
        "height": 370,
        "name": "swiper",
        "prop": "swiper"
      },
      "option": {
        type: '',
        interval: 5000,
        opacity: 100,
        indicator: 'none'
      },
    }
  }, {
    label: 'iframe',
    option: {
      "title": "iframe",
      "name": "iframe",
      "icon": 'icon-iframe',
      "top": 0,
      "left": 0,
      "component": {
        "width": 670,
        "height": 370,
        "option": {},
        "name": "iframe",
        "prop": "iframe"
      },
      "option": {},
      "dataType": 0,
      "data": {
        value: 'https://avuejs.com'
      },
      "dataFormatter": ""
    }
  }, {
    label: 'video',
    option: {
      "title": "video",
      "name": "video",
      "icon": 'icon-video',
      "top": 0,
      "left": 0,
      "dataType": 0,
      "data": {
        value: 'http://www.w3school.com.cn/i/movie.ogg'
      },
      "option": {},
      "dataFormatter": "",
      "component": {
        "width": 670,
        "height": 370,
        "option": {},
        "name": "video",
        "prop": "video"
      },
    }
  }]
}, {
  "label": '指标',
  "icon": 'icon-flop',
  "children": [{
    "label": '翻牌器',
    "option": {
      "title": "翻牌器",
      "name": "翻牌器",
      "icon": 'icon-flop',
      "top": 0,
      "left": 0,
      "dataType": 0,
      "data": {
        value: '12345'
      },
      "dataFormatter": "",
      "component": {
        "width": 300,
        "height": 100,
        "name": "flop",
        "prop": "flop",
      },
      "option": {
        "type": "img",
        "suffixText": "",
        "suffixTextAlign": "",
        "suffixSplit": '',
        "suffixColor": "",
        "suffixFontSize": '',
        "borderColor": "#fff",
        "borderWidth": 3,
        "backgroundBorder": "/img/border/border1.png",
        "fontSize": 32,
        "fontWeight": "normal",
        "splitx": 0,
        "splity": 0,
        "backgroundColor": "",
        "color": "#fff"
      },
    }
  }, {
    "label": '颜色块',
    "option": {
      "title": "翻牌器",
      "name": "颜色块",
      "icon": 'icon-flop',
      "top": 0,
      "left": 0,
      "dataType": 0,
      "data": [{
        "backgroundColor": '#67C23A',
        "prefixText": "某某某总人数",
        "value": '12345',
        "suffixText": '人',
      }, {
        "backgroundColor": '#409EFF',
        "prefixText": "某某某总人数",
        "value": '12345',
        "suffixText": '人',
      }, {
        "backgroundColor": '#E6A23C',
        "prefixText": "某某某总人数",
        "value": '12345',
        "suffixText": '人',
      }, {
        "backgroundColor": '#F56C6C',
        "prefixText": "某某某总人数",
        "value": '12345',
        "suffixText": '人',
      }, {
        "backgroundColor": '#7232dd',
        "prefixText": "某某某总人数",
        "value": '12345',
        "suffixText": '人',
      }, {
        "backgroundColor": 'blue',
        "prefixText": "某某某总人数",
        "value": '12345',
        "suffixText": '人',
      }],
      "dataFormatter": "",
      "component": {
        "width": 888,
        "height": 203,
        "name": "flop",
        "prop": "flop",
      },
      "option": {
        "span": 3,
        "decimals": 2,
        "whole": true,
        "padding": 12,
        "textAlign": 'left',
        "splity": 23,
        "splitx": 17,
        "fontSize": 28,
        "prefixSplity": 4,
        "prefixFontSize": 13,
        "backgroundColor": "#F56C6C",
        "suffixText": '人',
        "suffixInline": true,
        "suffixSplitx": 10,
        "suffixFontSize": 18,
      },
    }
  }, {
    "label": '环形图',
    "option": {
      "title": "环形图",
      "name": "环形图",
      "icon": 'icon-circle',
      "top": 0,
      "left": 0,
      "dataType": 0,
      "data": {
        "label": "人数增涨",
        "value": 40,
        "data": 80
      },
      "dataFormatter": "",
      "component": {
        "width": 300,
        "height": 300,
        "name": "progress",
        "prop": "progress"
      },
      "option": {
        "type": "circle",
        "strokeWidth": 25,
        "color": "rgba(154, 168, 212, 1)",
        "fontSize": 40,
        "fontWeight": "normal",
        "suffixColor": "rgba(154, 168, 212, 1)",
        "suffixFontSize": 40,
        "suffixFontWeight": "normal",
        "borderColor": "#564AA3",
        "split": 20,
        "width": 400,
        "height": 80
      },
    }
  }, {
    "label": '进度条',
    "option": {
      "title": "进度条",
      "name": "进度条",
      "icon": 'icon-progress',
      "top": 0,
      "left": 0,
      "data": {
        "label": "人数增涨",
        "value": 40,
        "data": 80
      },
      "dataFormatter": "",
      "component": {
        "width": 400,
        "height": 80,
        "name": "progress",
        "prop": "progress"
      },
      "option": {
        "type": "line",
        "color": "#fff",
        "fontSize": 24,
        "suffixColor": "#fff",
        "strokeWidth": 18,
        "fontWeight": "normal",
        "borderColor": "#564AA3",
        "width": 400,
        "height": 80
      },
    }
  }, {
    label: '仪表盘',
    option: {
      "title": "仪表盘",
      "icon": 'icon-gauge',
      "name": "仪表盘",
      "dataType": 1,
      "dataMethod": 'get',
      "time": 5000,
      "url": baseUrl + "/gauge",
      "data": {
        min: 1,
        max: 10,
        label: '名称',
        value: 4,
        unit: '%'
      },
      "dataFormatter": "",
      "component": {
        "width": 390,
        "height": 314,
        "name": "gauge",
        "prop": "gauge"
      },
      "option": {
        "lineSize": 15,
        "axisLabelShow": false,
        "axisLabelFontSize": 25,
        "nameFontSize": 20,
        "valueFontSize": 30,
        "nameColor": "",
        "lineColor": "#eee",
        "barColor": [
          {
            "color1": "rgba(154, 168, 212, 1)",
            "postion": "0.2",
          },
          {
            "color1": "#23B7E5",
            "postion": "0.8",
          },
          {
            "color1": "#564AA3",
            "postion": "1",
          }
        ]
      },
    },
  }, {
    label: '字符云',
    option: {
      "title": "字符云",
      "name": "字符云",
      "icon": "icon-wordCloud",
      "top": 725,
      "left": 3780,
      "dataType": 1,
      "dataMethod": 'get',
      "data": [{
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
      }],
      "dataFormatter": "",
      "url": baseUrl + "/wordCloud",
      "time": 5000,
      "component": {
        "name": "wordcloud",
        "prop": "wordcloud",
        "width": 600,
        "height": 300,
      },
      option: {
        minFontSize: 30,
        maxFontSize: 80,
        split: 30,
        rotate: true,
      }
    }
  }]
}, {
  "label": '表格',
  "icon": 'icon-table',
  "children": [{
    "label": '表格',
    "option": {
      "title": "表格",
      "name": "表格",
      "icon": 'icon-table',
      "top": 0,
      "left": 0,
      "dataType": 0,
      "data": [{
        "type1": '数据1',
        "type2": '数据2'
      }, {
        "type1": '数据1',
        "type2": '数据2'
      }],
      "dataFormatter": "",
      "component": {
        "width": 500,
        "height": 200,
        "name": "table",
        "prop": "table",
      },
      "option": {
        headerBackground: 'rgba(0, 0, 0, 0.01)',
        headerColor: 'rgba(154, 168, 212, 1)',
        headerTextAlign: 'center',
        bodyBackground: 'rgba(0, 0, 0, 0.01)',
        bodyColor: 'rgba(154, 168, 212, 1)',
        borderColor: 'rgba(51, 65, 107, 1)',
        bodyTextAlign: 'center',
        "column": [
          {
            "label": "类型1",
            "prop": "type1"
          },
          {
            "label": "类型2",
            "prop": "type2"
          },
        ]
      }
    }
  }, {
    label: '选项卡',
    option: {
      "title": "选项卡",
      "name": "选项卡",
      "icon": "icon-tabs",
      "child": {
        "index": [],
        "paramName": ""
      },
      "dataFormatter": "",
      "dataType": 0,
      "data": [
        {
          "label": "选项卡1",
          "value": "1"
        },
        {
          "label": "选项卡2",
          "value": "2"
        }
      ],
      "component": {
        "width": 356.9128919860628,
        "height": 46.209059233449096,
        "name": "tabs",
        "prop": "tabs"
      },
      "option": {
        "type": 'tabs',
        "color": "#eee",
        "empColor": "#4dffff",
        "fontSize": 20,
        "split": 8,
        "empBackgroundImage": "/img/banner/banner5.png",
        "backgroundImage": "/img/banner/banner4.png"
      },
    },
  }]
}]