<template>
  
   
      <v-container style="width: 60%;">
        <h1 class="text-center text-primary py-10">Add/Edit product</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="title" label="Title" :rules="titleRules" required></v-text-field>
          <v-text-field v-model="price" label="Price" :rules="priceRules" required></v-text-field>
          <v-text-field v-model="description" label="Description" :rules="descriptionRules" required></v-text-field>
          <v-text-field v-model="imageUrl" label="Image URL"></v-text-field>
          <v-radio-group v-model="selectedOption" :mandatory="true" :rules="categoryRules" >
            <v-radio v-for="(option, index) in options" :key="index" :label="option" :value="option" />
          </v-radio-group>

          <v-btn style="width:250px;height:50px;margin:0 auto;display:block" @click="submitForm" :disabled="!valid" >Add</v-btn>

        </v-form>
      </v-container>


</template>

<script>

export default {
  data: () => ({
    title: '',
    price: '',
    description: '',
    imageUrl: '',

    options: ["men's clothing", "women's clothing"],
    selectedOption: '',

    id: '',
    valid: false,
    isAdd: true,


    titleRules: [
      v => !!v || 'Title is required',
    ],
    priceRules: [
      v => !!v || 'Price is required',
    ],
    descriptionRules: [
      v => !!v || 'Description is required',
    ],
    categoryRules: [
      v => !!v || 'Category is required',
    ],
  }),
 

}
</script>
