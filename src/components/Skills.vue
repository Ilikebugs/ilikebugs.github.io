<template>
  <div>
    <v-row style="height: 20px"> </v-row>

    <div v-for="(sec, name) in this.skills" :key="name">
      <v-sheet class="mx-auto" elevation="8" max-width="800">
        <div class="text-center">
          <h3 class="title">{{ name }}</h3>
        </div>
        <v-slide-group class="pa-4" :show-arrows="true" :center-active="false">
          <v-slide-item v-for="(lang, ind) in sec" :key="ind">
            <v-card color="#e1f4f3" class="ma-4" height="200" width="200">
              <v-list-item three-line>
                <v-list-item-content>
                  <v-img :src="lang.img" contain width="80" height="80" />
                  <v-list-item-title class="headline mb-1">{{
                    lang.name
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{ lang.des }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
      <v-row style="height: 20px"> </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",

  data: () => ({
    skills: {
      Languages: [
        {
          name: "Python",
          des: "Backend design, Frontend design, Scripting, Machine learning, Data science",
          img: require("@/assets/images/py.png"),
        },
        {
          name: "JavaScript",
          des: "Backend design, Frontend design",
          img: require("@/assets/images/js.png"),
        },
        {
          name: "C++",
          des: "Embedded systems",
          img: require("@/assets/images/cpp.png"),
        },
        {
          name: "SQL",
          des: "Relational databases",
          img: require("@/assets/images/sql.png"),
        },
        {
          name: "NoSQL",
          des: "Non-relational databases",
          img: require("@/assets/images/mongodb.png"),
        },
      ],
      "Frameworks/Libraries": [
        {
          name: "React.js",
          des: "Frontend development",
          img: require("@/assets/images/js.png"),
        },
        {
          name: "Node.js",
          des: "Backend development",
          img: require("@/assets/images/js.png"),
        },
        {
          name: "Django",
          des: "Backend developemnt",
          img: require("@/assets/images/py.png"),
        },
        {
          name: "PyTorch",
          des: "Machine learning",
          img: require("@/assets/images/py.png"),
        },
      ],
      "Commandline tools": [
        {
          name: "Git",
          des: "Version control",
          img: require("@/assets/images/git.png"),
        },
        {
          name: "Bash",
          des: "Shell scripts",
          img: require("@/assets/images/bash.png"),
        },
        {
          name: "Vim",
          des: "Code editor/IDE",
          img: require("@/assets/images/vim.png"),
        },
        {
          name: "PowerShell",
          des: "CLIShell",
          img: require("@/assets/images/ps.png"),
        },
        {
          name: "Package Managers",
          des: "npm, yarn, pip, anaconda",
          img: require("@/assets/images/pacmanagers.png"),
        },
      ],
      "Operating Systems": [
        {
          name: "Windows",
          des: "Microsoft® Office suite, programming",
          img: require("@/assets/images/windows.png"),
        },
        {
          name: "Ubuntu",
          des: "Linux",
          img: require("@/assets/images/ubuntu.png"),
        },
      ],
    },
  }),
};
</script>