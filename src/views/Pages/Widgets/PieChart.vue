<template>
  <v-card class="card-shadow border-radius-xl z-index-2">
    <div class="px-4 pt-2 pb-0 d-flex">
      <v-avatar
        color="bg-gradient-warning shadow-warning border-radius-xl mt-n6"
        class="shadow"
        height="64"
        width="64"
      >
        <v-icon class="material-icons-round text-white" size="24"
          >donut_small</v-icon
        >
      </v-avatar>
      <div class="ms-4">
        <h6 class="text-h6 text-typo font-weight-bold">Pie chart</h6>
        <p class="font-weight-light text-secondary text-sm">
          Analytics Insights
        </p>
      </div>
    </div>
    <div class="card-padding py-0 d-flex">
      <div class="chart w-50 pb-4">
        <canvas id="pie-chart" class="chart-canvas" height="300"></canvas>
      </div>
      <div class="w-50 ms-auto">
        <div class="mt-2 mb-3 ms-10">
          <v-badge
            bottom
            bordered
            color="#1a73e8"
            dot
            offset-x="4"
            offset-y="9"
          >
          </v-badge>
          <span class="text-dark text-sm ms-3">Facebook</span>
        </div>
        <div class="mt-2 mb-3 ms-10">
          <v-badge
            bottom
            bordered
            color="#e91e63"
            dot
            offset-x="4"
            offset-y="9"
          >
          </v-badge>
          <span class="text-dark text-sm ms-3">Direct</span>
        </div>
        <div class="mt-2 mb-3 ms-10">
          <v-badge
            bottom
            bordered
            color="#344767"
            dot
            offset-x="4"
            offset-y="9"
          >
          </v-badge>
          <span class="text-dark text-sm ms-3">Organic</span>
        </div>
        <div class="mt-2 mb-3 ms-10">
          <v-badge
            bottom
            bordered
            color="#7b809a"
            dot
            offset-x="4"
            offset-y="9"
          >
          </v-badge>
          <span class="text-dark text-sm ms-3">Referral</span>
        </div>
        <p class="text-sm font-weight-light text-body mb-3 mt-5 w-80 ms-10">
          More than <span class="font-weight-bold">1,200,000</span> sales are
          made using referral marketing, and
          <span class="font-weight-bold">700,000</span> are from social media.
        </p>
        <v-btn
          :elevation="0"
          class="
            font-weight-bold
            text-white
            bg-gradient-secondary
            py-5
            px-6
            my-auto
            ms-10
          "
          small
        >
          Read more
        </v-btn>
      </div>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "pie-chart",
  data: function () {
    return {
      pieChartId: "pie-chart",
    };
  },
  mounted() {
    new Chart(document.getElementById(this.pieChartId).getContext("2d"), {
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
            borderWidth: 2,
            backgroundColor: ["#03A9F4", "#e91e63", "#3A416F", "#a8b8d8"],
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
};
</script>
