<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          @click="signOut"
        >
          <v-list-tile-action>
            <v-icon v-html="icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="text"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      v-if="needTollBar"
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon  @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <!-- <v-footer :fixed="fixed" app>
    </v-footer> -->
  </v-app>
</template>

<script>
import auth from '@/api/firebase-auth';
import firebase from '@/api/Api';

export default {
  name: 'App',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      icon: 'bubble_chart',
      text: 'Inspire',
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vue PWA',
    };
  },
  methods: {
    signOut() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/');
      });
    },
  },
  computed: {
    needTollBar() {
      return !!auth.currentUser();
    },
  },
};
</script>
