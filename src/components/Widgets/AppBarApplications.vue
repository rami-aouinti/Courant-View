<template>
  <v-list class="px-3">
    <v-list-item v-for="item in pages" :key="item.title" class="mb-0 ps-0">
      <v-btn
        :ripple="false"
        text
        class="text-dark font-weight-normal text-capitalize ls-0"
        depressed
        link
        :to="item.link"
      >
        <v-icon size="16" class="material-icons-round text-dark opacity-6 me-3">
          {{ item.icon }}
        </v-icon>
        {{ item.title }}
        <v-spacer></v-spacer>
      </v-btn>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  name: "app-bar-authentication",
  data() {
    return {
      pages: [
        {
          title: "Kanban",
          icon: "widgets",
          link: "/pages/applications/kanban",
        },
        {
          title: "Wizard",
          icon: "import_contacts",
          link: "/pages/applications/wizard",
        },
        {
          title: "DataTables",
          icon: "backup_table",
          link: "/pages/applications/datatables",
        },
        {
          title: "Calendar",
          icon: "event",
          link: "/pages/applications/calendar",
        },
      ],
    };
  },
};
</script>
