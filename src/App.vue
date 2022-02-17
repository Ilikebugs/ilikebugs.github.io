<template>
<div class="back">
  <v-app id="app">
    <!-- <app-navigation></app-navigation> -->
    <v-container fluid ma-0 pa-0 >
      <v-tabs fixed-tabs>
        <v-tab to="/home">Home</v-tab>
        <v-tab to="/skills">Skills</v-tab>
        <v-tab to="/experience">Experience</v-tab>
      </v-tabs>
            <v-spacer></v-spacer>

      <router-view></router-view>
    </v-container>
  </v-app>
</div>
</template>

<script>
// import AppNavigation from '@/components/AppNavigation';

export default {
  name: 'App',

  components: {
    // AppNavigation
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.back {
  background-image: url(./assets/main.jpg);
  background-size: cover;
  background-position: center bottom;
}
#app {
  background: none;
}
</style>