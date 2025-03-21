<script setup lang="ts">
import { ref, computed } from "vue";
import { useSettingStore } from "@/store/modules/setting";
import { MenuEnum } from "@/enum/appEnum";
import { systemConfig } from "@/config/setting";
import { useI18n } from "@/hooks/useI18n";

const settingStore = useSettingStore();
const { t } = useI18n();
const menuOpenStatus = computed(() => settingStore.getMenuOpen);
const menuEnum = computed(() => settingStore.getMenuType);

const handleLogout = () => {
  console.log("退出登录");
};

// 实时计算topbar宽度
const topbarWidth = computed(() => {
  const { TOP } = MenuEnum;
  switch (menuEnum.value) {
    case TOP:
      return "100%";
    default:
      return menuOpenStatus.value
        ? `calc(100% - ${settingStore.getMenuOpenWidth})`
        : `calc(100% - ${systemConfig.closeMenuWeigth}px)`;
  }
});

const width = ref(255);
</script>

<template>
  <div class="top-bar" :style="{ width: topbarWidth }">
    <div class="functional-area">
      <div class="left-area">
        <button @click="settingStore.setMenuOpenWidth((width -= 10))">
          111
        </button>
      </div>
      <div class="right-area">
        <div>1</div>
        <div class="user">
          <el-popover
            placement="top-start"
            :show-arrow="false"
            :width="240"
            trigger="hover"
            show-after="0"
            hide-after="0"
            popper-class="user-popover"
            popper-style="border: 1px solid var(--parism-border-dashed-color); border-radius: 0.75rem / 2; padding: 5px 18px;"
          >
            <template #reference>
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
            </template>
            <template #default>
              <div class="user-menu-box">
                <div class="user-info">
                  <el-avatar style="background: blue" />
                  <div class="user-wrapper">
                    <span class="name">John Snow</span>
                    <span class="email">art.design@gmail.com</span>
                  </div>
                </div>
                <div class="user-menu">
                  <ul>
                    <li>
                      <el-icon><User /></el-icon>
                      <span>{{ t('layout.topbar.userCenter') }}</span>
                    </li>
                    <li>
                      <el-icon><Setting /></el-icon>
                      <span>{{ t('layout.topbar.settings') }}</span>
                    </li>
                    <li>
                      <el-icon><Lock /></el-icon>
                      <span>{{ t('layout.topbar.lockScreen') }}</span>
                    </li>
                  </ul>
                </div>
                <div class="logout" @click="handleLogout">{{ t('layout.topbar.logout') }}</div>
              </div>
            </template>
          </el-popover>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss">
@use "./style.scss" as *;
</style>
