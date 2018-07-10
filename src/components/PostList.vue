<template>
  <v-list two-line >
    <div v-for="(post, index) in posts">
      <v-list-tile
        :key="post.title"
        avatar
        ripple
        @click="toggle(index)"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ post }}</v-list-tile-title>
          <!-- <v-list-tile-sub-title class="text--primary">{{ post.headline }}</v-list-tile-sub-title>
          <v-list-tile-sub-title>{{ post.subtitle }}</v-list-tile-sub-title> -->
        </v-list-tile-content>

        <v-list-tile-action>
          <v-list-tile-action-text>{{ post.action }}</v-list-tile-action-text>
          <v-icon
            v-if="selected.indexOf(index) < 0"
            color="grey lighten-1"
          >
            star_border
          </v-icon>

          <v-icon
            v-else
            color="yellow darken-2"
          >
            star
          </v-icon>
        </v-list-tile-action>

      </v-list-tile>
      <v-divider
        v-if="index + 1 < posts.length"
        :key="index"
      ></v-divider>

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

</style>
