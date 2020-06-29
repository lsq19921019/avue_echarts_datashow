// 查看页面和编辑页面公用的参数和方法
import common from '@/config'
import { config } from '@/option/config'
import container from '@/page/group/container'
import { getList } from '@/api/map'
export default {
  components: {
    container
  },
  provide () {
    return {
      main: this,
      contain: this
    };
  },
  data () {
    return {
      DIC: {
        MAP: []
      },
      contentWidth: '',
      config: config,
      obj: {},
      id: '',
      visual: {},
      nav: [],
      common: common,
      active: [],
      overactive: '',
    }
  },
  computed: {
    list () {
      let result = [];
      //循环处理数据
      const detail = (item) => {
        if (item.children) {
          item.children.forEach(ele => {
            detail(ele);
          })
        } else {
          result.push(item)
        }
      }
      this.nav.forEach(ele => {
        detail(ele);
      })
      const len = result.length - 1;
      result.forEach((ele, index) => {
        ele.zIndex = len - index;
      })
      return result
    }
  },
  created () {
    this.initDic();
  },
  methods: {
    //初始化字典
    initDic () {
      getList({
        current: 1,
        size: 100,
      }).then(res => {
        const data = res.data.data;
        this.DIC.MAP = data.records.map(ele => {
          return {
            label: ele.name,
            value: this.url + '/map/data?id=' + ele.id
          }
        });
      })
    },
    findnav (id, type) {
      //循环处理数据
      let obj = undefined;
      let count = 0;
      let parent = undefined;
      let pcount = 0;
      let len = 0;
      const detail = (item, list, i, number = 0) => {
        if (!item.children || type) {
          if (id === item.index) {
            obj = item;
            len = Array.isArray(list) ? list.length - 1 : list.children.length - 1;
            parent = list;
            pcount = number;
            count = i;
          }
        }
        if (item.children) {
          item.children.forEach((ele, index) => {
            detail(ele, item, index, number + 1);
          })
        }
      }
      this.nav.forEach((ele, index) => {
        detail(ele, this.nav, index);
      })
      return {
        obj,
        count,
        len,
        pcount,
        parent
      }
    },
    findlist (index) {
      return this.list.find(ele => ele.index == index) || {}
    },
    handleInitActive () {
      this.active = []
    },
    handleMouseDown () {
      this.handleInitActive();
    },
  }
}