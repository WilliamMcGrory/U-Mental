<template>
  <div class="picture-container">
    <!--Hovedsiden til et element i listen-->
    <div
      :class="[
        'post-view',
        selected ? 'post-view--active' : '',
        ready ? 'post-view--ready' : '',
      ]"
    >
      <div
        class="post-view__image"
        :style="'background-image:url(' + postImage + ');clip-path:' + clipPath"
      ></div>
      <div class="post-view__container" v-if="selected">
        <div class="post-controls">
          <div class="post-control post-control--close" @click="closePost()">
            <i class="ion-ios-close-empty"></i>
          </div>
          <div class="post-control" id="next-post" @click="nextPost()">
            <i class="ion-ios-arrow-right"></i>
          </div>
          <div class="post-control" id="prev-post" @click="prevPost()">
            <i class="ion-ios-arrow-left"></i>
          </div>
        </div>
        <h2 class="post-view__title">{{ currentPost.title }}</h2>
        <h3 class="post-view__date">{{ currentPost.date }}</h3>
        <div class="post-view__content">
          <div v-html="currentPost.description"></div>
          <iframe
            v-if="currentPost.link"
            height="315"
            :src="currentPost.link"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <!---->

    <!-- Listen på første side, v-for betyr liste -->
    <div :class="['post-list', selected ? 'post-list--hide' : '']">
      <div
        class="post"
        v-for="(item, index) in posts"
        :key="item.id"
        @mouseenter="changePost(index)"
        @click="selectedPost(index)"
      >
        <h2 class="post__title">
          {{ item.title }}
          <span class="post__date">{{ item.date }}</span>
        </h2>
      </div>
    </div>
  </div>
  <!---->
</template>

<script>
const posts = [
  {
    id: 1,
    title: "Composer - Wanja Hamre",
    date: "30 Okt 2020",
    description:
      "<p>From love to hate. A story of deception and the stages of grief from hate to acceptance. We give you Composer</p>",
    image: "https://image.ibb.co/bF9iO5/1.jpg",
    clip_path: "polygon(50% 0%, 70% 50%, 80% 100%, 0% 50%)",
    link: "https://www.youtube.com/embed/DmHjcqNiN6k",
  },

  {
    id: 2,
    title: "Dancing with the Devil | Dear Diary",
    date: "30. jun 2021",
    description: "<p>Andre side<\/p>",
    image: "https://image.ibb.co/dwDXGQ/2.jpg",
    clip_path: "polygon(31% 23%, 90% 30%, 50% 100%, 0% 50%)",
    link: "https://www.youtube.com/embed/OtJzOPAJyVU",
  },

  {
    id: 3,
    title: "Taking care of them all",
    date: "30 sep. 2020",
    description: "<p>A heartwrecking, honest and real tribute to PTSD</p>",
    image: "https://image.ibb.co/gnWKwQ/3.jpg",
    clip_path: "polygon(0 29%, 100% 0, 100% 70%, 48% 100%)",
    link: "https://www.youtube.com/embed/wt8PEjJvH6w",
  },

  {
    id: 4,
    title: "Train Wreck",
    date: "12 February 2017",
    description: "<p>fjerde side side</p>",
    image: "https://image.ibb.co/cTfZVk/4.jpg",
    clip_path: "polygon(24% 0, 90% 30%, 79% 78%, 13% 76%)",
    Link: "https://www.youtube.com/embed/NykgxTtJxNM",
  },

  {
    id: 5,
    title: "Try-hard meggings raclette bitters",
    date: "12 February 2017",
    description: "<p>fjerde side side</p>",
    image: "https://image.ibb.co/cTfZVk/4.jpg",
    clip_path: "polygon(24% 0, 90% 30%, 79% 78%, 13% 76%)",
  },

  {
    id: 6,
    title: "Mustache celiac bespoke freegan",
    date: "25 January 2017",
    description: "<p>femte side</p>",
    image: "https://image.ibb.co/e12RbQ/5.jpg",
    clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)",
  },
];

