<template>
  <v-card class="card-shadow border-radius-xl z-index-2">
    <div class="px-4 pt-2 pb-0 d-flex">
      <v-avatar
        color="bg-gradient-primary shadow-primary border-radius-xl mt-n6"
        class="shadow"
        height="64"
        width="64"
      >
        <v-icon class="material-icons-round text-white" size="24"
          >multiline_chart</v-icon
        >
      </v-avatar>
      <div class="ms-4">
        <h6 class="text-h6 text-typo font-weight-bold">Bubble chart</h6>
        <p class="font-weight-light text-secondary text-sm">
          Users divided by regions
        </p>
      </div>
    </div>
    <div class="card-padding pt-0 px-4">
      <div class="chart">
        <canvas id="bubble-chart" class="chart-canvas" height="145"></canvas>
      </div>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "bubble-chart",
  data: function () {
    return {
      bubbleChartId: "bubble-chart",
    };
  },
  mounted() {
    new Chart(document.getElementById(this.bubbleChartId).getContext("2d"), {
      type: "bubble",
      data: {
        labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90"],
        datasets: [
          {
            label: "Dataset 1",
            data: [
              {
                x: 100,
                y: 0,
                r: 10,
              },
              {
                x: 60,
                y: 30,
                r: 20,
              },
              {
                x: 40,
                y: 350,
                r: 10,
              },
              {
                x: 80,
                y: 80,
                r: 10,
              },
              {
                x: 20,
                y: 30,
                r: 15,
              },
              {
                x: 0,
                y: 100,
                r: 5,
              },
            ],
            backgroundColor: "#e91e63",
          },
          {
            label: "Dataset 2",
            data: [
              {
                x: 70,
                y: 40,
                r: 10,
              },
              {
                x: 30,
                y: 60,
                r: 20,
              },
              {
                x: 10,
                y: 300,
                r: 25,
              },
              {
                x: 60,
                y: 200,
                r: 10,
              },
              {
                x: 50,
                y: 300,
                r: 15,
              },
              {
                x: 20,
                y: 350,
                r: 5,
              },
            ],
            backgroundColor: "#3A416F",
          },
        ],
      },
      options: {
        responsive: true,
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
