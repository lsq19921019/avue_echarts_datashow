<!-- 图片框配置 -->
<template>
  <div>
    <el-form-item label="背景色">
      <avue-color v-model="main.activeOption.backgroundColor"></avue-color>
    </el-form-item>
    <el-form-item label="图片透明度">
      <avue-slider v-model="main.activeOption.opacity"></avue-slider>
    </el-form-item>
    <el-form-item label="图片地址">
      <img v-if="main.activeObj.data"
           :src="main.activeObj.data"
           alt=""
           width="100%" />
      <el-input v-model="main.activeObj.data">
        <div @click="main.handleOpenImg('activeObj.data','border')"
             slot="append">
          <i class="iconfont icon-img"></i>
        </div>
      </el-input>
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