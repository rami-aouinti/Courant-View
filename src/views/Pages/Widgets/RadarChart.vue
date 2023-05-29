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
          >data_saver_on</v-icon
        >
      </v-avatar>
      <div class="ms-4">
        <h6 class="text-h6 text-typo font-weight-bold">Radar chart</h6>
        <p class="font-weight-light text-secondary text-sm">Sciences score</p>
      </div>
    </div>
    <div class="card-padding">
      <div class="chart">
        <canvas id="radar-chart" class="chart-canvas" height="100"></canvas>
      </div>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "radar-chart",
  data: function () {
    return {
      radarChartId: "radar-chart",
    };
  },
  mounted() {
    new Chart(document.getElementById(this.radarChartId).getContext("2d"), {
      type: "radar",
      data: {
        labels: [
          "English",
          "Maths",
          "Physics",
          "Chemistry",
          "Biology",
          "History",
        ],
        datasets: [
          {
            label: "Student A",
            backgroundColor: "rgba(58,65,111,0.2)",
            data: [65, 75, 70, 80, 60, 80],
            borderDash: [5, 5],
          },
          {
            label: "Student B",
            backgroundColor: "rgba(203,12,159,0.2)",
            data: [54, 65, 60, 70, 70, 75],
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
