<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col lg="8" md="10" cols="12" class="mx-auto">
          <div class="text-center mb-16">
            <h3 class="text-h3 text-typo font-weight-bold mt-9">
              Add new Product
            </h3>
            <h5 class="text-h5 text-secondary font-weight-normal">
              This information will let us know more about you.
            </h5>
          </div>

          <v-card class="shadow border-radius-xl mt-16 mb-10 mx-auto">
            <v-stepper
              alt-labels
              elevation="0"
              v-model="e1"
              class="bg-transparent overflow-visible"
            >
              <v-row>
                <v-col cols="12" class="mx-auto pt-1">
                  <v-stepper-header
                    class="
                      bg-gradient-primary
                      shadow-primary
                      border-radius-lg
                      mx-4
                      mt-n6
                    "
                  >
                    <v-stepper-step step="1" color="#344767">
                      <span
                        class="
                          text-white
                          opacity-7
                          text-xs
                          font-weight-normal
                          text-uppercase
                        "
                        >1. Product Info</span
                      >
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="2" color="#344767">
                      <span
                        class="
                          text-white
                          opacity-7
                          text-xs
                          font-weight-normal
                          text-uppercase
                        "
                        >2. Media</span
                      >
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3" color="#344767">
                      <span
                        class="
                          text-white
                          opacity-7
                          text-xs
                          font-weight-normal
                          text-uppercase
                        "
                        >3. Socials</span
                      >
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="4" color="#344767">
                      <span
                        class="
                          text-white
                          opacity-7
                          text-xs
                          font-weight-normal
                          text-uppercase
                        "
                        >4. Pricing</span
                      >
                    </v-stepper-step>
                  </v-stepper-header>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="mx-auto">
                  <v-stepper-items class="border-radius-xl overflow-hidden">
                    <v-stepper-content
                      step="1"
                      class="bg-white border-radius-xl px-6 pt-0"
                    >
                      <v-card>
                        <div>
                          <h5 class="font-weight-bolder text-h5 text-typo mb-0">
                            Product Information
                          </h5>
                          <v-row class="mt-0">
                            <v-col sm="6" cols="12">
                              <v-text-field
                                label="Name"
                                placeholder="eg. Off-White"
                                color="#e91e63"
                                required
                                class="font-size-input input-style"
                              ></v-text-field>
                            </v-col>
                            <v-col sm="6" cols="12">
                              <v-text-field
                                label="Weight"
                                placeholder="eg. 42"
                                color="#e91e63"
                                required
                                class="font-size-input input-style"
                              ></v-text-field>
                            </v-col>
                          </v-row>

                          <v-row class="mt-0">
                            <v-col sm="6" cols="12" class="mb-2">
                              <label class="text-sm text-body ms-1"
                                >Description</label
                              >
                              <p
                                class="
                                  form-text
                                  text-muted text-xs
                                  ms-1
                                  d-inline
                                "
                              >
                                (optional)
                              </p>
                              <html-editor></html-editor>
                            </v-col>
                            <v-col sm="6" cols="12">
                              <label class="text-sm text-body">Category</label>
                              <v-select
                                :items="categories"
                                value="Clothing"
                                color="#e91e63"
                                class="
                                  font-size-input
                                  input-style
                                  placeholder-light
                                  border-radius-md
                                  select-style
                                  mt-0
                                "
                                single-line
                                height="38"
                              >
                              </v-select>
                              <label class="text-sm text-body">Sizes</label>
                              <v-select
                                :items="sizes"
                                value="Medium"
                                color="#e91e63"
                                class="
                                  font-size-input
                                  input-style
                                  placeholder-light
                                  border-radius-md
                                  select-style
                                  mt-0
                                "
                                single-line
                                height="38"
                              >
                              </v-select>
                            </v-col>
                          </v-row>
                        </div>
                        <div class="text-end">
                          <v-btn
                            :ripple="false"
                            :elevation="0"
                            class="
                              font-weight-bold
                              text-xs
                              btn-default
                              bg-gradient-default
                              py-5
                              px-6
                              mt-6
                              mb-2
                              me-2
                            "
                            color="primary"
                            @click="e1 = 2"
                          >
                            Next
                          </v-btn>
                        </div>
                      </v-card>
                    </v-stepper-content>

                    <v-stepper-content
                      step="2"
                      class="bg-white border-radius-xl px-6 pt-4"
                    >
                      <v-card>
                        <div>
                          <h5 class="font-weight-bolder text-h5 text-typo mb-0">
                            Media
                          </h5>
                          <v-row class="mt-2">
                            <v-col cols="12">
                              <label class="text-sm text-body ms-1"
                                >Product images</label
                              >
                              <dropzone v-model="fileSingle"></dropzone>
                            </v-col>
                          </v-row>
                        </div>
                        <div class="d-flex">
                          <v-btn
                            :ripple="false"
                            :elevation="0"
                            class="
                              font-weight-bold
                              placeholder-lighter
                              text-xs text-dark
                              shadow-0
                              btn-outline-secondary
                              bg-transparent
                              py-5
                              px-6
                              mt-6
                              ma-2
                            "
                            @click="e1 = 1"
                          >
                            Prev
                          </v-btn>
                          <v-btn
                            :ripple="false"
                            :elevation="0"
                            class="
                              font-weight-bold
                              text-xs
                              btn-default
                              bg-gradient-default
                              py-5
                              px-6
                              mt-6
                              mb-2
                              me-2
                              ms-auto
                            "
                            color="primary"
                            @click="e1 = 3"
                          >
                            Next
                          </v-btn>
                        </div>
                      </v-card>
                    </v-stepper-content>

                    <v-stepper-content
                      step="3"
                      class="bg-white border-radius-xl px-6 pt-4"
                    >
                      <v-card>
                        <div>
                          <h5 class="font-weight-bolder text-h5 text-typo mb-0">
                            Socials
                          </h5>
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
                        <div class="d-flex">
                          <v-btn
                            :ripple="false"
                            :elevation="0"
                            class="
                              font-weight-bold
                              placeholder-lighter
                              text-xs text-dark
                              shadow-0
                              btn-outline-secondary
                              bg-transparent
                              py-5
                              px-6
                              mt-6
                              ma-2
                            "
                            @click="e1 = 2"
                          >
                            Prev
                          </v-btn>
                          <v-btn
                            :ripple="false"
                            :elevation="0"
                            class="
                              font-weight-bold
                              text-xs
                              btn-default
                              bg-gradient-default
                              py-5
                              px-6
                              mt-6
                              mb-2
                              me-2
                              ms-auto
                            "
                            color="primary"
                            @click="e1 = 4"
                          >
                            Next
                          </v-btn>
                        </div>
                      </v-card>
                    </v-stepper-content>

                    <v-stepper-content
                      step="4"
                      class="bg-white border-radius-xl px-6 pt-4"
                    >
                      <v-card>
                        <div>
                          <h5 class="font-weight-bolder text-h5 text-typo mb-0">
                            Pricing
                          </h5>
                          <v-row class="mt-0">
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
                              <v-select
                                :items="coins"
                                value="USD"
                                color="#e91e63"
                                class="
                                  font-size-input
                                  input-style
                                  placeholder-light
                                  border-radius-md
                                "
                                single-line
                                height="33"
                              >
                              </v-select>
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
                              <label class="text-sm text-body ms-1 mb-0"
                                >Tags</label
                              >
                              <v-select
                                :items="tags"
                                class="
                                  font-size-input
                                  input-style
                                  placeholder-light
                                  select-style
                                "
                                chips
                                multiple
                                height="46"
                              >
                                <template v-slot:selection="{ item }">
                                  <v-chip
                                    label
                                    color="bg-default"
                                    class="py-1 px-2 my-0"
                                  >
                                    <span
                                      class="text-white text-caption ls-0"
                                      >{{ item }}</span
                                    >
                                  </v-chip>
                                </template>
                              </v-select>
                            </v-col>
                          </v-row>
                        </div>
                        <div class="d-flex">
                          <v-btn
                            :ripple="false"
                            class="
                              font-weight-bold
                              placeholder-lighter
                              text-xs text-dark
                              shadow-0
                              btn-outline-secondary
                              bg-transparent
                              py-5
                              px-6
                              mt-6
                              ma-2
                            "
                            @click="e1 = 3"
                          >
                            Prev
                          </v-btn>
                          <v-btn
                            :ripple="false"
                            class="
                              font-weight-bold
                              text-xs
                              btn-default
                              bg-gradient-default
                              py-5
                              px-6
                              mt-6
                              mb-0
                              ms-auto
                            "
                            color="primary"
                            @click="e1 = 4"
                          >
                            Send
                          </v-btn>
                        </div>
                      </v-card>
                    </v-stepper-content>
                  </v-stepper-items>
                </v-col>
              </v-row>
            </v-stepper>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import HtmlEditor from "./Widgets/HtmlEditor.vue";
import Dropzone from "./Widgets/Dropzone.vue";

export default {
  components: {
    HtmlEditor,
    Dropzone,
  },
  data() {
    return {
      e1: 1,
      categories: [
        "Clothing",
        "Electronics",
        "Furniture",
        "Others",
        "Real Estate",
      ],
      sizes: ["Small", "Medium", "Large"],
      fileSingle: [],
      coins: ["USD", "BTC", "CNY", "EUR"],
      tags: ["Black Friday", "Sale", "Out of stock", "In stock"],
    };
  },
};
</script>
