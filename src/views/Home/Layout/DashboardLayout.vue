<template>
  <v-app>
    <drawer
      :drawer="drawer"
      :sidebarColor="sidebarColor"
      :sidebarTheme="sidebarTheme"
      :siteName="siteName"
    >
    </drawer>
    <v-main>
      <div
        @click="drawer = false"
        v-if="drawer"
        class="position-absolute drawer-state"
      ></div>
      <app-bar
        v-if="$route.name != 'Profile'"
        background="bg-transparent"
        has-bg
        @drawer-toggle="drawer = $event"
        :toggle-active="drawer"
        :navbarFixed="navbarFixed"
        @toggleSettingsDrawer="toggleSettingsDrawer"
      ></app-bar>
      <app-bar
        v-else-if="$route.name == 'Profile'"
        background="bg-default"
        has-bg
        @drawer-toggle="drawer = $event"
        :toggle-active="drawer"
      ></app-bar>
      <app-bar
        v-else
        background="primary"
        linkColor="rgba(0,0,0,.6)"
        @drawer-toggle="drawer = $event"
        :toggle-active="drawer"
      ></app-bar>
      <fade-transition :duration="200" origin="center top" mode="out-in">
        <!-- your content here -->
        <router-view></router-view>
      </fade-transition>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      <v-btn
        :ripple="false"
        icon
        rounded
        color="#fff"
        width="52px"
        height="52px"
        class="
          fixed-plugin-button
          position-fixed
          btn-light
          bg-white
          text-dark
          z-index-9999
        "
        @click="showSettingsDrawer = true"
      >
        <v-icon size="20">fa fa-cog py-2</v-icon>
      </v-btn>

      <settings-drawer
        :showSettingsDrawer="showSettingsDrawer"
        @toggleSettingsDrawer="toggleSettingsDrawer"
        @updateSidebarColor="updateSidebarColor"
        @updateSidebarTheme="updateSidebarTheme"
        @toggleNavbarPosition="toggleNavbarPosition"
      >
      </settings-drawer>
    </v-main>
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

import { FadeTransition } from "vue2-transitions";
import Drawer from "@/views/Home/Layout/components/Drawer.vue";
import AppBar from "@/views/Home/Layout/components/AppBar.vue";
import ContentFooter from "@/views/Home/Layout/components/Footer.vue";
import SettingsDrawer from "@/views/Home/Layout/components/SettingsDrawer.vue";
import UserService from "@/services/user.service";


export default {
  components: {
    ContentFooter,
    FadeTransition,
    Drawer,
    AppBar,
    SettingsDrawer,
  },
  data() {
    return {
      drawer: null,
      showSettingsDrawer: false,
      sidebarColor: "success",
      sidebarTheme: "dark",
      siteName: "Platform",
      navbarFixed: false,
    };
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
    toggleSettingsDrawer(value) {
      this.showSettingsDrawer = value;
    },
    updateSidebarColor(value) {
      this.sidebarColor = value;
    },
    updateSidebarTheme(value) {
      let siblings = event.target.closest("button").parentElement.children;
      for (var i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove("bg-gradient-default");
        siblings[i].classList.add("btn-outline-default");
      }
      event.target.closest("button").classList.add("bg-gradient-default");
      event.target.closest("button").classList.remove("btn-outline-default");
      this.sidebarTheme = value;
    },
    toggleNavbarPosition(value) {
      this.navbarFixed = value;
    },
  },
  mounted() {
    UserService.getSetting().then(
      (response) => {
        this.sidebarColor = response.data.sidebarColor;
        this.sidebarTheme = response.data.sidebarTheme;
        this.siteName = response.data.siteName;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    this.initScrollbar();
  },
};
</script>
<style lang="scss"></style>
