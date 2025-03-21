import { defineStore } from 'pinia'
import { MenuEnum } from '@/enum/appEnum'
import { systemConfig } from '@/config/setting'

const px = 'px'

export interface SettingState {
  menuType: MenuEnum,
  menuOpen: boolean,
  menuOpenWidth: number,
}

export const useSettingStore = defineStore('settingStore', {
  state: (): SettingState => ({
    menuType: MenuEnum.LEFT,
    menuOpen: true,
    menuOpenWidth: systemConfig.defaultMenuWeigth,
  }),
  getters: {
    getMenuType(): MenuEnum {
      return this.menuType
    },
    getMenuOpen(): boolean {
      return this.menuOpen
    },
    getMenuOpenWidth(): string {
      return this.menuOpenWidth + px
    }
  },
  actions: {
    setMenuType(menuType: MenuEnum) {
      this.menuType = menuType
    },
    setMenuOpen(menuOpen: boolean) {
      this.menuOpen = menuOpen
    },
    setMenuOpenWidth(menuOpenWidth: number) {
      this.menuOpenWidth = menuOpenWidth
    }
  },
})