<template>
  <v-card class="card-shadow border-radius-xl px-4 py-4">
    <div class="d-flex justify-content-between">
      <h6 class="mb-0 text-h6 text-typo font-weight-bold">Channels</h6>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            small
            rounded
            v-bind="attrs"
            v-on="on"
            min-width="25"
            elevation="0"
            :ripple="false"
            height="25"
            width="25"
            class="
              font-weight-600
              text-capitalize
              btn-outline-secondary
              pa-1
              ms-auto
            "
            color="transparent"
          >
            <v-icon size="14" class="material-icons-round"
              >priority_high</v-icon
            >
          </v-btn>
        </template>
        <span>See traffic channels</span>
      </v-tooltip>
    </div>
    <v-row class="mt-4 py-3">
      <v-col cols="7" class="text-start">
        <div class="chart-area">
          <canvas :height="200" :id="channelsChartID"></canvas>
        </div>
      </v-col>
      <v-col cols="5" class="my-auto">
        <div class="my-2">
          <v-badge
            bottom
            bordered
            color="#1a73e8"
            dot
            offset-x="4"
            offset-y="9"
          >
          </v-badge>
          <span class="text-dark text-xs ms-3">Facebook</span>
        </div>
        <div class="my-2">
          <v-badge
            bottom
            bordered
            color="#e91e63"
            dot
            offset-x="4"
            offset-y="9"
          >
          </v-badge>
          <span class="text-dark text-xs ms-3">Direct</span>
        </div>
        <div class="my-2">
          <v-badge
            bottom
            bordered
            color="#344767"
            dot
            offset-x="4"
            offset-y="9"
          >
          </v-badge>
          <span class="text-dark text-xs ms-3">Organic</span>
        </div>
        <div class="my-2">
          <v-badge
            bottom
            bordered
            color="#7b809a"
            dot
            offset-x="4"
            offset-y="9"
          >
          </v-badge>
          <span class="text-dark text-xs ms-3">Referral</span>
        </div>
      </v-col>
    </v-row>
    <div class="d-flex text-body mt-8">
      <p class="text-sm font-weight-light mb-0 w-60">
        More than <span class="font-weight-bold">1,200,000</span> sales are made
        using referral marketing, and
        <span class="font-weight-bold">700,000</span> are from social media.
      </p>
      <v-btn
        :elevation="0"
        color="#cb0c9f"
        class="font-weight-bold text-body bg-lighter py-5 px-6 my-auto ms-auto"
        small
      >
        Read more
      </v-btn>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "card-channels",
  data: function () {
    return {
      channelsChartID: "channelsChart",
    };
  },
  mounted() {
    new Chart(document.getElementById(this.channelsChartID).getContext("2d"), {
      type: "pie",
      data: {
        labels: ["Facebook", "Direct", "Organic", "Referral"],
        datasets: [
          {
            label: "Projects",
            weight: 9,
            cutout: 0,
            tension: 0.9,
            pointRadius: 2,
            borderWidth: 1,
            backgroundColor: ["#17c1e8", "#e91e63", "#3A416F", "#a8b8d8"],
            data: [15, 20, 12, 60],
            fill: false,
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
              color: "#c1c4ce5c",
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
              color: "#c1c4ce5c",
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  },
};
</script>
