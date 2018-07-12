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
import firebase from 'firebase';

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
    const database = firebase.database().ref('posts/');
    database.once('value', (posts) => {
      Object.keys(posts.val()).forEach((key) => {
        this.postList.push(posts.val()[key]);
      });
    });
  },
  methods: {
    createPost() {
      if (this.text) {
        const database = firebase.database().ref('posts/');
        const post = { uid: '', text: '' };
        database.push({ text: this.text }).then((res) => {
          post.uid = res.key;
          res.on('child_added', (item) => {
            post.text = item.val();
            this.postList.push(post);
          });
        });
        this.text = '';
      }
    },
  },
};
</script>
<style>

</style>
