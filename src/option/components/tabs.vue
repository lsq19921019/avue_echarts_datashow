<!-- 选项卡配置 -->
<template>
  <div>
    <el-form-item label="字体大小">
      <avue-input-number v-model="main.activeOption.fontSize"
                         :max="200"></avue-input-number>
    </el-form-item>
    <el-form-item label="字体颜色">
      <avue-color v-model="main.activeOption.color"></avue-color>
    </el-form-item>
    <el-form-item label="类型">
      <avue-radio v-model="main.activeOption.type"
                  :dic="dicOption.tabsTypeList"></avue-radio>
    </el-form-item>
    <template v-if="main.activeOption.type==='tabs'">
      <el-form-item label="字体间距">
        <avue-input-number v-model="main.activeOption.split"></avue-input-number>
      </el-form-item>
      <el-collapse accordion>
        <el-collapse-item title="边框设置">
          <el-form-item label="背景颜色">
            <avue-color v-model="main.activeOption.backgroundColor"></avue-color>
          </el-form-item>
          <el-form-item label="图标间距">
            <avue-input-number v-model="main.activeOption.iconSplit"></avue-input-number>
          </el-form-item>
          <el-form-item label="图标大小">
            <avue-input-number v-model="main.activeOption.iconSize"></avue-input-number>
          </el-form-item>
          <el-form-item label="图片地址">
            <img v-if="main.activeOption.backgroundImage"
                 :src="main.activeOption.backgroundImage"
                 alt=""
                 width="100%" />
            <el-input v-model="main.activeOption.backgroundImage">
              <div @click="main.handleOpenImg('activeOption.backgroundImage','border')"
                   slot="append">
                <i class="iconfont icon-img"></i>
              </div>
            </el-input>
          </el-form-item>
          <el-form-item label="边框颜色">
            <avue-color v-model="main.activeOption.borderColor"></avue-color>
          </el-form-item>
          <el-form-item label="边框宽度">
            <avue-input-number v-model="main.activeOption.borderWidth"
                               :max="10">
            </avue-input-number>
          </el-form-item>
        </el-collapse-item>
        <el-collapse-item title="高亮设置">
          <el-form-item label="字体高亮颜色">
            <avue-color v-model="main.activeOption.empColor"></avue-color>
          </el-form-item>
          <el-form-item label="背景图片">
            <img v-if="main.activeOption.empBackgroundImage"
                 :src="main.activeOption.empBackgroundImage"
                 alt=""
                 width="100%" />
            <el-input v-model="main.activeOption.empBackgroundImage">
              <div @click="main.handleOpenImg('activeOption.empBackgroundImage','border')"
                   slot="append">
                <i class="iconfont icon-img"></i>
              </div>
            </el-input>
          </el-form-item>
          <el-form-item label="边框颜色">
            <avue-color v-model="main.activeOption.empBorderColor"></avue-color>
          </el-form-item>
          <el-form-item label="边框宽度">
            <avue-input-number v-model="main.activeOption.empBorderWidth"
                               :max="10">
            </avue-input-number>
          </el-form-item>
        </el-collapse-item>
      </el-collapse>
    </template>
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