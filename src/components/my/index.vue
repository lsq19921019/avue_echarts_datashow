<template>
  <div :style="{fontSize:fontSize,color:'#fff',border:'1px solid #fff',borderRadius:'20px'}">
    
    <h2>自定义组件</h2>
    <h3>我是参数:{{getContent}}</h3>
  </div>
</template>
<script>
import { dicOption } from '@/option/config'
export default {
  name: 'my',
  props: {
    option: Object,
    component: Object
  },
  data () {
    return {
      dicOption: dicOption
    }
  },
  computed: {
    
    fontSize () {
      return (this.option.fontSize || 30) + 'px'
    },
    getContent () {
      return this.option.data;
    }
  }
}
</script>