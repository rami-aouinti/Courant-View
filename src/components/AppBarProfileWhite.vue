<template>
  <v-app-bar
    :color="background"
    height="auto"
    class="
      mt-2
      position-sticky
      top-1
      px-0
      mx-4
      border-radius-xl
      toolbar-content-padding-y-none
    "
    :class="{ 'border-bottom': !hasBg }"
    flat
  >
    <v-row class="py-1">
      <v-col cols="12" sm="6" class="d-flex">
        <div>
          <v-breadcrumbs class="pb-0 pt-1 px-0">
            <v-breadcrumbs-item class="opacity-5 text-white">
              {{ $route.meta.groupName }}
            </v-breadcrumbs-item>
            <li class="v-breadcrumbs__divider opacity-5 px-2 text-white">/</li>
            <v-breadcrumbs-item
              active-class="active-breadcrumb"
              class="no-default-hover text-white"
            >
              <template v-if="$route.name === 'Dashboard'">Default</template>
              <template v-else>{{ $route.name }}</template>
            </v-breadcrumbs-item>
          </v-breadcrumbs>

          <h6 class="text-h6 font-weight-bolder text-white mb-0">
            {{ $route.name }}
          </h6>
        </div>

        <div
          class="drawer-toggler pa-5 ms-6 cursor-pointer"
          :class="{ active: togglerActive }"
          @click="minifyDrawer"
          v-if="!$vuetify.breakpoint.mobile"
        >
          <div class="drawer-toggler-inner">
            <i class="drawer-toggler-line bg-white"></i>
            <i class="drawer-toggler-line bg-white"></i>
            <i class="drawer-toggler-line bg-white"></i>
          </div>
        </div>
      </v-col>

      <v-col cols="12" sm="6" class="text-right">
        <v-form
          v-if="hasBg"
          @submit.prevent="submit"
          class="navbar-search navbar-search-light d-inline-block ms-auto"
          id="navbar-search-main"
        >
          <v-text-field
            rounded-sm
            hide-details
            outlined
            background-color="transparent"
            color="#fff"
            dark
            dense
            label="Search here"
            class="input-style font-size-input text-white me-md-3"
          >
          </v-text-field>
        </v-form>

        <v-btn
          icon
          :ripple="false"
          :class="{ 'btn-dark-hover': !hasBg, 'btn-hover': hasBg }"
          class="text-body"
          :color="linkColor"
          small
          @click="$emit('toggleSettingsDrawer', true)"
        >
          <v-icon class="material-icons-round text-white me-sm-1" size="20">
            account_circle
          </v-icon>
        </v-btn>

        <v-btn
          elevation="0"
          :ripple="false"
          height="43"
          class="
            font-weight-600
            text-capitalize
            drawer-toggler
            py-3
            px-0
            rounded-sm
          "
          :class="{
            'btn-dark-toggler-hover': !hasBg,
            'btn-toggler-hover': hasBg,
            active: togglerActive,
          }"
          v-if="$vuetify.breakpoint.mobile"
          color="transparent"
          @click="drawerClose"
        >
          <div class="drawer-toggler-inner">
            <i class="drawer-toggler-line text-white"></i>
            <i class="drawer-toggler-line text-white"></i>
            <i class="drawer-toggler-line text-white"></i>
          </div>
        </v-btn>

        <v-btn
          icon
          :ripple="false"
          :class="{ 'btn-dark-hover': !hasBg, 'btn-hover': hasBg }"
          class="text-white px-5"
          :color="linkColor"
          small
          @click="$emit('toggleSettingsDrawer', true)"
        >
          <v-icon class="material-icons-round" size="20"> settings </v-icon>
        </v-btn>

        <v-menu
          transition="slide-y-transition"
          offset-y
          offset-x
          min-width="300"
          max-width="300"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :ripple="false"
              :class="{ 'btn-dark-hover': !hasBg, 'btn-hover': hasBg }"
              class="text-white"
              :color="linkColor"
              v-bind="attrs"
              v-on="on"
              small
            >
              <v-icon class="material-icons-round" size="20">
                notifications
              </v-icon>
              <v-badge
                color="#f44335"
                content="11"
                offset-x="1"
                offset-y="0"
                class="position-absolute"
                bordered
              >
              </v-badge>
            </v-btn>
          </template>

          <v-list class="py-0">
            <v-list-item
              v-for="(item, i) in dropdown"
              :key="i"
              class="pa-4 list-item-hover-active"
            >
              <v-list-item-avatar
                :size="36"
                class="my-0 me-4 border-radius-lg"
                v-if="item.avatar"
              >
                <v-img
                  :alt="`${item.avatar} avatar`"
                  :src="item.avatar"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-avatar
                :size="36"
                class="my-0 me-4 border-radius-lg bg-gradient-default"
                v-if="item.image"
              >
                <v-img :alt="`${item.image} image`" :src="item.image"></v-img>
              </v-list-item-avatar>

              <v-list-item-avatar
                :size="36"
                class="my-0 me-4 border-radius-lg bg-gradient-secondary"
                v-if="item.icon"
              >
                <v-img
                  :alt="`${item.icon} icon`"
                  :src="item.icon"
                  class="pa-2"
                  width="10"
                  height="10"
                  contain
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content class="pa-0">
                <v-list-item-title
                  class="text-body-2 ls-0 text-typo font-weight-600 mb-0"
                >
                  <v-row>
                    <v-col>
                      <h6
                        class="text-sm font-weight-normal mb-1 text-typo"
                        v-html="item.title"
                      >
                        {{ item.title }}
                      </h6>
                    </v-col>
                  </v-row>
                </v-list-item-title>

                <p class="text-xs text-secondary mb-0">
                  <v-icon size="12" class="text-secondary"
                    >fa fa-clock me-1</v-icon
                  >
                  {{ item.time }}
                </p>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {
  name: "app-bar",
  props: {
    background: String,
    hasBg: Boolean,
    linkColor: String,
    toggleActive: String,
  },
  data() {
    return {
      drawer: false,
      togglerActive: false,
      dropdown: [
        {
          avatar: require("@/assets/img/team-2.jpg"),
          title:
            '<span class="font-weight-bold">New message</span> from Laur</h6>',
          time: "13 minutes ago",
        },
        {
          image: require("@/assets/img/small-logos/logo-spotify.svg"),
          title:
            '<span class="font-weight-bold">New album</span> by Travis Scott',
          time: "1 day",
        },
        {
          icon: require("@/assets/img/icons/card.svg"),
          title: "Payment successfully completed",
          time: "2 days",
        },
      ],
    };
  },
  methods: {
    drawerClose() {
      this.togglerActive = !this.togglerActive;
      this.$emit("drawer-toggle", true);
    },
    minifyDrawer() {
      this.togglerActive = !this.togglerActive;
      this.mini = !this.mini;
      const body = document.getElementsByTagName("body")[0];

      if (body.classList.contains("drawer-mini")) {
        body.classList.remove("drawer-mini");
      } else {
        body.classList.add("drawer-mini");
      }
    },
  },
  watch: {
    toggleActive(val) {
      this.togglerActive = val;
    },
  },
};
</script>
