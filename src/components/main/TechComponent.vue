<template>
  <div class="container">
    <ul class="card mt-4">
      <h3 class="card-head">Tecnologie</h3>
      <li
        v-for="technology in technologies"
        :key="technology.slug"
        class="card-header"
      >
        <div class="card-body">
          <a href="#"
            ><p>{{ technology.name }}</p></a
          >
        </div>
      </li>
    </ul>
  </div>
  <div>
    <!-- <carousel :items-to-show="1.5">
    <slide v-for="technology in technologies" :key="slide">
      <div class="card-body"  v-for="technology in technologies"
        :key="technology.slug">
          <a :href="'technology.{id}.show'"
            ><p>{{ technology.name }}</p></a
          >
        </div>
    </slide> -->

    <!-- <template #addons>
      <navigation />
      <pagination />
    </template> -->
  <!-- </carousel> -->
  </div>
</template>

<script>

import { store } from "../../data/store";
import axios from "axios";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  name: "TechComponent",
  data() {
    return {
      store,

      technologies: [],
    };    
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    getAllTechnologies() {
      axios.get(store.apiUrl + "/technologies").then((resp) => {
        // console.log( resp.data)
        this.technologies = resp.data.results.data;
        // console.log(resp.data.results.data);
        // this.currentPage = resp.data.results.current_page;
        // this.lastPage = resp.data.results.last_page;
      });
    },
  },
  mounted() {
    this.getAllTechnologies();
  },
};
</script>

<style lang="scss" scoped></style>
