<template>
  <section >
    <h1  class="text-center font-weight-bold my-8 text-primary" >
      Wear good, Be good !
    </h1>
  </section>
  <v-container>
    <v-row>
      <v-col  cols="12"
          sm="6"
          md="6"
          lg="4"
          xl="3" v-for="(item,i) in items" :key="item.id" >
        <v-card >
          <v-img :src="item.image" height="300px" cover></v-img>
          <v-card-title>{{item.title }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text ><b>Price: </b> {{ item.price }} $</v-card-text>
          <v-card-actions>
            <v-btn  color="#5F8D3E" variant="text"
             @click="removeItem(i)"> <v-icon  color="error"> mdi-delete </v-icon></v-btn
            >

            <v-card-text>{{ item.description }} </v-card-text>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import cart from '@/store/cart'

export default {
    computed:{
        ...mapState(cart, ["items"])
    },
    methods:{
        ...mapActions(cart,["removeItem"])
    }
    
}
</script>

<style>

</style>
