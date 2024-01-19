<template>
<HeaderComponent/>
  <ProjectApp/>

  
  
  </template>



<script>

// import 
import {store} from "./data/store";
import ProjectApp from "./components/ProjectApp.vue";
import HeaderComponent from "./components/header/HeaderComponent.vue";

export default{
 
  name: 'App',
  components: {
    ProjectApp,
   HeaderComponent,
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