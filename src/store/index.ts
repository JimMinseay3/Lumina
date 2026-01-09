import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    activeMenu: 'market-snapshot',
    searchQuery: '',
  }),
  actions: {
    setActiveMenu(menu: string) {
      this.activeMenu = menu
    },
  },
})
