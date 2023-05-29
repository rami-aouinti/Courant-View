<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row>
        <v-col lg="4" md="7">
          <categories-card></categories-card>
        </v-col>
        <v-col lg="8">
          <v-card class="card-shadow border-radius-xl h-100">
            <div class="d-flex pa-4">
              <v-avatar
                size="48"
                class="
                  text-white
                  bg-gradient-primary
                  shadow
                  border-radius-lg
                  px-2
                  py-2
                  me-4
                "
              >
                <v-icon class="material-icons-round text-white" size="18"
                  >today</v-icon
                >
              </v-avatar>
              <div class="me-3">
                <p class="text-sm mb-0 text-capitalize text-body">مهام</p>
                <h5 class="font-weight-bolder text-h5 text-typo mb-0">480</h5>
              </div>
              <div class="ms-auto w-20 text-start">
                <v-list-item-content>
                  <div class="d-flex mb-1">
                    <span class="text-xs font-weight-normal text-body"
                      >60%</span
                    >
                  </div>
                  <div>
                    <v-progress-linear
                      value="60"
                      height="6"
                      rounded
                      background-color="#e9ecef"
                      color="#d81b60"
                    ></v-progress-linear>
                  </div>
                </v-list-item-content>
              </div>
            </div>

            <div class="chart">
              <canvas
                id="widgetsChart"
                class="chart-canvas"
                height="200"
              ></canvas>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="3">
          <v-card class="card-shadow border-radius-xl mb-6 pa-1">
            <v-row class="py-0 ma-0">
              <v-col cols="4">
                <v-avatar
                  color="bg-gradient-primary"
                  class="shadow border-radius-lg"
                  width="64"
                  height="64"
                  min-width="64"
                >
                  <v-icon size="24" class="text-white material-icons-round">
                    battery_charging_full
                  </v-icon>
                </v-avatar>
              </v-col>
              <v-col cols="8" class="my-auto text-end">
                <p class="text-sm mb-0 opacity-7 text-body">صحة البطارية</p>
                <h5 class="text-h5 text-typo font-weight-bolder mb-0">99 %</h5>
              </v-col>
            </v-row>
          </v-card>
          <v-card class="card-shadow border-radius-xl pa-1">
            <v-row class="py-0 ma-0">
              <v-col cols="4">
                <v-avatar
                  color="bg-gradient-primary"
                  class="shadow border-radius-lg"
                  width="64"
                  height="64"
                  min-width="64"
                >
                  <v-icon size="24" class="text-white material-icons-round">
                    volume_down
                  </v-icon>
                </v-avatar>
              </v-col>
              <v-col cols="8" class="my-auto text-end">
                <p class="text-sm mb-0 opacity-7 text-body">
                  طبقة صوت الموسيقا
                </p>
                <h5 class="text-h5 text-typo font-weight-bolder mb-0">
                  30/100
                </h5>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col lg="5">
          <v-row>
            <v-col md="6">
              <v-card class="card-shadow border-radius-xl">
                <div class="mx-6 pa-4 text-center">
                  <v-avatar
                    color="bg-gradient-primary"
                    class="shadow border-radius-lg"
                    width="64"
                    height="64"
                    min-width="64"
                  >
                    <v-icon size="24" class="text-white material-icons-round">
                      account_balance
                    </v-icon>
                  </v-avatar>
                </div>
                <div class="px-4 pb-4 text-center">
                  <h6
                    class="text-center text-h6 mb-0 text-typo font-weight-bold"
                  >
                    مرتب
                  </h6>
                  <span class="text-xs text-body">تنتمي التفاعلية</span>
                  <hr class="horizontal dark my-4" />
                  <h5 class="mb-0 text-h5 font-weight-bold text-typo">
                    +$2000
                  </h5>
                </div>
              </v-card>
            </v-col>
            <v-col md="6">
              <v-card class="card-shadow border-radius-xl">
                <div class="mx-6 pa-4 text-center">
                  <v-avatar
                    color="bg-gradient-primary"
                    class="shadow border-radius-lg"
                    width="64"
                    height="64"
                    min-width="64"
                  >
                    <v-icon size="24" class="text-white material-icons-round">
                      account_balance_wallet
                    </v-icon>
                  </v-avatar>
                </div>
                <div class="px-4 pb-4 text-center">
                  <h6
                    class="text-center text-h6 mb-0 text-typo font-weight-bold"
                  >
                    باي بال
                  </h6>
                  <span class="text-xs text-body">دفع لحسابهم الخاص</span>
                  <hr class="horizontal dark my-4" />
                  <h5 class="mb-0 text-h5 font-weight-bold text-typo">
                    $455.00
                  </h5>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col lg="4">
          <v-card class="card-shadow border-radius-xl">
            <div class="overflow-hidden position-relative border-radius-xl">
              <img
                src="@/assets/img/illustrations/pattern-tree.svg"
                class="
                  position-absolute
                  opacity-2
                  start-0
                  top-0
                  w-100
                  z-index-1
                  h-100
                "
              />
              <span class="mask bg-gradient-default opacity-10"></span>
              <div class="px-4 py-4 position-relative">
                <i class="fas fa-wifi text-white pa-2" aria-hidden="true"></i>
                <h5 class="text-white mt-6 mb-12 pb-2 text-h5">
                  4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
                </h5>
                <div class="d-flex">
                  <div class="d-flex">
                    <div class="me-4">
                      <p
                        class="
                          text-white text-sm
                          font-weight-light
                          opacity-8
                          mb-0
                        "
                      >
                        حامل البطاقة
                      </p>
                      <h6 class="text-white text-h6 mb-0">جاك بيترسون</h6>
                    </div>
                    <div>
                      <p
                        class="
                          text-white text-sm
                          font-weight-light
                          opacity-8
                          mb-0
                        "
                      >
                        نتهي
                      </p>
                      <h6 class="text-white text-h6 mb-0">11/22</h6>
                    </div>
                  </div>
                  <div
                    class="
                      ms-auto
                      w-10
                      d-flex
                      align-items-end
                      justify-content-end
                      mt-auto
                    "
                  >
                    <v-img
                      src="@/assets/img/logos/mastercard.png"
                      alt="logo"
                      width="22"
                      height="22"
                      contain
                    ></v-img>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="3" md="6">
          <v-card class="pa-4 card-shadow border-radius-xl h-100">
            <div class="d-flex">
              <p class="text-body">جسم كامل</p>
              <div class="ms-auto">
                <v-btn
                  elevation="0"
                  small
                  :ripple="false"
                  height="21"
                  class="
                    border-radius-md
                    font-weight-bolder
                    px-3
                    py-3
                    badge-font-size
                    ms-auto
                    text-xs text-primary
                  "
                  color="#f8b3ca"
                  >معتدل</v-btn
                >
              </div>
            </div>
            <p class="mb-0 text-body">
              ما يهم هو الأشخاص الذين أوقدوه. والناس الذين يشبهونهم مستاءون منه.
            </p>
          </v-card>
        </v-col>
        <v-col lg="2" md="4">
          <v-card class="card-shadow border-radius-xl pa-5 h-100">
            <div>
              <v-avatar
                color="bg-gradient-primary"
                class="shadow border-radius-lg"
                width="48"
                height="48"
                min-width="48"
              >
                <v-icon size="20" class="text-white material-icons-round">
                  refresh
                </v-icon>
              </v-avatar>
              <h5 class="text-h5 text-typo font-weight-bold mt-3 mb-0">
                754
                <span class="text-secondary text-sm">م</span>
              </h5>
              <p class="text-body mb-1">مدينة نيويورك</p>
            </div>
          </v-card>
        </v-col>
        <v-col lg="3" md="4">
          <v-card class="card-shadow border-radius-xl h-100">
            <div class="px-4 pt-4">
              <h6 class="text-body text-h6 font-weight-normal mb-0">
                سعرات حراريه
              </h6>
              <h5 class="font-weight-bolder text-typo text-h5 mb-0">
                97
                <span class="text-success text-sm font-weight-bolder">+5%</span>
              </h5>
            </div>
            <div>
              <div class="chart">
                <canvas
                  id="lineChart"
                  class="chart-canvas"
                  height="100"
                ></canvas>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col lg="2" md="4">
          <v-card class="pa-4 card-shadow border-radius-xl h-100">
            <div class="d-flex mb-4">
              <p class="mb-0 text-body font-weight-light">على</p>
              <v-switch
                :ripple="false"
                class="d-inline-flex mt-0 pt-0 switch ms-auto"
                v-model="switch1"
                hide-details
              ></v-switch>
            </div>
            <v-img
              src="../../assets/img/small-logos/icon-bulb.svg"
              class="mt-6"
              width="40"
            ></v-img>
            <p class="mt-2 mb-0 text-body font-weight-normal">درجة حرارة</p>
          </v-card>
        </v-col>
        <v-col lg="2" md="4">
          <v-card class="card-shadow border-radius-xl pa-5 h-100">
            <div>
              <p class="text-body">خطوات</p>
              <h3 class="text-h3 mb-2 text-typo font-weight-bold">11.4ك</h3>
              <v-btn
                elevation="0"
                small
                :ripple="false"
                height="21"
                class="
                  border-radius-md
                  font-weight-bolder
                  px-3
                  py-3
                  badge-font-size
                  ms-auto
                  text-success
                "
                color="#bce2be"
                >+4.3%</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="5">
          <calendar></calendar>
        </v-col>
        <v-col lg="3">
          <categories-card-dashboard></categories-card-dashboard>
          <v-card
            class="border-radius-xl mt-6"
            :style="`background-image: url('https://images.unsplash.com/photo-1604213410393-89f141bb96b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxuYXR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'); background-size: cover;`"
          >
            <span
              class="mask bg-gradient-default border-radius-xl opacity-8"
            ></span>
            <div class="px-6 py-6 z-index-2 position-relative">
              <h5 class="text-white text-h5 font-weight-bold text-start mb-0">
                نوع من البلوز
              </h5>
              <p class="text-white text-sm font-weight-light text-start">
                ديفتونز
              </p>
              <div class="d-flex mt-10 text-start">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      icon
                      outlined
                      rounded
                      color="#fff"
                      width="45px"
                      height="45px"
                    >
                      <v-icon size="18" class="material-icons-round"
                        >skip_previous</v-icon
                      >
                    </v-btn>
                  </template>
                  <span>Prev</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      icon
                      outlined
                      rounded
                      color="#fff"
                      width="45px"
                      height="45px"
                      class="mx-2"
                    >
                      <v-icon size="18" class="material-icons-round"
                        >play_arrow</v-icon
                      >
                    </v-btn>
                  </template>
                  <span>Pause</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      icon
                      outlined
                      rounded
                      color="#fff"
                      width="45px"
                      height="45px"
                    >
                      <v-icon size="18" class="material-icons-round"
                        >skip_next</v-icon
                      >
                    </v-btn>
                  </template>
                  <span>Next</span>
                </v-tooltip>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col lg="4">
          <v-card class="card-shadow border-radius-xl mb-30 h-100">
            <div class="card-header-padding">
              <h6 class="font-weight-bold text-h6 text-typo mb-2">
                نظرة عامة على الطلبات
              </h6>
              <p class="text-sm text-body">
                <v-icon
                  class="material-icons-round text-sm text-success"
                  aria-hidden="true"
                  >north</v-icon
                >
                <span class="font-weight-bold">24%</span> هذا الشهر
              </p>
            </div>
            <v-card-text class="card-padding px-0 pt-0">
              <v-timeline dense align-top class="timeline-line-color pt-0">
                <v-timeline-item
                  v-for="(item, i) in timeline"
                  :key="item.title + i"
                  small
                  class="timeline"
                >
                  <template v-slot:icon>
                    <v-avatar size="30" color="#ffffff">
                      <v-icon
                        :class="
                          `material-icons-round text-white bg-` + item.btn
                        "
                        size="14"
                        >{{ item.icon }}</v-icon
                      >
                    </v-avatar>
                  </template>

                  <v-card width="480" class="mt-n1">
                    <v-card-title class="px-0 pt-0 pb-1 d-block">
                      <h6
                        class="text-dark text-sm font-weight-bold mb-0 d-block"
                      >
                        {{ item.title }}
                      </h6>
                      <p class="text-secondary font-weight-light text-xs mb-0">
                        {{ item.date }}
                      </p>
                    </v-card-title>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Chart from "chart.js/auto";
