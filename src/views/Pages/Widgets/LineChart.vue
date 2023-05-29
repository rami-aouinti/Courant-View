<template>
  <v-card class="card-shadow border-radius-xl z-index-2">
    <div class="px-4 pt-2 pb-0 d-flex">
      <v-avatar
        color="bg-gradient-info shadow-info border-radius-xl mt-n6"
        class="shadow"
        height="64"
        width="64"
      >
        <v-icon class="material-icons-round text-white" size="24"
          >insights</v-icon
        >
      </v-avatar>
      <div class="ms-4">
        <h6 class="text-h6 text-typo font-weight-bold">Line chart</h6>
        <p class="font-weight-light text-secondary text-sm">Product insights</p>
      </div>
      <div class="my-2 ms-auto">
        <v-badge bottom bordered color="#e91e63" dot offset-x="4" offset-y="9">
        </v-badge>
        <span class="text-dark text-sm ms-3">Organic</span>
      </div>
      <div class="my-2 ms-5">
        <v-badge bottom bordered color="#344767" dot offset-x="4" offset-y="9">
        </v-badge>
        <span class="text-dark text-sm ms-3">Refferal</span>
      </div>
      <div class="my-2 ms-5 me-5">
        <v-badge bottom bordered color="#1a73e8" dot offset-x="4" offset-y="9">
        </v-badge>
        <span class="text-dark text-sm ms-3">Direct</span>
      </div>
    </div>
    <div class="card-padding pt-0 px-4">
      <div class="chart">
        <canvas id="line-chart" class="chart-canvas" height="300"></canvas>
      </div>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "line-chart",
  data: function () {
    return {
      lineChartId: "line-chart",
    };
  },
  mounted() {
    new Chart(document.getElementById(this.lineChartId).getContext("2d"), {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Organic Search",
            tension: 0.4,
            pointRadius: 2,
            pointBackgroundColor: "#e91e63",
            borderColor: "#e91e63",
            borderWidth: 3,
            backgroundColor: "transparent",
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            maxBarThickness: 6,
          },
          {
            label: "Referral",
            tension: 0.4,
            pointRadius: 2,
            pointBackgroundColor: "#3A416F",
            borderColor: "#3A416F",
            borderWidth: 3,
            backgroundColor: "transparent",
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
            maxBarThickness: 6,
          },
          {
            label: "Direct",
            tension: 0.4,
            pointRadius: 2,
            pointBackgroundColor: "#03A9F4",
            borderColor: "#03A9F4",
            borderWidth: 3,
            backgroundColor: "transparent",
            data: [40, 80, 70, 90, 30, 90, 140, 130, 200],
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
              color: "#b2b9bf",
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
              color: "#b2b9bf",
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
