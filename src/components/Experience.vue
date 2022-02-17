<template>
  <div id="expeience">
    <v-row style="height: 20px"> </v-row>
    <v-card
      color="#e1f4f3"
      class="ma-4"
      v-for="(job, ind) in this.jobs"
      :key="ind"
    >
      <v-list-item>
        <v-list-item-content>
          <v-img :src="job.img" contain width="80" height="80" />
          <v-list-item-title class="headline mb-1">{{
            job.position
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ job.time }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-for="(res, index) in job.responsibilities" :key="index">
        {{ res }}
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Experience (since University)",
  data: () => ({
    jobs: [
      {
        company: "Microsoft",
        position: "Full-stack Software Developer (WE Accelerate Project Team Member)",
        time: "May 2021 - August 2021",
        img: require("@/assets/images/js.png"),
        responsibilities: [
          "Led the creation of a file-sharing service with MongoDB, Express, Node.js, Typescript, Recoil and React.",
          "Developed an activity logger, user registration and React frontend for CRUD actions on a REST API",
          "Integrated the Passport and Bcrypt libraries for user authentication, protected routes, and password hashing.",
          "Implemented a backend using Node.js, and deployed using MongoDB, AWS, pipelines with Jenkins, and Docker.",
        ],
      },
    ],
  }),
};
</script>
