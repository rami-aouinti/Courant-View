<template>
  <v-container>
    <v-row>
      <v-col cols="4" class="position-relative py-0">
        <v-list v-for="item in pages1" :key="item.title" class="px-3">
          <v-subheader class="d-flex align-center mb-0">
            <v-icon
              class="material-icons-round me-2 text-dark opacity-6"
              size="16"
            >
              {{ item.icon }}
            </v-icon>
            <span class="text-dark font-weight-bolder text-sm">{{
              item.title
            }}</span>
            <v-spacer></v-spacer>
          </v-subheader>
          <v-list-item
            v-for="item2 in item.links"
            :key="item2.title"
            class="mb-0 ms-2 ps-4"
          >
            <v-btn
              :ripple="false"
              text
              class="text-body text-capitalize font-weight-light ls-0"
              depressed
              link
              :to="item2.link"
            >
              <span class="text-body">{{ item2.title }}</span>
              <v-spacer></v-spacer>
            </v-btn>
          </v-list-item>
        </v-list>
        <hr class="vertical dark" />
      </v-col>
      <v-col cols="4" class="position-relative py-0">
        <v-list v-for="item in pages2" :key="item.title" class="px-3">
          <v-subheader class="d-flex align-center mb-0">
            <v-icon
              class="material-icons-round me-2 text-dark opacity-6"
              size="16"
            >
              {{ item.icon }}
            </v-icon>
            <span class="text-dark font-weight-bolder text-sm">{{
              item.title
            }}</span>
            <v-spacer></v-spacer>
          </v-subheader>
          <v-list-item
            v-for="item2 in item.links"
            :key="item2.title"
            class="mb-0 ms-2 ps-4"
          >
            <v-btn
              :ripple="false"
              text
              class="text-body text-capitalize font-weight-light ls-0"
              depressed
              link
              :to="item2.link"
            >
              <span class="text-body">{{ item2.title }}</span>
              <v-spacer></v-spacer>
            </v-btn>
          </v-list-item>
        </v-list>
        <hr class="vertical dark" />
      </v-col>
      <v-col cols="4" class="position-relative py-0">
        <v-list v-for="item in pages3" :key="item.title" class="px-3">
          <v-subheader class="d-flex align-center mb-0">
            <v-icon
              class="material-icons-round me-2 text-dark opacity-6"
              size="16"
            >
              {{ item.icon }}
            </v-icon>
            <span class="text-dark font-weight-bolder text-sm">{{
              item.title
            }}</span>
            <v-spacer></v-spacer>
          </v-subheader>
          <v-list-item
            v-for="item2 in item.links"
            :key="item2.title"
            class="mb-0 ms-2 ps-4"
          >
            <v-btn
              :ripple="false"
              text
              class="text-body text-capitalize font-weight-light ls-0"
              depressed
              link
              :to="item2.link"
            >
              <span class="text-body">{{ item2.title }}</span>
              <v-spacer></v-spacer>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "app-bar-authentication",
  data() {
    return {
      pages1: [
        {
          title: "Dashboards",
          icon: "dashboard",
          links: [
            {
              title: "Analytics",
              link: "/pages/dashboards/analytics",
            },
            {
              title: "Discover",
              link: "/pages/dashboards/discover",
            },
            {
              title: "Sales",
              link: "/pages/dashboards/sales",
            },
            {
              title: "Automotive",
              link: "/pages/dashboards/automotive",
            },
            {
              title: "Smart Home",
              link: "/pages/dashboards/smart-home",
            },
          ],
        },
        {
          title: "Users",
          icon: "people",
          links: [
            {
              title: "Reports",
              link: "/pages/pages/users/reports",
            },
            {
              title: "New User",
              link: "/pages/pages/users/new-user",
            },
          ],
        },
      ],
      pages2: [
        {
          title: "Profile",
          icon: "badge",
          links: [
            {
              title: "Overview",
              link: "/pages/pages/profile/overview",
            },
            {
              title: "Teams",
              link: "/pages/pages/profile/teams",
            },
            {
              title: "Projects",
              link: "/pages/pages/profile/projects",
            },
          ],
        },
        {
          title: "Projects",
          icon: "precision_manufacturing",
          links: [
            {
              title: "Timeline",
              link: "/pages/pages/projects/timeline",
            },
          ],
        },
      ],
      pages3: [
        {
          title: "Account",
          icon: "account_balance",
          links: [
            {
              title: "Settings",
              link: "/pages/pages/account/settings",
            },
            {
              title: "Billing",
              link: "/pages/pages/account/billing",
            },
            {
              title: "Invoice",
              link: "/pages/pages/account/invoice",
            },
          ],
        },
        {
          title: "Extra",
          icon: "queue_play_next",
          links: [
            {
              title: "Pricing Page",
              link: "/pages/pages/pricing-page",
            },
            {
              title: "RTL Page",
              link: "/pages/pages/rtl",
            },
            {
              title: "Charts",
              link: "/pages/pages/charts",
            },
          ],
        },
      ],
    };
  },
};
</script>
