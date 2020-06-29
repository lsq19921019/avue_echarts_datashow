<!-- 自定义配置 -->
<template>
  <div>
    <el-form-item label="字体大小">
      <avue-input-number v-model="main.activeOption.fontSize"></avue-input-number>
    </el-form-item>
    <el-form-item label="文本内容">
      <avue-input v-model="main.activeOption.value"></avue-input>
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