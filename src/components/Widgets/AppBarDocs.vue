<template>
  <v-list class="px-3 py-5">
    <v-list-item
      v-for="(item, i) in pages"
      :key="item.title"
      class="ps-0"
      :class="i < pages.length - 1 ? 'mb-6' : ''"
    >
      <v-btn
        :ripple="false"
        text
        class="text-body text-capitalize ls-0"
        depressed
        link
        :to="item.link"
        v-if="!item.external"
      >
        <v-icon
          size="16"
          class="me-3 mb-6 material-icons-round text-dark opacity-6"
        >
          {{ item.icon }}
        </v-icon>
        <div class="d-flex flex-column">
          <span class="text-dark font-weight-bolder mb-1">{{
            item.title
          }}</span>
          <span class="text-sm text-body font-weight-light">{{
            item.description
          }}</span>
        </div>
        <v-spacer></v-spacer>
      </v-btn>

      <v-btn
        :ripple="false"
        text
        class="text-body text-capitalize ls-0"
        depressed
        link
        :href="item.link"
        v-if="item.external"
        target="_blank"
      >
        <v-icon
          size="16"
          class="me-3 mb-6 material-icons-round text-dark opacity-6"
        >
          {{ item.icon }}
        </v-icon>
        <div class="d-flex flex-column">
          <span class="text-dark font-weight-bolder mb-1">{{
            item.title
          }}</span>
          <span class="text-sm text-body font-weight-light">{{
            item.description
          }}</span>
        </div>
        <v-spacer></v-spacer>
      </v-btn>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  name: "app-bar-authentication",
  data() {
    return {
      pages: [
        {
          title: "Getting Started",
          description: "All about overview, quick start, license and contents",
          icon: "article",
          link: "/getting-started",
          external: false,
        },
        {
          title: "Components",
          description: "Explore our collection of fully designed components",
          icon: "apps",
          link: "https://vuetifyjs.com/en/components/alerts/",
          external: true,
        },
        {
          title: "Changelog",
          description: "See latest releases and changes",
          icon: "swipe",
          link: "https://github.com/creativetimofficial/ct-vuetify-material-dashboard-2-pro/blob/main/CHANGELOG.md",
          external: true,
        },
      ],
    };
  },
};
</script>
