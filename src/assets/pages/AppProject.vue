<template>
  <div>
    <div>
      <label for="category" class="form-label">Categoria</label>
      <select
        class="form-control"
        id="category"
        name="category"
        v-model="selectedCategory"
        @change="filterProject"
      >
        <option value="" selected>Seleziona la Categoria</option>
        <option v-for="category in categories" :value="categories.slug">
          {{ category.name }}
        </option>
      </select>
    </div>
    <SlideComponent />
  </div>
</template>

<script>
import { store } from "../../data/store.js";
import axios from "axios";
import SlideComponent from "../../components/main/SlideComponent.vue";

export default {
  name: "AppProject",
  data() {
    return {
      store,
      categories: [],
    };
  },
  components: {
    SlideComponent,
  },
  methods: {
    getAllProjects() {
      axios
        .get(this.store.apiUrl + "/projects")
        .then((res) => {
        //   console.log(res.data);
          this.store.projects = res.data.results.data;
        //   console.log( res.data.results.data)
        })
        .catch((err) => {});
    },
    getAllCategories() {
      axios.get(store.apiUrl + "/categories").then((resp) => {
        // console.log(resp.data);
        this.categories = resp.data.results.data;
        console.log(resp.data.results.data);
      });
    },
    filterProject() {
        
      if (this.selectedCategory == "") {
        this.getAllProjects();
      } else {
        axios
          .get(this.store.apiUrl + "/projects", {
            params: { category: this.selectedCategory },
          })
          .then((res) => {
            console.log(res.data);
            this.store.projects = res.data.results.data;
          });
      }
      // console.log(this.selectedCategory);
    },
  },
  mounted() {
    this.getAllProjects();
    this.getAllCategories();
  },
};
</script>

<style lang="scss" scoped></style>
