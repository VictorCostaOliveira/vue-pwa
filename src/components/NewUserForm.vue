<template>
  <div>
    <h1>Cadastro de usuario </h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="user.name"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="user.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="user.photoUrl"
        label="Link da foto"
        required
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        :rules="passwordRules"
        type="password"
        label="Password"
        required
      ></v-text-field>
      <v-btn
        :disabled="!valid"
        @click="submit"
      >
        submit
      </v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  name: 'NewUserForm',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        photoUrl: '',
      },
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
    };
  },
  methods: {
    submit() {
      this.$emit('userCreated', this.user);
    },
  },
};
</script>
<style>

</style>
