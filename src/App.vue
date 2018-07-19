<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="currentUser.photoURL">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ currentUser.displayName }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list class="item">
        <v-list-tile value="true" @click="signOut">
          <v-list-tile-action>
            <v-icon v-html="icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="text"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar v-if="needTollBar" app :clipped-left="clipped">
      <v-toolbar-side-icon  @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
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

export default {
  name: 'App',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      icon: 'exit_to_app',
      text: 'Sair',
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vue PWA',
    };
  },
  methods: {
    signOut() {
      auth.signOut();
    },
  },
  computed: {
    needTollBar() {
      return !!auth.currentUser();
    },
    currentUser() {
      console.log(auth.currentUser().photoURL);
      return auth.currentUser();
    },
  },
};
</script>
<style>
.item {
  position: absolute;
  bottom: 0;
}
</style>
