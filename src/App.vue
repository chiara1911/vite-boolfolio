<template>
  <HeaderComponent />
  <main>
    <div class="container">
      <SlideComponent/>
      <div class="row">
        <div class="col-6">
          <!-- <ProjectApp /> -->
          <TechComponent />
         
        </div>
        <!-- <div class="col-6">
          <div class="row">
            <div class="col-6"></div> -->
          <div class="col-6">
          <CategoryComponent />
          </div>
       
          
        </div>
      <!-- </div>-->
     </div>  
  </main>
</template>

<script>
// import
import { store } from "./data/store";
import ProjectApp from "./components/main/ProjectApp.vue";
import HeaderComponent from "./components/header/HeaderComponent.vue";
import TechComponent from "./components/main/TechComponent.vue";
import CategoryComponent from "./components/main/CategoryComponent.vue";
import SlideComponent from "./components/main/SlideComponent.vue";


export default {
  name: "App",
  components: {
    ProjectApp,
    HeaderComponent,
    TechComponent,
    CategoryComponent,
    SlideComponent
},
  data() {
    return {
      store,
    };
  },
};
</script>
<style scoped lang="scss"></style>
