import { computed } from 'vue'
import { useUserStore } from '@/store/modules/user'
import zhCN from '@/locales/zh-CN'
import enUS from '@/locales/en-US'

type MessageSchema = typeof zhCN
type Messages = Record<string, MessageSchema>

const messages: Messages = {
  zh: zhCN,
  en: enUS
}

export function useI18n() {
  const userStore = useUserStore()
  
  const currentMessages = computed(() => {
    return messages[userStore.language]
  })

  const t = (key: string) => {
    const keys = key.split('.')
    let result = currentMessages.value as any
    
    for (const k of keys) {
      result = result?.[k]
      if (!result) return key
    }
    
    return result as string
  }

  return {
    t
  }
} 