<template>
  <div>
    <v-container fluid class="px-6 mt-10">
      <v-row>
        <v-col class="mx-auto pt-0" cols="10">
          <v-card class="card-shadow border-radius-xl mb-30">
            <div class="card-header-padding">
              <p class="font-weight-bold text-h6 text-typo mb-0">
                Install Guidance
              </p>
            </div>
            <v-card-text class="card-padding pt-0 font-size-root text-body">
              <v-list-item class="pl-0">
                <v-list-item-content>
                  <v-list-item-title class="text-body"
                    >To start using this product you will need to install it
                    with the following commands:</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>

              <ol>
                <li class="mb-2">
                  Install <strong>NodeJS LTS</strong> version from<a
                    href="https://nodejs.org/en/"
                    target="_blank"
                    class="
                      text-decoration-none text-primary text-body-2
                      ls-0
                      font-weight-600
                      ms-1
                    "
                    >NodeJS Official Page</a
                  >.
                </li>
                <li class="mb-2">
                  Purchase the product from<a
                    href="https://www.creative-tim.com/product/vuetify-material-dashboard-pro"
                    class="
                      text-decoration-none text-primary text-body-2
                      ls-0
                      font-weight-600
                      ms-1
                    "
                    target="_blank"
                    >Creative Tim</a
                  >.
                </li>
                <li class="mb-2">
                  Now you can go to your product through the terminal.
                </li>
                <li class="mb-2">
                  Once you are there please type the
                  <code>npm install</code> command.
                </li>
                <li class="mb-2">
                  When dependencies are installing it is possible that some
                  <code>warnings</code> and <code>vulnerabilities</code> to
                  appear on your terminal. Those will
                  <strong>NOT</strong> affect your product.
                </li>
                <li class="mb-2">
                  After the dependencies are installed you can now turn on the
                  project by typing <code>npm run dev</code> command.
                </li>
                <li>
                  <br />
                  <v-alert color="#37d5f2">
                    <span class="text-white"
                      >NOTE: we have not used yarn in our development, but only
                      npm, so, to avoid any issues provoked by yarn, we suggest
                      you do the same. If, however you decide to use yarn, and
                      at some point you have any issues, please try again (all
                      of the above) using npm.</span
                    >
                  </v-alert>
                </li>
                <li>
                  If you have some questions or issues with the product please
                  send us an email here on<a
                    href="mailto:support@creative-tim.com"
                    target="_blank"
                    class="
                      text-decoration-none text-primary text-body-2
                      ls-0
                      font-weight-600
                      ms-1
                    "
                    >support@creative-tim.com</a
                  >.
                </li>
              </ol>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "getting-started",
};
</script>
