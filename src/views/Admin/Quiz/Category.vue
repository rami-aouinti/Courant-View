<template>
  <div>
    <v-container fluid class="py-6">
      <div
        class="
          min-height-100
          border-radius-xl
          overflow-hidden
          position-relative
          mx-3
        "
        :style="`background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'); background-position: 50%; background-size: cover;`"
      >
        <span class="mask bg-gradient-primary opacity-6"></span>
      </div>
      <v-row>
        <paginated-table
          :title="this.title"
          :description="this.description"
          :headers="this.headers"
          :modelItem="this.modelItem"
          :formObject="this.formObject"
          :formPath="this.formPath"
        >
        </paginated-table>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import PaginatedTable from "../Layout/Table.vue";
import AdminService from "@/services/admin.service";
export default {
  name: "sortable-tables",
  components: {
    PaginatedTable,
  },
  data() {
    return {
      title: "List of Category Quiz",
      description: "This is list of all Category Quiz",
      formObject: "Category Quiz",
      formPath: "category",
      modelItem: {
        name: "Category Quiz",
      },
      headers: [
        {
          text: "Username",
          align: "start",
          cellClass: "border-bottom",
          sortable: false,
          value: "username",
          class:
            "text-secondary font-weight-bolder opacity-7 border-bottom ps-6",
        },
        {
          text: "Email",
          value: "email",
          class: "text-secondary font-weight-bolder opacity-7",
        },
        {
          text: "Firstname",
          value: "firstName",
          class: "text-secondary font-weight-bolder opacity-7",
        },
        {
          text: "Lastname",
          value: "lastName",
          class: "text-secondary font-weight-bolder opacity-7",
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          class: "text-secondary font-weight-bolder opacity-7",
        },
      ],
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>
