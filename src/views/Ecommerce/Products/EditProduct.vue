<template>
  <div>
    <v-container fluid class="py-8 px-6">
      <v-row>
        <v-col lg="6">
          <h4 class="text-h4 text-typo font-weight-bold mb-3">
            Make the changes below
          </h4>
          <p class="text-body font-weight-light">
            We’re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play.
          </p>
        </v-col>
        <v-col lg="6" class="text-end my-auto">
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
            "
            color="#5e72e4"
            small
            >Save</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4" cols="12">
          <v-card
            class="card card-shadow border-radius-xl py-5 text-center mt-6"
            data-animation="true"
          >
            <div class="mt-n11 mx-4 card-header position-relative z-index-2">
              <div class="d-block blur-shadow-image">
                <img
                  src="../../../assets/img/product-11.jpg"
                  class="img-fluid shadow border-radius-lg"
                  alt=""
                />
              </div>
              <div
                class="colored-shadow"
                style="
                  backgroundimage: 'url(' ../../../assets/img/product-11.jpg ')';
                "
              ></div>
            </div>
            <div class="mt-n12">
              <v-btn
                elevation="0"
                height="32"
                class="
                  font-weight-bold
                  text-uppercase
                  btn-default
                  bg-gradient-primary
                  py-2
                  px-4
                "
                color="#5e72e4"
                small
                >Edit</v-btn
              >
              <v-btn
                elevation="0"
                height="32"
                class="
                  font-weight-bold
                  text-uppercase
                  btn-default btn-outline-default
                  py-2
                  px-4
                  ms-2
                  shadow-none
                "
                color="transparent"
                small
                >Remove</v-btn
              >
            </div>
            <div class="mt-6 mx-5">
              <h5 class="text-h5 text-typo font-weight-normal mt-4 mb-2">
                Product Image
              </h5>
              <p class="mb-0 text-body font-weight-light">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to "Naviglio" where you can enjoy the main
                night life in Barcelona.
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col md="8" cols="12">
          <v-card class="card-shadow border-radius-xl">
            <div class="card-padding">
              <h5 class="text-h5 text-typo font-weight-bolder">
                Product Information
              </h5>
              <v-row class="mt-0">
                <v-col sm="6" cols="12">
                  <v-text-field
                    label="Name"
                    placeholder="Minimal Bar Stool"
                    color="#e91e63"
                    required
                    class="font-size-input input-style"
                  ></v-text-field>
                </v-col>
                <v-col sm="6" cols="12">
                  <v-text-field
                    label="Weight"
                    placeholder="2"
                    color="#e91e63"
                    required
                    class="font-size-input input-style"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-0">
                <v-col sm="3" cols="12">
                  <v-text-field
                    label="Collection"
                    placeholder="Summer"
                    color="#e91e63"
                    required
                    class="font-size-input input-style"
                  ></v-text-field>
                </v-col>
                <v-col sm="3" cols="12">
                  <v-text-field
                    label="Price"
                    placeholder="$90"
                    color="#e91e63"
                    required
                    class="font-size-input input-style"
                  ></v-text-field>
                </v-col>
                <v-col sm="6" cols="12">
                  <v-text-field
                    label="Quantity"
                    placeholder="50"
                    color="#e91e63"
                    required
                    class="font-size-input input-style"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col sm="6">
                  <label class="text-body text-sm font-weight-normal ms-1"
                    >Description</label
                  >
                  <p class="form-text text-muted text-xs ms-1 d-inline">
                    (optional)
                  </p>
                  <html-editor></html-editor>
                </v-col>
                <v-col sm="6">
                  <label class="text-sm text-body">Category</label>
                  <v-select
                    :items="categories"
                    value="Furniture"
                    color="#e91e63"
                    class="
                      font-size-input
                      input-style
                      placeholder-light
                      border-radius-md
                      select-style
                      mb-0
                    "
                    multi-line
                    height="36"
                  >
                  </v-select>
                  <label class="text-sm text-body">Color</label>
                  <v-select
                    :items="colors"
                    value="Black"
                    color="#e91e63"
                    class="
                      font-size-input
                      input-style
                      placeholder-light
                      border-radius-md
                      select-style
                      mb-0
                    "
                    multi-line
                    height="36"
                  >
                  </v-select>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="4" cols="12">
          <v-card class="card-shadow border-radius-xl h-100">
            <div class="card-padding">
              <h5 class="text-h5 text-typo font-weight-bolder">Socials</h5>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Shopify Handle"
                    placeholder="@soft"
                    color="#e91e63"
                    required
                    class="font-size-input input-style"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-0">
                <v-col cols="12" class="py-0">
                  <v-text-field
                    label="Facebook Account"
                    color="#e91e63"
                    required
                    class="font-size-input input-style"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-0">
                <v-col cols="12">
                  <v-text-field
                    label="Instagram Account"
                    color="#e91e63"
                    required
                    class="font-size-input input-style"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
        <v-col lg="8">
          <v-card class="card-shadow border-radius-xl">
            <div class="card-padding">
              <h5 class="text-h5 text-typo font-weight-bolder">Pricing</h5>
              <v-row class="mt-2">
                <v-col cols="3">
                  <v-text-field
                    label="Price"
                    placeholder="99.00"
                    color="#e91e63"
                    required
                    class="font-size-input input-style"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    label="Currency"
                    placeholder="USD"
                    color="#e91e63"
                    required
                    class="font-size-input input-style"
                  ></v-text-field>
                </v-col>
                <v-col cols="5">
                  <v-text-field
                    label="SKU"
                    placeholder="71283476591"
                    color="#e91e63"
                    required
                    class="font-size-input input-style"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-2">
                <v-col cols="12">
                  <label class="text-sm text-body ms-1">Tags</label>
                  <v-select
                    :items="tags"
                    class="font-size-input input-style mt-0"
                    chips
                    multiple
                    height="46"
                  >
                    <template v-slot:selection="{ item }">
                      <v-chip label color="bg-default" class="py-1 px-2 my-0">
                        <span class="text-white text-caption ls-0">{{
                          item
                        }}</span>
                      </v-chip>
                    </template>
                  </v-select>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import HtmlEditor from "./Widgets/HtmlEditor.vue";

export default {
  components: {
    HtmlEditor,
  },
  data() {
    return {
      categories: [
        "Clothing",
        "Electronics",
        "Furniture",
        "Others",
        "Real Estate",
      ],
      colors: ["Black", "Red", "Blue", "Green", "Orange"],
      coins: ["USD", "BTC", "CNY", "EUR"],
      tags: ["Black Friday", "Sale", "Out of stock", "In stock"],
    };
  },
};
</script>
