<template>
  <form @submit.prevent="onSave">
    <app-control-input v-model="editedPost.author"
      >Author Name</app-control-input
    >
    <app-control-input v-model="editedPost.title">Title</app-control-input>
    <app-control-input v-model="editedPost.thumbnailLink"
      >Thumbnail Link</app-control-input
    >
    <app-control-input control-type="textarea" v-model="editedPost.content"
      >Content</app-control-input
    >
    <app-button type="submit">Save</app-button>
    <app-button
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</app-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnailLink: "",
            content: ""
          }
    };
  },
  methods: {
    onSave() {
      // save the post
      console.log(this.editedPost);
    },
    onCancel() {
      // navigate back
      this.$router.push("/admin/newpost");
    }
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  }
};
</script>