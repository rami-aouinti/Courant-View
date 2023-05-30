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
            Platform
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  name: "app-bar",
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
