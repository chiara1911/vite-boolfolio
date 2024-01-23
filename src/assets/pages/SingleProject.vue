<template>
  <div v-if="project">
<h1>Show Progetto</h1>
    <h3 >{{project.title}}</h3>
    <img :src="store.imagePath + project.image" :alt="project.title">
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../../data/store.js";
export default {
  name: "SingleProject",

  data() {
    return {
      store,
      project: null,
    };
  },

  methods: {
    getProjectData() {
      
      axios
        .get(`${this.store.apiUrl}/projects/${this.$route.params.slug}`)
        .then((res) => {
          // console.log(`${this.store.apiUrl}/projects/${this.$route.params.slug}`)
          if (res.data.results) {
        this.project = res.data.results;
          } else {
            this.$router.push;
          }
        });
    },
  },
  created() {
    this.getProjectData();
  },
};
</script>

<style lang="scss" scoped></style>
