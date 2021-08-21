<template>
  <section class="posts">
    <post-preview
      :is-admin="isAdmin"
      id="1"
      thumbnail="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      title="Hello World"
      previewText="Preview text"
    />
    <post-preview
      :is-admin="isAdmin"
      id="2"
      thumbnail="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      title="Hello World"
      previewText="Preview text"
    />
    <post-preview
      :is-admin="isAdmin"
      id="3"
      thumbnail="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      title="Hello World"
      previewText="Preview text"
    />
  </section>
</template>

<style scoped>
.posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>