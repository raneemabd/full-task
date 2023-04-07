<template >
 

  <section style="background-color: #fcffe7">
    <v-container>
      <v-row
        style="display: flex; justify-content: center; align-items: center"
        class="d-flex"
      >
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="12"
          xl="6"
          style="display: flex; justify-content: center; align-items: center"
        >
          <h1 class="text-primary">
            Welcome ! {{ user.firstName }} {{ user.lastName }} we missed you
          </h1>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="8" xl="6"  style="display: flex; justify-content: center; align-items: center">
          <v-img :src="user.image" style="width: 400px; height: 400px; border-radius: 50%; border-color: black;"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <div class="text-center mb-10">
    <v-menu v-model="menu" :close-on-content-click="false" location="end">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Info </v-btn>
      </template>

      <v-card min-width="300">
        <v-list>
          <v-list-item class="text-primary"
         
            subtitle="Vip+ User in Shopify"
          >
            {{ user.firstName }} {{ user.lastName }} 
            <template v-slot:append>
              {{ user.gender }}
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

       

        
      </v-card>
    </v-menu>
  </div>

 
</template>

<script>
import { mapState } from "pinia";
import user from "@/store/user";
import axios from "axios";

export default {
  data: () => ({
    userInfo: {},

    show: false,
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
  computed: {
    ...mapState(user, ["user"]),
  },
  created() {
    axios.get("https://dummyjson.com/users/" + this.user.id).then((res) => {
      this.userInfo = res.data;
    });

    // fetch("https://dummyjson.com/users/" + this.user.id, {
    //     headers:{
    //         Authorization: 'Bearer ' + this.user.token
    //     },
    // }
    // )
    //   .then((res) => res.json())
    //   .then((data) => (this.userInfo = data));
  },
};
</script>
