<template>
  <div>
    <template v-if="auth">
      <v-footer
        color="transparent"
        class="px-6 position-absolute w-100 bottom-0"
        v-if="$route.name != 'SignUpCover' && $route.name != 'Pricing'"
      >
        <v-card class="flex" color="transparent">
          <v-card-text class="px-0">
            <v-row>
              <v-col cols="12" md="6">
                <div class="copyright text-body-2 ls-0 text-white">
                  © {{ new Date().getFullYear() }}, made with
                  <i class="fa fa-heart" aria-hidden="true"></i> by
                  <a
                    href="https://www.creative-tim.com"
                    class="
                      text-decoration-none text-white text-body-2
                      ls-0
                      font-weight-bold
                    "
                    target="_blank"
                    >Creative Tim</a
                  >
                  for a better web.
                </div>
              </v-col>

              <v-col cols="10" md="6" class="d-flex justify-end">
                <ul
                  v-for="item in footer"
                  :key="item.linkName"
                  class="d-flex list-style-none"
                >
                  <li>
                    <a
                      :href="item.link"
                      class="
                        text-decoration-none text-white text-body-2
                        ls-0
                        no-default-hover
                      "
                      target="_blank"
                      >{{ item.linkName }}</a
                    >
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-footer>

      <v-footer color="transparent" class="mt-10 pb-5" v-else>
        <v-card class="flex" color="transparent">
          <v-card-text class="px-0">
            <v-row>
              <v-col cols="12" lg="8" class="mb-2 mx-auto text-center">
                <a
                  v-for="item in footer"
                  :key="item.linkName"
                  :href="item.link"
                  class="text-decoration-none text-secondary ls-0 mx-4 text-md"
                  target="_blank"
                  >{{ item.linkName }}</a
                >
              </v-col>
              <v-col cols="8" class="mx-auto text-center">
                <v-btn
                  v-for="item in icons"
                  :key="item.icon"
                  icon
                  width="31"
                  :ripple="false"
                  class="mx-3 text-secondary no-default-hover"
                  link
                  href="javascript:;"
                  target="_blank"
                >
                  <v-icon size="18">{{ item.icon }}</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8" class="mx-auto text-center">
                <p
                  class="
                    copyright
                    text-secondary
                    font-weight-light
                    text-md
                    ls-0
                  "
                >
                  Copyright © {{ new Date().getFullYear() }}
                  Material by
                  <a
                    href="https://www.creative-tim.com"
                    class="text-decoration-none btn-hover text-body ls-0"
                    target="_blank"
                    >Creative Tim</a
                  >
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>

    <template v-else>
      <v-footer color="transparent" class="px-6">
        <v-card class="flex" color="transparent">
          <v-card-text class="px-0">
            <v-row>
              <v-col cols="12" md="6">
                <div class="copyright text-body-2 ls-0 text-muted">
                  © {{ new Date().getFullYear() }}, made with
                  <i class="fa fa-heart" aria-hidden="true"></i> by
                  <a
                    href="https://www.creative-tim.com"
                    class="
                      text-decoration-none text-typo text-body-2
                      ls-0
                      font-weight-bold
                    "
                    target="_blank"
                    >Creative Tim</a
                  >
                  for a better web.
                </div>
              </v-col>

              <v-col cols="10" md="6" class="d-flex justify-end">
                <ul
                  v-for="item in footer"
                  :key="item.linkName"
                  class="d-flex list-style-none"
                >
                  <li>
                    <a
                      :href="item.link"
                      class="
                        text-decoration-none text-muted text-body-2
                        ls-0
                        btn-dark-hover
                        no-default-hover
                      "
                      target="_blank"
                      >{{ item.linkName }}</a
                    >
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </div>
</template>
<script>
export default {
  name: "content-footer",
  props: {
    auth: Boolean,
  },
  data() {
    return {
      footer: [
        {
          linkName: "Creative Tim",
          link: "https://www.creative-tim.com/",
        },
        {
          linkName: "About Us",
          link: "https://www.creative-tim.com/presentation",
        },
        {
          linkName: "Blog",
          link: "http://blog.creative-tim.com/",
        },
        {
          linkName: "License",
          link: "https://www.creative-tim.com/license",
        },
      ],
      icons: [
        {
          icon: "fab fa-dribbble",
        },
        {
          icon: "fab fa-twitter",
        },
        {
          icon: "fab fa-instagram",
        },
        {
          icon: "fab fa-pinterest",
        },
        {
          icon: "fab fa-github",
        },
      ],
    };
  },
};
</script>
