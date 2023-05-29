<template>
  <v-app>
    <v-main class="auth-pages">
      <div
        class="
          header-auth
          position-relative
          ma-4
          pb-16
          pt-16
          border-radius-xl
          min-height-300
        "
        :style="`background-image:  url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'); background-size: cover; background-position: center;`"
      >
        <span
          class="mask bg-gradient-default border-radius-xl opacity-4"
        ></span>
        <v-img
          src="@/assets/img/shapes/waves-white.svg"
          alt="pattern-lines"
          class="position-absolute opacity-6 start-0 top-0 w-100"
          v-if="this.$route.name == 'Pricing'"
        ></v-img>
        <v-container>
          <v-row class="d-flex mt-5">
            <v-col cols="12" md="6" class="mx-auto py-0 position-relative">
              <h3
                class="text-h3 font-weight-bold text-white text-center mb-2"
                v-if="this.$route.name == 'Pricing'"
              >
                {{ headerTitle() }}
              </h3>
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
      <app-bar-auth background="transparent" has-bg> </app-bar-auth>
      <fade-transition :duration="200" origin="center top" mode="out-in">
        <!-- your content here -->
        <v-container class="mt-n16 pb-0">
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
