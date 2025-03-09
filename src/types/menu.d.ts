export type MenuListType = {
  name: string
  path: string
  component: string
  meta: {
    id: number
    title: string
    icon?: string
    keepAlive: boolean
    isHide?: boolean
    isHideTab?: boolean
  }
  children?: MenuListType[]
}