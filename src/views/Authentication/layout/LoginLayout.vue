<template>
  <v-app>
    <v-main class="auth-pages">
      <div
        class="position-relative min-vh-100"
        :style="`background-image:  url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80'); background-size: cover; background-position: 50%;`"
      >
        <span class="mask bg-gradient-default opacity-6"></span>
        <v-container class="my-auto">
          <v-row class="min-vh-100">
            <app-bar-auth background="transparent" has-bg linkColor="white">
            </app-bar-auth>
            <fade-transition :duration="200" origin="center top" mode="out-in">
              <!-- your content here -->
              <v-container class="pb-0 position-relative">
                <router-view></router-view>
                <content-footer
                  auth
                  v-if="!$route.meta.hideFooter"
                ></content-footer>
              </v-container>
            </fade-transition>
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>
<script>
import AppBarAuth from "@/components/Login.vue";
import { FadeTransition } from "vue2-transitions";
import ContentFooter from "@/components/FooterLogin.vue";

export default {
  name: "page-layout",
  components: {
    AppBarAuth,
    FadeTransition,
    ContentFooter,
  },
  data() {
    return {
      paragraphs: "",
      tab: null,
    };
  },
  methods: {
    headerTitle() {
      switch (this.$route.name) {
        case "SignUpBasic":
          this.paragraphs =
            "Use these awesome forms to login or create new account in your project for free.";
          return "Welcome!";
        default:
          break;
      }
    },
  },
};
</script>
