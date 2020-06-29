<!-- 地图配置 -->
<template>
  <div>
    <el-form-item label="开启轮播">
      <avue-switch v-model="main.activeOption.banner"></avue-switch>
    </el-form-item>
    <template v-if="main.activeOption.banner">
      <el-form-item label="轮播时间">
        <avue-input v-model="main.activeOption.bannerTime"></avue-input>
      </el-form-item>
    </template>
    <template v-if="main.activeOption.type===0">
      <el-form-item label="地图选择">
        <avue-select :dic="main.DIC.MAP"
                     v-model="main.activeOption.mapData"
                     placeholder="请选择地图"></avue-select>
      </el-form-item>
      <el-form-item label="地图比例">
        <avue-slider v-model="main.activeOption.zoom"
                     :max="5"
                     :step="0.1"></avue-slider>
      </el-form-item>
      <el-form-item label="字体大小">
        <avue-input-number v-model="main.activeOption.fontSize"></avue-input-number>
      </el-form-item>
      <el-form-item label="字体高亮颜色">
        <avue-color v-model="main.activeOption.empColor"></avue-color>
      </el-form-item>
      <el-form-item label="字体颜色">
        <avue-color v-model="main.activeOption.color"></avue-color>
      </el-form-item>
      <el-form-item label="区域线">
        <avue-input-number v-model="main.activeOption.borderWidth"></avue-input-number>
      </el-form-item>
      <el-form-item label="区域颜色">
        <avue-color v-model="main.activeOption.areaColor"></avue-color>
      </el-form-item>
      <el-form-item label="区域高亮颜色">
        <avue-color v-model="main.activeOption.empAreaColor"></avue-color>
      </el-form-item>
      <el-form-item label="边框颜色">
        <avue-color v-model="main.activeOption.borderColor"></avue-color>
      </el-form-item>

    </template>
    <template v-if="main.activeOption.type===1">
      <el-form-item label="图片地址">
        <avue-input v-model="main.activeOption.img"></avue-input>
      </el-form-item>
      <el-form-item label="地图比例">
        <avue-slider v-model="main.activeOption.scale"
                     :max="300"></avue-slider>
      </el-form-item>
    </template>
  </div>
</template>

<script>
export default {
  inject: ["main"]
}
</script>

<style>
</style>