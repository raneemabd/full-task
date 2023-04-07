<template>
   
      <v-container style="width: 60%; ">
        <h1 class="text-center text-primary py-10">Add/Edit User</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="firstName" label="First Name" :rules="firstNameRules" required></v-text-field>
          <v-text-field v-model="lastName" label="lastName" :rules="lastNameRules" required></v-text-field>
          <v-text-field v-model="age" label="age" :rules="ageRules" required></v-text-field>

          <v-btn style="width:250px;height:50px;margin:0 auto;display:block" @click="submitForm" :disabled="!valid" >Add</v-btn>
          
        </v-form>
      </v-container>


</template>

<script>

export default {
  data: () => ({
    firstName: '',
    lastName: '',
    age: '',

    id:'',
    valid: false,
    isAdd: true,

    firstNameRules: [
      v => !!v || 'Title is required',
    ],
    lastNameRules: [
      v => !!v || 'Price is required',
    ],
    ageRules: [
      v => !!v || 'age is required',
    ],

  }),
 
}
</script>
