<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row class="mt-6 mb-5">
        <v-col lg="7">
          <v-card class="card-shadow bg-gradient-default border-radius-xl">
            <v-img
              src="@/assets/img/shapes/waves-white.svg"
              class="position-absolute opacity-2 start-0 top-0 w-100 h-100"
            ></v-img>

            <div class="px-8 pt-6">
              <v-row class="position-relative">
                <v-col cols="12" class="mt-lg-n16 px-0">
                  <v-img
                    src="@/assets/img/tesla-model-s.png"
                    class="
                      w-75
                      mt-n7 mt-lg-n16
                      d-none d-md-block
                      mx-auto
                      z-index-1
                    "
                  ></v-img>
                </v-col>
                <v-col lg="6" class="text-center">
                  <h4 class="text-h4 text-white font-weight-bold opacity-9">
                    Since Last Charge
                  </h4>
                  <hr class="horizontal light mt-1 mb-4" />
                  <div class="d-flex justify-content-center">
                    <div class="ms-auto">
                      <h6
                        class="
                          mb-0
                          text-h6
                          font-weight-normal
                          text-white
                          opacity-8
                        "
                      >
                        Distance
                      </h6>
                      <h3 class="text-white text-h3 font-weight-bold">
                        145 <small class="text-sm">Km</small>
                      </h3>
                    </div>
                    <div class="ms-lg-16 me-auto">
                      <h6
                        class="
                          mb-0
                          text-h6
                          font-weight-normal
                          text-white
                          opacity-8
                        "
                      >
                        Average Energy
                      </h6>
                      <h3 class="text-white text-h3 font-weight-bold">
                        300 <small class="text-sm">Kw</small>
                      </h3>
                    </div>
                  </div>
                </v-col>
                <v-col lg="6" class="text-center">
                  <h4 class="text-h4 text-white font-weight-bold opacity-9">
                    Nearest Charger
                  </h4>
                  <hr class="horizontal light mt-1 mb-4" />
                  <div class="d-flex">
                    <div class="ms-auto">
                      <h6 class="text-h6 font-weight-bold mb-0 text-white">
                        Miclan, DW
                      </h6>
                      <h6 class="text-h6 font-weight-bold mb-0 text-white">
                        891 Limarenda road
                      </h6>
                    </div>
                    <div class="ms-16 me-auto">
                      <v-btn
                        icon
                        outlined
                        rounded
                        color="#fff"
                        width="36px"
                        height="36px"
                      >
                        <v-icon size="16" class="material-icons-round"
                          >map</v-icon
                        >
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
        <v-col lg="5" cols="12">
          <v-row>
            <v-col cols="12">
              <v-card class="bg-gradient-default border-radius-xl mb-3">
                <div class="px-4 py-4">
                  <v-row class="row">
                    <v-col cols="8" class="my-auto">
                      <div class="numbers">
                        <p
                          class="
                            text-white text-sm
                            mb-0
                            text-capitalize
                            font-weight-bold
                            opacity-7
                          "
                        >
                          Wheather today
                        </p>
                        <h5 class="text-white text-h5 font-weight-bolder mb-0">
                          San Francisco - 29°C
                        </h5>
                      </div>
                    </v-col>
                    <v-col cols="4" class="text-end">
                      <v-img
                        src="@/assets/img/small-logos/icon-sun-cloud.png"
                        class="w-50 ms-auto"
                      ></v-img>
                      <h5 class="mb-0 text-white text-h5 text-end me-1">
                        Cloudy
                      </h5>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="mb-4">
            <v-col md="6" cols="12">
              <v-card
                class="card-shadow border-radius-xl px-4 py-4 mb-lg-0 mb-4"
              >
                <v-row no-gutters>
                  <v-col sm="4" class="text-start">
                    <v-avatar
                      color="bg-gradient-default"
                      class="shadow border-radius-xl mt-n8"
                      height="64"
                      width="64"
                    >
                      <v-icon size="24" class="text-white material-icons-round">
                        drive_eta
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <p class="text-white text-sm mb-0 text-body">
                      Today's Trip
                    </p>
                    <h4 class="text-h4 text-dark font-weight-bolder mb-0">
                      145 Km
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card class="card-shadow border-radius-xl px-4 py-4">
                <v-row no-gutters>
                  <v-col sm="4" class="text-start">
                    <v-avatar
                      color="bg-gradient-default"
                      class="shadow border-radius-xl mt-n8"
                      height="64"
                      width="64"
                    >
                      <v-icon size="24" class="text-white material-icons-round">
                        battery_full
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <p class="text-white text-sm mb-0 text-body">
                      Battery Health
                    </p>
                    <h4 class="text-h4 text-dark font-weight-bolder mb-0">
                      99 %
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6" cols="12">
              <v-card
                class="card-shadow border-radius-xl px-4 py-4 mb-lg-0 mb-4"
              >
                <v-row no-gutters>
                  <v-col sm="4" class="text-start">
                    <v-avatar
                      color="bg-gradient-default"
                      class="shadow border-radius-xl mt-n8"
                      height="64"
                      width="64"
                    >
                      <v-icon size="24" class="text-white material-icons-round">
                        speed
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <p class="text-white text-sm mb-0 text-body">
                      Average Speed
                    </p>
                    <h4 class="text-h4 text-dark font-weight-bolder mb-0">
                      56 Km/h
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card class="card-shadow border-radius-xl px-4 py-4">
                <v-row no-gutters>
                  <v-col sm="4" class="text-start">
                    <v-avatar
                      color="bg-gradient-default"
                      class="shadow border-radius-xl mt-n8"
                      height="64"
                      width="64"
                    >
                      <v-icon size="24" class="text-white material-icons-round">
                        volume_up
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <p class="text-white text-sm mb-0 text-body">
                      Music Volume
                    </p>
                    <h4 class="text-h4 text-dark font-weight-bolder mb-0">
                      15/100
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card class="bg-gradient-default border-radius-xl">
            <div class="px-6 py-6">
              <v-row>
                <v-col lg="4" md="6">
                  <v-form class="d-inline-block" id="navbar-search-main">
                    <v-text-field
                      rounded-sm
                      hide-details
                      outlined
                      background-color="rgba(255,255,255,0)"
                      color="rgb(255,255,255)"
                      lighter
                      placeholder="Search anything..."
                      class="
                        font-size-input
                        placeholder-lighter
                        input-alternative input-icon
                        text-white
                      "
                    >
                      <template slot="prepend-inner">
                        <v-icon
                          color="#fff"
                          class="mt-n1 text-lg material-icons-round"
                          >search</v-icon
                        >
                      </template>
                    </v-text-field>
                  </v-form>
                </v-col>
                <v-col md="6" class="my-auto ms-auto">
                  <div class="d-flex align-center">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          v-bind="attrs"
                          v-on="on"
                          color="#fff"
                          class="ms-auto text-lg material-icons-round"
                          >headphones</v-icon
                        >
                      </template>
                      <span>Headphones connected</span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          v-bind="attrs"
                          v-on="on"
                          color="#fff"
                          class="text-lg ms-4 material-icons-round"
                          >play_arrow</v-icon
                        >
                      </template>
                      <span>Music is playing</span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          v-bind="attrs"
                          v-on="on"
                          color="#fff"
                          class="text-lg ms-4 material-icons-round"
                          >power_settings_new</v-icon
                        >
                      </template>
                      <span>Start radio</span>
                    </v-tooltip>

                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          v-bind="attrs"
                          v-on="on"
                          color="#fff"
                          class="text-lg ms-4 material-icons-round"
                          >watch</v-icon
                        >
                      </template>
                      <span>Time tracker</span>
                    </v-tooltip>

                    <h4 class="text-white text-h4 font-weight-bold ms-6">
                      10:45
                    </h4>
                  </div>
                </v-col>
              </v-row>
              <hr class="horizontal light mt-4 mb-4" />
              <v-row>
                <v-col lg="4" md="6">
                  <div class="d-flex align-center position-relative">
                    <h3 class="text-h3 font-weight-bolder text-white mb-1">
                      11:13
                    </h3>
                    <p class="text-white opacity-8 mb-1 ms-3">
                      Estimated arrival time
                    </p>
                    <hr class="vertical d-md-block d-none light mt-0 mb-4" />
                  </div>
                </v-col>
                <v-col lg="4" md="6">
                  <div class="d-flex align-center position-relative">
                    <h3
                      class="text-h3 font-weight-bolder text-white mb-1 ms-auto"
                    >
                      2.4<small class="align-top text-sm">Km</small>
                    </h3>
                    <p class="text-white opacity-8 mb-1 ms-3 me-auto">
                      Turn right in 2.4 miles
                    </p>
                    <hr class="vertical d-md-block d-none light mt-0" />
                  </div>
                </v-col>
                <v-col lg="4" md="6">
                  <div class="d-flex align-center position-relative">
                    <h3
                      class="text-h3 font-weight-bolder text-white mb-1 ms-auto"
                    >
                      6.3<small class="align-top text-sm">Km</small>
                    </h3>
                    <p class="text-white opacity-8 mb-1 ms-3 me-auto">
                      Distance to Creative Tim
                    </p>
                  </div>
                </v-col>
              </v-row>
            </div>
            <div>
              <div style="height: 270px; width: 100%">
                <l-map
                  v-if="showMap"
                  :zoom="zoom"
                  :center="center"
                  :options="mapOptions"
                  @update:center="centerUpdate"
                  @update:zoom="zoomUpdate"
                >
                  <l-tile-layer :url="url" :attribution="attribution" />
                </l-map>
              </div>
            </div>
            <div class="px-6 py-6">
              <v-row>
                <v-col lg="4" md="6">
                  <div class="d-flex align-center">
                    <div class="position-relative">
                      <v-avatar size="58">
                        <img src="@/assets/img/drake.jpeg" alt="Curved" />
                      </v-avatar>
                      <img
                        class="
                          position-absolute
                          w-60
                          end-0
                          bottom-0
                          me-n4
                          mb-n2
                        "
                        src="@/assets/img/small-logos/logo-spotify.svg"
                        alt="spotify logo"
                      />
                    </div>
                    <div class="px-3">
                      <p class="text-white text-sm font-weight-bold mb-0">
                        Scorpion (feat Quavo)
                      </p>
                      <p class="text-white text-xs mb-2 opacity-8">
                        Drake - Hip-Hop
                      </p>
                    </div>
                  </div>
                </v-col>
                <v-col lg="4" md="6">
                  <div class="d-flex align-center">
                    <v-btn
                      icon
                      outlined
                      rounded
                      color="#fff"
                      width="52px"
                      height="52px"
                      class="ms-auto"
                    >
                      <v-icon size="19" class="rotate-180 material-icons-round"
                        >skip_previous</v-icon
                      >
                    </v-btn>
                    <v-btn
                      icon
                      outlined
                      rounded
                      color="#fff"
                      width="52px"
                      height="52px"
                      class="ms-6"
                    >
                      <v-icon size="19" class="material-icons-round"
                        >pause</v-icon
                      >
                    </v-btn>
                    <v-btn
                      icon
                      outlined
                      rounded
                      color="#fff"
                      width="52px"
                      height="52px"
                      class="ms-6 me-auto"
                    >
                      <v-icon size="19" class="material-icons-round"
                        >skip_next</v-icon
                      >
                    </v-btn>
                  </div>
                </v-col>
                <v-col lg="2" md="6" cols="8">
                  <p class="text-white mb-0">Volume</p>
                  <v-slider
                    v-model="slider"
                    color="bg-primary"
                    track-color="#e9ecef"
                    class="progress-shadow mb-0"
                    thumb-label
                    max="100"
                  ></v-slider>
                </v-col>
                <v-col lg="1" md="6" cols="4" class="ms-auto">
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        v-bind="attrs"
                        v-on="on"
                        color="#fff"
                        class="ms-auto mt-4 material-icons-round"
                        >format_list_bulleted</v-icon
                      >
                    </template>
                    <span>Hide menu</span>
                  </v-tooltip>

                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        v-bind="attrs"
                        v-on="on"
                        color="#fff"
                        class="mt-4 ms-4 material-icons-round"
                        >mode_comment</v-icon
                      >
                    </template>
                    <span>Track messages</span>
                  </v-tooltip>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "Automotive",
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      slider: "",
      zoom: 11,
      center: latLng(38.89, -77.03),
      url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
  },
};
</script>
