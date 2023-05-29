<template>
  <v-card class="card-shadow border-radius-xl px-4 py-4">
    <div class="d-flex justify-content-between">
      <h6 class="mb-0 text-h6 text-typo font-weight-bold">Revenue</h6>
      <v-tooltip left>
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
        <span>See which ads perform better</span>
      </v-tooltip>
    </div>
    <div class="d-flex">
      <div class="my-1">
        <v-badge bottom bordered color="#e91e63" dot offset-x="0" offset-y="9">
        </v-badge>
        <span class="text-dark text-xs ms-4">Facebook Ads</span>
      </div>
      <div class="my-1 ms-6">
        <v-badge bottom bordered color="#344767" dot offset-x="0" offset-y="9">
        </v-badge>
        <span class="text-dark text-xs ms-4">Google Ads</span>
      </div>
    </div>
    <div class="chart-area mt-4">
      <canvas :height="300" :id="revenueChartID"></canvas>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "card-revenue",
  data: function () {
    return {
      revenueChartID: "revenueChart",
    };
  },
  mounted() {
    new Chart(document.getElementById(this.revenueChartID).getContext("2d"), {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Facebook Ads",
            tension: 0,
            pointRadius: 5,
            pointBackgroundColor: "#e91e63",
            pointBorderColor: "transparent",
            borderColor: "#e91e63",
            borderWidth: 4,
            backgroundColor: "transparent",
            fill: true,
            data: [50, 100, 200, 190, 400, 350, 500, 450, 700],
            maxBarThickness: 6,
          },
          {
            label: "Google Ads",
            tension: 0,
            pointRadius: 5,
            pointBackgroundColor: "#3A416F",
            pointBorderColor: "transparent",
            borderColor: "#3A416F",
            borderWidth: 4,
            backgroundColor: "transparent",
            fill: true,
            data: [10, 30, 40, 120, 150, 220, 280, 250, 280],
            maxBarThickness: 6,
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
          x: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: true,
              borderDash: [5, 5],
              color: "#c1c4ce5c",
            },
            ticks: {
              display: true,
              color: "#9ca2b7",
              padding: 10,
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
  },
};
</script>
