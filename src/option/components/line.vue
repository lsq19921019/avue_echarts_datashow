<!--折线图配置 -->
<template>
  <div>
    <el-form-item label="竖展示">
      <avue-switch type="textarea"
                   v-model="main.activeOption.category"></avue-switch>
    </el-form-item>
    <el-collapse accordion>
      <el-collapse-item title="折线设置">
        <el-form-item label="面积堆积">
          <avue-switch v-model="main.activeOption.areaStyle"></avue-switch>
        </el-form-item>
        <el-form-item label="线条宽度">
          <avue-slider v-model="main.activeOption.lineWidth">
          </avue-slider>
        </el-form-item>
        <el-form-item label="点的大小">
          <avue-slider v-model="main.activeOption.symbolSize">
          </avue-slider>
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