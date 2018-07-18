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
    <h1>Olá {{ userName }}</h1>
    <post-list :posts="postList"></post-list>
  </v-container>
</template>
<script>
import PostList from '@/components/PostList';
import postApi from '../api/posts';
import auth from '../api/firebase-auth';

export default {
  name: 'Home',
  components: { PostList },
  data() {
    return {
      postList: [],
      text: '',
    };
  },
  mounted() {
    const self = this;
    postApi.getAllPosts((posts) => {
      posts.forEach((item) => {
        self.postList.push(item);
      });
    });
  },
  methods: {
    createPost() {
      if (this.text) {
        postApi.createPost(this.text, (post) => {
          this.postList.push(post);
        });
        this.text = '';
      }
    },
  },
  computed: {
    userName() {
      const user = auth.currentUser();
      return user.displayName;
    },
  },
};
</script>
<style>

</style>
