<template>
  <v-app-bar
    absolute
    :color="background"
    height="auto"
    class="py-4 px-2 toolbar-content-padding-y-none"
    flat
  >
    <v-container>
      <v-row>
        <v-col cols="3" class="d-flex align-center">
          <p class="font-weight-bolder ms-lg-0 ms-4 mb-0 text-white text-sm">
            Material Dashboard 2 PRO
          </p>
        </v-col>

        <v-col cols="6" class="mx-auto text-center">
          <template v-if="!$vuetify.breakpoint.mobile">
            <v-menu
              v-for="item in links"
              :key="item.name"
              open-on-hover
              offset-y
              bottom
              min-width="360"
              max-width="600"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  :ripple="false"
                  color="transparent"
                  :class="{ 'btn-dark-hover': !hasBg, 'btn-hover': hasBg }"
                  class="
                    text-white
                    font-weight-light
                    text-capitalize
                    ls-0
                    align-center
                  "
                  depressed
                  link
                  :to="item.link"
                >
                  {{ item.name }}
                  <v-img
                    src="@/assets/img/down-arrow-white.svg"
                    alt="down-arrow"
                    class="arrow ms-1 d-lg-block d-none"
                  />
                </v-btn>
              </template>

              <v-list class="border-radius-xl overflow-hidden">
                <template v-if="item.name == 'Pages'">
                  <app-bar-pages></app-bar-pages>
                </template>
                <template v-if="item.name == 'Authentication'">
                  <app-bar-authentication></app-bar-authentication>
                </template>
                <template v-if="item.name == 'Applications'">
                  <app-bar-applications></app-bar-applications>
                </template>
                <template v-if="item.name == 'Ecommerce'">
                  <app-bar-ecommerce></app-bar-ecommerce>
                </template>
                <template v-if="item.name == 'Docs'">
                  <app-bar-docs></app-bar-docs>
                </template>
              </v-list>
            </v-menu>
          </template>
        </v-col>

        <v-col cols="3" class="text-right">
          <template v-if="!$vuetify.breakpoint.mobile">
            <v-btn
              elevation="0"
              color="#fff"
              class="font-weight-bolder py-4 px-4 ms-2"
              :class="
                this.$route.name == 'SignUpBasic'
                  ? 'btn-success bg-gradient-success'
                  : 'btn-primary bg-gradient-primary'
              "
              href="javascript:;"
              small
            >
              Buy Now
            </v-btn>
          </template>

          <v-btn
            v-show="$vuetify.breakpoint.mobile"
            elevation="0"
            :ripple="false"
            height="43"
            class="
              font-weight-600
              text-capitalize
              drawer-toggler
              btn-toggler-hover
              py-3
              px-6
              rounded-sm
            "
            color="transparent"
            @click="dialog = true"
          >
            <div class="drawer-toggler-inner">
              <i class="drawer-toggler-line" :class="{ 'bg-white': hasBg }"></i>
              <i class="drawer-toggler-line" :class="{ 'bg-white': hasBg }"></i>
              <i class="drawer-toggler-line" :class="{ 'bg-white': hasBg }"></i>
            </div>
          </v-btn>

          <v-dialog
            v-model="dialog"
            content-class="position-absolute top-0"
            width="95%"
          >
            <v-card class="card-shadow card-padding">
              <v-card-title
                class="
                  pt-0
                  px-4
                  card-padding
                  text-h6
                  font-weight-bold
                  text-typo
                  justify-space-between
                  border-bottom
                "
              >
                Material Dashboard 2 PRO

                <v-btn icon width="31" :ripple="false" @click="dialog = false">
                  <v-icon size="18" class="text-typo">fas fa-times</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text class="card-padding pb-0 d-flex flex-column px-0">
                <v-btn
                  v-for="item in links"
                  :key="item.name"
                  :ripple="false"
                  text
                  class="text-typo text-capitalize ls-0"
                  depressed
                  link
                  :to="item.link"
                >
                  {{ item.name }}
                  <v-spacer></v-spacer>
                </v-btn>

                <div class="border-bottom my-7"></div>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
import AppBarPages from "./Widgets/AppBarPages.vue";
import AppBarAuthentication from "./Widgets/AppBarAuthentication.vue";
import AppBarApplications from "./Widgets/AppBarApplications.vue";
import AppBarEcommerce from "./Widgets/AppBarEcommerce.vue";
import AppBarDocs from "./Widgets/AppBarDocs.vue";

export default {
  name: "app-bar",
  components: {
    AppBarPages,
    AppBarAuthentication,
    AppBarApplications,
    AppBarEcommerce,
    AppBarDocs,
  },
  props: {
    background: String,
    hasBg: Boolean,
    linkColor: String,
  },
  data() {
    return {
      dialog: false,
      links: [
        {
          name: "Pages",
        },
        {
          name: "Authentication",
        },
        {
          name: "Applications",
          link: "/pages/pages/login",
        },
        {
          name: "Ecommerce",
          link: "/pages/pages/register",
        },
        {
          name: "Docs",
          link: "/pages/pages/pricing-page/lock",
        },
      ],
    };
  },
};
</script>
