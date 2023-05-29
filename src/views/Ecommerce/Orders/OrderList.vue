<template>
  <div>
    <v-container fluid class="py-6">
      <div class="d-sm-flex justify-between">
        <v-btn
          elevation="0"
          height="43"
          class="
            font-weight-bold
            text-uppercase
            btn-default
            bg-gradient-primary
            py-2
            px-6
            me-2
            mb-sm-0 mb-2
          "
          color="#5e72e4"
          small
          >New order</v-btn
        >
        <div class="d-flex ms-auto">
          <v-menu transition="slide-y-transition" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                elevation="0"
                height="43"
                class="
                  font-weight-bold
                  text-uppercase
                  btn-default btn-outline-default
                  shadow-none
                  py-2
                  px-6
                  me-2
                "
                color="transparent"
                small
              >
                Filters
                <v-icon>ni ni-bold-down text-xs ms-1</v-icon>
              </v-btn>
            </template>

            <v-list class="py-0">
              <v-list-item class="list-item-hover-active py-2">
                <v-list-item-content class="pa-0">
                  <v-list-item-title
                    class="text-body-2 ls-0 text-typo font-weight-600 mb-0"
                  >
                    Status: Paid
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="list-item-hover-active pb-2">
                <v-list-item-content class="pa-0">
                  <v-list-item-title
                    class="text-body-2 ls-0 text-typo font-weight-600 mb-0"
                  >
                    Status: Refunded
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="list-item-hover-active pb-2">
                <v-list-item-content class="pa-0">
                  <v-list-item-title
                    class="text-body-2 ls-0 text-typo font-weight-600 mb-0"
                  >
                    Status: Canceled
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <hr class="horizontal dark" />
              <v-list-item class="list-item-hover-active py-2">
                <v-list-item-content class="pa-0">
                  <v-list-item-title
                    class="text-danger ls-0 font-weight-600 mb-0"
                  >
                    Remove Filter
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn
            elevation="0"
            height="43"
            class="
              font-weight-bold
              text-uppercase
              btn-default btn-outline-default
              shadow-none
              py-2
              px-6
              me-2
            "
            color="transparent"
            small
          >
            <v-icon>ni ni-archive-2 me-1</v-icon>
            Export CSV
          </v-btn>
        </div>
      </div>

      <v-row>
        <v-col cols="12">
          <v-card class="card-shadow border-radius-xl">
            <table-orders></table-orders>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import TableOrders from "./Widgets/TableOrders";

export default {
  name: "Orders-List",
  components: {
    TableOrders,
  },
};
</script>
