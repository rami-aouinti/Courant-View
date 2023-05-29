<template>
  <v-card
    class="card-shadow border-radius-xl"
    :class="$route.name == 'VrDefault' ? 'bg-gradient-default' : ''"
  >
    <div class="px-6 pt-4 pb-0 d-flex">
      <v-avatar
        color="bg-gradient-success border-radius-xl mt-n8"
        class="shadow"
        height="64"
        width="64"
      >
        <v-icon class="material-icons-round text-white" size="24"
          >language</v-icon
        >
      </v-avatar>
      <p
        class="font-weight-bold text-h6 mb-0 ms-3"
        :class="$route.name == 'VrDefault' ? 'text-white' : 'text-typo'"
      >
        Sales by Country
      </p>
    </div>
    <v-row>
      <v-col lg="6" md="7">
        <v-card-text class="py-3">
          <v-list class="py-0 bg-transparent">
            <v-list-item
              v-for="(chat, index) in countries"
              :key="chat.title"
              class="px-4 py-1"
              :class="{ 'border-bottom': index != countries.length - 1 }"
            >
              <v-img
                :alt="`${chat.title} avatar`"
                :src="chat.avatar"
                max-width="20px"
                class="me-6"
              ></v-img>

              <v-list-item-content>
                <span
                  class="text-xs font-weight-bold"
                  :class="
                    $route.name == 'VrDefault' ? 'text-white' : 'text-body'
                  "
                >
                  Country:
                </span>
                <v-list-item-title
                  v-text="chat.country"
                  class="text-sm mb-0"
                  :class="
                    $route.name == 'VrDefault'
                      ? 'text-white opacity-6'
                      : 'text-typo'
                  "
                ></v-list-item-title>
              </v-list-item-content>

              <v-list-item-content class="text-center">
                <span
                  class="text-xs font-weight-bold"
                  :class="
                    $route.name == 'VrDefault' ? 'text-white' : 'text-body'
                  "
                >
                  Sales:
                </span>
                <v-list-item-title
                  v-text="chat.sales"
                  class="text-sm mb-0"
                  :class="
                    $route.name == 'VrDefault'
                      ? 'text-white opacity-6'
                      : 'text-typo'
                  "
                ></v-list-item-title>
              </v-list-item-content>

              <v-list-item-content class="text-center">
                <span
                  class="text-xs font-weight-bold"
                  :class="
                    $route.name == 'VrDefault' ? 'text-white' : 'text-body'
                  "
                >
                  Value:
                </span>
                <v-list-item-title
                  v-text="chat.value"
                  class="text-sm mb-0"
                  :class="
                    $route.name == 'VrDefault'
                      ? 'text-white opacity-6'
                      : 'text-typo'
                  "
                ></v-list-item-title>
              </v-list-item-content>

              <v-list-item-content class="text-center">
                <span
                  class="text-xs font-weight-bold"
                  :class="
                    $route.name == 'VrDefault' ? 'text-white' : 'text-body'
                  "
                >
                  Bounce:
                </span>
                <v-list-item-title
                  v-text="chat.bounce"
                  class="text-sm mb-0"
                  :class="
                    $route.name == 'VrDefault'
                      ? 'text-white opacity-6'
                      : 'text-typo'
                  "
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-col>
      <v-col lg="6" md="5">
        <div id="map" class="mt-0 mt-lg-n4 w-100 h-100 overflow-hidden"></div>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world.js";
import "jsvectormap/dist/maps/world-merc";
import "jsvectormap/dist/css/jsvectormap.min.css";

export default {
  name: "sales-country",
  data() {
    return {
      countries: [
        {
          avatar: require("@/assets/img/icons/flags/US.png"),
          country: "United States",
          sales: "2.500",
          value: "$230,900",
          bounce: "29.9%",
        },
        {
          avatar: require("@/assets/img/icons/flags/DE.png"),
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
        },
        {
          avatar: require("@/assets/img/icons/flags/GB.png"),
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
        },
        {
          avatar: require("@/assets/img/icons/flags/BR.png"),
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
        },
      ],
    };
  },

  mounted() {
    new jsVectorMap({
      selector: "#map",
      map: "world_merc",
      zoomOnScroll: false,
      zoomButtons: false,
      selectedMarkers: [1, 3],
      markersSelectable: true,
      markers: [
        {
          name: "USA",
          coords: [40.71296415909766, -74.00437720027804],
        },
        {
          name: "Germany",
          coords: [51.17661451970939, 10.97947735117339],
        },
        {
          name: "Brazil",
          coords: [-7.596735421549542, -54.781694323779185],
        },
        {
          name: "Russia",
          coords: [62.318222797104276, 89.81564777631716],
        },
        {
          name: "China",
          coords: [22.320178999475512, 114.17161225541399],
          style: {
            fill: "#E91E63",
          },
        },
      ],
      markerStyle: {
        initial: {
          fill: "#e91e63",
        },
        hover: {
          fill: "E91E63",
        },
        selected: {
          fill: "E91E63",
        },
      },
    });
  },
};
</script>
