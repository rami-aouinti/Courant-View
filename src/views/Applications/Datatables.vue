<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row class="mt-8">
        <v-col cols="12">
          <datatable-simple></datatable-simple>
        </v-col>
        <v-col cols="12">
          <datatable-search></datatable-search>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import DatatableSimple from "./Widgets/DatatableSimple.vue";
import DatatableSearch from "./Widgets/DatatableSearch.vue";

export default {
  name: "datatables",
  components: {
    DatatableSimple,
    DatatableSearch,
  },
};
</script>
