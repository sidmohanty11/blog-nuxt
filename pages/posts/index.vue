<template>
  <div class="posts-page">
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
import { DUMMY_POSTS } from "~/store";

export default {
  data() {
    return {
      loadedPosts: DUMMY_POSTS
    };
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
