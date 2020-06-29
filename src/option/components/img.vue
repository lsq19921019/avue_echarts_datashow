<!-- 图片配置 -->
<template>
  <div>
    <el-form-item label="开启旋转">
      <avue-switch v-model="main.activeOption.rotate"></avue-switch>
    </el-form-item>
    <el-form-item label="透明度">
      <el-slider v-model="main.activeOption.opacity"
                 :max="1"
                 :step="0.1"></el-slider>
    </el-form-item>
    <template v-if="main.activeOption.rotate">
      <el-form-item label="旋转时间">
        <avue-input-number v-model="main.activeOption.duration"></avue-input-number>
      </el-form-item>
    </template>
    <el-form-item label="图片地址">
      <img v-if="main.activeObj.data.value"
           :src="main.activeObj.data.value"
           alt=""
           width="100%" />
      <el-input v-model="main.activeObj.data.value">
        <div @click="main.handleOpenImg('activeObj.data.value')"
             slot="append">
          <i class="iconfont icon-img"></i>
        </div>
      </el-input>
    </el-form-item>
    <el-form-item label="开启旋转">
      <avue-switch v-model="main.activeOption.rotate"></avue-switch>
    </el-form-item>
    <el-form-item label="透明度">
      <el-slider v-model="main.activeOption.opacity"
                 :max="1"
                 :step="0.1"></el-slider>
    </el-form-item>
    <template v-if="main.activeOption.rotate">
      <el-form-item label="旋转时间">
        <avue-input-number v-model="main.activeOption.duration"></avue-input-number>
      </el-form-item>
    </template>
    <el-form-item label="图片地址">
      <img v-if="main.activeObj.data.value"
           :src="main.activeObj.data.value"
           alt=""
           width="100%" />
      <el-input v-model="main.activeObj.data.value">
        <div @click="main.handleOpenImg('activeObj.data.value')"
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