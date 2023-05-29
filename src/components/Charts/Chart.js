import Chart from "chart.js/auto";

function randomScalingFactor() {
  return Math.round(Math.random() * 100);
}

export const salesChart = {
  createChart(chartId) {
    new Chart(document.getElementById(chartId).getContext("2d"), {
      type: "bar",
      data: {
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Performance",
            tension: 0.4,
            borderWidth: 4,
            borderColor: "#5e72e4",
            pointRadius: 0,
            backgroundColor: "transparent",
            barPercentage: 1.6,
            data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
            maxBarThickness: 10,
            borderSkipped: false,
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
          tooltip: {
            enabled: true,
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          y: {
            grid: {
              borderDash: [2],
              borderDashOffset: [2],
              zeroLineColor: "#dee2e6",
              drawBorder: false,
              drawTicks: false,
              lineWidth: 1,
              zeroLineWidth: 1,
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
            ticks: {
              padding: 10,
              color: "#8898aa",
              font: "Open Sans",
            },
          },

          x: {
            grid: {
              color: "transparent",
              drawBorder: false,
            },
            ticks: {
              padding: 10,
              color: "#8898aa",
              font: "Open Sans",
            },
          },
        },
        layout: {
          padding: 0,
        },
      },
    });
  },
};

export const ordersChart = {
  createChart(chartId) {
    const ctx = document.getElementById(chartId).getContext("2d");

    var gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, "rgba(23,173,55,0.2)");
    gradientStroke1.addColorStop(0.2, "rgba(72,72,176,0.0)");
    gradientStroke1.addColorStop(0, "rgba(23,173,55,0)"); //purple colors

    var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(1, "rgba(20,23,39,0.2)");
    gradientStroke2.addColorStop(0.2, "rgba(72,72,176,0.0)");
    gradientStroke2.addColorStop(0, "rgba(20,23,39,0)"); //purple colors

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Mobile apps",
            tension: 0.4,
            pointRadius: 0,
            borderColor: "#17ad37",
            borderWidth: 3,
            backgroundColor: gradientStroke1,
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
            backgroundColor: gradientStroke2,
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
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#b2b9bf",
              font: {
                size: 11,
                family: "Open Sans",
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
              color: "#b2b9bf",
              padding: 20,
              font: {
                size: 11,
                family: "Open Sans",
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

export const dotsChart = {
  createChart(chartId) {
    const ctx = document.getElementById(chartId).getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Performance",
            tension: 0.4,
            data: [0, 10, 18, 28, 23, 28, 40, 36, 46, 52],
            pointRadius: 10,
            pointBackgroundColor: "#5e72e4",
            pointBorderColor: "#5e72e4",
            pointHoverRadius: 15,
            showLine: false,
            barPercentage: 1.6,
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
          tooltips: {
            enabled: true,
            mode: "index",
            intersect: false,
          },
        },

        scales: {
          y: {
            grid: {
              borderDash: [2],
              borderDashOffset: [2],
              zeroLineColor: "#dee2e6",
              drawBorder: false,
              drawTicks: false,
              lineWidth: 1,
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
            ticks: {
              padding: 20,
              color: "#8898aa",
              font: "Open Sans",
              callback: function (val, index) {
                // Hide the label of every 2nd dataset
                return index % 2 === 0 ? this.getLabelForValue(val) : "";
              },
            },
          },

          x: {
            grid: {
              color: "transparent",
              drawBorder: false,
            },
            ticks: {
              padding: 10,
              color: "#8898aa",
              font: "Open Sans",
            },
          },
        },
        layout: {
          padding: 0,
        },
      },
    });
  },
};

export const doughnutChart = {
  createChart(chartId) {
    const ctx = document.getElementById(chartId).getContext("2d");

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Danger", "Warning", "Success", "Primary", "Info"],
        datasets: [
          {
            label: "Dataset 1",
            tension: 0.4,
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
            ],
            backgroundColor: [
              "#f5365c",
              "#fb6340",
              "#2dce89",
              "#5e72e4",
              "#11cdef",
            ],
            showLine: false,
            barPercentage: 1.6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "83%",
        plugins: {
          legend: {
            display: false,
          },
          tooltips: {
            enabled: true,
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
        layout: {
          padding: 0,
        },
      },
    });
  },
};

export const pieChart = {
  createChart(chartId) {
    const ctx = document.getElementById(chartId).getContext("2d");

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Danger", "Warning", "Success", "Primary", "Info"],
        datasets: [
          {
            label: "Dataset 1",
            tension: 0.4,
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
            ],
            backgroundColor: [
              "#f5365c",
              "#fb6340",
              "#2dce89",
              "#5e72e4",
              "#11cdef",
            ],
            showLine: false,
            barPercentage: 1.6,
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
          tooltips: {
            enabled: true,
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
        layout: {
          padding: 0,
        },
      },
    });
  },
};

export const barChartStacked = {
  createChart(chartId) {
    const ctx = document.getElementById(chartId).getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Dataset 1",
            maxBarThickness: 10,
            borderSkipped: false,
            borderRadius: 100,
            tension: 0.4,
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
            ],
            backgroundColor: "#f5365c",
          },
          {
            label: "Dataset 2",
            maxBarThickness: 10,
            borderSkipped: false,
            borderRadius: 100,
            tension: 0.4,
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
            ],
            backgroundColor: "#5e72e4",
          },
          {
            label: "Dataset 3",
            maxBarThickness: 10,
            borderSkipped: false,
            borderRadius: 100,
            tension: 0.4,
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
            ],
            backgroundColor: "#2dce89",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        barPercentage: 1.6,
        plugins: {
          legend: {
            display: false,
          },
          tooltips: {
            enabled: true,
            mode: "index",
            intersect: false,
          },
        },

        scales: {
          y: {
            stacked: true,
            grid: {
              borderDash: [2],
              borderDashOffset: [2],
              zeroLineColor: "#dee2e6",
              drawBorder: false,
              drawTicks: false,
              lineWidth: 1,
              zeroLineWidth: 1,
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
            ticks: {
              padding: 10,
              color: "#8898aa",
              font: "Open Sans",
            },
          },

          x: {
            stacked: true,
            grid: {
              color: "transparent",
              drawBorder: false,
            },
            ticks: {
              padding: 10,
              color: "#8898aa",
              font: "Open Sans",
            },
          },
        },
        layout: {
          padding: 0,
        },
      },
    });
  },
};

const funcs = {
  ordersChart() {},
  dotsChart() {},
  doughnutChart() {},
  pieChart() {},
  barChartStacked() {},
};

export default funcs;
