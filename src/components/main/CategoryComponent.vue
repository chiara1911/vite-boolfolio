<template>
  <div class="container">
    <ul class="card mt-4">
      <h3 class="card-head">Categorie</h3>
      <li
        v-for="category in categories"
        :key="category.slug"
        class="card-header"
      >
        <div class="card-body">
          <a href="#"
            ><p>{{ category.name }}</p></a
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from "../../data/store";
import axios from "axios";
export default {
  name: "CategoryComponent",
  data() {
    return {
      store,
      categories: [],
    };
  },
  methods: {
    getAllCategories() {
      axios.get(store.apiUrl + "/categories").then((resp) => {
        console.log(resp.data);
        this.categories = resp.data.results.data;
        console.log(resp.data.results.data);
      });
    },
  },
  mounted() {
    this.getAllCategories();
  },
};
</script>

<style lang="scss" scoped></style>
