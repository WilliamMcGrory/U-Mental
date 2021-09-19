<template>
  <section class="container">
    <div class="content">
      <nav-bar></nav-bar>
      <h1>information</h1>
    </div>
  </section>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content{
  position: absolute;
  top: 0;
}

</style>

