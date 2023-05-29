<template>
  <v-card class="card-shadow border-radius-xl z-index-2">
    <div class="px-4 pt-2 pb-0 d-flex">
      <v-avatar
        color="bg-gradient-default shadow-dark border-radius-xl mt-n6"
        class="shadow"
        height="64"
        width="64"
      >
        <v-icon class="material-icons-round text-white" size="24"
          >leaderboard</v-icon
        >
      </v-avatar>
      <div class="ms-4">
        <h6 class="text-h6 text-typo font-weight-bold">Bar chart</h6>
        <p class="font-weight-light text-secondary text-sm">
          Sales related to age average
        </p>
      </div>
    </div>
    <div class="card-padding pt-0 px-4">
      <div class="chart">
        <canvas id="bar-chart" class="chart-canvas" height="300"></canvas>
      </div>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "bar-chart",
  data: function () {
    return {
      barChartId: "bar-chart",
    };
  },
  mounted() {
    new Chart(document.getElementById(this.barChartId).getContext("2d"), {
      type: "bar",
      data: {
        labels: ["16-20", "21-25", "26-30", "31-36", "36-42", "42+"],
        datasets: [
          {
            label: "Sales by age",
            weight: 5,
            borderWidth: 0,
            borderRadius: 4,
            backgroundColor: "#3A416F",
            data: [15, 20, 12, 60, 20, 15],
            fill: false,
            maxBarThickness: 35,
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
              display: false,
              drawOnChartArea: true,
              drawTicks: true,
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
