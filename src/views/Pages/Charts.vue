<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row class="mb-6">
        <v-col md="6">
          <h5 class="text-h5 text-typo font-weight-bold mb-0">Charts</h5>
          <p class="text-sm text-body font-weight-light mb-0">
            Charts on this page use Chart.js - Simple yet flexible JavaScript
            charting for designers &amp; developers.
          </p>
        </v-col>
      </v-row>
      <v-row class="mb-6">
        <v-col md="6" cols="12" class="mb-lg-0 mb-6">
          <line-chart></line-chart>
        </v-col>
        <v-col md="6" cols="12">
          <line-chart-without-dots></line-chart-without-dots>
        </v-col>
      </v-row>
      <v-row class="mb-6">
        <v-col md="6" cols="12" class="mb-lg-0 mb-6">
          <bar-chart></bar-chart>
        </v-col>
        <v-col md="6" cols="12">
          <bar-chart-horizontal></bar-chart-horizontal>
        </v-col>
      </v-row>
      <v-row class="mb-6">
        <v-col md="6" cols="12" class="mb-lg-0 mb-6">
          <mixed-chart></mixed-chart>
        </v-col>
        <v-col md="6" cols="12">
          <bubble-chart></bubble-chart>
        </v-col>
      </v-row>
      <v-row class="mb-6">
        <v-col md="6" cols="12" class="mb-lg-0 mb-6">
          <doughnut-chart></doughnut-chart>
        </v-col>
        <v-col md="6" cols="12">
          <pie-chart></pie-chart>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="6" cols="12" class="mb-lg-0 mb-6">
          <radar-chart></radar-chart>
        </v-col>
        <v-col md="6" cols="12">
          <polar-chart></polar-chart>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import LineChart from "./Widgets/LineChart.vue";
import LineChartWithoutDots from "./Widgets/LineChartWithoutDots.vue";
import BarChart from "./Widgets/BarChart.vue";
import BarChartHorizontal from "./Widgets/BarChartHorizontal.vue";
import MixedChart from "./Widgets/MixedChart.vue";
import BubbleChart from "./Widgets/BubbleChart.vue";
import DoughnutChart from "./Widgets/DoughnutChart.vue";
import PieChart from "./Widgets/PieChart.vue";
import RadarChart from "./Widgets/RadarChart.vue";
import PolarChart from "./Widgets/PolarChart.vue";

export default {
  name: "Charts",
  components: {
    LineChart,
    LineChartWithoutDots,
    BarChart,
    BarChartHorizontal,
    MixedChart,
    BubbleChart,
    DoughnutChart,
    PieChart,
    RadarChart,
    PolarChart,
  },
};
</script>
