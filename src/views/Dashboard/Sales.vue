<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row>
        <v-col md="12">
          <v-row>
            <v-col
              v-for="(item, i) in stats"
              :key="item.text + i"
              sm="4"
              cols="12"
            >
              <v-card class="card-shadow border-radius-xl py-4">
                <v-row no-gutters class="px-4">
                  <v-col sm="4">
                    <p
                      class="
                        text-sm
                        mb-1
                        text-capitalize text-body
                        font-weight-bold
                      "
                    >
                      {{ item.text }}
                    </p>
                    <h5 class="text-h5 text-typo font-weight-bolder mb-0">
                      {{ item.value }}
                    </h5>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <v-menu
                      transition="slide-x-transition"
                      offset-y
                      offset-x
                      min-width="150"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          text
                          :ripple="false"
                          v-bind="attrs"
                          v-on="on"
                          small
                          elevation="0"
                          class="text-capitalize px-0 text-xs"
                        >
                          <span class="text-xs text-secondary font-weight-light"
                            >6 May - 7 May</span
                          >
                        </v-btn>
                      </template>

                      <v-list class="pa-2">
                        <v-list-item
                          class="list-item-hover-active border-radius-md"
                        >
                          <v-list-item-content class="pa-0">
                            <v-list-item-title
                              class="ls-0 text-body font-weight-light mb-0"
                            >
                              Last 7 days
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item
                          class="list-item-hover-active border-radius-md"
                        >
                          <v-list-item-content class="pa-0">
                            <v-list-item-title
                              class="ls-0 text-body font-weight-light mb-0"
                            >
                              Last week
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item
                          class="list-item-hover-active border-radius-md"
                        >
                          <v-list-item-content class="pa-0">
                            <v-list-item-title
                              class="ls-0 text-body font-weight-light mb-0"
                            >
                              Last 30 days
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <hr class="horizontal dark" />
                      </v-list>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row class="px-4 mt-1">
                  <v-col cols="12" class="pt-0">
                    <p class="mb-0 text-body text-sm">
                      <span class="text-success text-sm font-weight-bolder">{{
                        item.growth
                      }}</span>
                      <span class="font-weight-light ms-1"
                        >since last month</span
                      >
                    </p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4">
          <card-chart-channels></card-chart-channels>
        </v-col>
        <v-col md="8">
          <card-chart-revenue></card-chart-revenue>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="8">
          <card-chart-sales-age></card-chart-sales-age>
        </v-col>
        <v-col md="4">
          <v-card class="card-shadow border-radius-xl px-4 py-4">
            <h6 class="mb-0 text-h6 text-typo font-weight-bold">
              Sales by Country
            </h6>
            <v-card-text class="pt-3 pb-0 px-0">
              <v-list class="py-0">
                <v-list-item
                  v-for="(chat, index) in countries"
                  :key="chat.title"
                  class="pt-2 pb-1 px-1"
                  :class="{ 'border-bottom': index != countries.length - 1 }"
                >
                  <v-img
                    :alt="`${chat.title} avatar`"
                    :src="chat.avatar"
                    max-width="20px"
                    class="me-6"
                  ></v-img>

                  <v-list-item-content>
                    <span class="text-xs font-weight-bold text-body">
                      Country:
                    </span>
                    <v-list-item-title
                      v-text="chat.country"
                      class="text-typo text-sm mb-0"
                    ></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-content class="text-center">
                    <span class="text-xs font-weight-bold text-body">
                      Sales:
                    </span>
                    <v-list-item-title
                      v-text="chat.sales"
                      class="text-typo text-sm mb-0"
                    ></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-content class="text-center">
                    <span class="text-xs font-weight-bold text-body">
                      Bounce:
                    </span>
                    <v-list-item-title
                      v-text="chat.bounce"
                      class="text-typo text-sm mb-0"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="card-shadow border-radius-xl py-4">
            <h6 class="mb-0 text-h6 text-typo font-weight-bold px-4">
              Top Selling Products
            </h6>
            <v-card-text class="pt-3 pb-0 px-0">
              <v-simple-table class="table">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th
                        class="
                          text-left text-uppercase text-secondary text-xxs
                          font-weight-bolder
                          opacity-7
                        "
                      >
                        Product
                      </th>
                      <th
                        class="
                          text-left text-uppercase text-secondary text-xxs
                          font-weight-bolder
                          opacity-7
                        "
                      >
                        Value
                      </th>
                      <th
                        class="
                          text-center text-uppercase text-secondary text-xxs
                          font-weight-bolder
                          opacity-7
                        "
                      >
                        Ads spent
                      </th>
                      <th
                        class="
                          text-center text-uppercase text-secondary text-xxs
                          font-weight-bolder
                          opacity-7
                        "
                      >
                        Refunds
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in products" :key="item.refunds">
                      <td class="border-bottom">
                        <v-list class="py-0">
                          <v-list-item class="px-0 py-4">
                            <v-list-item-avatar
                              :size="48"
                              class="my-0 me-4 border-rounded"
                            >
                              <v-img
                                :alt="item.imgSrc"
                                :src="item.imgSrc"
                              ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                              <v-list-item-title
                                class="
                                  text-typo text-subtitle-2
                                  ls-0
                                  font-weight-bold
                                "
                                >{{ item.product }}</v-list-item-title
                              >
                              <span class="text-secondary text-sm"
                                ><span class="text-success">{{
                                  item.orders
                                }}</span>
                                orders</span
                              >
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </td>
                      <td class="border-bottom">
                        <p class="text-sm text-secondary mb-0">
                          {{ item.value }}
                        </p>
                      </td>
                      <td class="text-body border-bottom text-center">
                        <p class="text-sm text-secondary mb-0">
                          {{ item.ads }}
                        </p>
                      </td>
                      <td class="border-bottom text-center">
                        <div
                          class="
                            d-flex
                            align-items-center
                            justify-content-center
                          "
                        >
                          <span class="text-secondary text-sm ms-auto">{{
                            item.refunds
                          }}</span>
                          <i
                            class="
                              ni ni-bold-down
                              text-sm
                              ms-1
                              text-success
                              me-auto
                            "
                            v-if="item.refunds <= 40"
                          ></i>
                          <i
                            class="
                              ni ni-bold-up
                              text-sm
                              ms-1
                              text-danger
                              me-auto
                            "
                            v-else
                          ></i>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardChartChannels from "./Widgets/CardChartChannels.vue";
