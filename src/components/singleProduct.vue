<template>
  <section >
    
    <v-container >

      <v-hover v-slot="{ isHovering, props }" open-delay="200">
        
        <v-card 
          :elevation="isHovering ? 16 : 2"
          :class="{ 'on-hover': isHovering }"
          class="mx-auto "
          max-width="350"
          v-bind="props">
          <v-img :src="image" height="200px" cover></v-img>
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text>{{ category }} </v-card-text>
          <v-divider></v-divider>
          <v-card-text><b>Price: </b> {{ price }} $</v-card-text>
          <v-card-actions>
            <v-btn
              variant="tonal"
              color="#5F8D3E"
              @click="addToCart({ id, title, price, image, category })"
              >Add To <v-icon class="ml-2"> mdi-cart </v-icon>
              <v-overlay
                activator="parent"
                location-strategy="connected"
                scroll-strategy="reposition"
              >
                <v-card class="pa-2" color="primary">
                  Successfuly Added , Lets Add More !
                </v-card>
              </v-overlay>
            </v-btn>
            <v-btn
              variant="tonal"
              color="#ff0000"
              :to="url"
              >
    
              Details
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn to="/likes"> <v-icon color="red"> mdi-heart </v-icon></v-btn>
    
            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>{{ description }} </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-hover>
    </v-container>
  </section>
</template>

<script>
import { mapActions } from "pinia";
import cartStore from "@/store/cart";

export default {
  data: () => ({
    url:'',
    show: false,
  }),
  created() {
    this.url = `/product-details/${this.id}`;
  },
  props: {
    id: { type: Number, required: true },
    title: {
      required: true,
    },
    price: { type: Number, required: true },
    category: {
      required: true,
    },
    description: {
      required: true,
    },
    image: {
      required: true,
    },
  },
  methods: {
    ...mapActions(cartStore, ["addToCart"]),
  },
};
</script>
