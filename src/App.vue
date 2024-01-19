<template>
<HeaderComponent/>
<main>
  <ProjectApp/>
<TechComponent/>
<CategoryComponent/>
</main>


  
  
  </template>



<script>

// import 
import {store} from "./data/store";
import ProjectApp from "./components/main/ProjectApp.vue";
import HeaderComponent from "./components/header/HeaderComponent.vue";
import TechComponent from "./components/main/TechComponent.vue";
import CategoryComponent from "./components/main/CategoryComponent.vue";



export default{
 
  name: 'App',
  components: {
    ProjectApp,
    HeaderComponent,
    TechComponent,
    CategoryComponent,
 
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