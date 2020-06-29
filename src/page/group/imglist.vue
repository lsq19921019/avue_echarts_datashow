<template>
  <el-dialog title="图库"
             width="80%"
             :visible.sync="imgVisible">
    <div style="margin:0 auto;">
      <el-upload class="upload-demo"
                 :on-success="onSuccess"
                 :show-file-list="false"
                 :action="url+'/visual/put-file'"
                 multiple
                 list-type="picture">
        <el-button size="small"
                   icon="el-icon-upload"
                   type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <el-scrollbar class="imgList">
      <img :src="item.value"
           :style="styleName"
           @click="handleSetimg(item.value)"
           v-for="(item,index) in imgOption[imgActive]"
           :key="index" />
    </el-scrollbar>
  </el-dialog>
</template>

<script>
import { imgOption } from '@/option/config'
export default {
  data () {
    return {
      imgVisible: false,
      imgObj: '',
      type: '',
      imgActive: 0,
      imgOption: imgOption,
      imgTabs: [],
    }
  },
  computed: {
    styleName () {
      if (this.type === 'background') {
        return {
          width: '200px'
        }
      }
      return {}
    }
  },
  watch: {
    type: {
      handler () {
        if (this.type === 'background') {
          this.imgActive = 0;
        } else if (this.type == 'border') {
          this.imgActive = 1;
        } else {
          this.imgActive = 2;
        }
      },
      immediate: true
    }
  },
  methods: {
    onSuccess (res) {
      const url = res.data.link;
      this.imgOption[this.imgActive].unshift({
        label: url,
        value: url
      });
    },
    openImg (item, type) {
      this.type = type;
      this.imgObj = item
      this.imgVisible = true;
    },
    handleSetimg (item) {
      this.imgVisible = false;
      this.$emit('change', item, this.imgObj);
    }
  }
}
</script>

<style>
</style>