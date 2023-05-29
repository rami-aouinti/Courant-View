<template>
  <v-card
    class="card-shadow border-radius-xl px-4 py-5"
    :class="$route.name == 'VrDefault' ? 'bg-gradient-default' : ''"
  >
    <div
      class="
        bg-gradient-primary
        shadow-primary
        border-radius-lg
        py-3
        pe-1
        mb-6
        mt-n12
      "
    >
      <div class="chart-area">
        <canvas
          :height="$route.name == 'VrDefault' ? '370' : '170'"
          :id="websiteViewsID"
        >
        </canvas>
      </div>
    </div>
    <h6
      class="ms-2 mt-6 mb-0 text-h6 font-weight-bold"
      :class="$route.name == 'VrDefault' ? 'text-white' : 'text-typo'"
    >
      Website Views
    </h6>
    <p class="text-sm ms-2 text-body font-weight-light">
      Last Campaign Performance
    </p>
    <hr class="horizontal dark mb-4 mx-2" />
    <div class="d-flex text-body mx-2">
      <i class="material-icons-round text-sm my-auto me-1">schedule</i>
      <p class="mb-0 text-sm font-weight-light text-body">
        campaign sent 2 days ago
      </p>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "card-website-views",
  data: function () {
    return {
      websiteViewsID: "websiteViews",
    };
  },
  mounted() {
    new Chart(document.getElementById(this.websiteViewsID).getContext("2d"), {
      type: "bar",
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [
          {
            label: "Sales",
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "rgba(255, 255, 255, .8)",
            data: [50, 20, 10, 22, 50, 10, 40],
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
              color: "rgba(255, 255, 255, .2)",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 500,
              beginAtZero: true,
              padding: 10,
              font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: "normal",
                lineHeight: 2,
              },
              color: "#fff",
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
              color: "rgba(255, 255, 255, .2)",
            },
            ticks: {
              display: true,
              color: "#f8f9fa",
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
