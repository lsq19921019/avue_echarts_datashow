<!-- 字符云配置 -->
<template>
  <div>
    <el-form-item label="最小字体">
      <avue-input-number v-model="main.activeOption.minFontSize"></avue-input-number>
    </el-form-item>
    <el-form-item label="最大字体">
      <avue-input-number v-model="main.activeOption.maxFontSize"></avue-input-number>
    </el-form-item>
    <el-form-item label="间距">
      <avue-input-number v-model="main.activeOption.split"></avue-input-number>
    </el-form-item>
    <el-form-item label="旋转">
      <avue-switch v-model="main.activeOption.rotate"></avue-switch>
    </el-form-item>
  </div>
</template>

<script>
export default {
  inject: ["main"]
}
</script>

<style>
</style>