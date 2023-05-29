<template>
  <v-card class="card-shadow border-radius-xl z-index-2">
    <div class="px-4 pt-2 pb-0 d-flex">
      <v-avatar
        color="bg-gradient-success shadow-success border-radius-xl mt-n6"
        class="shadow"
        height="64"
        width="64"
      >
        <v-icon class="material-icons-round text-white" size="24"
          >scatter_plot</v-icon
        >
      </v-avatar>
      <div class="ms-4">
        <h6 class="text-h6 text-typo font-weight-bold">Polar chart</h6>
        <p class="font-weight-light text-secondary text-sm">
          Analytics Insights
        </p>
      </div>
    </div>
    <div class="card-padding">
      <div class="chart">
        <canvas id="polar-chart" class="chart-canvas" height="100"></canvas>
      </div>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "polar-chart",
  data: function () {
    return {
      polarChartId: "polar-chart",
    };
  },
  mounted() {
    new Chart(document.getElementById(this.polarChartId).getContext("2d"), {
      type: "polarArea",
      data: {
        labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
        datasets: [
          {
            label: "My First Dataset",
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              "#03A9F4",
              "#e91e63",
              "#3A416F",
              "#a8b8d8",
              "#4CAF50",
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  },
};
</script>
