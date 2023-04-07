

<template>
    <v-navigation-drawer permanent expand-on-hover>
      <v-list>
        <v-list-item link to="/profile">
          <v-list-item-content
            style="display: flex; justify-content: center; align-items: center"
            class="d-flex"
          >
            <img src="../../assets/logoo.jpg" style="width: 40px" />
  
            <v-list-item-title class="text-h6 text-primary pl-2">
              {{ user.firstName }} {{ user.lastName }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  
      <v-divider></v-divider>
  
      <v-list nav>
        <v-list-item link to="/product-form/add">
          <v-list-item-icon class="text-primary">
            <v-icon>mdi-folder-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-primary">Add Product</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/user-form/add" class="text-primary">
          <v-list-item-icon class="text-primary">
            <v-icon>mdi-account-multiple-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-primary">Add User</v-list-item-title>
        </v-list-item>
        <v-btn variant="flat" color="primary" to="/dashboard"> Back to dash </v-btn>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  import user from "@/store/user";
  import { mapActions, mapState } from "pinia";
  import axios from "axios";
  import dashboard from "@/store/dashboard";
  export default {

    computed: {
      ...mapState(user, ["isLoggedIn", "user"]),
      ...mapState(dashboard, ["users", "products"]),
    },
    created() {
      this.loadProducts();
      this.loadUsers();
    },
    methods: {
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
      // deleteProduct(id) {
      //   axios.delete(`https://fakestoreapi.com/products/${id}`);
      // },
      // deleteUser(id) {
      //   axios.delete(`https://fakestoreapi.com/products/${id}`);
      // },
    },
  };
  </script>
  