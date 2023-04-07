<template>
  <section style="background-color: #fcffe7 ; height: 100%;">
    <v-container > 
      <h1 class="font-weight-bold my-10 text-center pb-6" id="font">
        Login or sign up to join us!
      </h1>

      <v-row justify="center">
        <v-col cols="12" sm="12" md="12" lg="4" xl="4">
          <v-form @submit.prevent="submit">
            <v-text-field
              label="username"
              required
              v-model="username"
            ></v-text-field>
            <v-text-field
              label="password"
              required
              v-model="password"
              type="password"
            ></v-text-field>

            <v-btn type="submit"  color="primary" class="mr-4" @click="validate"  >
              Submit
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
              Reset Form
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import user from '@/store/user';
import { mapActions } from 'pinia';
export default {


  data: () => ({
    username: "kminchelle",
    password: "0lelplR",
  }),
  methods: {
    ...mapActions(user,['login']),
    submit(){
      this.login(this.username,this.password)
    }
  },
};
</script>
<style>
#font{
  font-family: "Brush Script MT", cursive;
  font-size: 36px;
  color: #603e1b;
}
</style>
