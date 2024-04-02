import { defineStore } from 'pinia'

export const mainStore = defineStore('products', {
  state: () => ({
    actives: [],
    totalSummary: 0,
    hasBlockedActives: true
  }),

  actions: {
    setActives(data) {
      this.actives = data
    },
    setTotalSummary(total) {
      this.totalSummary = total
    },
    sethasBlockedActives(status) {
      this.hasBlockedActives = status === 'empty' ? false : true
    }
  }
})