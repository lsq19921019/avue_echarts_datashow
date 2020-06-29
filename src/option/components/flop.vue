<!-- 翻牌器配置 -->
<template>
  <div>
    <el-form-item label="整体">
      <avue-switch v-model="main.activeOption.whole">
      </avue-switch>
    </el-form-item>
    <el-form-item label="精度">
      <avue-input-number v-model="main.activeOption.decimals">
      </avue-input-number>
    </el-form-item>
    <el-form-item label="行数">
      <avue-input-number v-model="main.activeOption.span">
      </avue-input-number>
    </el-form-item>
    <el-collapse accordion>
      <el-collapse-item title="边框设置">
        <el-form-item label="X间距">
          <avue-slider v-model="main.activeOption.splitx"></avue-slider>
        </el-form-item>
        <el-form-item label="Y间距">
          <avue-slider v-model="main.activeOption.splity"></avue-slider>
        </el-form-item>
        <el-form-item label="边框宽度">
          <avue-input-number v-model="main.activeOption.width"
                             :max="1000"></avue-input-number>
        </el-form-item>
        <el-form-item label="边框高度">
          <avue-input-number v-model="main.activeOption.height"
                             :max="1000"></avue-input-number>
        </el-form-item>
        <el-form-item label="边框">
          <avue-radio v-model="main.activeOption.type"
                      :dic="dicOption.border">
          </avue-radio>
        </el-form-item>
        <template v-if="main.activeOption.type==='border'">
          <el-form-item label="边框颜色">
            <avue-color v-model="main.activeOption.borderColor"></avue-color>
          </el-form-item>
          <el-form-item label="边框宽度">
            <avue-input-number v-model="main.activeOption.borderWidth"
                               :max="10">
            </avue-input-number>
          </el-form-item>
        </template>
        <template v-if="main.activeOption.type==='img'">
          <el-form-item label="图片地址">
            <img v-if="main.activeOption.backgroundBorder"
                 :src="main.activeOption.backgroundBorder"
                 alt=""
                 width="100%" />
            <el-input v-model="main.activeOption.backgroundBorder">
              <div @click="main.handleOpenImg('activeOption.backgroundBorder','border')"
                   slot="append">
                <i class="iconfont icon-img"></i>
              </div>
            </el-input>
          </el-form-item>
        </template>
        <el-form-item label="背景颜色">
          <avue-color v-model="main.activeOption.backgroundColor"></avue-color>
        </el-form-item>
        <el-form-item label="背景图片">
          <img v-if="main.activeOption.backgroundImage"
               :src="main.activeOption.backgroundImage"
               alt=""
               width="100%" />
          <el-input v-model="main.activeOption.backgroundImage">
            <div @click="main.handleOpenImg('activeOption.backgroundImage','')"
                 slot="append">
              <i class="iconfont icon-img"></i>
            </div>
          </el-input>
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item title="内部设置">
        <el-form-item label="字体大小">
          <avue-input-number v-model="main.activeOption.fontSize"
                             :max="200"></avue-input-number>
        </el-form-item>
        <el-form-item label="字体颜色">
          <avue-color v-model="main.activeOption.color"></avue-color>
        </el-form-item>
        <el-form-item label="文字粗细">
          <avue-select v-model="main.activeOption.fontWeight"
                       :dic="dicOption.fontWeight">
          </avue-select>
        </el-form-item>
        <el-form-item label="对其方式">
          <avue-select v-model="main.activeOption.textAlign"
                       :dic="dicOption.textAlign">
          </avue-select>
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item title="前缀设置">
        <template v-if="!main.activeOption.whole">
          <el-form-item label="前缀内容">
            <avue-input v-model="main.activeOption.prefixText"></avue-input>
          </el-form-item>
        </template>
        <template v-if="!main.activeOption.row">
          <el-form-item label="对其方式">
            <avue-select v-model="main.activeOption.prefixTextAlign"
                         :dic="dicOption.textAlign">
            </avue-select>
          </el-form-item>
        </template>
        <el-form-item label="X间距">
          <avue-slider v-model="main.activeOption.prefixSplitx"></avue-slider>
        </el-form-item>
        <el-form-item label="Y间距">
          <avue-slider v-model="main.activeOption.prefixSplity"></avue-slider>
        </el-form-item>
        <el-form-item label="颜色">
          <avue-color v-model="main.activeOption.prefixColor"></avue-color>
        </el-form-item>
        <el-form-item label="字体大小">
          <avue-input-number v-model="main.activeOption.prefixFontSize"
                             :max="200">
          </avue-input-number>
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item title="后缀设置">
        <template v-if="!main.activeOption.whole">
          <el-form-item label="后缀内容">
            <avue-input v-model="main.activeOption.suffixText"></avue-input>
          </el-form-item>
        </template>
        <template v-if="!main.activeOption.row">
          <el-form-item label="对其方式">
            <avue-select v-model="main.activeOption.suffixTextAlign"
                         :dic="dicOption.textAlign">
            </avue-select>
          </el-form-item>
        </template>
        <el-form-item label="X间距">
          <avue-slider v-model="main.activeOption.suffixSplitx"></avue-slider>
        </el-form-item>
        <el-form-item label="Y间距">
          <avue-slider v-model="main.activeOption.suffixSplity"></avue-slider>
        </el-form-item>
        <el-form-item label="颜色">
          <avue-color v-model="main.activeOption.suffixColor"></avue-color>
        </el-form-item>
        <el-form-item label="字体大小">
          <avue-input-number v-model="main.activeOption.suffixFontSize"
                             :max="200">
          </avue-input-number>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
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