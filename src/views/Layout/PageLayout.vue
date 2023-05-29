<template>
  <v-app>
    <v-main class="auth-pages">
      <div
        class="
          header-auth
          position-relative
          ma-4
          pb-30
          pt-30
          border-radius-xl
          min-vh-50
        "
        :style="
          this.$route.name == 'Pricing'
            ? `background-image: url(${require('../../assets/img/bg-pricing.jpg')}); background-size: cover; background-position: 50%;`
            : ''
        "
      >
        <v-container fluid>
          <v-row class="d-flex mt-5">
            <v-col cols="12" md="6" class="mx-auto py-0">
              <h2
                class="text-h2 font-weight-bold text-white text-center mb-2"
                v-if="this.$route.name == 'Pricing'"
              >
                {{ headerTitle() }}
              </h2>
              <h1
                class="
                  text-h1 text-white
                  font-weight-bolder
                  text-center
                  mb-2
                  mt-5
                "
                v-else
              >
                {{ headerTitle() }}
              </h1>
              <p
                class="
                  text-white
                  font-size-root
                  text-center
                  font-weight-thin
                  mb-12
                "
              >
                {{ paragraphs }}
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <app-bar-auth background="transparent" has-bg linkColor="white">
      </app-bar-auth>
      <fade-transition :duration="200" origin="center top" mode="out-in">
        <!-- your content here -->
        <v-container fluid class="pb-0 px-16">
          <router-view></router-view>
          <content-footer auth v-if="!$route.meta.hideFooter"></content-footer>
        </v-container>
      </fade-transition>
    </v-main>
  </v-app>
</template>
<script>
import AppBarAuth from "@/components/AppBarAuth";
import { FadeTransition } from "vue2-transitions";
import ContentFooter from "@/components/Footer.vue";

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
        case "Pricing":
          this.paragraphs =
            "You have Free Unlimited Updates and Premium Support on each package.";
          return "Pick the best plan for you";
        case "SignUpBasic":
          this.paragraphs =
            "Use these awesome forms to login or create new account in your project for free.";
          return "Welcome!";
        case "Register":
          this.paragraphs =
            "Use these awesome forms to login or create new account in your project for free.";
          return "Create an account";
        case "Lock":
          this.paragraphs = "Better to be safe than sorry.";
          return "Lock screen";
        default:
          break;
      }
    },
  },
};
</script>
