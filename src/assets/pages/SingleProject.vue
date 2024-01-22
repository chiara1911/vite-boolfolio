<template>
  <div>
<h1>hello spank</h1>
    <h3 v-if="project">{{project.title}}</h3>
    <img :src="store.imagePath + project.image" :alt="project.title">
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../../data/store.js";
export default {
  name: "SingleProject",
  props: ['project'],
  data() {
    return {
      store,
    //   project: null,
    };
  },
  methods: {
    getProjectData() {
      console.log(this.$route);
      axios
        .get(`${this.store.apiUrl}/projects/${this.$route.params.slug}`)
        .then((res) => {
          console.log(res.data);
        //   if (res.data.results) {
        //     this.project = res.data.results;
        //   } else {
        //     this.$router.push;
        //   }
        });
    },
  },
  created() {
    this.getProjectData();
  },
};
</script>

<style lang="scss" scoped></style>
