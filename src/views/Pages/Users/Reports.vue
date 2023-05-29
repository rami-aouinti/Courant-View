<template>
  <v-container fluid class="py-6">
    <v-row>
      <v-col lg="6">
        <v-row>
          <v-col md="6" cols="12" v-for="card in cards" :key="card.title">
            <v-card class="mb-3 card-shadow border-radius-xl py-4">
              <v-row no-gutters class="px-4">
                <v-col sm="4">
                  <v-avatar
                    color="bg-gradient-info shadow border-radius-xl mt-n8"
                    class="shadow-dark"
                    height="64"
                    width="64"
                  >
                    <v-icon class="material-icons-round text-white" size="24">{{
                      card.icon
                    }}</v-icon>
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
                    {{ card.text }}
                  </p>
                  <h4 class="text-h4 text-typo font-weight-bolder mb-0">
                    {{ card.value }}
                  </h4>
                </v-col>
              </v-row>
              <hr class="dark horizontal mt-3 mb-4" />
              <v-row class="px-4">
                <v-col cols="12">
                  <p class="mb-0 text-body">
                    <span class="text-success text-sm font-weight-bolder">{{
                      card.percent
                    }}</span>
                    <span class="font-weight-light ms-1">than last week</span>
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col lg="6" cols="12">
        <v-card class="card-shadow border-radius-xl mb-lg-0 mb-5">
          <div class="px-4 pt-4">
            <h6 class="mb-0 text-h6 text-typo font-weight-bold">Reviews</h6>
          </div>
          <div class="px-4 pt-4">
            <v-list>
              <v-list-item-group class="border-radius-sm">
                <v-list-item :ripple="false" class="px-0 border-radius-sm mb-4">
                  <v-list-item-content class="py-0">
                    <div class="d-flex mb-2">
                      <span
                        class="
                          me-2
                          text-sm
                          font-weight-normal
                          text-capitalize text-body
                        "
                        >Positive reviews</span
                      >
                      <span class="ms-auto text-sm font-weight-normal text-body"
                        >80%</span
                      >
                    </div>
                    <div>
                      <v-progress-linear
                        value="80"
                        height="6"
                        rounded
                        background-color="#e9ecef"
                        color="#1a73e8"
                      ></v-progress-linear>
                    </div>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :ripple="false" class="px-0 border-radius-sm mb-4">
                  <v-list-item-content class="py-0">
                    <div class="d-flex mb-2">
                      <span
                        class="
                          me-2
                          text-sm
                          font-weight-normal
                          text-capitalize text-body
                        "
                        >Neutral Reviews</span
                      >
                      <span class="ms-auto text-sm font-weight-normal text-body"
                        >17%</span
                      >
                    </div>
                    <div>
                      <v-progress-linear
                        value="17"
                        height="6"
                        rounded
                        background-color="#e9ecef"
                        color="#141727"
                      ></v-progress-linear>
                    </div>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :ripple="false" class="px-0 border-radius-sm mb-4">
                  <v-list-item-content class="py-0">
                    <div class="d-flex mb-2">
                      <span
                        class="
                          me-2
                          text-sm
                          font-weight-normal
                          text-capitalize text-body
                        "
                        >Negative reviews</span
                      >
                      <span class="ms-auto text-sm font-weight-normal text-body"
                        >3%</span
                      >
                    </div>
                    <div>
                      <v-progress-linear
                        value="3"
                        height="6"
                        rounded
                        background-color="#e9ecef"
                        color="#e53935"
                      ></v-progress-linear>
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
          <div class="px-4 pb-4 d-flex align-center mt-5">
            <div class="w-60">
              <p class="text-sm text-body font-weight-light mb-7">
                More than
                <span class="font-weight-bold">1,500,000</span> developers used
                Creative Tim's products and over
                <span class="font-weight-bold">700,000</span> projects were
                created.
              </p>
            </div>
            <div class="w-40 text-end">
              <v-btn
                color="#cb0c9f"
                class="
                  font-weight-bolder
                  btn-default
                  bg-gradient-default
                  py-5
                  px-6
                "
                small
              >
                View all reviews
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-0">
      <v-col cols="12">
        <reports-table></reports-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ReportsTable from "./Widgets/ReportsTable.vue";

export default {
  name: "Dashboard",
  components: {
    ReportsTable,
  },
  data: function () {
    return {
      cards: [
        {
          icon: "account_circle",
          text: "Users Active",
          value: "1,600",
          percent: "+55%",
        },
        {
          icon: "pan_tool",
          text: "Click Events",
          value: "357",
          percent: "+124%",
        },
        {
          icon: "shopping_basket",
          text: "Purchases",
          value: "2,300",
          percent: "+15%",
        },
        {
          icon: "thumb_up",
          text: "Likes",
          value: "940",
          percent: "+90%",
        },
      ],
    };
  },
};
</script>
