<template>
  <div>
    <h1>Login</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="user.email"
        :rules="emailRules"
        label="E-mail"
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
  name: 'FormLogin',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      valid: false,
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
      this.$emit('userLogin', this.user);
    },
  },
};
</script>
<style>

</style>
