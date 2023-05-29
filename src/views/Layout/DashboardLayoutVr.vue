<template>
  <v-app class="virtual-reality">
    <div>
      <app-bar
        background="bg-transparent"
        has-bg
        @drawer-toggle="drawer = $event"
        :toggle-active="drawer"
      ></app-bar>
    </div>
    <v-main
      class="mt-4 mx-4 border-radius-xl position-relative"
      :style="`background-image: url(${require('../../assets/img/vr-bg.jpg')}); background-size: cover;`"
    >
      <drawer :drawer="drawer" class="bg-white border-radius-xl"></drawer>
      <fade-transition :duration="200" origin="center top" mode="out-in">
        <!-- your content here -->
        <router-view></router-view>
      </fade-transition>
    </v-main>
    <content-footer v-if="!$route.meta.hideFooter"></content-footer>
  </v-app>
</template>
<script>
// /* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

// import DashboardNavbar from './DashboardNavbar.vue';
import { FadeTransition } from "vue2-transitions";
import Drawer from "@/components/Drawer.vue";
import AppBar from "@/components/AppBar.vue";
import ContentFooter from "@/components/Footer.vue";

export default {
  components: {
    ContentFooter,
    FadeTransition,
    Drawer,
    AppBar,
  },
  data() {
    return {
      drawer: null,
    };
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
  },
  mounted() {
    this.initScrollbar();
  },
};
</script>
<style lang="scss"></style>
