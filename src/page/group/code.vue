<template>
  <textarea :ref="id"
            v-model="code"
            style="height:300px;width:100%;"></textarea>
</template>

<script>
import "codemirror/theme/blackboard.css";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";

let CodeMirror = require("codemirror/lib/codemirror");
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/selection/active-line");
require("codemirror/addon/hint/show-hint");
export default {
  name: "codeMirror",
  data () {
    return {
      editor: '',
      id: Math.floor(Math.random() * 100),
      code: ''
    }
  },
  props: {
    value: {
      type: [String, Object, Array],
      default: ''
    }
  },
  watch: {
    value: {
      handler (val) {
        if (['object', 'array'].includes(typeof val)) {
          this.code = JSON.stringify(this.value, null, 4);
        } else {
          this.code = val;
        }
        this.setValue(this.code);
      },
      immediate: true,
      deep: true,
    },
  },
  mounted () {
    this.init();
  },
  methods: {
    getValue () {
      return this.editor.getValue()
    },
    setValue (val) {
      if (this.editor) this.editor.setValue(val);

    },
    init () {
      let mime = 'text/javascript'
      let theme = 'blackboard'//设置主题，不设置的会使用默认主题
      this.editor = CodeMirror.fromTextArea(this.$refs[this.id], {
        mode: mime,//选择对应代码编辑器的语言，我这边选的是数据库，根据个人情况自行设置即可
        indentWithTabs: true,
        smartIndent: true,
        lineNumbers: true,
        matchBrackets: true,
        theme: theme,
        // autofocus: true,
        extraKeys: { 'Ctrl': 'autocomplete' },//自定义快捷键
        // hintOptions: {//自定义提示选项
        //   tables: {
        //     users: ['name', 'score', 'birthDate'],
        //     countries: ['name', 'population', 'size']
        //   }
        // }
      })
      //代码自动提示功能，记住使用cursorActivity事件不要使用change事件，这是一个坑，那样页面直接会卡死
      this.editor.on('cursorActivity', () => {
        this.editor.showHint()
      })
    }
  }
}
</script>
