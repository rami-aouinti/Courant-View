<template>
  <v-app class="bg-white">
    <v-container class="position-sticky top-0 z-index-2 py-0">
      <v-row>
        <v-col cols="12" class="py-0">
          <app-bar-blur-auth> </app-bar-blur-auth>
        </v-col>
      </v-row>
    </v-container>
    <v-main class="auth-pages">
      <div class="header-auth position-relative border-radius-xl min-vh-100">
        <v-container class="py-0">
          <v-row>
            <v-col
              cols="6"
              class="
                d-lg-flex d-none
                h-100
                my-auto
                pe-0
                pa-0
                position-absolute
                top-0
                start-0
                text-center
                justify-center
                flex-column
              "
            >
              <div
                class="
                  position-relative
                  h-100
                  ma-5
                  px-7
                  border-radius-lg
                  d-flex
                  flex-column
                  justify-content-center
                "
                :style="`background-image: url(${require('@/assets/img/illustrations/illustration-signup.jpg')}); background-size: cover;`"
              ></div>
            </v-col>
            <v-col
              lg="4"
              md="7"
              class="d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5 py-0"
            >
              <fade-transition
                :duration="200"
                origin="center top"
                mode="out-in"
              >
                <!-- your content here -->
                <router-view></router-view>
              </fade-transition>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>
<script>
import AppBarBlurAuth from "@/components/AppBarBlurAuth";
import { FadeTransition } from "vue2-transitions";

export default {
  name: "page-layout",
  components: {
    AppBarBlurAuth,
    FadeTransition,
  },
  data() {
    return {};
  },
};
</script>
