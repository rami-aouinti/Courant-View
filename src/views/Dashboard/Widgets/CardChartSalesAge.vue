<template>
  <v-card class="card-shadow border-radius-xl px-4 py-4">
    <h6 class="mb-4 text-h6 text-typo font-weight-bold">Sales by Age</h6>
    <div class="chart-area">
      <canvas :height="340" :id="salesAgeChartID"></canvas>
    </div>
  </v-card>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "card-sales-age",
  data: function () {
    return {
      salesAgeChartID: "salesAgeChart",
    };
  },
  mounted() {
    new Chart(document.getElementById(this.salesAgeChartID).getContext("2d"), {
      type: "bar",
      data: {
        labels: ["16-20", "21-25", "26-30", "31-36", "36-42", "42-50", "50+"],
        datasets: [
          {
            label: "Sales by age",
            weight: 5,
            borderWidth: 0,
            borderRadius: 4,
            backgroundColor: "#3A416F",
            data: [15, 20, 12, 60, 20, 15, 25],
            fill: false,
          },
        ],
      },
      options: {
        indexAxis: "y",
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
              color: "#c1c4ce5c",
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
              color: "#9ca2b7",
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
