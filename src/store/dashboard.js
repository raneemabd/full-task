import { defineStore } from "pinia";
import { axios} from '@/plugins/axios'

export default defineStore("dashboard", {
  persist: true,
  state: () => ({
    products: [],
    users: [],
    currentTap: "products",
  }),

  getters: {
    productsNumber(state) {
      return state.items.length;
    },
    usersNumber(state) {
      return state.items.length;
    },
  },

  actions: {
    loadProducts() {
      axios
        .get("https://fakestoreapi.com/products")
        .then((products) => (this.products = products.data));
    },
    loadUsers() {
      axios
        .get("https://dummyjson.com/users")
        .then((users) => (this.users = users.data.users));
    },
    setCurrentTap(tap) {
      this.currentTap = tap;
    },
  },
});
