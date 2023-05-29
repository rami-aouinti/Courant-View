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
            <span class="ms-1">Notifications</span>
          </v-tab>

          <v-tab :ripple="false" href="#tab-4">
            <span class="ms-1">Backup</span>
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="px-4">
      <v-col lg="8">
        <v-row>
          <v-col lg="6">
            <v-card class="card-shadow border-radius-xl">
              <div class="overflow-hidden position-relative border-radius-xl">
                <img
                  src="@/assets/img/illustrations/pattern-tree.svg"
                  class="
                    position-absolute
                    opacity-2
                    start-0
                    top-0
                    w-100
                    z-index-1
                    h-100
                  "
                />
                <span class="mask bg-gradient-default opacity-10"></span>
                <div class="px-4 py-4 position-relative">
                  <i class="fas fa-wifi text-white pa-2" aria-hidden="true"></i>
                  <h5 class="text-white mt-6 mb-12 pb-2 text-h5">
                    4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
                  </h5>
                  <div class="d-flex">
                    <div class="d-flex">
                      <div class="me-4">
                        <p
                          class="
                            text-white text-sm
                            font-weight-light
                            opacity-8
                            mb-0
                          "
                        >
                          Card Holder
                        </p>
                        <h6 class="text-white text-h6 mb-0">Jack Peterson</h6>
                      </div>
                      <div>
                        <p
                          class="
                            text-white text-sm
                            font-weight-light
                            opacity-8
                            mb-0
                          "
                        >
                          Expires
                        </p>
                        <h6 class="text-white text-h6 mb-0">11/22</h6>
                      </div>
                    </div>
                    <div
                      class="
                        ms-auto
                        w-10
                        d-flex
                        align-items-end
                        justify-content-end
                        mt-auto
                      "
                    >
                      <v-img
                        src="@/assets/img/logos/mastercard.png"
                        alt="logo"
                        width="22"
                        height="22"
                        contain
                      ></v-img>
                    </div>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col lg="6">
            <v-row>
              <v-col md="6">
                <v-card class="card-shadow border-radius-xl">
                  <div class="mx-6 pa-4 text-center">
                    <v-avatar
                      color="bg-gradient-primary"
                      class="shadow border-radius-lg"
                      width="64"
                      height="64"
                      min-width="64"
                    >
                      <v-icon size="24" class="text-white material-icons-round">
                        account_balance
                      </v-icon>
                    </v-avatar>
                  </div>
                  <div class="px-4 pb-4 text-center">
                    <h6
                      class="
                        text-center text-h6
                        mb-0
                        text-typo
                        font-weight-bold
                      "
                    >
                      Salary
                    </h6>
                    <span class="text-xs text-body">Belong Interactive</span>
                    <hr class="horizontal dark my-4" />
                    <h5 class="mb-0 text-h5 font-weight-bold text-typo">
                      +$2000
                    </h5>
                  </div>
                </v-card>
              </v-col>
              <v-col md="6">
                <v-card class="card-shadow border-radius-xl">
                  <div class="mx-6 pa-4 text-center">
                    <v-avatar
                      color="bg-gradient-primary"
                      class="shadow border-radius-lg"
                      width="64"
                      height="64"
                      min-width="64"
                    >
                      <v-icon size="24" class="text-white material-icons-round">
                        account_balance_wallet
                      </v-icon>
                    </v-avatar>
                  </div>
                  <div class="px-4 pb-4 text-center">
                    <h6
                      class="
                        text-center text-h6
                        mb-0
                        text-typo
                        font-weight-bold
                      "
                    >
                      Paypal
                    </h6>
                    <span class="text-xs text-body">Freelance Payment</span>
                    <hr class="horizontal dark my-4" />
                    <h5 class="mb-0 text-h5 font-weight-bold text-typo">
                      $455.00
                    </h5>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="12">
            <v-card class="card-shadow border-radius-xl">
              <div class="px-4 py-4 d-flex align-center">
                <h6 class="mb-0 text-typo text-h6 font-weight-bold">
                  Payment Method
                </h6>
                <v-btn
                  :ripple="false"
                  elevation="0"
                  color="#fff"
                  class="
                    font-weight-bolder
                    btn-default
                    bg-gradient-default
                    py-5
                    px-6
                    ms-auto
                  "
                  small
                >
                  <v-icon class="me-2" size="12">fa fa-plus</v-icon>
                  Add new card
                </v-btn>
              </div>
              <div class="px-4 pb-4">
                <v-row>
                  <v-col md="6">
                    <div class="pa-5 border border-radius-lg d-flex">
                      <v-avatar size="36" rounded class="me-4">
                        <v-img
                          src="@/assets/img/logos/mastercard.png"
                          alt="logo"
                          max-width="80"
                          contain
                        ></v-img>
                      </v-avatar>
                      <h6 class="mb-0 text-h6 text-typo mt-2">
                        ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852
                      </h6>
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on" size="16">
                            fas fa-pencil-alt ms-auto text-dark cursor-pointer
                          </v-icon>
                        </template>
                        <span>Edit Card</span>
                      </v-tooltip>
                    </div>
                  </v-col>
                  <v-col md="6">
                    <div class="pa-5 border border-radius-lg d-flex">
                      <v-avatar size="36" rounded class="me-4">
                        <v-img
                          src="@/assets/img/logos/visa.png"
                          alt="logo"
                          max-width="80"
                          contain
                        ></v-img>
                      </v-avatar>
                      <h6 class="mb-0 text-h6 text-typo mt-2">
                        ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248
                      </h6>
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on" size="16">
                            fas fa-pencil-alt ms-auto text-dark cursor-pointer
                          </v-icon>
                        </template>
                        <span>Edit Card</span>
                      </v-tooltip>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col lg="4">
        <v-card class="card-shadow border-radius-xl">
          <div class="px-4 pt-4 d-flex align-center">
            <h6 class="mb-0 text-h6 font-weight-bold text-typo">Invoices</h6>
            <v-btn
              :ripple="false"
              elevation="0"
              color="#fff"
              class="font-weight-bolder btn-outline-primary py-4 px-4 ms-auto"
              small
            >
              View all
            </v-btn>
          </div>
          <div class="px-4 pb-3 pt-3">
            <div v-for="invoice in invoices" :key="invoice.date">
              <v-list-item
                :key="invoice.id"
                class="px-0 pt-2 pb-3 justify-between"
              >
                <v-list-item-content class="py-0">
                  <div class="d-flex flex-column">
                    <h6 class="mb-1 text-dark font-weight-bold text-sm">
                      {{ invoice.date }}
                    </h6>
                    <span class="text-xs text-body">{{ invoice.id }}</span>
                  </div>
                </v-list-item-content>

                <v-list-item-content class="py-0 text-end">
                  <div class="d-flex align-center text-sm text-body">
                    <span class="ms-auto">{{ invoice.value }}</span>
                    <v-btn
                      color="#fff"
                      class="text-dark font-weight-bolder py-6 px-5 shadow-0"
                      small
                      simple
                    >
                      <v-icon
                        size="18"
                        class="rotate-180 material-icons-round text-lg me-2"
                        >picture_as_pdf</v-icon
                      >
                      Pdf
                    </v-btn>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="px-4">
      <v-col md="7">
        <v-card class="card-shadow border-radius-xl">
          <div class="px-4 pt-5">
            <h6 class="mb-0 text-typo text-h6 font-weight-bold">
              Billing Information
            </h6>
          </div>
          <div class="px-4 pt-6 pb-1">
            <div v-for="billing in billings" :key="billing.name">
              <v-list-item
                :key="billing.vat"
                class="px-0 py-3 bg-gray-100 border-radius-lg p-6 mb-6"
              >
                <v-list-item-content class="px-6">
                  <div class="d-flex flex-column">
                    <h6 class="mb-3 text-sm text-typo font-weight-bold">
                      {{ billing.name }}
                    </h6>
                    <span class="mb-2 text-xs text-body"
                      >Company Name:
                      <span class="text-dark font-weight-bold ms-sm-2">{{
                        billing.company
                      }}</span></span
                    >
                    <span class="mb-2 text-xs text-body"
                      >Email Address:
                      <span class="text-dark ms-sm-2 font-weight-bold">{{
                        billing.email
                      }}</span></span
                    >
                    <span class="text-xs text-body"
                      >VAT Number:
                      <span class="text-dark ms-sm-2 font-weight-bold">{{
                        billing.vat
                      }}</span></span
                    >
                  </div>
                </v-list-item-content>

                <v-list-item-content class="py-0 text-end">
                  <div class="d-flex align-center text-sm text-body">
                    <v-btn
                      :ripple="false"
                      color="transparent"
                      class="
                        text-danger
                        font-weight-bolder
                        py-6
                        px-5
                        shadow-0
                        ms-auto
                      "
                      small
                      simple
                    >
                      <v-icon size="12" class="me-2 material-icons-round"
                        >delete</v-icon
                      >
                      Delete
                    </v-btn>
                    <v-btn
                      :ripple="false"
                      color="transparent"
                      class="text-dark font-weight-bolder py-6 px-5 shadow-0"
                      small
                      simple
                    >
                      <v-icon size="12" class="me-2 material-icons-round"
                        >edit</v-icon
                      >
                      Edit
                    </v-btn>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col md="5">
        <v-card class="card-shadow border-radius-xl h-100">
          <div class="px-4 pt-5 d-flex align-center">
            <h6 class="mb-0 text-typo text-h6 font-weight-bold">
              Your Transaction's
            </h6>
            <div class="text-body ms-auto">
              <v-icon class="text-body" size="16"
                >far fa-calendar-alt me-2</v-icon
              >
              <small>23 - 30 March 2020</small>
            </div>
          </div>
          <div class="px-4 pt-6">
            <h6
              class="text-uppercase text-body text-xs font-weight-bolder mb-3"
            >
              Newest
            </h6>
            <div v-for="transaction in transactions1" :key="transaction.title">
              <v-list-item :key="transaction.title" class="px-0 py-3">
                <v-btn
                  :ripple="false"
                  icon
                  outlined
                  rounded
                  :color="transaction.color"
                  width="34px"
                  height="34px"
                  class="me-4"
                >
                  <v-icon size="18" class="material-icons-round">{{
                    transaction.icon
                  }}</v-icon>
                </v-btn>

                <v-list-item-content class="py-0">
                  <div class="d-flex flex-column">
                    <h6 class="mb-1 text-typo text-sm font-weight-bold">
                      {{ transaction.title }}
                    </h6>
                    <span class="text-xs text-body">{{
                      transaction.date
                    }}</span>
                  </div>
                </v-list-item-content>

                <v-list-item-content class="py-0 text-end">
                  <div
                    :class="transaction.gradient"
                    class="text-sm font-weight-bold text-gradient"
                  >
                    {{ transaction.value }}
                  </div>
                </v-list-item-content>
              </v-list-item>
            </div>
            <h6
              class="
                text-uppercase text-body text-xs
                font-weight-bolder
                mt-4
                mb-3
              "
            >
              Yesterday
            </h6>
            <div v-for="transaction in transactions2" :key="transaction.title">
              <v-list-item :key="transaction.title" class="px-0 py-3">
                <v-btn
                  :ripple="false"
                  icon
                  outlined
                  rounded
                  :color="transaction.color"
                  width="34px"
                  height="34px"
                  class="me-4"
                >
                  <v-icon size="18" class="material-icons-round">{{
                    transaction.icon
                  }}</v-icon>
                </v-btn>

                <v-list-item-content class="py-0">
                  <div class="d-flex flex-column">
                    <h6 class="mb-1 text-typo text-sm font-weight-bold">
                      {{ transaction.title }}
                    </h6>
                    <span class="text-xs text-body">{{
                      transaction.date
                    }}</span>
                  </div>
                </v-list-item-content>

                <v-list-item-content class="py-0 text-end">
                  <div
                    :class="transaction.gradient"
                    class="text-sm font-weight-bold text-gradient"
                  >
                    {{ transaction.value }}
                  </div>
                </v-list-item-content>
              </v-list-item>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Billing",
  data: function () {
    return {
      invoices: [
        {
          date: "March, 01, 2020",
          id: "#MS-415646",
          value: "$180",
        },
        {
          date: "February, 10, 2021",
          id: "#RV-126749",
          value: "$250",
        },
        {
          date: "April, 05, 2020",
          id: "#FB-212562",
          value: "$560",
        },
        {
          date: "June, 25, 2019",
          id: "#QW-103578",
          value: "$120",
        },
        {
          date: "March, 01, 2019",
          id: "#AR-803481",
          value: "$300",
        },
      ],
      billings: [
        {
          name: "Oliver Liam",
          company: "Viking Burrito",
          email: "oliver@burrito.com",
          vat: "FRB1235476",
        },
        {
          name: "Lucas Harper",
          company: "Stone Tech Zone",
          email: "lucas@stone-tech.com",
          vat: "FRB1235476",
        },
        {
          name: "Fiber Notion",
          company: "Stone Tech Zone",
          email: "ethan@fiber.com",
          vat: "FRB1235476",
        },
      ],
      transactions1: [
        {
          icon: "expand_more",
          color: "#ea0606",
          title: "Netflix",
          date: "27 March 2020, at 12:30 PM",
          value: "- $ 2,500",
          gradient: "text-danger",
        },
        {
          icon: "expand_less",
          color: "#82d616",
          title: "Apple",
          date: "23 March 2020, at 04:30 AM",
          value: "+ $ 2,000",
          gradient: "text-success",
        },
      ],
      transactions2: [
        {
          icon: "expand_more",
          color: "#82d616",
          title: "Stripe",
          date: "26 March 2020, at 13:45 PM",
          value: "+ $ 750",
          gradient: "text-success",
        },
        {
          icon: "expand_more",
          color: "#82d616",
          title: "HubSpot",
          date: "26 March 2020, at 12:30 PM",
          value: "+ $ 1,000",
          gradient: "text-success",
        },
        {
          icon: "expand_more",
          color: "#82d616",
          title: "Creative Tim",
          date: "26 March 2020, at 08:30 AM",
          value: "+ $ 2,500",
          gradient: "text-success",
        },
        {
          icon: "priority_high",
          color: "#344767",
          title: "Webflow",
          date: "26 March 2020, at 05:00 AM",
          value: "Pending",
          gradient: "text-default",
        },
      ],
    };
  },
};
</script>
