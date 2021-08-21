<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <img :src="loadedPost.thumbnail" alt="thumbnail" style="width: 100%" />
      <div class="post-details">
        <div class="post-detail">last updated {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
      <section class="post-feedback">
        <p>
          <i>Want to give any feedback? mail to</i>
          <a href="mailto:sidmohanty11@gmail.com">sidmohanty11@gmail.com</a>
        </p>
      </section>
    </section>
  </div>
</template>

<script>
const DUMMY_POSTS = {
  id: "1",
  author: "Sidharth",
  updatedDate: new Date().toString(),
  title: "My Title 1",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel risus commodo viverra maecenas accumsan. Ut tellus elementum sagittis vitae et. Quis varius quam quisque id diam vel. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Sed egestas egestas fringilla phasellus faucibus scelerisque. Venenatis cras sed felis eget velit aliquet. Lacinia at quis risus sed vulputate odio. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Nisl tincidunt eget nullam non nisi est. In arcu cursus euismod quis viverra nibh. Nibh tellus molestie nunc non blandit massa enim nec dui. Tortor pretium viverra suspendisse potenti nullam ac. Vel eros donec ac odio tempor orci dapibus ultrices. Vitae justo eget magna fermentum.

Aliquam etiam erat velit scelerisque. Tincidunt praesent semper feugiat nibh sed. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Lobortis feugiat vivamus at augue eget arcu dictum varius. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Enim facilisis gravida neque convallis a cras. Ac turpis egestas sed tempus urna et. Augue ut lectus arcu bibendum at varius vel pharetra. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Cras sed felis eget velit aliquet sagittis id consectetur. Ultrices in iaculis nunc sed augue lacus viverra vitae.`,
  previewText: "My previewText 1",
  thumbnail:
    "https://images.unsplash.com/photo-1558259299-5d46c4408730?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=991&q=80"
};

export default {
  data() {
    return {
      loadedPost: DUMMY_POSTS
    };
  }
};
</script>

<style>
.single-post-page {
  color: whitesmoke;
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>