import CategoriesCard from "./Widgets/CategoriesCard.vue";
import CategoriesCardDashboard from "./Widgets/CategoriesCardDashboard.vue";
import Calendar from "../Dashboard/Widgets/Calendar.vue";

export default {
  name: "Rtl",
  components: {
    CategoriesCard,
    CategoriesCardDashboard,
    Calendar,
  },
  data: function () {
    return {
      chartWidgets: "widgetsChart",
      chartLine: "lineChart",
      switch1: true,
      timeline: [
        {
          title: "$2400, تغييرات في التصميم",
          date: "22 ديسمبر 7:20 مساءً",
          icon: "notifications",
          btn: "default",
        },
        {
          title: "طلب جديد # 1832412",
          date: "21 ديسمبر 11 م",
          icon: "code",
          btn: "primary",
        },
        {
          title: "مدفوعات الخادم لشهر أبريل",
          date: "21 ديسمبر 9:34 مساءً",
          icon: "shopping_cart",
          btn: "success",
        },
        {
          title: "تمت إضافة بطاقة جديدة للأمر رقم 4395133",
          date: "20 ديسمبر 2:20 صباحًا",
          icon: "credit_card",
          btn: "info",
        },
        {
          title: "فتح الحزم من أجل التطوير",
          date: "18 ديسمبر ، 4:54 صباحًا",
          icon: "vpn_key",
          btn: "default",
        },
        {
          title: "طلب جديد # 9583120",
          date: "17 ديسمبر",
          iconColor: "#f80031",
          icon: "bug_report",
          btn: "primary",
        },
      ],
    };
  },
  mounted() {
    // Chart widgets
    new Chart(document.getElementById(this.chartWidgets).getContext("2d"), {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Tasks",
            tension: 0,
            pointRadius: 5,
            pointBackgroundColor: "#E91E63",
            pointBorderColor: "transparent",
            borderColor: "#E91E63",
            borderWidth: 4,
            backgroundColor: "transparent",
            data: [40, 45, 42, 41, 40, 43, 40, 42, 39],
            maxBarThickness: 6,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#9ca2b7",
              font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: "#c1c4ce5c",
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#9ca2b7",
              font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
        },
      },
    });
    // Chart line
    new Chart(document.getElementById(this.chartLine).getContext("2d"), {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Visitors",
            tension: 0.5,
            borderWidth: 2,
            pointRadius: 0,
            borderColor: "#344767",
            backgroundColor: "transparent",
            data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
            maxBarThickness: 6,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  },
  created() {
    this.$vuetify.rtl = true;
  },
  beforeDestroy() {
    this.$vuetify.rtl = false;
  },
};
</script>
