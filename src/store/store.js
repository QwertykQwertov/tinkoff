import { defineStore } from 'pinia'

export const productStore = defineStore('products', {
  state: () => ({
    actives: []
  }),

  actions: {
    fetchActives(token) {
      // fetch('test.json').then(res => res.json()).then(data => {
      //   this.actives = data.rows.map(el => ({ ...el, is_exchange: el.is_exchange === 'Y' ? true : false }))
      // })
      // return
      fetch("https://exchange844.artydev.ru/api/v1/exchange_info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token })
      })
        .then((res) => res.json())
        .then((data) => {
          this.actives = data.rows.map(el => ({ ...el, is_exchange: el.is_exchange === 'Y' ? true : false }))
        }).catch(err => {
          console.log(err)
        })

    }
  }
})