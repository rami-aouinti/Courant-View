<template>
  <v-app-bar
    :color="background"
    height="auto"
    class="mt-8 px-0 mx-6 border-radius-xl toolbar-content-padding-y-none"
    :class="{ 'border-bottom': !hasBg }"
    flat
  >
    <v-row class="py-1">
      <v-col cols="12" sm="6" class="d-flex">
        <div>
          <v-breadcrumbs class="pb-0 pt-1 px-0">
            <v-breadcrumbs-item
              to="/dashboard"
              active-class="active-breadcrumb"
              class="opacity-5 text-dark"
            >
              <svg
                width="12px"
                height="12px"
                class="mb-1"
                viewBox="0 0 45 40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>shop</title>
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    transform="translate(-1716.000000, -439.000000)"
                    fill="#252f40"
                    fill-rule="nonzero"
                  >
                    <g transform="translate(1716.000000, 291.000000)">
                      <g transform="translate(0.000000, 148.000000)">
                        <path
                          d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"
                        ></path>
                        <path
                          d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </v-breadcrumbs-item>
            <li class="v-breadcrumbs__divider opacity-5 px-2 text-muted">/</li>
            <v-breadcrumbs-item class="opacity-5 text-dark">
              {{ $route.meta.groupName }}
            </v-breadcrumbs-item>
            <li class="v-breadcrumbs__divider opacity-5 px-2 text-muted">/</li>
            <v-breadcrumbs-item
              active-class="active-breadcrumb"
              class="no-default-hover text-typo"
            >
              <template v-if="$route.name === 'Dashboard'">Default</template>
              <template v-else>{{ $route.name }}</template>
            </v-breadcrumbs-item>
          </v-breadcrumbs>

          <h6 class="text-h6 font-weight-bolder text-typo mb-0">
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
            <i class="drawer-toggler-line"></i>
            <i class="drawer-toggler-line"></i>
            <i class="drawer-toggler-line"></i>
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
            color="rgba(0,0,0,.8)"
            light
            dense
            label="Search here"
            class="
              input-style
              font-size-input
              input-alternative input-icon
              me-md-3
            "
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
          <v-icon class="material-icons-round me-sm-1" size="20">
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
            <i class="drawer-toggler-line text-body"></i>
            <i class="drawer-toggler-line text-body"></i>
            <i class="drawer-toggler-line text-body"></i>
          </div>
        </v-btn>

        <v-btn
          icon
          :ripple="false"
          :class="{ 'btn-dark-hover': !hasBg, 'btn-hover': hasBg }"
          class="text-body px-5"
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
              class="text-body"
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
