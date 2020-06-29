<template>

  <el-container class="list">
    <el-aside width="230px">
      <h2 class="title">Avue-data数据大屏</h2>
      <el-menu :default-active="activeName"
               background-color="#171b22"
               text-color="#fff"
               @select="handleSelect"
               active-text-color="#00baff">
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          大屏管理
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          地图管理
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          分类管理
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-scrollbar class="list"
                  style="width:100%;height:800px;">
      <list v-if="activeName==1"></list>
      <maps v-if="activeName==2"></maps>
      <category v-if="activeName==3"></category>
    </el-scrollbar>
  </el-container>
</template>
<script>
import list from './list/index'
import maps from './list/map'
import category from './list/category'
export default {
  name: "index",
  components: {
    list,
    maps,
    category
  },
  data () {
    return {
      activeName: '1',
    }
  },
  created () {

  },
  methods: {
    handleSelect (key) {
      this.activeName = key;
    },
  }
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 60px;
  font-weight: 500;
}
</style>