<template>
  <v-container fluid>
    <v-flex xs12 sm6>
      <v-text-field
        label="Digite algo aqui"
        single-line
        solo
        v-model="text"
        @keyup.enter="createPost"
      ></v-text-field>
    </v-flex>
    <post-list :posts="postList"></post-list>
  </v-container>
</template>
<script>
import PostList from '@/components/PostList';

export default {
  name: 'Home',
  components: { PostList },
  data() {
    return {
      postList: [],
      text: '',
    };
  },
  methods: {
    createPost() {
      this.postList.push(this.text);
      this.text = '';
    },
  },
};
</script>
<style scoped>

</style>
