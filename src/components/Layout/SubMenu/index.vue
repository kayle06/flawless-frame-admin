<script setup lang="ts">
import { computed, defineOptions } from 'vue'
import type { MenuListType } from '@/types/menu'
import router from '@/router'

interface Props {
  list?: MenuListType[]
  level?: number
}

defineOptions({
  name: 'SubMenu',
})

const props = withDefaults(defineProps<Props>(), {
  list: () => [],
  level: 0,
})

const filterMenuList = computed(() => filterRoutes(props.list))

const filterRoutes = (items: MenuListType[]): MenuListType[] => {
  return items
    .filter((item) => !item.meta.isHide)
    .map((item) => ({
      ...item,
      children: item.children ? filterRoutes(item.children) : undefined,
    }))
}

const hasChildren = (item: MenuListType): boolean => {
  return Boolean(item.children?.length)
}

const goPage = (item: MenuListType) => {
  router.push(item.path)
}
</script>

<template>
  <template v-for="item in filterMenuList" :key="item.meta.id">
    <!-- 有子菜单 -->
    <el-sub-menu
      v-if="hasChildren(item)"
      :index="item.path || item.meta.title"
      :level="level"
    >
      <template #title>
        <el-icon v-if="item.meta.icon" :size="20">
          <component :is="item.meta.icon" />
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <SubMenu :list="item.children" :level="level + 1" />
    </el-sub-menu>

    <!-- 没有子菜单 -->
    <el-menu-item
      v-else
      :index="item.path || item.meta.title"
      :level="level + 1"
      @click="goPage(item)"
    >
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<style lang="scss" scoped></style>
