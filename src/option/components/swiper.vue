<!-- 轮播配置 -->
<template>
  <div>
    <el-form-item label="类型">
      <avue-radio v-model="main.activeOption.type"
                  :dic="dicOption.swiperType"></avue-radio>
    </el-form-item>
    <el-form-item label="轮播时间">
      <avue-input v-model="main.activeOption.interval"></avue-input>
    </el-form-item>
    <el-form-item label="选择器">
      <avue-radio v-model="main.activeOption.indicator"
                  :dic="dicOption.swiperIndicator">
      </avue-radio>
    </el-form-item>
    <el-form-item label="图片透明度">
      <avue-slider v-model="main.activeOption.opacity"></avue-slider>
    </el-form-item>
  </div>
</template>

<script>
import { dicOption } from '@/option/config'
export default {
  data () {
    return {
      dicOption: dicOption
    }
  },
  inject: ["main"]
}
</script>

<style>
</style>