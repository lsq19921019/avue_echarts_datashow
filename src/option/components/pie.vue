<!-- 饼图的配置 -->
<template>
  <div>
    <el-form-item label="字体大小">
      <avue-input-number v-model="main.activeOption.fontSize"></avue-input-number>
    </el-form-item>
    <el-collapse accordion>
      <el-collapse-item title="饼图设置">
        <el-form-item label="设置为环形">
          <avue-switch v-model="main.activeOption.radius"></avue-switch>
        </el-form-item>
        <el-form-item label="南丁格尔玫瑰">
          <avue-switch v-model="main.activeOption.roseType"></avue-switch>
        </el-form-item>
        <el-form-item label="自动排序">
          <avue-switch v-model="main.activeOption.sort"></avue-switch>
        </el-form-item>
        <el-form-item label="不展示零">
          <avue-switch v-model="main.activeOption.notCount"></avue-switch>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  inject: ["main"]
}
</script>

<style>
</style>