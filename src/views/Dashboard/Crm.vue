<template>
  <div>
    <v-container fluid class="px-6 py-6 mt-10">
      <v-row>
        <v-col lg="8">
          <v-row>
            <v-col lg="4" cols="12">
              <v-card class="border-radius-xl card-shadow py-2 mb-lg-0 mb-6">
                <div
                  class="
                    bg-gradient-success
                    shadow-success
                    border-radius-lg
                    mx-4
                    py-2
                    mt-n8
                  "
                >
                  <div class="chart">
                    <canvas
                      id="chart-line-1"
                      class="chart-canvas"
                      height="100"
                    ></canvas>
                  </div>
                </div>
                <div class="px-6 pb-0 pt-4">
                  <p
                    class="
                      text-sm
                      mb-0
                      text-capitalize
                      font-weight-light
                      text-body
                    "
                  >
                    Visitors
                  </p>
                  <h5 class="font-weight-bolder text-h5 text-typo mb-0">
                    5,927
                    <span class="text-success text-sm font-weight-bolder"
                      >+55%</span
                    >
                  </h5>
                </div>
              </v-card>
            </v-col>

            <v-col lg="4" cols="12">
              <v-card class="border-radius-xl card-shadow py-1 mb-lg-0 mb-6">
                <div
                  class="
                    bg-gradient-primary
                    shadow-primary
                    border-radius-lg
                    mx-4
                    py-2
                    mt-n8
                  "
                >
                  <div class="chart">
                    <canvas
                      id="chart-line-2"
                      class="chart-canvas"
                      height="100"
                    ></canvas>
                  </div>
                </div>
                <div class="px-6 pb-0 pt-4">
                  <p
                    class="
                      text-sm
                      mb-0
                      text-capitalize
                      font-weight-light
                      text-body
                    "
                  >
                    Income
                  </p>
                  <h5 class="font-weight-bolder text-h5 text-typo mb-0">
                    $130,832
                    <span class="text-success text-sm font-weight-bolder"
                      >+90%</span
                    >
                  </h5>
                </div>
              </v-card>
            </v-col>

            <v-col lg="4">
              <v-card
                class="border-radius-xl card-shadow h-100 py-1 mb-lg-0 mb-6"
              >
                <div
                  class="
                    bg-gradient-default
                    shadow-dark
                    border-radius-lg
                    mx-4
                    py-2
                    mt-n8
                  "
                >
                  <div
                    class="
                      px-4
                      py-4
                      d-flex
                      flex-column
                      justify-center
                      text-center
                      h-100
                    "
                  >
                    <a href="javascript:;" class="text-decoration-none">
                      <v-icon
                        size="20"
                        class="material-icons-round text-white mb-2 mt-2"
                        >add</v-icon
                      >
                      <h6 class="text-h6 text-white font-weight-light mb-3">
                        New tab
                      </h6>
                    </a>
                  </div>
                </div>
                <div class="px-6 pt-4 text-center">
                  <p class="mb-0 text-sm text-body font-weight-light">
                    Press the button above and complete the new tab data.
                  </p>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mb-lg-0 mb-6">
              <calendar></calendar>
            </v-col>
          </v-row>
        </v-col>
        <v-col lg="4">
          <v-row>
            <v-col lg="12">
              <v-card class="card-shadow px-4 py-1 border-radius-xl">
                <div
                  class="
                    overflow-hidden
                    position-relative
                    border-radius-lg
                    h-100
                    mt-n8
                    shadow-dark
                  "
                  :style="`background-image: url(${require('../../assets/img/ivancik.jpg')}); background-size: cover;`"
                >
                  <span class="mask bg-gradient-default opacity-8"></span>
                  <div class="px-4 py-4 position-relative z-index-1 h-100">
                    <h6 class="text-white text-h6 font-weight-bold mb-4">
                      Hey John!
                    </h6>
                    <p class="text-white font-weight-light mb-4">
                      Wealth creation is an evolutionarily recent positive-sum
                      game. It is all about who take the opportunity first.
                    </p>
                  </div>
                </div>
                <div class="mx-2">
                  <v-btn
                    outlined
                    color="#344767"
                    class="ms-auto font-weight-bolder py-4 px-4 mt-5 mb-4"
                    small
                    rounded
                  >
                    Read more
                    <v-icon size="14" class="material-icons-round ms-2"
                      >chevron_right</v-icon
                    >
                  </v-btn>
                </div>
              </v-card>
            </v-col>
            <v-col lg="12" md="6" class="mb-6">
              <categories-card></categories-card>
            </v-col>
            <v-col lg="12" md="6">
              <v-card class="card-shadow border-radius-xl">
                <div class="px-4 pt-4">
                  <v-row>
                    <v-col cols="4">
                      <v-avatar
                        width="auto"
                        height="auto"
                        class="w-100 h-100 shadow border-radius-lg mt-n10"
                      >
                        <img
                          src="@/assets/img/kal-visuals-square.jpg"
                          alt="Avatar"
                          class="w-100"
                        />
                      </v-avatar>
                    </v-col>
                    <v-col cols="8">
                      <p class="text-muted text-sm font-weight-light">
                        Today is Mike's birthday. Wish her the best of luck!
                      </p>
                      <v-btn
                        elevation="0"
                        :ripple="false"
                        height="34"
                        class="
                          text-uppercase
                          btn-default
                          bg-gradient-default
                          py-1
                          px-4
                          me-2
                        "
                        color="#5e72e4"
                        small
                        >Send Message</v-btn
                      >
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="6">
          <v-card class="card-shadow border-radius-xl">
            <div class="px-4 pt-4">
              <v-row>
                <v-col md="6">
                  <h6 class="mb-0 text-h6 font-weight-bold text-typo">
                    Transactions
                  </h6>
                </v-col>
                <v-col md="6" class="text-end">
                  <v-icon>far fa-calendar-alt me-2</v-icon>
                  <small class="text-body">23 - 30 March 2021</small>
                </v-col>
              </v-row>
            </div>
            <div class="px-4 pb-4 pt-2">
              <div
                v-for="(transaction, index) in transactions"
                :key="transaction.title"
              >
                <v-list-item :key="transaction.title" class="px-0 py-4">
                  <v-btn
                    :ripple="false"
                    icon
                    outlined
                    rounded
                    :color="transaction.color"
                    width="34px"
                    height="34px"
                    class="me-4"
                  >
                    <v-icon size="14" class="material-icons-round">{{
                      transaction.icon
                    }}</v-icon>
                  </v-btn>

                  <v-list-item-content class="py-0">
                    <div class="d-flex flex-column">
                      <h6 class="mb-1 text-typo text-sm font-weight-bold">
                        {{ transaction.title }}
                      </h6>
                      <span class="text-xs text-body">{{
                        transaction.date
                      }}</span>
                    </div>
                  </v-list-item-content>

                  <v-list-item-content class="py-0 text-end">
                    <div
                      :class="transaction.gradient"
                      class="text-sm font-weight-bold text-gradient"
                    >
                      {{ transaction.value }}
                    </div>
                  </v-list-item-content>
                </v-list-item>
                <hr
                  class="horizontal"
                  :class="{ dark: index != transactions.length - 1 }"
                />
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col sm="6">
          <v-card class="card-shadow border-radius-xl">
            <div class="px-4 pt-4">
              <v-row>
                <v-col md="6">
                  <h6 class="mb-0 text-h6 font-weight-bold text-typo">
                    Revenue
                  </h6>
                </v-col>
                <v-col md="6" class="text-end">
                  <v-icon>far fa-calendar-alt me-2</v-icon>
                  <small class="text-body">01 - 07 June 2021</small>
                </v-col>
              </v-row>
            </div>
            <div class="px-4 pb-4 pt-2">
              <div v-for="(revenue, index) in revenues" :key="revenue.title">
                <v-list-item :key="revenue.title" class="px-0 py-4">
                  <v-btn
                    :ripple="false"
                    icon
                    outlined
                    rounded
                    :color="revenue.color"
                    width="34px"
                    height="34px"
                    class="me-4"
                  >
                    <v-icon size="14" class="material-icons-round">{{
                      revenue.icon
                    }}</v-icon>
                  </v-btn>

                  <v-list-item-content class="py-0">
                    <div class="d-flex flex-column">
                      <h6 class="mb-1 text-typo text-sm font-weight-bold">
                        {{ revenue.title }}
                      </h6>
                      <span class="text-xs text-body">{{ revenue.date }}</span>
                    </div>
                  </v-list-item-content>

                  <v-list-item-content class="py-0 text-end">
                    <div
                      :class="revenue.gradient"
                      class="text-sm font-weight-bold text-gradient"
                    >
                      {{ revenue.value }}
                    </div>
                  </v-list-item-content>
                </v-list-item>
                <hr
                  class="horizontal"
                  :class="{ dark: index != transactions.length - 1 }"
                />
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import CategoriesCard from "./Widgets/CategoriesCard.vue";
import Calendar from "./Widgets/Calendar.vue";

