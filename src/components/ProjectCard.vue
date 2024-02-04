<template>
  <div class="container ">
    <div class="row">
      <div class="col-4">
        <img :src="project.image" :alt="project.title" />
      </div>
      <div class="col-5">
        <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">
          <p>{{ project.title }}</p>
        </router-link>
        <p class="">{{ project.description }}</p>
        <a href="#">{{ project.link }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
import axios from "axios";

export default {
  name: "ProjectCard",
  data() {
    return {
      store,

    };
  },
  props: ["project"],

  components: {

  },
  methods: {
    getAllProjects() {
      //    console.log('pippo')
      axios.get(store.apiUrl + "/projects").then((resp) => {
        // console.log( resp.data)
        // console.log(store.apiUrl + "/projects");
        this.project = resp.data.results.data;
        console.log(resp.data.results.data);
      });
    },
  },
  //   mounted() {
  //     this.getAllProjects();
  //   },
};
</script>

<style lang="scss" scoped>
img {
  width: 200px;
}
</style>
