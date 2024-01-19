<template>
  <ProjectApp/>
  <button @click="nextPage">avanti</button>
  <button @click="previousPage">indietro</button>
  
  
  </template>



<script>

// import 
import {store} from "./data/store";
import ProjectApp from "./components/ProjectApp.vue";

export default{
 
  name: 'App',
  components: {
    ProjectApp,
  },
  data(){
    return{
      store,          
    }
  }, 
  }
</script>
<style scoped lang="scss">

</style>