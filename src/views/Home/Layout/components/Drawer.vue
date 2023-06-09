<template>
  <v-navigation-drawer
    width="100%"
    height="calc(100% - 2rem)"
    fixed
    app
    floating
    :expand-on-hover="mini"
    :value="drawer"
    :right="$vuetify.rtl"
    class="my-4 ms-4 border-radius-xl"
    :class="!$vuetify.breakpoint.mobile ? '' : 'bg-white'"
    :data-color="sidebarColor"
    :data-theme="sidebarTheme"
  >
    <v-list-item class="pa-0">
      <v-list-item-content class="pa-0">
        <v-list-item-title class="title d-flex align-center mb-0">
          <div class="v-navigation-drawer-brand pa-5 d-flex align-center">
            <v-img
              src="@/assets/img/logo-ct-white.png"
              class="navbar-brand-img ms-3"
              width="32"
              v-if="sidebarTheme == 'dark'"
            >
            </v-img>
            <v-img
              src="@/assets/img/logo-ct.png"
              class="navbar-brand-img ms-3"
              width="32"
              v-else
            >
            </v-img>
            <span class="ms-2 font-weight-bold text-sm">{{ siteName }}</span>
          </div>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <hr
      class="horizontal mb-0"
      :class="sidebarTheme == 'dark' ? 'light' : 'dark'"
    />

    <v-list nav dense>
        <v-list-group
                :ripple="false"
                append-icon="fas fa-angle-down"
                class="pb-1 mx-2"
                active-class="item-active"
        >
            <template v-slot:activator>
                <v-avatar size="30" class="my-3 ms-2">
                    <img src="@/assets/img/team-3.jpg" alt="Brooklyn" />
                </v-avatar>

                <v-list-item-content>
                    <v-list-item-title class="ms-2 ps-1 font-weight-light">
                        {{ username }}
                    </v-list-item-title>
                </v-list-item-content>
            </template>

            <v-list-item
                    :ripple="false"
                    link
                    class="mb-1 no-default-hover py-2"
                    v-for="child in userInfo"
                    :key="child.title"
            >
          <span
                  class="v-list-item-mini ms-0 font-weight-light text-center w-20"
                  v-text="child.prefix"
          ></span>

                <v-list-item-content class="ms-2 ps-1" v-if="!child.items">
                    <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-content class="ms-1 ps-1 py-0" v-if="child.items">
                    <v-list-group
                            prepend-icon=""
                            :ripple="false"
                            sub-group
                            no-action
                            v-model="child.active"
                    >
                        <template v-slot:activator>
                            <v-list nav dense class="pa-0">
                                <v-list-group
                                        :ripple="false"
                                        append-icon="fas fa-angle-down me-auto ms-1"
                                        active-class="item-active"
                                        class="mb-0"
                                >
                                    <template v-slot:activator class="mb-0">
                                        <v-list-item-content class="py-0">
                                            <v-list-item-title
                                                    v-text="child.title"
                                            ></v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                </v-list-group>
                            </v-list>
                        </template>

                        <v-list-item
                                v-for="child2 in child.items"
                                :ripple="false"
                                :key="child2.title"
                                :to="child2.link"
                                @click="listClose($event)"
                        >
                            <span class="v-list-item-mini" v-text="child2.prefix"></span>
                            <v-list-item-content>
                                <v-list-item-title v-text="child2.title"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                </v-list-item-content>
            </v-list-item>
        </v-list-group>
        <v-list-group
                :ripple="false"
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                append-icon="fas fa-angle-down"
                class="pb-1 mx-2"
                active-class="item-active"
        >
            <template v-slot:activator>
                <v-list-item-icon class="me-2 align-center">
                    <i class="material-icons-round opacity-10">{{ item.action }}</i>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title
                            v-text="item.title"
                            class="ms-1"
                    ></v-list-item-title>
                </v-list-item-content>
            </template>

            <v-list-item
                    :ripple="false"
                    link
                    class="mb-1 no-default-hover px-0"
                    :class="child.items ? 'has-children' : ''"
                    v-for="child in item.items"
                    :key="child.title"
                    :to="child.link"
            >
                <div class="w-100 d-flex align-center pa-2 border-radius-lg">
                    <span class="v-list-item-mini" v-text="child.prefix"></span>

                    <v-list-item-content class="ms-6 ps-1" v-if="!child.items">
                        <v-list-item-title
                                v-text="child.title"
                                @click="listClose($event)"
                        ></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-content class="ms-6 ps-1 py-0" v-if="child.items">
                        <v-list-group
                                prepend-icon=""
                                :ripple="false"
                                sub-group
                                no-action
                                v-model="child.active"
                        >
                            <template v-slot:activator>
                                <v-list nav dense class="pa-0">
                                    <v-list-group
                                            :ripple="false"
                                            append-icon="fas fa-angle-down me-auto ms-1"
                                            active-class="item-active"
                                            class="mb-0"
                                    >
                                        <template v-slot:activator class="mb-0">
                                            <v-list-item-content class="py-0">
                                                <v-list-item-title
                                                        v-text="child.title"
                                                ></v-list-item-title>
                                            </v-list-item-content>
                                        </template>
                                    </v-list-group>
                                </v-list>
                            </template>

                            <v-list-item
                                    v-for="child2 in child.items"
                                    :ripple="false"
                                    :key="child2.title"
                                    :to="child2.link"
                                    @click="listClose($event)"
                            >
                                <span class="v-list-item-mini" v-text="child2.prefix"></span>
                                <v-list-item-content>
                                    <v-list-item-title
                                            v-text="child2.title"
                                    ></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-group>
                    </v-list-item-content>
                </div>
            </v-list-item>
        </v-list-group>

    </v-list>

      <h5
              class="
          text-uppercase text-caption
          ls-0
          font-weight-bolder
          p-0
          mx-4
          mt-4
          mb-2
          ps-2
          d-none-mini
          white-space-nowrap
        "
              :class="sidebarTheme == 'dark' ? 'text-white' : 'text-default'"
      >
          Administration
      </h5>
    <hr
      class="horizontal mb-3"
      :class="sidebarTheme == 'dark' ? 'light' : 'dark'"
    />

    <v-list nav dense>
        <v-list-group
                :ripple="false"
                v-for="item in admins"
                :key="item.title"
                v-model="item.active"
                append-icon="fas fa-angle-down"
                class="pb-1 mx-2"
                active-class="item-active"
        >
            <template v-slot:activator>
                <v-list-item-icon class="me-2 align-center">
                    <i class="material-icons-round opacity-10">{{ item.action }}</i>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title
                            v-text="item.title"
                            class="ms-1"
                    ></v-list-item-title>
                </v-list-item-content>
            </template>

            <v-list-item
                    :ripple="false"
                    link
                    class="mb-1 no-default-hover px-0"
                    :class="child.items ? 'has-children' : ''"
                    v-for="child in item.items"
                    :key="child.title"
                    :to="child.link"
            >
                <v-list-item-content class="ps-4" v-if="!child.items">
                    <div class="d-flex align-items-center pa-2">
                        <span class="v-list-item-mini ms-0" v-text="child.prefix"></span>
                        <v-list-item-title
                                class="ms-6"
                                v-text="child.title"
                                @click="listClose($event)"
                        ></v-list-item-title>
                    </div>
                </v-list-item-content>

                <v-list-item-content class="py-0" v-if="child.items">
                    <v-list-group
                            prepend-icon=""
                            :ripple="false"
                            sub-group
                            no-action
                            v-model="child.active"
                    >
                        <template v-slot:activator>
                            <v-list nav dense class="py-2 ps-5 pe-2">
                                <v-list-group
                                        :ripple="false"
                                        append-icon="fas fa-angle-down me-auto ms-1"
                                        active-class="item-active"
                                        class="mb-0"
                                >
                                    <template v-slot:activator class="mb-0">
                                        <div class="w-100 d-flex align-center">
                        <span
                                class="v-list-item-mini ms-1"
                                v-text="child.prefix"
                        ></span>

                                            <v-list-item-content class="py-0 ms-4">
                                                <v-list-item-title
                                                        class="ms-2"
                                                        v-text="child.title"
                                                ></v-list-item-title>
                                            </v-list-item-content>
                                        </div>
                                    </template>
                                </v-list-group>
                            </v-list>
                        </template>

                        <v-list-item
                                v-for="child2 in child.items"
                                :ripple="false"
                                :key="child2.title"
                                :to="child2.link"
                                @click="listClose($event)"
                                class="px-0"
                        >
                            <v-list-item-content>
                                <div class="d-flex align-items-center pa-2">
                    <span
                            class="v-list-item-mini"
                            v-text="child2.prefix"
                    ></span>
                                    <v-list-item-title
                                            v-text="child2.title"
                                            class="ms-6"
                                    ></v-list-item-title>
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                </v-list-item-content>
            </v-list-item>
        </v-list-group>

        <hr
                class="horizontal my-4"
                :class="sidebarTheme == 'dark' ? 'light' : 'dark'"
        />

      <h5
        class="
          text-uppercase text-caption
          ls-0
          font-weight-bolder
          p-0
          mx-4
          mt-4
          mb-2
          ps-2
          d-none-mini
          white-space-nowrap
        "
        :class="sidebarTheme == 'dark' ? 'text-white' : 'text-default'"
      >
        Administration
      </h5>

      <v-list-group
        :ripple="false"
        v-for="item in itemsPages"
        :key="item.title"
        v-model="item.active"
        append-icon="fas fa-angle-down"
        class="pb-1 mx-2"
        active-class="item-active"
      >
        <template v-slot:activator>
          <v-list-item-icon class="me-2 align-center">
            <i class="material-icons-round opacity-10">{{ item.action }}</i>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="item.title"
              class="ms-1"
            ></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          :ripple="false"
          link
          class="mb-1 no-default-hover px-0"
          :class="child.items ? 'has-children' : ''"
          v-for="child in item.items"
          :key="child.title"
          :to="child.link"
        >
          <v-list-item-content class="ps-4" v-if="!child.items">
            <div class="d-flex align-items-center pa-2">
              <span class="v-list-item-mini ms-0" v-text="child.prefix"></span>
              <v-list-item-title
                class="ms-6"
                v-text="child.title"
                @click="listClose($event)"
              ></v-list-item-title>
            </div>
          </v-list-item-content>

          <v-list-item-content class="py-0" v-if="child.items">
            <v-list-group
              prepend-icon=""
              :ripple="false"
              sub-group
              no-action
              v-model="child.active"
            >
              <template v-slot:activator>
                <v-list nav dense class="py-2 ps-5 pe-2">
                  <v-list-group
                    :ripple="false"
                    append-icon="fas fa-angle-down me-auto ms-1"
                    active-class="item-active"
                    class="mb-0"
                  >
                    <template v-slot:activator class="mb-0">
                      <div class="w-100 d-flex align-center">
                        <span
                          class="v-list-item-mini ms-1"
                          v-text="child.prefix"
                        ></span>

                        <v-list-item-content class="py-0 ms-4">
                          <v-list-item-title
                            class="ms-2"
                            v-text="child.title"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </div>
                    </template>
                  </v-list-group>
                </v-list>
              </template>

              <v-list-item
                v-for="child2 in child.items"
                :ripple="false"
                :key="child2.title"
                :to="child2.link"
                @click="listClose($event)"
                class="px-0"
              >
                <v-list-item-content>
                  <div class="d-flex align-items-center pa-2">
                    <span
                      class="v-list-item-mini"
                      v-text="child2.prefix"
                    ></span>
                    <v-list-item-title
                      v-text="child2.title"
                      class="ms-6"
                    ></v-list-item-title>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <hr
        class="horizontal my-4"
        :class="sidebarTheme == 'dark' ? 'light' : 'dark'"
      />

      <h5
        class="
          text-uppercase text-caption
          ls-0
          font-weight-bolder
          p-0
          mx-4
          mt-4
          mb-2
          ps-2
          d-none-mini
          white-space-nowrap
        "
        :class="sidebarTheme == 'dark' ? 'text-white' : 'text-default'"
      >
        Docs
      </h5>
      <v-list-item-group>
        <div v-for="(item, i) in itemsDocs" :key="i">
          <v-list-item
            link
            :to="item.link"
            class="pb-1 mx-2 no-default-hover py-2"
            :ripple="false"
            active-class="item-active"
            v-if="!item.external"
          >
            <v-list-item-icon class="me-2 align-center">
              <i class="material-icons-round opacity-10">{{ item.action }}</i>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.title"
                class="ms-1"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            :href="item.link"
            class="pb-1 mx-2 no-default-hover py-2"
            :ripple="false"
            active-class="item-active"
            v-if="item.external"
            target="_blank"
          >
            <v-list-item-icon class="me-2 align-center">
              <i class="material-icons-round opacity-10">{{ item.action }}</i>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.title"
                class="ms-1"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>

    <v-card
      class="pa-0 border-radius-lg mt-7 mb-9 mx-4"
      :style="`background-image: url(${require('../../../../assets/img/curved-images/white-curved.jpeg')}); background-size: cover;`"
    >
      <span
        class="mask opacity-8 border-radius-lg"
        :class="`bg-gradient-` + sidebarColor"
      ></span>
    </v-card>
  </v-navigation-drawer>
