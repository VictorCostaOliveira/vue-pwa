<template>
  <v-container xs12 sm4 text-xs-center>
    <new-user-form v-on:userCreated="createUser"></new-user-form>
    <span>Faça login <router-link to="/login">aqui</router-link></span>
  </v-container>
</template>
<script>
import NewUserForm from './NewUserForm';
import auth from '../api/firebase-auth';

export default {
  name: 'Signin',
  components: { NewUserForm },
  data() {
    return {

    };
  },
  methods: {
    createUser(payload) {
      auth.signin(payload, () => {

      });
    },
  },
};
</script>
<style></style>
