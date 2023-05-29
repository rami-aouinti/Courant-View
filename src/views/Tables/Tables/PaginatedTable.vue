<template>
  <div>
    <v-card class="card-shadow">
      <div class="card-header-padding card-border-bottom">
        <div class="font-weight-600 text-h3 text-typo mb-1">
          Paginated table
        </div>
        <p class="text-body font-weight-thin text-body-2 ls-0 mb-0">
          This is a client side example of paginated tables using element-ui
          tables.
        </p>
      </div>

      <v-card-text class="px-0 py-0">
        <v-data-table
          :headers="headers"
          :items="users"
          :search="search"
          class="table thead-light"
          :page.sync="page"
          hide-default-footer
          @page-count="pageCount = $event"
          :items-per-page="itemsPerPage"
          mobile-breakpoint="0"
        >
          <template v-slot:top>
            <v-toolbar flat height="80">
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
                      <v-icon color="#adb5bd" size=".875rem"
                        >fas fa-search</v-icon
                      >
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>

              <v-spacer></v-spacer>

              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    elevation="0"
                    :ripple="false"
                    height="43"
                    class="
                      font-weight-600
                      text-capitalize
                      btn-primary
                      py-3
                      px-6
                      rounded-sm
                      ms-3
                    "
                    color="#5e72e4"
                    >New Item</v-btn
                  >
                </template>
                <v-card class="card-shadow">
                  <div class="card-header-padding card-border-bottom">
                    <span class="font-weight-600 text-h3 text-typo mb-0">{{
                      formTitle
                    }}</span>
                  </div>
                  <v-card-text class="card-padding">
                    <v-container class="px-0">
                      <v-row>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.name"
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
                            placeholder="Name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.email"
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
                            placeholder="Email"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.age"
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
                            placeholder="Age"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.salary"
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
                            placeholder="Salary"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions class="card-padding d-flex justify-end">
                    <v-btn
                      @click="close"
                      elevation="0"
                      :ripple="false"
                      height="43"
                      class="
                        font-weight-600
                        text-capitalize
                        btn-ls btn-danger
                        py-3
                        px-6
                        rounded-sm
                      "
                      color="#f5365c"
                      >Cancel</v-btn
                    >

                    <v-btn
                      @click="save"
                      elevation="0"
                      :ripple="false"
                      height="43"
                      class="
                        font-weight-600
                        text-capitalize
                        btn-ls btn-primary
                        py-3
                        px-6
                        rounded-sm
                      "
                      color="#5e72e4"
                      >Save</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card class="card-shadow card-padding">
                  <v-card-title class="pt-0 text-h4 text-typo justify-center"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions class="pb-0">
                    <v-spacer></v-spacer>
                    <v-btn
                      @click="closeDelete"
                      elevation="0"
                      :ripple="false"
                      height="43"
                      class="
                        font-weight-600
                        text-capitalize
                        btn-ls btn-danger
                        py-3
                        px-6
                        rounded-sm
                      "
                      color="#f5365c"
                      >Cancel</v-btn
                    >

                    <v-btn
                      @click="deleteItemConfirm"
                      elevation="0"
                      :ripple="false"
                      height="43"
                      class="
                        font-weight-600
                        text-capitalize
                        btn-ls btn-primary
                        py-3
                        px-6
                        rounded-sm
                      "
                      color="#5e72e4"
                      >Ok</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>

          <template v-slot:item.name="{ item }">
            <div class="d-flex align-center">
              <v-checkbox
                v-model="checkboxModel"
                :value="item"
                color="#5e72e4"
                :ripple="false"
                class="ma-0 checkbox-custom checkbox-thinner me-3 pt-0"
                hide-details
              ></v-checkbox>
              <span class="text-body text-h5">
                {{ item.name }}
              </span>
            </div>
          </template>

          <template v-slot:item.email="{ item }">
            <span class="text-body text-h5">
              {{ item.email }}
            </span>
          </template>

          <template v-slot:item.age="{ item }">
            <span class="text-body text-h5">
              {{ item.age }}
            </span>
          </template>

          <template v-slot:item.salary="{ item }">
            <span class="text-body text-h5">
              {{ item.salary }}
            </span>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-btn
              @click="editItem(item)"
              elevation="0"
              :ripple="false"
              height="28"
              min-width="36"
              width="36"
              class="
                font-weight-600
                text-capitalize
                btn-ls btn-warning
                me-2
                my-2
                rounded-sm
              "
              color="#fb6340"
            >
              <v-icon size="12">ni-ruler-pencil</v-icon>
            </v-btn>

            <v-btn
              @click="deleteItem(item)"
              elevation="0"
              :ripple="false"
              height="28"
              min-width="36"
              width="36"
              class="
                font-weight-600
                text-capitalize
                btn-ls btn-danger
                me-2
                my-2
                rounded-sm
              "
              color="#f5365c"
            >
              <v-icon size="12">ni-fat-remove</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions class="card-padding">
        <v-row>
          <v-col cols="6" lg="2" class="d-flex align-center">
            <span class="text-body me-3">Items per page:</span>
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
              color="#5e72e4"
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
import users from "./Users";

export default {
  name: "paginated-tables",
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      dialog: false,
      dialogDelete: false,
      checkboxModel: [],
      users,
      search: "",
      editedIndex: -1,
      editedItem: {
        name: "",
        email: "",
        age: "",
        salary: "",
      },
      defaultItem: {
        name: "",
        email: "",
        age: "",
        salary: "",
      },
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Email", value: "email" },
        { text: "Age", value: "age" },
        { text: "Salary", value: "salary" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.users.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem);
      } else {
        this.users.push(this.editedItem);
      }
      this.close();
    },
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
