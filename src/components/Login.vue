<template>
  <v-container xs12 sm4 text-xs-center>
    <!-- <new-user-form v-on:userCreated="createUser"></new-user-form> -->
    <form-login v-on:userLogin="login"></form-login>
    <span>Faça seu cadastro <router-link to="/sign-in">aqui</router-link></span>
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
    login(payload) {
      auth.login(payload);
    },
  },
};
</script>
<style></style>