export default {
  name: "Crm",
  components: {
    CategoriesCard,
    Calendar,
  },
  data: function () {
    return {
      chartLine1: "chart-line-1",
      chartLine2: "chart-line-2",
      transactions: [
        {
          icon: "expand_more",
          color: "#ea0606",
          title: "Netflix",
          date: "27 March 2020, at 12:30 PM",
          value: "- $ 2,500",
          gradient: "text-danger",
        },
        {
          icon: "expand_less",
          color: "#82d616",
          title: "Apple",
          date: "23 March 2020, at 04:30 AM",
          value: "+ $ 2,000",
          gradient: "text-success",
        },
        {
          icon: "expand_less",
          color: "#82d616",
          title: "Partner #22213",
          date: "19 March 2020, at 02:50 AM",
          value: "+ $ 1,400",
          gradient: "text-success",
        },
      ],
      revenues: [
        {
          icon: "expand_less",
          color: "#82d616",
          title: "via PayPal",
          date: "07 June 2021, at 09:00 AM",
          value: "+ $ 4,999",
          gradient: "text-success",
        },
        {
          icon: "expand_less",
          color: "#82d616",
          title: "Partner #90211",
          date: "07 June 2021, at 05:50 AM",
          value: "+ $ 700",
          gradient: "text-success",
        },
        {
          icon: "expand_more",
          color: "#ea0606",
          title: "Services",
          date: "07 June 2021, at 07:10 PM",
          value: "- $ 1,800",
          gradient: "text-danger",
        },
      ],
    };
  },
  mounted() {
    var chart1 = document.getElementById(this.chartLine1).getContext("2d");
    var chart2 = document.getElementById(this.chartLine2).getContext("2d");

    var gradientStroke1 = chart1.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, "rgba(203,12,159,0.02)");
    gradientStroke1.addColorStop(0.2, "rgba(72,72,176,0.0)");
    gradientStroke1.addColorStop(0, "rgba(203,12,159,0)"); //purple colors

    new Chart(chart1, {
      type: "line",
      data: {
        labels: ["A", "M", "J", "J", "A", "S", "O", "N", "D"],
        datasets: [
          {
            label: "Visitors",
            tension: 0.5,
            borderColor: "#fff",
            borderWidth: 2,
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
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#f8f9fa",
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: "rgba(255, 255, 255, .2)",
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#f8f9fa",
            },
          },
        },
      },
    });

    new Chart(chart2, {
      type: "line",
      data: {
        labels: ["A", "M", "J", "J", "A", "S", "O", "N", "D"],
        datasets: [
          {
            label: "Income",
            tension: 0.5,
            pointRadius: 0,
            borderColor: "#fff",
            borderWidth: 2,
            backgroundColor: "transparent",
            data: [60, 80, 75, 90, 67, 100, 90, 110, 120],
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
              color: "rgba(255, 255, 255, .2)",
            },
            ticks: {
              callback: function (value) {
                return "$" + value;
              },
              display: true,
              padding: 10,
              color: "#f8f9fa",
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: "rgba(255, 255, 255, .2)",
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#f8f9fa",
            },
          },
        },
      },
    });
  },
};
</script>
