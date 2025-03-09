<script setup lang="ts">
import { ref, computed } from 'vue'
import { HomeFilled } from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const data = ref([
  {
    name: '概览',
    path: 'overview',
    icon: 'HomeFilled',
    children: [
      {
        name: '工作台',
        path: 'work',
        url: '/work',
        icon: 'HomeFilled',
      },
      {
        name: '分析页',
        path: 'analysis',
        url: '/analysis',
        icon: 'HomeFilled',
      },
    ],
  },
  {
    name: 'Demo',
    path: 'demo',
    url: '/demo',
    icon: 'HomeFilled',
  },
  {
    name: '视频管理',
    path: 'video',
    url: '/video',
    icon: 'HomeFilled',
    children: [
      {
        name: '视频列表',
        path: 'videoList',
        url: '/videoList',
        icon: 'HomeFilled',
      },
      {
        name: '标签管理',
        path: 'tag',
        url: '/tag',
        icon: 'HomeFilled',
      },
      {
        name: '分类管理',
        path: 'category',
        url: '/category',
        icon: 'HomeFilled',
      },
      {
        name: '女优管理',
        path: 'actress',
        url: '/actress',
        icon: 'HomeFilled',
      },
    ],
  },
  {
    name: '系统管理',
    path: 'system',
    icon: 'HomeFilled',
    children: [
      {
        name: '用户管理',
        path: 'user',
        url: '/user',
        icon: 'user',
      },
      {
        name: '角色管理',
        path: 'role',
        url: '/role',
        icon: 'HomeFilled',
      },
    ],
  },
])

const hasChildren = computed(() =>
  data.value.filter((item) => item.children && item.children.length > 0)
)

const noChildren = computed(() =>
  data.value.filter((item) => !(item.children && item.children.length > 0))
)
</script>

<template>
  <h5 class="mb-2">Default colors</h5>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item
      v-for="item in noChildren"
      :key="item.name"
      :index="item.path"
    >
      <el-icon><HomeFilled /></el-icon>
      <span>{{ item.name }}</span>
    </el-menu-item>

    <el-sub-menu
      v-for="item in hasChildren"
      :key="item.name"
      :index="item.path"
    >
      <template #title>
        <el-icon><HomeFilled /></el-icon>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          v-for="child in item.children"
          :key="child.name"
          :index="child.path"
        >
          <el-icon><HomeFilled /></el-icon>
          <span>{{ child.name }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<style lang="scss" scoped></style>
