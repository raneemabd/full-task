// Utilities
import { defineStore } from "pinia";

export default defineStore('cart', {
  persist: true,
  state: () => ({
    items: [],
  }),

  getters: {
    itemsNumber(state) {
      return state.items.length
    },
  },

  actions: {
    addToCart(product) {
      this.items.push(product);
    },
 
  removeItem(index){
    this.items.splice(index,1)
  } },
});
