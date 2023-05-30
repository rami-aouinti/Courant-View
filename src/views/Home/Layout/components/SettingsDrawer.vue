<template>
  <div class="fixed-plugin" :class="showSettingsDrawer == true ? 'show' : ''">
    <v-card class="shadow-lg">
      <div class="card-padding mb-16">
        <div class="float-start">
          <h5 class="text-h5 text-dark font-weight-bold mt-3 mb-0">
            Material UI Configurator
          </h5>
          <p class="text-body font-weight-light">See our dashboard options.</p>
        </div>
        <div class="float-end mt-4">
          <v-btn
            :ripple="false"
            icon
            rounded
            width="20px"
            height="20px"
            class="text-dark"
            @click="$emit('toggleSettingsDrawer', false)"
          >
            <v-icon size="18" class="material-icons-round">clear</v-icon>
          </v-btn>
        </div>
      </div>
      <hr class="horizontal dark my-1" />
      <div class="card-padding">
        <div>
          <h6 class="text-h6 text-typo font-weight-bold mb-2">
            Sidebar Colors
          </h6>
          <v-btn-toggle
            tile
            color="accent-3 deep-purple"
            group
            v-model="sidebarColorModel"
            defaultValue="primary"
            rounded
          >
            <v-btn
              :elevation="0"
              height="23"
              width="23"
              min-width="23"
              small
              rounded
              :ripple="false"
              @click="$emit('updateSidebarColor', 'primary')"
              class="px-0 mx-0 bg-gradient-primary rounded-circle border-0 me-2"
            ></v-btn>
            <v-btn
              :elevation="0"
              height="23"
              width="23"
              min-width="23"
              small
              rounded
              :ripple="false"
              @click="$emit('updateSidebarColor', 'default')"
              class="px-0 mx-0 bg-gradient-default rounded-circle border-0 me-2"
            ></v-btn>
            <v-btn
              :elevation="0"
              height="23"
              width="23"
              min-width="23"
              small
              rounded
              :ripple="false"
              @click="$emit('updateSidebarColor', 'info')"
              class="px-0 mx-0 bg-gradient-info rounded-circle border-0 me-2"
            ></v-btn>
            <v-btn
              :elevation="0"
              height="23"
              width="23"
              min-width="23"
              small
              rounded
              :ripple="false"
              @click="$emit('updateSidebarColor', 'success')"
              class="px-0 mx-0 bg-gradient-success rounded-circle border-0 me-2"
            ></v-btn>
            <v-btn
              :elevation="0"
              height="23"
              width="23"
              min-width="23"
              small
              rounded
              :ripple="false"
              @click="$emit('updateSidebarColor', 'warning')"
              class="px-0 mx-0 bg-gradient-warning rounded-circle border-0 me-2"
            ></v-btn>
            <v-btn
              :elevation="0"
              height="23"
              width="23"
              min-width="23"
              small
              rounded
              :ripple="false"
              @click="$emit('updateSidebarColor', 'danger')"
              class="px-0 mx-0 bg-gradient-danger rounded-circle border-0 me-2"
            ></v-btn>
          </v-btn-toggle>
        </div>

        <h6 class="text-h6 text-typo font-weight-bold mb-0 mt-4">
          Sidenav Type
        </h6>
        <p class="text-sm text-body font-weight-light">
          Choose between 3 different sidenav types.
        </p>
        <div class="d-flex">
          <v-btn
            elevation="0"
            height="43"
            class="font-weight-bold text-uppercase btn-default py-2 px-6 me-2"
            color="#fff"
            small
            :class="
              sidebarTheme == 'dark'
                ? 'bg-gradient-default'
                : 'btn-outline-default'
            "
            @click="[$emit('updateSidebarTheme', 'dark'), active()]"
            >Dark</v-btn
          >
          <v-btn
            elevation="0"
            height="43"
            class="font-weight-bold text-uppercase btn-default py-2 px-4 me-2"
            color="#fff"
            small
            :class="
              sidebarTheme == 'transparent'
                ? 'bg-gradient-default'
                : 'btn-outline-default'
            "
            @click="[$emit('updateSidebarTheme', 'transparent'), active()]"
            >Transparent</v-btn
          >
          <v-btn
            elevation="0"
            height="43"
            class="font-weight-bold text-uppercase btn-default py-2 px-4 me-2"
            color="#fff"
            small
            :class="
              sidebarTheme == 'white'
                ? 'bg-gradient-default'
                : 'btn-outline-default'
            "
            @click="[$emit('updateSidebarTheme', 'white'), active()]"
            >White</v-btn
          >
        </div>
        <p class="text-sm d-lg-none d-block mt-3 text-body">
          You can change the sidenav type just on desktop view.
        </p>
        <div class="mt-7 d-flex align-center justify-between">
          <h6 class="text-h6 text-typo font-weight-bold mb-0">Navbar Fixed</h6>
          <v-switch
            class="mt-0 ms-auto pt-0 switch"
            v-model="navbarFixedModel"
            hide-details
            @change="$emit('toggleNavbarPosition', navbarFixedModel)"
          ></v-switch>
        </div>
        <hr class="horizontal dark mb-3 mt-4" />
        <v-btn
          elevation="0"
          height="43"
          class="
            font-weight-bold
            text-uppercase
            btn-info
            bg-gradient-primary
            py-2
            px-6
            me-2
            w-100
            mt-2
            text-xs
          "
          href="https://www.creative-tim.com/product/vuetify-material-dashboard-pro"
          color="#fff"
          >Buy Now</v-btn
        >
        <v-btn
          elevation="0"
          height="43"
          class="
            font-weight-bold
            text-uppercase
            btn-default btn-outline-default
            py-2
            px-6
            me-2
            w-100
            mt-4
            text-xs
            shadow-none
          "
          color="#fff"
          href="https://vuetifyjs.com/en/components/alerts/"
          target="_blank"
          >View documentation</v-btn
        >
        <div class="text-center d-flex mt-5">
          <gh-btns-star
            slug="creativetimofficial/ct-vuetify-material-dashboard-pro"
            class="mx-auto"
            show-count
          ></gh-btns-star>
        </div>
        <div class="text-center mt-6">
          <h6 class="text-h6 text-typo font-weight-bold mt-9 mb-2">
            Thank you for sharing!
          </h6>
          <div class="d-flex">
            <v-btn
              elevation="0"
              height="43"
              class="
                font-weight-bold
                text-uppercase
                btn-default
                py-2
                px-6
                mt-2
                text-xs
                me-2
                ms-auto
              "
              href="https://twitter.com/intent/tweet?text=Check%20Vuetify%20Material%20Dashboard%202%20PRO%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5%20%23vuetify%20https%3A//www.creative-tim.com/product/vuetify-material-dashboard-pro"
              color="#344767"
            >
              <v-icon size="12">fab fa-twitter me-2</v-icon>
              Tweet
            </v-btn>
            <v-btn
              elevation="0"
              height="43"
              class="
                font-weight-bold
                text-uppercase
                btn-default
                py-2
                px-6
                me-2 me-auto
                mt-2
                text-xs
              "
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/vuetify-material-dashboard-pro"
              color="#344767"
            >
              <v-icon size="12">fab fa-facebook me-2</v-icon>
              Share
            </v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
import Vue from "vue";
import VueGitHubButtons from "vue-github-buttons";
import "vue-github-buttons/dist/vue-github-buttons.css";

Vue.use(VueGitHubButtons);

export default {
  props: {
    showSettingsDrawer: {
      type: Boolean,
      default: false,
    },
    sidebarColor: {
      type: String,
      default: "success",
    },
    sidebarTheme: {
      type: String,
      default: "dark",
    },
    navbarFixed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sidebarColorModel: this.sidebarColor,
      isActive: false,
      navbarFixedModel: this.navbarFixed,
    };
  },
  methods: {
    active: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>
