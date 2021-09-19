<template>
  <section class="container">
    <div class="content">
      <nav-bar></nav-bar>
      <image-slider> </image-slider>
      <h1>information</h1>
    </div>
  </section>
</template>

<script>
import ImageSlider from "../components/ImageSlider.vue";
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar,
    ImageSlider,
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content {
  position: absolute;
  top: 0;
}
</style>
