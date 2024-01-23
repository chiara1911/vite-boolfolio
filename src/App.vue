<template>
  <HeaderComponent />
  <main>
    <div class="container">
      <router-view></router-view>
      <div class="row">
        <div class="col-6">
          <ProjectApp />
          <TechComponent />
        </div>
        <div class="col-6">
          <CategoryComponent />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { store } from "./data/store";
import ProjectApp from "./components/main/ProjectApp.vue";
import HeaderComponent from "./components/header/HeaderComponent.vue";
import TechComponent from "./components/main/TechComponent.vue";
import CategoryComponent from "./components/main/CategoryComponent.vue";

import AppHeader from "./components/header/AppHeader.vue";
import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./assets/pages/AppHome.vue";

export default {
  name: "App",
  components: {
    ProjectApp,
    HeaderComponent,
    TechComponent,
    CategoryComponent,

    AppHeader,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<style scoped lang="scss"></style>
