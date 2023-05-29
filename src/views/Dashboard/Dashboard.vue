<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row class="mb-12">
        <v-col md="12">
          <sales-country></sales-country>
        </v-col>
      </v-row>
      <v-row class="mb-6 mt-15">
        <v-col lg="4" class="pt-0 mb-lg-0 mb-10">
          <card-website-views></card-website-views>
        </v-col>
        <v-col lg="4" class="pt-0 mb-lg-0 mb-10">
          <card-daily-sales></card-daily-sales>
        </v-col>
        <v-col lg="4" class="pt-0 mb-lg-0">
          <card-completed-tasks></card-completed-tasks>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12">
          <v-row>
            <v-col sm="3" cols="12">
              <v-card class="mb-6 card-shadow border-radius-xl py-4">
                <v-row no-gutters class="px-4">
                  <v-col sm="4">
                    <v-avatar
                      color="bg-gradient-default border-radius-xl mt-n8"
                      class="shadow-dark"
                      height="64"
                      width="64"
                    >
                      <v-icon class="material-icons-round text-white" size="24"
                        >weekend</v-icon
                      >
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <p
                      class="
                        text-sm
                        mb-0
                        text-capitalize text-body
                        font-weight-light
                      "
                    >
                      Bookings
                    </p>
                    <h4 class="text-h4 text-typo font-weight-bolder mb-0">
                      281
                    </h4>
                  </v-col>
                </v-row>
                <hr class="dark horizontal mt-3 mb-4" />
                <v-row class="px-4">
                  <v-col cols="12">
                    <p class="mb-0 text-body">
                      <span class="text-success text-sm font-weight-bolder"
                        >+55%</span
                      >
                      <span class="font-weight-light ms-1">than last week</span>
                    </p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col sm="3" cols="12">
              <v-card class="mb-6 card-shadow border-radius-xl py-4">
                <v-row no-gutters class="px-4">
                  <v-col sm="4">
                    <v-avatar
                      color="bg-gradient-primary border-radius-xl mt-n8"
                      class="shadow-primary"
                      height="64"
                      width="64"
                    >
                      <v-icon class="material-icons-round text-white" size="24"
                        >leaderboard</v-icon
                      >
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <p
                      class="
                        text-sm
                        mb-0
                        text-capitalize text-body
                        font-weight-light
                      "
                    >
                      Today's Users
                    </p>
                    <h4 class="text-h4 text-typo font-weight-bolder mb-0">
                      2,300
                    </h4>
                  </v-col>
                </v-row>
                <hr class="dark horizontal mt-3 mb-4" />
                <v-row class="px-4">
                  <v-col cols="12">
                    <p class="mb-0 text-body">
                      <span class="text-success text-sm font-weight-bolder"
                        >+3%</span
                      >
                      <span class="font-weight-light ms-1"
                        >than last month</span
                      >
                    </p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>

            <v-col sm="3" cols="12">
              <v-card class="mb-6 card-shadow border-radius-xl py-4">
                <v-row no-gutters class="px-4">
                  <v-col sm="4">
                    <v-avatar
                      color="bg-gradient-success border-radius-xl mt-n8"
                      class="shadow-success"
                      height="64"
                      width="64"
                    >
                      <v-icon class="material-icons-round text-white" size="24"
                        >store</v-icon
                      >
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <p
                      class="
                        text-sm
                        mb-0
                        text-capitalize text-body
                        font-weight-light
                      "
                    >
                      Revenue
                    </p>
                    <h4 class="text-h4 text-typo font-weight-bolder mb-0">
                      34k
                    </h4>
                  </v-col>
                </v-row>
                <hr class="dark horizontal mt-3 mb-4" />
                <v-row class="px-4">
                  <v-col cols="12">
                    <p class="mb-0 text-body">
                      <span class="text-success text-sm font-weight-bolder"
                        >+1%</span
                      >
                      <span class="font-weight-light ms-1">than yesterday</span>
                    </p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>

            <v-col sm="3" cols="12">
              <v-card class="mb-6 card-shadow border-radius-xl py-4">
                <v-row no-gutters class="px-4">
                  <v-col sm="4">
                    <v-avatar
                      color="bg-gradient-info border-radius-xl mt-n8"
                      class="shadow-info"
                      height="64"
                      width="64"
                    >
                      <v-icon class="material-icons-round text-white" size="24"
                        >person_add</v-icon
                      >
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <p
                      class="
                        text-sm
                        mb-0
                        text-capitalize text-body
                        font-weight-light
                      "
                    >
                      Followers
                    </p>
                    <h4 class="text-h4 text-typo font-weight-bolder mb-0">
                      +91
                    </h4>
                  </v-col>
                </v-row>
                <hr class="dark horizontal mt-3 mb-4" />
                <v-row class="px-4">
                  <v-col cols="12">
                    <p class="mb-0 text-body">
                      <span class="font-weight-light ms-1">Just updated</span>
                    </p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mb-6 mt-10">
        <v-col
          v-for="(item, i) in imageCards"
          :key="item.title + i"
          lg="4"
          class="pt-0 mb-lg-0 mb-10"
        >
          <v-card
            class="card card-shadow border-radius-xl py-5 text-center"
            data-animation="true"
          >
            <div class="mt-n11 mx-4 card-header position-relative z-index-2">
              <div class="d-block blur-shadow-image">
                <img
                  :src="item.image"
                  class="img-fluid shadow border-radius-lg"
                  :alt="item.image"
                />
              </div>
              <div
                class="colored-shadow"
                v-bind:style="{ backgroundImage: 'url(' + item.image + ')' }"
              ></div>
            </div>
            <div class="d-flex mx-auto mt-n8">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    v-bind="attrs"
                    v-on="on"
                    class="material-icons-round text-primary ms-auto px-5"
                    size="18"
                  >
                    refresh
                  </v-icon>
                </template>
                <span>Refresh</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    v-bind="attrs"
                    v-on="on"
                    class="material-icons-round text-info me-auto px-5"
                    size="18"
                  >
                    edit
                  </v-icon>
                </template>
                <span>Edit</span>
              </v-tooltip>
            </div>
            <h5 class="font-weight-normal text-typo text-h5 mt-7 mb-2 px-4">
              <a
                href="javascript:;"
                class="text-decoration-none text-default"
                >{{ item.title }}</a
              >
            </h5>
            <p class="mb-0 text-body font-weight-light px-5">
              {{ item.text }}
            </p>
            <hr class="horizontal dark my-6" />
            <div class="d-flex text-body mx-2 px-4">
              <p class="mb-0 font-weight-normal text-body">
                ${{ item.price }}/night
              </p>
              <i
                class="
                  material-icons-round
                  position-relative
                  ms-auto
                  text-lg
                  me-1
                  my-auto
                "
                >place</i
              >
              <p class="text-sm my-auto font-weight-light">
                {{ item.location }}
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SalesCountry from "./Widgets/SalesCountry.vue";
import CardWebsiteViews from "./Widgets/CardWebsiteViews.vue";
import CardDailySales from "./Widgets/CardDailySales.vue";
import CardCompletedTasks from "./Widgets/CardCompletedTasks.vue";

export default {
  name: "Dashboard",
  components: {
    SalesCountry,
    CardWebsiteViews,
    CardDailySales,
    CardCompletedTasks,
  },
  data() {
    return {
      imageCards: [
        {
          image: require("@/assets/img/product-1-min.jpeg"),
          title: "Cozy 5 Stars Apartment",
          text: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
          price: "899",
          location: "Barcelona, Spain",
        },
        {
          image: require("@/assets/img/product-2-min.jpeg"),
          title: "Office Studio",
          text: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
          price: "1.119",
          location: "London, UK",
        },
        {
          image: require("@/assets/img/product-3-min.jpeg"),
          title: "Beautiful Castle",
          text: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
          price: "459",
          location: "Milan, Italy",
        },
      ],
    };
  },
};
</script>
