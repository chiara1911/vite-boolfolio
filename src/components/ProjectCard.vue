<template>
    
        <div class="container">
        <div class="row">
          <div class="col-7">
            <img :src="project.image" :alt="project.title" />
          </div>
          <div class="col-5">
            <a href="#"
              ><p>{{ project.title }}</p></a
            >
            <p>{{ project.description }}</p>
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
      projects: [],
    };
  },
  components: {
  
  },
  methods: {
    getAllProjects() {
      axios.get(store.apiUrl + "/projects").then((resp) => {
        //  console.log( 'resp.data'+ resp.data)
        // console.log(store.apiUrl + "/projects");
        this.projects = resp.data.results.data;
        // console.log(resp.data.results.data);
      });
    },
  },
  mounted() {
    this.getAllProjects();
  },
}
</script>



<style lang="scss" scoped>

</style>