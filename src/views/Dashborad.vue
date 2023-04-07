<template>
  <div class="ma-12 pa-12">
    <v-row class=" d-flex flex-row justify-center align-center pb-5">
      <v-btn
        class="text-primary"
        :active="this.currentTap === 'users'"
        @click="setCurrentTap('users')"
      >
        <v-icon> mdi-account-circle</v-icon>Users
      </v-btn>
      <v-btn class="text-primary"
        :active="this.currentTap === 'products'"
        @click="setCurrentTap('products')"
      >
        <v-icon>mdi-star</v-icon>Products
      </v-btn>
    </v-row>

    <h2
      v-if="this.currentTap === 'products'"
      class="text-primary text-center py-4"
    >
      products number: {{products.length }}
    </h2>
    <table
      border="1"
      v-if="this.currentTap === 'products'"
      style="width: 100%; border-color: black"
    >
      <thead style="background-color: #f5f0ea">
        <tr>
          <th>product name</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.title }}</td>
          <td style="padding: 0 30px">{{ product.price }}</td>
         
        </tr>
      </tbody>
    </table>

    <h2
      v-if="this.currentTap === 'users'"
      class="text-primary text-center py-4"
    >
      users number: {{ users.length }}
    </h2>
    <table border="1" v-if="this.currentTap === 'users'" style="width: 100%">
      <thead style="background-color: #f5f0ea">
        <tr>
          <th>user name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
       
        </tr>
      </tbody>
    </table>
  </div>

  
</template>

<script>
import user from "@/store/user";
import { mapActions, mapState } from "pinia";

import dashboard from "@/store/dashboard";

export default {
 

  computed: {
    ...mapState(user, ["isLoggedIn", "user"]),
    ...mapState(dashboard, ["users", "products","currentTap"]),
  },
 
  methods: {
    ...mapActions(dashboard,["loadProducts","loadUsers","setCurrentTap"])
  }

};
</script>
