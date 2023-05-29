<template>
  <v-container fluid class="py-6">
    <v-row>
      <v-col lg="4" sm="8">
        <v-tabs background-color="transparent" class="text-left">
          <v-tabs-slider></v-tabs-slider>

          <v-tab :ripple="false" href="#tab-1">
            <span class="ms-1">Messages</span>
          </v-tab>

          <v-tab :ripple="false" href="#tab-2">
            <span class="ms-1">Social</span>
          </v-tab>

          <v-tab :ripple="false" href="#tab-3">
            <span class="ms-1">items</span>
          </v-tab>

          <v-tab :ripple="false" href="#tab-4">
            <span class="ms-1">Backup</span>
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="8" sm="10" class="mx-auto">
        <form>
          <v-card class="card-shadow border-radius-xl my-9">
            <div class="px-6 py-6">
              <v-row>
                <v-col md="4" align-self="start">
                  <v-img
                    src="@/assets/img/logo-ct.png"
                    width="50"
                    contain
                    class="pa-2 mb-2"
                  ></v-img>
                  <h6 class="text-typo text-h6 font-weight-bold mb-2">
                    St. Independence Embankment, 050105 Bucharest, Romania
                  </h6>
                  <p class="d-block text-secondary font-weight-light">
                    tel: +4 (074) 1090873
                  </p>
                </v-col>
                <v-col lg="3" md="7" class="text-md-end mt-8 ms-auto">
                  <h6
                    class="
                      d-block
                      mt-2
                      mb-0
                      text-typo text-h6
                      font-weight-bold
                      mb-2
                    "
                  >
                    Billed to: John Doe
                  </h6>
                  <p class="text-secondary font-weight-light">
                    4006 Locust View Drive<br />
                    San Francisco CA<br />
                    California
                  </p>
                </v-col>
              </v-row>
              <br />
              <v-row>
                <v-col md="4" class="mt-auto py-0">
                  <h6
                    class="
                      mb-0
                      text-start text-h6
                      font-weight-normal
                      text-secondary
                    "
                  >
                    Invoice no
                  </h6>
                  <h5
                    class="text-start text-typo text-h5 font-weight-bold mb-0"
                  >
                    #0453119
                  </h5>
                </v-col>
                <v-col lg="5" md="7" class="mt-auto ms-auto">
                  <v-row class="mt-md-5 mt-4 text-md-end text-start">
                    <v-col md="6" class="py-0">
                      <h6
                        class="text-secondary text-h6 font-weight-normal mb-0"
                      >
                        Invoice date:
                      </h6>
                    </v-col>
                    <v-col md="6" class="py-0">
                      <h6 class="text-dark text-h6 font-weight-bold mb-0">
                        06/03/2019
                      </h6>
                    </v-col>
                    <v-col md="6" class="py-0">
                      <h6
                        class="text-secondary text-h6 font-weight-normal mb-0"
                      >
                        Due date:
                      </h6>
                    </v-col>
                    <v-col md="6" class="py-0">
                      <h6 class="text-dark text-h6 font-weight-bold mb-0">
                        11/03/2019
                      </h6>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
            <div class="px-6 py-6">
              <v-row>
                <v-col cols="12">
                  <v-simple-table class="table border-radius-xl">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="ps-1">
                            <p
                              class="
                                mb-0
                                text-body text-capitalize text-md
                                font-weight-bold
                              "
                            >
                              Item
                            </p>
                          </th>
                          <th class="pe-2">
                            <p
                              class="
                                mb-0
                                text-body text-capitalize text-md
                                font-weight-bold
                              "
                            >
                              Qty
                            </p>
                          </th>
                          <th class="pe-2">
                            <p
                              class="
                                mb-0
                                text-body text-capitalize text-md
                                font-weight-bold
                              "
                            >
                              Rate
                            </p>
                          </th>
                          <th class="pe-2">
                            <p
                              class="
                                mb-0
                                text-body text-capitalize text-md
                                font-weight-bold
                              "
                            >
                              Amount
                            </p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, i) in items" :key="item.title">
                          <td
                            class="text-secondary mb-0 py-3 ps-1"
                            :class="{ 'border-bottom': i != items.length - 1 }"
                          >
                            <p class="text-md mb-0">{{ item.title }}</p>
                          </td>
                          <td class="ps-4 text-secondary">
                            <p class="text-md mb-0">{{ item.qty }}</p>
                          </td>
                          <td class="ps-4 text-secondary">
                            <p class="text-md mb-0">{{ item.rate }}</p>
                          </td>
                          <td class="ps-4 text-secondary">
                            <p class="text-md mb-0">{{ item.amount }}</p>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th class="ps-1"></th>
                          <th class="pe-2"></th>
                          <th class="pe-2">
                            <p class="mb-0 text-h5 text-typo font-weight-bold">
                              Total
                            </p>
                          </th>
                          <th class="pe-2">
                            <p class="mb-0 text-h5 text-typo font-weight-bold">
                              $698
                            </p>
                          </th>
                        </tr>
                      </tfoot>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
            </div>
            <div class="px-6 py-6 mt-md-8 mt-6">
              <v-row>
                <v-col lg="5" class="text-start">
                  <h5 class="text-h5 mb-2 text-typo font-weight-bold">
                    Thank you!
                  </h5>
                  <p class="text-secondary font-weight-light text-sm">
                    If you encounter any issues related to the invoice you can
                    contact us at:
                  </p>
                  <h6 class="text-secondary text-h6 font-weight-normal mb-0">
                    email:
                    <span class="text-dark">support@creative-tim.com</span>
                  </h6>
                </v-col>
                <v-col lg="7" class="text-end d-flex">
                  <v-btn
                    :ripple="false"
                    elevation="0"
                    color="#fff"
                    class="
                      font-weight-bolder
                      btn-info
                      bg-gradient-info
                      mt-auto
                      ms-auto
                      py-5
                      px-6
                      ms-2
                    "
                    small
                    onclick="window.print()"
                  >
                    Print
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Invoice",
  data() {
    return {
      items: [
        {
          title: "Mentions",
          qty: "1",
          rate: "9.00",
          amount: "9.00",
        },
        {
          title: "Soft UI Design System PRO",
          qty: "3",
          rate: "100.00",
          amount: "300.00",
        },
        {
          title: "Parts for service",
          qty: "1",
          rate: "89.00",
          amount: "89.00",
        },
      ],
    };
  },
};
</script>
