<template>
  <div>
    <v-card class="card-shadow border-radius-xl">
      <div class="card-header-padding">
        <h5 class="font-weight-bold text-h5 text-typo mb-0">
          {{ this.title }}
        </h5>
        <p class="text-sm text-body font-weight-light mb-0">
          {{ this.description }}
        </p>
      </div>

      <v-card-text class="px-0 py-0">
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          class="table"
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
                      <v-icon
                        color="#adb5bd"
                        size="16"
                        class="material-icons-round mt-n2"
                        >search</v-icon
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
                      font-weight-normal
                      text-capitalize
                      btn-primary
                      bg-gradient-primary
                      py-3
                      px-6
                      ms-3
                    "
                    >New {{ modelItem.name }}</v-btn
                  >
                </template>
                <v-card class="card-shadow border-radius-xl">
                  <div class="card-header-padding card-border-bottom">
                    <span class="font-weight-bold text-h5 text-typo mb-0">{{
                      formTitle
                    }}</span>
                  </div>
                  <v-card-text class="card-padding">
                    <v-container class="px-0">
                      <v-row>
                        <template v-for="(feld, index) in defaultItem">
                          <v-col cols="6">
                            <v-text-field
                              v-model="editedItem[index]"
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
                              :placeholder="
                                index.charAt(0).toUpperCase() + index.slice(1)
                              "
                            ></v-text-field>
                          </v-col>
                        </template>
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
                        font-weight-normal
                        text-capitalize
                        btn-ls btn-outline-secondary
                        bg-transparent
                        py-3
                        px-6
                      "
                      >Cancel</v-btn
                    >

                    <v-btn
                      @click="save"
                      elevation="0"
                      :ripple="false"
                      height="43"
                      class="
                        font-weight-normal
                        text-capitalize
                        btn-ls btn-primary
                        bg-gradient-primary
                        py-3
                        px-6
                      "
                      >Save</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card class="card-shadow card-padding border-radius-xl">
                  <v-card-title class="pt-0 text-h5 text-typo justify-center"
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
                        font-weight-normal
                        text-capitalize
                        btn-ls
                        bg-transparent
                        btn-outline-secondary
                        py-3
                        px-6
                      "
                      >Cancel</v-btn
                    >

                    <v-btn
                      @click="deleteItemConfirm"
                      elevation="0"
                      :ripple="false"
                      height="43"
                      class="
                        font-weight-normal
                        text-capitalize
                        btn-ls btn-primary
                        bg-gradient-primary
                        py-3
                        px-6
                      "
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>

          <template v-slot:item.username="{ item }">
            <div class="d-flex align-center ms-2">
              <span class="text-sm font-weight-normal text-body">
                {{ item.username }}
              </span>
            </div>
          </template>

          <template v-slot:item.email="{ item }">
            <span class="text-sm font-weight-normal text-body">
              {{ item.email }}
            </span>
          </template>

          <template v-slot:item.firstName="{ item }">
            <span class="text-sm font-weight-normal text-body">
              {{ item.firstName }}
            </span>
          </template>

          <template v-slot:item.lastName="{ item }">
            <span class="text-sm font-weight-normal text-body">
              {{ item.lastName }}
            </span>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-btn
              @click="editItem(item)"
              icon
              elevation="0"
              :ripple="false"
              height="28"
              min-width="36"
              width="36"
              class="btn-ls me-2 my-2 rounded-sm"
              color="#67748e"
            >
              <v-icon size="14" class="material-icons-round"
                >construction</v-icon
              >
            </v-btn>

            <v-btn
              @click="deleteItem(item)"
              icon
              elevation="0"
              :ripple="false"
              height="28"
              min-width="36"
              width="36"
              class="btn-ls me-2 my-2 rounded-sm"
              color="#67748e"
            >
              <v-icon size="14" class="material-icons-round">close</v-icon>
            </v-btn>
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
              color="#D81B60"
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
import AdminService from "@/services/admin.service";

export default {
  name: "paginated-tables",
  props: {
    title: String,
    description: String,
    formObject: String,
    formPath: String,
    modelItem: [],
  },
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      dialog: false,
      dialogDelete: false,
      search: "",
      editedIndex: -1,
      editedItem: {},
      defaultItem: {
        title: "",
        summary: "",
      },
      items: [],
      headers: [],
    };
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      var index = this.editedIndex;
      AdminService.deleteItem(this.editedItem, this.formPath).then(
        (response) => {
          this.items.splice(index, 1);
          this.closeDelete();
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
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
        var index = this.editedIndex;
        AdminService.editItem(this.editedItem, this.formPath).then(
          (response) => {
            Object.assign(this.items[index], response);
          },
          (error) => {
            this.content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        AdminService.addItem(this.editedItem, this.formPath).then(
          (response) => {
            this.items.push(response);
          },
          (error) => {
            this.content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      }
      this.close();
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "New " + this.formObject
        : "Edit " + this.formObject;
    },
    pages() {
      return this.pagination.rowsPerPage
        ? Math.ceil(this.items.length / this.pagination.rowsPerPage)
        : 0;
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
  mounted() {
    AdminService.getItems(this.formPath).then(
      (response) => {
        for (let [index, val] of response.data.entries()) {
          var listOfFeld = Object.keys(val);
        }

        for (let [index, val] of listOfFeld.entries()) {
          this.defaultItem[val] = "";
          this.editedItem[val] = "";
          this.headers.push({
            text: val,
            align: "start",
            cellClass: "border-bottom",
            sortable: false,
            value: val,
            class:
              "text-secondary font-weight-bolder opacity-7 border-bottom ps-6",
          });
        }
        this.headers.push({
          text: "Actions",
          value: "actions",
          sortable: false,
          class: "text-secondary font-weight-bolder opacity-7",
        });
        this.items = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
