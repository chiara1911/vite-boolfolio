<template>
  <div class="container">
    
    <ul class="card mt-4">
      <h3 class="card-head">Progetti</h3>
      <li v-for="project in projects" :key="project.slug" class="card-header">
        <div class="card-body">
          <p>{{ project.title }}</p>
          <p>{{ project.description }}</p>
          
          <a href="#">{{ project.link }}</a>
        </div>
      </li>
    </ul>
    <button @click="nextPage">avanti</button>
  <button @click="previousPage">indietro</button>
  </div>
</template>

<script>
import  {store} from "../../data/store";
import axios from "axios";
export default {
  name: "ProjectApp",
  data() {
    return {
      store,
      projects: [],
      currentPage: 1,
      lastPage: 0,
    };
  },
  methods:{
    getAllProjects(){
      axios.get(store.apiUrl + "/projects/", {params:{page: this.currentPage}}).then((resp)=>{
       
        this.projects = resp.data.results.data;
        this.currentPage = resp.data.results.current_page;
        this.lastPage = resp.data.results.last_page;
      })
    },
    nextPage(){
      this.currentPage +=1;
      this.getAllProjects();

    },
    previousPage(){
      this.currentPage -=1;
      this.getAllProjects();

    }
  },
  mounted() {
    this.getAllProjects();
  }
};
</script>

<style lang="scss" scoped></style>
