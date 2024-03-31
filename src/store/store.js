import { defineStore } from 'pinia'

export const mainStore = defineStore('products', {
  state: () => ({
    actives: [],
    totalSummary: 0,
  }),

  actions: {
    setActives(data) {
      this.actives = data
    },
    setTotalSummary(total) {
      this.totalSummary = total
    }
  }
})