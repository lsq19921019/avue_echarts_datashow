<!-- 实时时间配置 -->
<template>
  <div>
    <el-form-item label="时间格式">
      <avue-select v-model="main.activeOption.format"
                   :dic="dicOption.format">
      </avue-select>
    </el-form-item>
    <el-form-item label="自定义格式">
      <avue-input v-model="main.activeOption.format">
      </avue-input>
    </el-form-item>
    <el-form-item label="字体间距">
      <avue-input-number v-model="main.activeOption.split"
                         :max="200"></avue-input-number>
    </el-form-item>
    <el-form-item label="字体大小">
      <avue-input-number v-model="main.activeOption.fontSize"
                         :max="200"></avue-input-number>
    </el-form-item>
    <el-form-item label="字体背景">
      <avue-color v-model="main.activeOption.backgroundColor"></avue-color>
    </el-form-item>
    <el-form-item label="对其方式">
      <avue-select v-model="main.activeOption.textAlign"
                   :dic="dicOption.textAlign">
      </avue-select>
    </el-form-item>
    <el-form-item label="文字粗细">
      <avue-select v-model="main.activeOption.fontWeight"
                   :dic="dicOption.fontWeight">
      </avue-select>
    </el-form-item>
    <el-form-item label="字体颜色">
      <avue-color v-model="main.activeOption.color"></avue-color>
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