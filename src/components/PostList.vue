<template>
  <v-list two-line class="meu-item">
    <div v-for="(post, index) in posts">

      <v-list-tile
        :key="post.title"
        avatar
        @click=""
      >
        <v-list-tile-avatar>
          <img v-if="!!post.user.photoUrl" :src="post.user.photoUrl">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title >{{ post.user.name }}</v-list-tile-title>
          <v-list-tile-sub-title >{{ post.text }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
    </div>
  </v-list>
</template>
<script >
export default {
  props: ['posts'],
  name: 'PostList',
  data() {
    return {
      selected: [],
    };
  },
  methods: {
    toggle(index) {
      const i = this.selected.indexOf(index);
      if (i > -1) {
        this.selected.splice(i, 1);
      } else {
        this.selected.push(index);
      }
    },
  },
};
</script>
<style>
.meu-item {
  border-radius: 10px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2)
}
.list-item {
  position: relative;
}
</style>
