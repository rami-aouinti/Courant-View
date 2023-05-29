<template>
  <v-card
    class="card-shadow border-radius-xl px-4 py-5"
    :class="$route.name == 'VrDefault' ? 'bg-gradient-default' : ''"
  >
    <div
      class="
        bg-gradient-default
        shadow-dark
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
          :id="tasksViewsID"
        >
        </canvas>
      </div>
    </div>
    <h6
      class="ms-2 mt-6 mb-0 text-h6 font-weight-bold"
      :class="$route.name == 'VrDefault' ? 'text-white' : 'text-typo'"
    >
      Completed Tasks
    </h6>
    <p class="text-sm ms-2 text-body font-weight-light">
      Last Campaign Performance
    </p>
    <hr class="horizontal dark mb-4 mx-2" />
    <div class="d-flex text-body mx-2">
      <i class="material-icons-round text-sm my-auto me-1">schedule</i>
      <p class="mb-0 text-sm font-weight-light text-body">just updated</p>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "card-completed-tasks",
  data: function () {
    return {
      tasksViewsID: "tasksViews",
    };
  },
  mounted() {
    new Chart(document.getElementById(this.tasksViewsID).getContext("2d"), {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Mobile apps",
            tension: 0,
            pointRadius: 5,
            pointBackgroundColor: "rgba(255, 255, 255, .8)",
            pointBorderColor: "transparent",
            borderColor: "rgba(255, 255, 255, .8)",
            borderWidth: 4,
            backgroundColor: "transparent",
            fill: true,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
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
              display: true,
              padding: 10,
              color: "#f8f9fa",
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
