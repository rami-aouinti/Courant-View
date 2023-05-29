<template>
  <div>
    <v-container fluid class="px-6 mt-n16">
      <v-row>
        <v-col cols="12" class="pt-0">
          <sortable-light></sortable-light>
          <sortable-translucent></sortable-translucent>
          <sortable-dark></sortable-dark>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SortableDark from "./Tables/SortableDark.vue";
import SortableLight from "./Tables/SortableLight.vue";
import SortableTranslucent from "./Tables/SortableTranslucent.vue";
export default {
  name: "sortable-tables",
  components: {
    SortableLight,
    SortableTranslucent,
    SortableDark,
  },
};
</script>
