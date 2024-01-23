<template>
  <section id="head">
    <div class="container">
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0 ps-3">
              <li class="nav-item" v-for="item in menu">
                <router-link
                  class="nav-link active"
                  :to="{ name: item.name }"
                  >{{ item.label }}</router-link
                >
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>
<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      menu: [
        {
          label: "Home",
          name: "home",
        },
        {
          label: "Projects",
          name: "projects",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  background-image: url(../../assets/img/jumbo-1.jpeg);
  height: 400px;
  width: 100%;
  object-fit: cover;
  //     background-color: red;
}
img {
  width: 100%;
}
</style>
