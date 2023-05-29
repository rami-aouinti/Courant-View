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
        <h6 class="text-h6 text-typo font-weight-bold">
          Line chart without dots
        </h6>
        <p class="font-weight-light text-secondary text-sm">
          Visits from devices
        </p>
      </div>
      <div class="my-2 ms-auto">
        <v-badge bottom bordered color="#e91e63" dot offset-x="4" offset-y="9">
        </v-badge>
        <span class="text-dark text-sm ms-3">Mobile Apps</span>
      </div>
      <div class="my-2 ms-5">
        <v-badge bottom bordered color="#344767" dot offset-x="4" offset-y="9">
        </v-badge>
        <span class="text-dark text-sm ms-3">Websites</span>
      </div>
    </div>
    <div class="card-padding pt-0 px-4">
      <div class="chart">
        <canvas
          id="line-chart-without-dots"
          class="chart-canvas"
          height="300"
        ></canvas>
      </div>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "line-chart-without-dots",
  data: function () {
    return {
      lineChartWithoutDotsId: "line-chart-without-dots",
    };
  },
  mounted() {
    var ctx = document
      .getElementById(this.lineChartWithoutDotsId)
      .getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Mobile apps",
            tension: 0.4,
            pointRadius: 0,
            borderColor: "#e91e63",
            borderWidth: 3,
            backgroundColor: "transparent",
            fill: true,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            maxBarThickness: 6,
          },
          {
            label: "Websites",
            tension: 0.4,
            pointRadius: 0,
            borderColor: "#3A416F",
            borderWidth: 3,
            backgroundColor: "transparent",
            fill: true,
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
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
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
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
