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
        company: "GoBolt",
        position: "Software Developer",
        time: "May 2022 - August 2022",
        img: require("@/assets/images/js.png"),
        responsibilities: [
          "Worked with Docker, Ruby on Rails, Nest.js, Fastify, Node.js, Typescript and React on a shipping, storage and delivery app for companies to integrate with online stores and deliver orders to their customers..",
          "Created data adapters and integrated Shopify's API for use in the company's apps, and added order information to the UI for clients.",
           "In the Integrations team, improved the legacy multi-layered architecture core monolith RESTful API.",
           "Contributed to the development of a new integrations API to transfer data to the internal core API, with a",
           "microservices architecture backend written in Ruby on Rails.",
           "Added new endpoints to the warehouse REST API to update the stock of item variants.",
           "Created schemas and added CRUD actions for Rutter and BoxKnight products to be introduced to the core API.",
           "Created a front-end modal that added new online stores to a user’s GoBolt account.",
           "Submitted over 20 Pull Requests totaling over 1000 lines of code",
        ],
      },
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
