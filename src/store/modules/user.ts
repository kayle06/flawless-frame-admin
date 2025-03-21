import { defineStore } from 'pinia'
import { LanguageEnum } from '@/enum/appEnum'

export interface UserState {
    language: LanguageEnum
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        language: LanguageEnum.ZH
    }),
    getters: {
        getLanguage(): LanguageEnum {
            return this.language
        }
    },
    actions: {
        setLanguage(language: LanguageEnum) {
            this.language = language
        }
    }
})