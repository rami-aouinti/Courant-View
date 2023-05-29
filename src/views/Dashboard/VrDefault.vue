<template>
  <div class="transform-scale-6 ms-n14 mt-12">
    <v-container fluid class="px-6 py-6">
      <v-row class="position-relative z-index-2">
        <v-col md="7">
          <v-card class="bg-transparent mb-6 px-4 py-4">
            <v-row>
              <v-col lg="6">
                <h2 class="text-h2 text-white font-weight-bolder mb-2">
                  General Statistics
                </h2>
              </v-col>
            </v-row>
          </v-card>
          <v-row class="mb-14">
            <v-col cols="12">
              <sales-country></sales-country>
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="4" class="pt-0">
              <card-daily-sales></card-daily-sales>
            </v-col>
            <v-col lg="4" class="pt-0">
              <card-website-views></card-website-views>
            </v-col>
            <v-col lg="4" class="pt-0">
              <card-completed-tasks></card-completed-tasks>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SalesCountry from "./Widgets/SalesCountry.vue";
import CardWebsiteViews from "./Widgets/CardWebsiteViews.vue";
import CardDailySales from "./Widgets/CardDailySales.vue";
import CardCompletedTasks from "./Widgets/CardCompletedTasks.vue";

export default {
  name: "Vr-default",
  components: {
    SalesCountry,
    CardWebsiteViews,
    CardDailySales,
    CardCompletedTasks,
  },
};
</script>
