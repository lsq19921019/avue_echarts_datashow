<template>
  <draggable :group="{ name: 'form' }"
             ghost-class="ghost"
             :list="nav"
             :animation="300">
    <template v-for="item in nav">
      <div :key="item.index"
           class="menu__folder"
           v-if="item.children">
        <div @dblclick="hangeChangeName(item)"
             @click="handleSetActive(item)"
             @contextmenu.prevent="contain.handleContextMenu($event,item)"
             :class="['menu__item--folder',{'is-active':handleGetActive(item),'is-over':contain.overactive===item.index}]">
          <i class="iconfont icon-fold"
             @click="openFolder(item)"
             :class="{'is-active':item.menu}"></i>
          <i class="iconfont icon-folder"
             @click="openFolder(item)"></i>
          <input type="text"
                 @keyup.enter="item.isname=false"
                 v-if="item.isname"
                 v-model="item.name">
          <span v-else>{{item.name}}</span>
        </div>
        <div :key="'list'
                 +item.index"
             class="menu__list"
             v-show="item.menu">
          <draggable :group="{ name: 'form' }"
                     ghost-class="ghost"
                     :list="item.children"
                     :animation="300">
            <template v-for="citem in item.children">
              <div v-if="!citem.children"
                   :key="citem.index"
                   :class="['menu__item',{'is-active':handleGetActive(citem),'is-over':contain.overactive===citem.index}]"
                   @click="handleSetActive(citem)"
                   @contextmenu.prevent="contain.handleContextMenu($event,citem)"
                   @mouseover="contain.overactive=citem.index"
                   @mouseout="contain.overactive=undefined">
                <span class="menu__icon">
                  <i :class="'iconfont '+citem.icon"></i>
                </span>
                <span>{{citem.title}}</span>
              </div>
              <layer v-else
                     :count="count+1"
                     :key="citem.index"
                     :nav="[citem]"></layer>
            </template>
          </draggable>
        </div>
      </div>
      <div v-else
           :key="item.index"
           @contextmenu.prevent="contain.handleContextMenu($event,item)"
           @click="handleSetActive(item)"
           :class="['menu__item',{'is-active':handleGetActive(item),'is-over': contain.overactive===item.index}]"
           @mouseover="contain.overactive=item.index"
           @mouseout="contain.overactive=undefined">
        <span class="menu__icon">
          <i :class="'iconfont '+item.icon"></i>
        </span>
        <span>{{item.title}}</span>
      </div>
    </template>
  </draggable>
</template>

<script>
import vuedraggable from 'vuedraggable';
export default {
  name: 'layer',
  inject: ["contain"],
  provide () {
    return {
      contain: this.contain
    };
  },
  components: {
    draggable: vuedraggable
  },
  props: {
    count: {
      type: Number,
      default: 1,
    },
    nav: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    handleGetActive (item) {
      return this.contain.active.includes(item.index);
    },
    handleSetActive (item) {
      if (this.contain.keys.ctrl) {
        if (!Array.isArray(this.contain.active)) {
          this.contain.handleInitActive();
        }
        this.contain.active.push(item.index)
      } else {
        this.contain.active = [item.index];
      }
    },
    hangeChangeName (item) {
      this.$set(item, 'isname', !item.isname)
    },
    openFolder (item) {
      this.$set(item, 'menu', !item.menu)
      item.isname = false;
    },
  }
}
</script>

<style>
</style>