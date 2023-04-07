<!-- <template>
  
   <productsSection></productsSection>
</template>

<script setup>
import productsSection from '@/components/productsSection.vue'

</script> -->
<template>
   <section style="background-color: #fcffe7">
     <h1 class="text-center  py-8" style="color: #603e1b">Wear Good, Be Good!</h1>
     <v-row class="d-flex flex-row justify-center align-center py-10">
       <v-col class="d-flex flex-row justify-center align-center " style="border-color: red; " ><input type="search" placeholder="Search " v-model="searchValue" ></v-col></v-row>
     <v-container>
 
       <v-row v-if="filterProductsBySearchValue.length > 0">
         <v-col
           cols="12"
           sm="6"
           md="6"
           lg="4"
           xl="3"
           v-for="product in filterProductsBySearchValue"
           :key="product.id"
         >
           <singleProduct v-bind="product" />
         </v-col>
       </v-row>
       <v-row v-else data-aos="zoom-in" data-aos-duration="1000" class="d-flex flex-row justify-center align-center ">
       <p class="text-center text-warning"><i>There are no products  match this...</i></p>
     </v-row>
     </v-container>
   </section>
 
   <v-divider></v-divider>
   <section>
     <v-container>
       <div class="text-center " >
         <h1 style="color: #603e1b">To be better, Together!</h1>
         <div class="text-center">
           <v-rating v-model="rating" readonly></v-rating>
         </div>
       </div>
     </v-container>
   </section>
   <v-data-table
     :custom-filter="filterOnlyCapsText"
     :headers="headers"
     :items="desserts"
     :search="search"
     class="elevation-1"
     item-value="name"
   >
     <template v-slot:top>
       <v-text-field
         v-model="search"
         label="Search (UPPER CASE ONLY)"
         class="pa-4"
       ></v-text-field>
     </template>
   </v-data-table>
 </template>
 
 <script>
 import singleProduct from "@/components/singleProduct.vue";

 
 
 export default {
   components: {
     singleProduct,
 
   },
   data() {
     return {
       url: '',
       isLoading: true,
       products: [],
       searchValue:'',
     };
   },
    computed: {
     filterProductsBySearchValue() {
       if(this.searchValue.trim().length > 0) {
         return this.products.filter(product => product.title.toLowerCase().includes(this.searchValue.trim().toLowerCase()))
       }
       return this.products 
       
     }
     
   },
   created() {
     this.url =  window.location.pathname.split('/')[2];
     this.loadApiProducts();
   },
   methods: {
     loadApiProducts() {
       fetch("https://fakestoreapi.com/products")
         .then((res) => res.json())
         .then((products) => (this.products = products.filter((ele) => {
           if(this.url === 'men') {
             return ele.category == "men's clothing"
           } else if(this.url == 'women'){
             return ele.category == "women's clothing"
           } else {
             return ele;
           }
         })
         ));
     },
 
     filteredList() {
       return this.products.filter((product) => {
         if(this.searchValue === 'men') {
             return product.category == "men's clothing"
           } else if(this.searchValue == 'women'){
             return product.category == "women's clothing"
           } else {
             return product;
           }
        
       })
     },
   },
 };
 </script>
 