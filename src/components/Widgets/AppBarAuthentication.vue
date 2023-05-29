<template>
  <v-list class="py-0">
    <v-list-item v-for="item in pages" :key="item.title" class="mb-0 ps-0">
      <v-btn
        :ripple="false"
        text
        class="text-dark font-weight-normal text-capitalize ls-0"
        depressed
        link
        :to="item.link"
      >
        {{ item.title }}
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
          title: "Sign Up Basic",
          link: "/pages/authentication/signup/basic",
        },
        {
          title: "Sign Up Cover",
          link: "/pages/authentication/signup/cover",
        },
        {
          title: "Sign Up Illustration",
          link: "/pages/authentication/signup/illustration",
        },
      ],
    };
  },
};
</script>
