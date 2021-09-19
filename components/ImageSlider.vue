<template>
  <div class="sliderBody">
    <div class="gallery">
      <img
        src="https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
$time: 0.3s;

.sliderBody {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery {
  display: grid;
  grid-template-rows: repeat(5, 18vh);
  grid-template-columns: repeat(2, 45vw);
  transition: all $time ease(gravity);
  border-radius: 10px;
  padding: 0.25em;
  cursor: zoom-in;
  // grid-gap: .25em;

  @media (min-width: 40em) {
    grid-template-rows: repeat(2, 20vh);
  }

  @media (min-width: 10em) and (orientation: landscape) {
    grid-template-columns: repeat(5, 18vw);
    grid-template-rows: repeat(2, 45vh);
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(10, 8vw);
    grid-template-rows: 25vh;
  }
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: all $time/2 ease(downhill);
  position: relative;
  box-shadow: 0 0 0 #0000;
  opacity: 0.67;
  filter: sepia(80%) hue-rotate(180deg);

  &:first-child {
    border-radius: 10px 10px 0 0;
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }

  @media (min-width: 40em) and (max-width: 59.99em) {
    &:first-child {
      border-radius: 10px 0 0 0;
    }
    &:nth-child(5) {
      border-radius: 0 10px 0 0;
    }
    &:nth-child(6) {
      border-radius: 0 0 10px 0;
    }
    &:last-child {
      border-radius: 0 0 0 10px;
    }
  }

  @media (min-width: 60em) {
    &:first-child {
      border-radius: 10px 0 0 10px;
    }
    &:last-child {
      border-radius: 0 10px 10px 0;
    }
  }

  &:hover {
    opacity: 1;
    z-index: 1;
    box-shadow: 1em 1em 1em #0004;
    transition: all $time ease(downhill);
    filter: sepia(0%) hue-rotate(0deg);
    border-radius: 5px;
    width: 300%;
    height: 300%;
    left: -100%;
    top: -100%;

    @media (min-width: 40em) {
      width: 250%;
      height: 500%;
      left: -75%;
      top: -200%;
    }

    @media (min-width: 10em) and (orientation: landscape) {
      width: 250%;
      height: 200%;
    }

    @media (min-width: 40em) and (orientation: portrait) {
      width: 300%;
      height: 300%;
      left: -100%;
      top: -100%;
    }

    @media (min-width: 60em) {
      width: 350%;
      height: 150%;
      left: -75%;
      top: -25%;

      ~ img {
        left: 175%;
      }
    }

    @media (min-width: 60em) and (orientation: landscape) {
      width: 300%;
      height: 300%;
      left: -75%;
      top: -100%;

      ~ img {
        left: 100%;
      }
    }
  }
}
</style>
