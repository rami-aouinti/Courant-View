<template>
  <div>
    <v-card class="border-radius-xl mt-6">
      <v-card-text class="px-0 py-0">
        <v-data-table
          :headers="headers"
          :items="orders"
          :search="search"
          class="table border-radius-xl"
          :page.sync="page"
          hide-default-footer
          @page-count="pageCount = $event"
          :items-per-page="itemsPerPage"
          mobile-breakpoint="0"
        >
          <template v-slot:top>
            <v-toolbar flat height="80" class="border-radius-xl">
              <v-row>
                <v-col cols="12" md="5">
                  <v-text-field
                    hide-details
                    class="
                      input-style
                      font-size-input
                      text-light-input
                      placeholder-light
                      input-icon
                    "
                    dense
                    flat
                    filled
                    solo
                    height="43"
                    v-model="search"
                    placeholder="Search"
                  >
                    <template slot="prepend-inner">
                      <v-icon
                        color="#adb5bd"
                        size="18px"
                        class="material-icons-round mt-n2"
                        >search</v-icon
                      >
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>
            </v-toolbar>
          </template>

          <template v-slot:item.id="{ item }">
            <div class="d-flex align-center">
              <v-checkbox
                :ripple="false"
                v-model="item.checkbox"
                color="#141727"
              ></v-checkbox>
              <span class="my-2 text-xs text-body font-weight-light">{{
                item.id
              }}</span>
            </div>
          </template>

          <template v-slot:item.date="{ item }">
            <span class="my-2 text-xs text-body font-weight-light">{{
              item.date
            }}</span>
          </template>

          <template v-slot:item.status="{ item }">
            <div class="d-flex align-center">
              <v-btn
                :ripple="false"
                icon
                outlined
                rounded
                width="25px"
                height="25px"
                class="me-2"
                :class="
                  item.statusIcon == 'fas fa-check'
                    ? 'border-success'
                    : 'border-default'
                "
              >
                <v-icon
                  size="8"
                  :class="
                    item.statusIcon == 'fas fa-check'
                      ? 'text-success'
                      : 'text-dark'
                  "
                >
                  {{ item.statusIcon }}
                </v-icon>
              </v-btn>
              <span class="text-body text-xs">{{ item.status }}</span>
            </div>
          </template>

          <template v-slot:item.customer="{ item }">
            <div class="d-flex align-center">
              <v-avatar size="24" class="me-2" v-if="item.customerImg">
                <v-img :src="item.customerImg"></v-img>
              </v-avatar>

              <v-avatar size="24" class="me-2 bg-gradient-default" v-else>
                <span class="text-white text-xs">{{ item.customer[0] }}</span>
              </v-avatar>
              <span class="text-body text-xs font-weight-light">{{
                item.customer
              }}</span>
            </div>
          </template>

          <template v-slot:item.product="{ item }">
            <span class="my-2 text-xs text-body font-weight-light">{{
              item.product
            }}</span>
          </template>

          <template v-slot:item.revenue="{ item }">
            <span class="my-2 text-xs text-body font-weight-light">{{
              item.revenue
            }}</span>
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions class="card-padding">
        <v-row>
          <v-col cols="6" lg="3" class="d-flex align-center">
            <span class="text-body me-3 text-sm">Items per page:</span>
            <v-text-field
              hide-details
              type="number"
              outlined
              min="-1"
              max="15"
              background-color="rgba(255,255,255,.9)"
              color="rgba(0,0,0,.6)"
              light
              :value="itemsPerPage"
              @input="itemsPerPage = parseInt($event, 10)"
              placeholder="Items per page"
              class="
                font-size-input
                placeholder-lighter
                text-color-light
                input-alternative input-focused-alternative input-icon
              "
            >
            </v-text-field>
          </v-col>
          <v-col cols="6" class="ml-auto d-flex justify-end">
            <v-pagination
              prev-icon="fa fa-angle-left"
              next-icon="fa fa-angle-right"
              class="pagination"
              color="#d81b60"
              v-model="page"
              :length="pageCount"
              circle
            ></v-pagination>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import orders from "./Orders";

export default {
  name: "table-orders",
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      orders,
      search: "",
      headers: [
        {
          text: "Id",
          align: "start",
          sortable: false,
          value: "id",
          class: "text-secondary font-weight-bolder opacity-7 border-bottom",
        },
        {
          text: "Date",
          value: "date",
          class: "text-secondary font-weight-bolder opacity-7",
        },
        {
          text: "Status",
          value: "status",
          class: "text-secondary font-weight-bolder opacity-7",
        },
        {
          text: "Customer",
          value: "customer",
          class: "text-secondary font-weight-bolder opacity-7",
        },
        {
          text: "Product",
          value: "product",
          class: "text-secondary font-weight-bolder opacity-7",
        },
        {
          text: "Revenue",
          value: "revenue",
          class: "text-secondary font-weight-bolder opacity-7",
        },
      ],
    };
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    pages() {
      return this.pagination.rowsPerPage
        ? Math.ceil(this.items.length / this.pagination.rowsPerPage)
        : 0;
    },
  },
};
</script>
