<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <h1 class="auth-container-header">Admin Login/Signup Page</h1>
      <form>
        <app-control-input type="email">E-Mail Address</app-control-input>
        <app-control-input type="password">Password</app-control-input>
        <app-button type="submit">{{
          isLogin ? "Login" : "Sign Up"
        }}</app-button>
        <app-button
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? "Signup" : "Login" }}</app-button
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminAuthPage",
  layout: "admin",
  data() {
    return {
      isLogin: true
    };
  }
};
</script>

<style scoped>
.admin-auth-page {
  color: whitesmoke;
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 500px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}

@media (max-width: 786px) {
  .auth-container {
    width: 100%;
  }
}

.auth-container-header {
  color: red;
}
</style>
