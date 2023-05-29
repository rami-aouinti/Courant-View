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
        <h6 class="text-h6 text-typo font-weight-bold">Doughnut chart</h6>
        <p class="font-weight-light text-secondary text-sm">
          Affiliates program
        </p>
      </div>
    </div>
    <div class="card-padding py-0 d-flex">
      <div class="chart w-50 pb-4">
        <canvas id="doughnut-chart" class="chart-canvas" height="300"></canvas>
      </div>
      <div class="w-50 my-auto">
        <v-simple-table class="table" height="250px">
          <template v-slot:default>
            <tbody>
              <tr v-for="item in affiliates" :key="item.text">
                <td>
                  <div class="d-flex px-2 py-0 align-center">
                    <img :src="item.image" class="w-15" />
                    <div>
                      <h6 class="mb-0 ms-2 text-sm text-typo font-weight-bold">
                        {{ item.text }}
                      </h6>
                    </div>
                  </div>
                </td>
                <td class="align-middle text-center text-sm">
                  <span class="text-xs font-weight-bold text-body">
                    {{ item.percent }}%
                  </span>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "doughnut-chart",
  data: function () {
    return {
      doughnutChartId: "doughnut-chart",
      affiliates: [
        {
          image: require("@/assets/img/small-logos/logo-devto.svg"),
          text: "DevTo",
          percent: 25,
        },
        {
          image: require("@/assets/img/small-logos/logo-creative-tim.svg"),
          text: "Creative Tim",
          percent: 13,
        },
        {
          image: require("@/assets/img/small-logos/logo-bootstrap.svg"),
          text: "Boostrap",
          percent: 12,
        },
        {
          image: require("@/assets/img/small-logos/logo-github.svg"),
          text: "GitHub",
          percent: 37,
        },
        {
          image: require("@/assets/img/small-logos/logo-google-webdev.svg"),
          text: "Google Webdev",
          percent: 13,
        },
      ],
    };
  },
  mounted() {
    new Chart(document.getElementById(this.doughnutChartId).getContext("2d"), {
      type: "doughnut",
      data: {
        labels: ["Creative Tim", "Github", "Bootsnipp", "Dev.to", "Codeinwp"],
        datasets: [
          {
            label: "Projects",
            weight: 9,
            cutout: 60,
            tension: 0.9,
            pointRadius: 2,
            borderWidth: 2,
            backgroundColor: [
              "#03A9F4",
              "#3A416F",
              "#fb8c00",
              "#a8b8d8",
              "#e91e63",
            ],
            data: [15, 20, 12, 60, 20],
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
