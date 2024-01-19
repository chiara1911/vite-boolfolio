<script>

import axios from "axios";
import {store} from "/src/data/store.js";

export default{
  name: 'App',
  components: {


  },
  data(){
return{
store,
projects:[],
currentPage: 1,
lastPage: 0,

};

  },
  methods:{
    getAllProjects(){
      axios.get(store.apiUrl + "/projects", {params:{page: this.currentPage}}).then((resp)=>{
        console.log(resp.data);
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
}
</script>

<template>
<ul>
  <li v-for="project in projects" :key="project.slug">
    <div>
<p> {{ project.title }}</p>
<p> {{ project.description }}</p>

<a href="#">{{ project.link }}</a>
    </div>
   
  </li>

</ul>
<button @click="nextPage">avanti</button>
<button @click="previousPage">indietro</button>


</template>


<style scoped lang="scss">

</style>