</template>
<script>
import UserService from "@/services/user.service";

export default {
  name: "drawer",
  props: {
    drawer: {
      type: Boolean,
      default: null,
    },
    sidebarColor: {
      type: String,
      default: "success",
    },
    sidebarTheme: {
      type: String,
      default: "dark",
    },
    siteName: {
      type: String,
      default: "Platform",
    },
  },
  data: () => ({
    mini: false,
    togglerActive: false,
    username: "",
    thirdLevelSimple: [
      "Third level menu",
      "Just another link",
      "One last link",
    ],
    userInfo: [
      {
        title: "My Profile",
        prefix: "MP",
      },
      {
        title: "Settings",
        prefix: "S",
      },
      {
        title: "Logout",
        prefix: "L",
      },
    ],
    itemsDocs: [
      {
        action: "upcoming",
        link: "/getting-started",
        title: "Getting Started",
        external: false,
      },
      {
        action: "view_in_ar",
        link: "https://vuetifyjs.com/en/components/alerts/",
        title: "Components",
        external: true,
      },
      {
        action: "receipt_long",
        link: "https://github.com/creativetimofficial/ct-vuetify-soft-ui-dashboard-pro/blob/main/CHANGELOG.md",
        title: "Changelog",
        external: true,
      },
    ],
    admins: [
      {
        action: "dashboard",
        active: true,
        title: "Admin",
        items: [
          {
            title: "Users Management",
            prefix: "U",
            active: false,
            items: [
                {
                    title: "Users",
                    prefix: "U",
                    link: "/admin/users",
                },
                {
                    title: "Groups",
                    prefix: "U",
                    link: "/admin/groups",
                },
            ]
          },
          {
            title: "Quiz Management",
            prefix: "Q",
              active: false,
              items: [
                  {
                      title: "Configurations",
                      prefix: "U",
                      link: "/admin/configuration",
                  },
                  {
                      title: "Categories",
                      prefix: "U",
                      link: "/admin/category",
                  },
                  {
                      title: "Groups",
                      prefix: "U",
                      link: "/admin/group",
                  },
                  {
                      title: "Questions",
                      prefix: "U",
                      link: "/admin/question",
                  },
                  {
                      title: "Answers",
                      prefix: "U",
                      link: "/admin/answer",
                  },
                  {
                      title: "Quiz",
                      prefix: "U",
                      link: "/admin/quiz",
                  },
              ],
          },
        ],
      },
    ],
    items: [
      {
        action: "dashboard",
        active: true,
        title: "Dashboards",
        items: [
          {
            title: "Analytics",
            prefix: "A",
            link: "/pages/dashboards/analytics",
          },
          {
            title: "Discover",
            prefix: "D",
            link: "/pages/dashboards/discover",
          },
          {
            title: "Sales",
            prefix: "S",
            link: "/pages/dashboards/sales",
          },
          {
            title: "Automotive",
            prefix: "A",
            link: "/pages/dashboards/automotive",
          },
          {
            title: "Smart Home",
            prefix: "S",
            link: "/pages/dashboards/smart-home",
          },
            {
                title: "Quiz",
                prefix: "Q",
                link: "/quiz",
            },
        ],
      },
    ],
    itemsPages: [
      {
        action: "image",
        active: false,
        title: "Pages",
        items: [
          {
            title: "Profile",
            prefix: "P",
            active: false,
            items: [
              {
                title: "Profile Overview",
                prefix: "P",
                link: "/pages/pages/profile/overview",
              },
              {
                title: "All Projects",
                prefix: "A",
                link: "/pages/pages/profile/projects",
              },
              {
                title: "Messages",
                prefix: "M",
                link: "/pages/pages/profile/messages",
              },
            ],
          },
          {
            title: "Users",
            prefix: "U",
            active: false,
            items: [
              {
                title: "Reports",
                prefix: "R",
                link: "/pages/pages/users/reports",
              },
              {
                title: "New User",
                prefix: "N",
                link: "/pages/pages/users/new-user",
              },
            ],
          },
          {
            title: "Account",
            prefix: "A",
            active: false,
            items: [
              {
                title: "Settings",
                prefix: "S",
                link: "/pages/pages/account/settings",
              },
              {
                title: "Billing",
                prefix: "B",
                link: "/pages/pages/account/billing",
              },
              {
                title: "Invoice",
                prefix: "I",
                link: "/pages/pages/account/invoice",
              },
            ],
          },
          {
            title: "Projects",
            prefix: "P",
            active: false,
            items: [
              {
                title: "Timeline",
                prefix: "T",
                link: "/pages/pages/projects/timeline",
              },
            ],
          },
          {
            title: "Virtual Reality",
            prefix: "V",
            active: false,
            items: [
              {
                title: "VR Default",
                prefix: "V",
                link: "/pages/dashboards/vr/vr-default",
              },
              {
                title: "VR Info",
                prefix: "V",
                link: "/pages/dashboards/vr/vr-info",
              },
            ],
          },
          {
            title: "Pricing Page",
            prefix: "P",
            link: "/pages/pages/pricing-page",
          },
          { title: "RTL", prefix: "R", link: "/pages/pages/rtl" },
          { title: "Charts", prefix: "C", link: "/pages/pages/charts" },
          { title: "Alerts", prefix: "A", link: "/pages/pages/alerts" },
          {
            title: "Notifications",
            prefix: "N",
            link: "/pages/pages/notifications",
          },
        ],
      },
      {
        action: "apps",
        active: false,
        title: "Applications",
        items: [
          { title: "CRM", prefix: "C", link: "/pages/dashboards/crm" },
          { title: "Kanban", prefix: "K", link: "/pages/applications/kanban" },
          { title: "Wizard", prefix: "W", link: "/pages/applications/wizard" },
          {
            title: "DataTables",
            prefix: "D",
            link: "/pages/applications/datatables",
          },
          {
            title: "Calendar",
            prefix: "C",
            link: "/pages/applications/calendar",
          },
        ],
      },
      {
        action: "shopping_basket",
        active: false,
        title: "Ecommerce",
        items: [
          {
            title: "Products",
            prefix: "P",
            active: false,
            items: [
              {
                title: "New Product",
                prefix: "N",
                link: "/pages/ecommerce/products/new-product",
              },
              {
                title: "Edit Product",
                prefix: "E",
                link: "/pages/ecommerce/products/edit-product",
              },
              {
                title: "Product Page",
                prefix: "P",
                link: "/pages/ecommerce/products/product-page",
              },
            ],
          },
          {
            title: "Orders",
            prefix: "O",
            active: false,
            items: [
              {
                title: "Order List",
                prefix: "O",
                link: "/pages/ecommerce/orders/list",
              },
              {
                title: "Order Details",
                prefix: "O",
                link: "/pages/ecommerce/orders/details",
              },
            ],
          },
        ],
      },
      {
        action: "content_paste",
        active: false,
        title: "Authentication",
        items: [
          {
            title: "Sign Up",
            prefix: "S",
            active: false,
            items: [
              {
                title: "Basic",
                prefix: "B",
                link: "/pages/authentication/signup/basic",
              },
              {
                title: "Cover",
                prefix: "C",
                link: "/pages/authentication/signup/cover",
              },
              {
                title: "Illustration",
                prefix: "I",
                link: "/pages/authentication/signup/illustration",
              },
            ],
          },
        ],
      },
    ],
  }),
  mounted() {
    UserService.getProfile().then(
      (response) => {
        this.username = response.data.username;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
  methods: {
    listClose(event) {
      let items;
      let headers;
      let groups;
      let currentEl;

      if (
        document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link.item-active"
        )
      ) {
        items = document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link.item-active"
        );
      }

      if (
        document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link .v-list-group__header.v-list-item--active"
        )
      ) {
        headers = document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link .v-list-group__header.v-list-item--active"
        );
      }

      if (
        document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link .v-list-group .v-list .v-list-group.v-list-group--active, .mb-0.v-list-item.v-list-item--link .v-list-group.v-list-group--active"
        )
      ) {
        groups = document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link .v-list-group .v-list .v-list-group.v-list-group--active, .mb-0.v-list-item.v-list-item--link .v-list-group.v-list-group--active"
        );
      }

      if (
        event.target.closest(
          ".mb-0.v-list-item.v-list-item--link .v-list-item__content.ms-6 .v-list-group"
        )
      ) {
        currentEl = event.target.closest(
          ".mb-0.v-list-item.v-list-item--link .v-list-item__content.ms-6 .v-list-group"
        );
      }

      if (items != null) {
        for (var i = 0; i < items.length; i++) {
          items[i].classList.remove("item-active");
        }
      }

      if (headers != null) {
        for (var j = 0; j < headers.length; j++) {
          headers[j].classList.remove(
            "v-list-item--active",
            "item-active",
            "primary--text"
          );
          headers[j].setAttribute("aria-expanded", false);
        }
      }

      if (groups != null) {
        for (var k = 0; k < groups.length; k++) {
          groups[k].classList.remove("v-list-group--active", "primary--text");
        }
      }

      if (event.target.closest(".mb-0.v-list-item.v-list-item--link")) {
        event.target
          .closest(".mb-0.v-list-item.v-list-item--link")
          .classList.add("item-active");
      }

      if (currentEl != null) {
        currentEl
          .querySelector(".v-list-group__header")
          .classList.add("v-list-item--active", "item-active");
      }
    },
  },
};
</script>
