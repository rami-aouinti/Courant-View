<template>
  <div>
    <v-container fluid class="pt-0 px-6 mt-n16">
      <v-row>
        <v-col cols="12" class="mt-n3">
          <paginated-table></paginated-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import PaginatedTable from "./Tables/PaginatedTable.vue";
export default {
  name: "sortable-tables",
  components: {
    PaginatedTable,
  },
};
</script>
