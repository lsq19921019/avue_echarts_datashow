<!-- 表格配置 -->
<template>
  <div>
    <el-form-item label="表头颜色">
      <avue-color type="textarea"
                  v-model="main.activeOption.headerColor"></avue-color>
    </el-form-item>
    <el-form-item label="表头背景">
      <avue-color type="textarea"
                  v-model="main.activeOption.headerBackgroud"></avue-color>
    </el-form-item>
    <el-form-item label="字体位置">
      <avue-select v-model="main.activeOption.headerTextAlign"
                   :dic="dicOption.textAlign">
      </avue-select>
    </el-form-item>
    <el-form-item label="字体大小">
      <avue-input-number v-model="main.activeOption.fontSize">
      </avue-input-number>
    </el-form-item>
    <el-form-item label="显示行数">
      <avue-input-number v-model="main.activeOption.count">
      </avue-input-number>
    </el-form-item>
    <el-form-item label="开启滚动">
      <avue-switch v-model="main.activeOption.scroll">
      </avue-switch>
    </el-form-item>
    <el-form-item label="开启显隐">
      <avue-switch v-model="main.activeOption.columnShow">
      </avue-switch>
    </el-form-item>
    <template v-if="main.activeOption.scroll">
      <el-form-item label="滚动时间">
        <avue-input-number v-model="main.activeOption.scrollTime">
        </avue-input-number>
      </el-form-item>
      <el-form-item label="滚动行数">
        <avue-input-number v-model="main.activeOption.scrollCount">
        </avue-input-number>
      </el-form-item>
    </template>
    <el-form-item label="线条">
      <avue-switch v-model="main.activeOption.line"></avue-switch>
    </el-form-item>
    <el-form-item label="开启排名">
      <avue-switch v-model="main.activeOption.index"></avue-switch>
    </el-form-item>
    <el-form-item label="文字颜色">
      <avue-color type="textarea"
                  v-model="main.activeOption.bodyColor"></avue-color>
    </el-form-item>
    <el-form-item label="表格背景">
      <avue-color type="textarea"
                  v-model="main.activeOption.bodyBackgroud"></avue-color>
    </el-form-item>
    <el-form-item label="字体位置">
      <avue-select v-model="main.activeOption.bodyTextAlign"
                   :dic="dicOption.textAlign">
      </avue-select>
    </el-form-item>
    <el-form-item label="分割线">
      <avue-color type="textarea"
                  v-model="main.activeOption.borderColor"></avue-color>
    </el-form-item>
    <el-form-item label="奇行颜色">
      <avue-color type="textarea"
                  v-model="main.activeOption.nthColor"></avue-color>
    </el-form-item>
    <el-form-item label="偶行颜色">
      <avue-color type="textarea"
                  v-model="main.activeOption.othColor"></avue-color>
    </el-form-item>
    <avue-crud :option="tableOption"
               :data="main.activeOption.column"
               @row-save="rowSave"
               @row-del="rowDel"
               @row-update="rowUpdate"></avue-crud>
  </div>
</template>

<script>
import { tableOption, dicOption } from '@/option/config'

export default {
  data () {
    return {
      dicOption: dicOption,
      tableOption: tableOption
    }
  },
  inject: ["main"],
  methods: {
    rowSave (row, done) {
      this.main.activeOption.column.push(row);
      done()
    },
    rowDel (row, index) {
      this.main.activeOption.column.splice(index, 1);
    },
    rowUpdate (row, index, done) {
      this.main.activeOption.column.splice(index, 1, row);
      done()
    },
  }
}
</script>

<style>
</style>