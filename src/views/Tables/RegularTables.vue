<template>
  <div>
    <v-container fluid class="px-6 mt-n16">
      <v-row>
        <v-col class="pt-0" cols="12">
          <light-table-pagination></light-table-pagination>
          <table-inline-actions></table-inline-actions>
          <table-inline-actions-striped></table-inline-actions-striped>
          <check-toggles-table></check-toggles-table>
          <light-table-transparent></light-table-transparent>
          <dark-table></dark-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import LightTablePagination from "../Dashboard/Widgets/LightTablePagination.vue";
import LightTableTransparent from "../Dashboard/Widgets/LightTableTransparent.vue";
import TableInlineActions from "../Dashboard/Widgets/TableInlineActions.vue";
import TableInlineActionsStriped from "../Dashboard/Widgets/TableInlineActionsStriped.vue";
import CheckTogglesTable from "../Dashboard/Widgets/CheckTogglesTable.vue";
import DarkTable from "../Dashboard/Widgets/DarkTable.vue";

export default {
  name: "regular-tables",
  components: {
    LightTablePagination,
    LightTableTransparent,
    TableInlineActions,
    TableInlineActionsStriped,
    CheckTogglesTable,
    DarkTable,
  },
};
</script>
