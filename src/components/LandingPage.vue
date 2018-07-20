<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Bem vindo</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
        <v-btn xs4 color="primary" to="/login">Entrar</v-btn>
        <v-btn xs4 color="primary" to="/sign-in">Cadastro</v-btn>
        <v-btn xs4 color="primary" @click="googleLogin" >Google</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import FormLogin from './FormLogin';
import auth from '../api/firebase-auth';

export default {
  name: 'Login',
  components: { FormLogin },
  data() {
    return {

    };
  },
  methods: {
    googleLogin() {
      auth.googleLogin();
    },
  },
};
</script>
<style></style>
