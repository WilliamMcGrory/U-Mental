const posts = [
{
  id: 1,
  title: "William",
  date: "01 May 2017",
  description: "<p>Første side</p>",
  image: "https://image.ibb.co/bF9iO5/1.jpg",
  clip_path: "polygon(50% 0%, 70% 50%, 80% 100%, 0% 50%)" },

{
  id: 2,
  title: "Man bun leggings green juice quinoa",
  date: "04 April 2017",
  description: "<p>Andre side<\/p>",
  image: "https://image.ibb.co/dwDXGQ/2.jpg",
  clip_path: "polygon(31% 23%, 90% 30%, 50% 100%, 0% 50%)" },

{
  id: 3,
  title: "Ramps activated charcoal tumeric",
  date: "22 March 2017",
  description: "<p>tredje side</p>",
  image: "https://image.ibb.co/gnWKwQ/3.jpg",
  clip_path: "polygon(0 29%, 100% 0, 100% 70%, 48% 100%)" },

{
  id: 4,
  title: "Try-hard meggings raclette bitters",
  date: "12 February 2017",
  description: "<p>fjerde side side</p>",
  image: "https://image.ibb.co/cTfZVk/4.jpg",
  clip_path: "polygon(24% 0, 90% 30%, 79% 78%, 13% 76%)" },

{
  id: 5,
  title: "Mustache celiac bespoke freegan",
  date: "25 January 2017",
  description: "<p>femte side</p>",
  image: "https://image.ibb.co/e12RbQ/5.jpg",
  clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)" }];



const app = new Vue({
  el: "#app",
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
      textData: "Hey på deg"
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
      this.lastSelectedPost != 0)
      {
        this.lastSelectedPost--;
        this.ready = false;
        setTimeout(() => {
          this.currentPost = this.posts[this.lastSelectedPost];
          this.postImage = this.currentPost.image;
          this.ready = true;
        }, 600);
      }
    } },

  created() {
    window.addEventListener("keydown", e => {
      e.keyCode == 39 ? this.nextPost() : false;
      e.keyCode == 37 ? this.prevPost() : false;
      e.keyCode == 27 ? this.closePost() : false;
    });
  } });