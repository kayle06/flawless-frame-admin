<script setup lang="ts">
import { computed } from 'vue'
import SubMenu from '@/components/Layout/SubMenu/index.vue'
import type { MenuListType } from '@/types/menu'
import { useSettingStore } from '@/store/modules/setting'

const settingStore = useSettingStore()
const menuOpenWidth = computed(() => settingStore.getMenuOpenWidth)

const menuList: MenuListType[] = [ 
  {
    name: '首页',
    path: '/',
    component: 'Home',
    meta: {
      id: 1,
      title: '首页',
      icon: 'HomeFilled',
      keepAlive: true,
      isHide: false,
      isHideTab: false
    },
  },
  {
      name: '视频管理',
      path: '/video',
      component: 'Video',
      meta: {
        id: 2,
        title: '视频管理',
        icon: 'VideoCamera',
        keepAlive: true,
        isHide: false,
        isHideTab: false
      },
      children: [
        {
          name: '视频列表',
          path: '/video/list',
          component: 'VideoList',
          meta: {
            id: 21,
            title: '视频列表',
            icon: 'List',
            keepAlive: true,
            isHide: false,
            isHideTab: false
          }
        }
      ]
    },
]
</script>

<template>
  <div class="menu-left">
    <el-menu>
      <SubMenu :list="menuList" />
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.menu-left {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  height: 100vh;
  user-select: none;
  scrollbar-width: none;
  border: solid blue;

  .el-menu:not(.el-menu--collapse) {
    width: v-bind(menuOpenWidth);
  }
}
</style>