export default {
  components: {},

  data() {
    return {
      test: "",
      posts: posts,
      selectedClipPath: "polygon(0 100%, 0 0, 100% 0, 100% 100%)",
      postImage: posts[0].image,
      currentPost: null,
      postIndex: 0,
      selected: false,
      ready: false,
      lastSelectedPost: null,
      clipPath: posts[0].clip_path,
      textData: "Hey på deg",
    };
  },

  methods: {
    changePost(index) {
      if (this.postImage != this.posts[index].image && this.selected == false) {
        this.postImage = this.posts[index].image;
        this.clipPath = this.posts[index].clip_path;
      }
    },
    closePost() {
      if (this.lastSelectedPost != null) {
        this.selected = false;
        this.ready = false;
        this.clipPath = this.posts[this.lastSelectedPost].clip_path;
      }
    },
    selectedPost(index) {
      this.selected = true;
      this.clipPath = this.selectedClipPath;
      this.lastSelectedPost = index;
      this.currentPost = this.posts[index];
      setTimeout(() => {
        this.ready = true;
      }, 600);
    },
    nextPost() {
      if (this.lastSelectedPost < this.posts.length - 1) {
        this.lastSelectedPost++;
        this.ready = false;
        setTimeout(() => {
          this.currentPost = this.posts[this.lastSelectedPost];
          this.postImage = this.currentPost.image;
          this.ready = true;
        }, 600);
      }
    },
    prevPost() {
      if (
        this.lastSelectedPost <= this.posts.length - 1 &&
        this.lastSelectedPost != 0
      ) {
        this.lastSelectedPost--;
        this.ready = false;
        setTimeout(() => {
          this.currentPost = this.posts[this.lastSelectedPost];
          this.postImage = this.currentPost.image;
          this.ready = true;
        }, 600);
      }
    },
  },

  created() {
    //window.addEventListener("keydown", e => {
    //  e.keyCode == 39 ? this.nextPost() : false;
    //  e.keyCode == 37 ? this.prevPost() : false;
    //  e.keyCode == 27 ? this.closePost() : false;
    //});
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: "Inconsolata", monospace;
}

.picture-container {
  margin-top: 5%;
}

.post {
  cursor: pointer;
  margin-bottom: 50px;
  text-align: center;
  padding: 0 40px;
}
.post__date {
  display: block;
  width: 100%;
  font-family: "Inconsolata", monospace;
  font-size: 0.5em;
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: normal;
}
.post__title {
  font-family: "Nunito", sans-serif;
  font-size: 2em;
  padding: 12px 30px;
  font-weight: bold;
  position: relative;
}
.post__title:after {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  transition: width 0.3s ease 0s;
  content: "";
  background: #fbf9bd;
  transform: skew(-20deg);
}
.post__title:hover:after {
  width: 100%;
}
.post:last-child {
  margin-bottom: 0;
}

.post-list {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: all 0.3s ease 0s;
  transform: translateY(0px);
  visibility: visible;
}
.post-list--hide {
  transform: translateY(-20px);
  opacity: 0;
  visibility: hidden;
}

.post-view {
  transition: 0.3s ease 0s;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  position: absolute;
}
.post-view__date {
  font-family: "Inconsolata", monospace;
  margin-bottom: 60px;
  transform: translateY(45px);
  transition: transform 0.3s ease 0s;
}
.post-view__image {
  position: fixed;
  transition: all 0.5s ease 0s;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  width: 800px;
  background-size: cover;
  background-position: top;
  overflow: hidden;
  height: 450px;
  top: 50%;
  margin-top: -225px;
}
.post-view__container {
  position: absolute;
  top: 100px;
  width: 100%;
  max-width: 900px;
  z-index: 99;
  opacity: 0;
  transition: all 0.3s ease 0s;
}
.post-view__content {
  background: #fff;
  color: red;
  padding: 40px;
  margin-bottom: 80px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transform: translateY(85px);
  transition: transform 0.3s ease 0s;
}
.post-view__content p {
  font-size: 1.125em;
  margin-bottom: 30px;
  line-height: 25px;
}
.post-view__content p:last-child {
  margin-bottom: 0;
}

.post-view--active .post-view__image {
  position: absolute;
  background-position: top;
  transition: all 0.6s ease 0s;
  width: 100%;
  height: 100vh;
  top: 0;
  margin-top: 10%;
}

@media only screen and (max-width: 768px) {
  .post-view--active .post-view__image {
    position: fixed;
  }
}

.post-view__title {
  font-size: 2.875em;
  font-weight: bold;
  font-family: "Nunito", sans-serif;
  margin: 30px 0 15px 0;
  transform: translateY(45px) scaleY(0);
  transition: transform 0.3s ease-out 0s;
}
.post-view--ready .post-view__container {
  opacity: 1;
}
.post-view--ready .post-view__date,
.post-view--ready .post-view__content {
  transform: translateY(0px);
}
.post-view--ready .post-view__title {
  transform: translateY(0px) scaleY(1);
}

.post-controls {
  position: fixed;
  right: 20px;
  flex-direction: column;
  top: 20px;
  display: flex;
}

.post-control {
  cursor: pointer;
  font-size: 1.375em;
  background: #fbf9bd;
  margin-bottom: 15px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 43px;
  transition: all 0.3s ease 0s;
}
.post-control:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
.post-control--close {
  font-size: 2em;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
}
.post-control--close:hover {
  background: #000;
}

@media only screen and (max-width: 991px) {
  html {
    font-size: 13px;
  }

  .post-controls {
    bottom: 10px;
    z-index: 99;
    top: auto;
    background: rgba(0, 0, 0, 0.7);
    padding: 0 5px;
    justify-content: center;
    margin: auto;
    border-radius: 30px;
    height: 55px;
    align-items: center;
    flex-direction: row-reverse;
  }

  .post-control {
    margin: 0 5px;
  }
  .post-control--close {
    background: #000;
  }

  .post-view__container {
    padding: 0 90px;
  }
}
.logo {
  cursor: pointer;
  position: fixed;
  left: 30px;
  top: 30px;
  z-index: 9;
  width: 50px;
  height: 50px;
  transition: 0.3s ease 0s;
}
.logo--absolute {
  position: absolute;
}
.logo--absolute svg {
  fill: #fbf9bd;
}
.logo--active svg {
  fill: #fff;
}
.logo svg {
  width: 100%;
  transition: all 0.3s ease 0s;
}
</style>