import CardChartRevenue from "./Widgets/CardChartRevenue.vue";
import CardChartSalesAge from "./Widgets/CardChartSalesAge.vue";

export default {
  name: "Sales",
  components: {
    CardChartChannels,
    CardChartRevenue,
    CardChartSalesAge,
  },
  data() {
    return {
      stats: [
        {
          text: "Sales",
          value: "$230,220",
          growth: "+55%",
        },
        {
          text: "Customers",
          value: "3.200",
          growth: "+12%",
        },
        {
          text: "Avg. Revenue",
          value: "$1.200",
          growth: "+$213",
        },
      ],
      countries: [
        {
          avatar: require("@/assets/img/icons/flags/US.png"),
          country: "United States",
          sales: "2.500",
          bounce: "29.9%",
        },
        {
          avatar: require("@/assets/img/icons/flags/DE.png"),
          country: "Germany",
          sales: "3.900",
          bounce: "40.22%",
        },
        {
          avatar: require("@/assets/img/icons/flags/GB.png"),
          country: "Great Britain",
          sales: "1.400",
          bounce: "23.44%",
        },
        {
          avatar: require("@/assets/img/icons/flags/BR.png"),
          country: "Brasil",
          sales: "562",
          bounce: "32.14%",
        },
        {
          avatar: require("@/assets/img/icons/flags/AU.png"),
          country: "Australia",
          sales: "400",
          bounce: "56.83%",
        },
      ],
      products: [
        {
          product: "Nike v22 Running",
          orders: "8.232",
          imgSrc:
            "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg",
          value: "$130.992",
          ads: "$9.500",
          refunds: 13,
        },
        {
          product: "Business Kit (Mug + Notebook)",
          orders: "12.821",
          imgSrc:
            "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-mug.jpg",
          value: "$80.250",
          ads: "$4.200",
          refunds: 40,
        },
        {
          product: "Black Chair",
          orders: "2.421",
          imgSrc:
            "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg",
          value: "$40.600",
          ads: "$9.430",
          refunds: 54,
        },
        {
          product: "Wireless Charger",
          orders: "5.921",
          imgSrc:
            "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/bang-sound.jpg",
          value: "$91.300",
          ads: "$7.364",
          refunds: 5,
        },
        {
          product: "Mountain Trip Kit (Camera + Backpack)",
          orders: "921",
          imgSrc:
            "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/photo-tools.jpg",
          value: "$140.925",
          ads: "$20.531",
          refunds: 121,
        },
      ],
    };
  },
};
</script>
