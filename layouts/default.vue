<template>
  <div>
    <the-header @sidenavToggle="displaySidenav = !displaySidenav" />
    <the-sidenav
      :show="displaySidenav"
      @close="displaySidenav = !displaySidenav"
    />
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: "Urbanist", sans-serif;
}
body {
  padding: 0;
  margin: 0;
  background-color: #111;
}
</style>

<script>
export default {
  data() {
    return {
      displaySidenav: false
    };
  }
};
</script>