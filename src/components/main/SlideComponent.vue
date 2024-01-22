<template>
  <carousel class="mt-3">
    <slide v-for="project in projects" :key="project.id">
      <ProjectCard :project="project"/>      
    </slide>
  </carousel>
</template>

<script>
import { store } from "../../data/store";
import axios from "axios";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import ProjectCard from "../ProjectCard.vue";
export default {
  name: "SlideComponent",
  data() {
    return {
      store,
      ProjectCard,
      projects: [],
    };
  },
  components: {
    Carousel,
    Slide,
    ProjectCard
  },
  methods: {
    getAllProjects() {
     // console.log('pippo')
      axios.get(store.apiUrl + "/projects").then((resp) => {
        //console.log( resp.data)
        // console.log(store.apiUrl + "/projects");
         this.projects = resp.data.results.data;
       console.log(this.projects);
      });
    },
  },
  mounted() {
    this.getAllProjects();
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 180px;
  object-fit: contain;
}

#slider {
  height: 380px;
}
</style>
