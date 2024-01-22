import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://localhost:8000/api",
  imagePath: "http://localhost:8000/storage/",
  projects:[]

});