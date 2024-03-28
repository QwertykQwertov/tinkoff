import { defineStore } from 'pinia'

export const productStore = defineStore('products', {
  state: () => ({
    token: null,
    actives: []
  }),

  actions: {
    fetchActives() {
      fetch('test.json').then(res => res.json()).then(data => {
        console.log(data)
        this.actives = data.rows
      })
    },
    setToken(token) {
      this.token = token
    }
  }
})