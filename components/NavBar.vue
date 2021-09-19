<template>
  <nav class="navbar">
    <NuxtLink class="nav-logo" to="/">U-MENTAL</NuxtLink>
    <ul :class="['nav-menu', menuShow ? 'active' : '']">
      <li class="nav-item">
        <NuxtLink class="nav-link" to="/">Home</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink class="nav-link" to="/information">About us</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink class="nav-link" to="/faq">Faq</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink class="nav-link" to="/test">Test</NuxtLink>
      </li>
    </ul>
    <div
      :class="['hamburger', menuShow ? 'active' : '']"
      @click="toogleHamburger()"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      menuShow: false,
    };
  },
  methods: {
    toogleHamburger() {
      this.menuShow = !this.menuShow;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: "Roboto", sans-serif;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.navbar {
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  width: 100%;
  background-color: white;
  z-index: 100;
}

.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  margin-left: 5rem;
}

.nav-link {
  font-size: 1.6rem;
  font-weight: 400;
  color: #475569;
}

.nav-link:hover {
  color: #482ff7;
}

.nav-logo {
  font-size: 2.1rem;
  font-weight: 500;
  color: #482ff7;
}

@media only screen and (max-width: 768px) {
  .navbar {
    position: fixed;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 3.5rem;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    margin: 2.5rem 0;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
