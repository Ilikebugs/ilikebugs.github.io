<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row style="height: 150px"> </v-row>
      </v-col>
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1"
                    >Rayton Lin</v-list-item-title
                  >
                  <v-list-item-subtitle
                    >University of Waterloo, Computer Science</v-list-item-subtitle
                  >
                  <div class="overline mb-4">2020 - 2025</div>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey" class="profile">
                  <v-img src="../assets/profile.jpg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn
                  text
                  href="https://www.linkedin.com/in/raytonlin2002/"
                  target="_blank"
                  >LinkedIn</v-btn
                >
                <v-btn
                  text
                  href="https://github.com/raytonlin1"
                  target="_blank"
                  >GitHub</v-btn
                >
                <v-btn
                  text
                  href="mailto:raytonlin@gmail.com"
                  target="_blank"
                  >Email</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({}),
};
</script>

<style>
</style>