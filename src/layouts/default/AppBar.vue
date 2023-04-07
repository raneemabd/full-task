
<template>
  <v-app-bar color="primary">
    <v-app-bar-title class="red--text text--lighten-1">
      <v-btn to="/login" stacked v-if="!isLoggedIn">
        <v-icon color="#fcffe7"> mdi-account-circle </v-icon>
      </v-btn>
      <v-btn stacked to="/login" v-else @click="handle">
        <v-icon color="#fcffe7"> mdi-door</v-icon>
      </v-btn>

      <v-btn  to="/profile" stacked v-if="isLoggedIn" color="#fcffe7">Welcome! {{ user.firstName}}</v-btn>
      <v-btn to="/cart" variant="text" stacked>
        <v-badge :content="itemsNumber"
         floating color="red lighten-4">
          <v-icon color="#fcffe7"> mdi-cart  </v-icon>
        </v-badge>
      </v-btn>
      <v-btn to="/likes" stacked>
        <v-icon color="#fcffe7"> mdi-heart </v-icon>
      </v-btn>

    </v-app-bar-title>

    <template #append>
      <v-btn color="#fcffe7" to="/" exact stacked> Home </v-btn>
     
      <v-btn color="#fcffe7 darken-3" to="/products" stacked> Products </v-btn>
      <v-btn color="#fcffe7 darken-3" to="/Contact" stacked>Contact Us  </v-btn>
      <v-btn v-if="user.username === 'kminchelle'" color="#fcffe7 darken-3" to="/dashboard" stacked>Dashboard  </v-btn>
      <v-btn  stacked @click="toggleTheme">
        <v-icon color="#fcffe7" > mdi-theme-light-dark </v-icon>
      </v-btn>
      <v-btn  stacked @click="toggleLang">
        <v-icon color="#fcffe7" > mdi-abjad-arabic </v-icon>
      </v-btn>
    </template>
  </v-app-bar>


</template>

<script>
import { mapState } from 'pinia';
import cart from '@/store/cart'
import user from '@/store/user';
import { mapActions } from 'pinia';
import { useTheme } from 'vuetify'

export default {

  setup(){
    const theme = useTheme()
    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
  methods: {
    ...mapActions(user,['logout']),
    handle() {
      this.logout()
    },
    toggleLang(){
      this.$i18n.locale= this.$i18n.locale==='ar'? 'en': 'ar'
    }
   
  },
  computed:{
    ...mapState(cart ,['itemsNumber']),
    ...mapState(user ,['isLoggedIn','user'])
  }
}

</script>
