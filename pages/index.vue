<template>
  <section class="container">
    <div class="content">
      <nav-bar> </nav-bar>
      <picture-nav> </picture-nav>
    </div>
  </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import PictureNav from "../components/PictureNav.vue";

export default {
  components: {
    NavBar,
    PictureNav,
  },
  methods: {},
};
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.content {
  position: absolute;
  top: 0;
}
</style>
