<template>
  <div class="container">
    <header class="jumbotron">
      fdgfsdgf
      <h3>{{ content }}</h3>
    </header>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      content: "",
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>
