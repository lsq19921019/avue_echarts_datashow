/** 
 * 自定义组件参考文档
 * https://cn.vuejs.org/v2/guide/components-registration.html
*/
import Vue from 'vue'
import Test from './test/';
import My from './my/';

const list = [
  Test,My
]
//循环注册组件
list.forEach(ele => {
  Vue.component(`avue-echart-${ele.name}`, ele)
})