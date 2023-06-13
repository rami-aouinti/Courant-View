<template>
  <div>
    <v-container class="px-6 mt-n16">
      <v-row>
        <v-col class="mx-auto pt-0" lg="8">
          <v-card class="card-shadow mb-30">
            <div class="card-header-padding card-border-bottom">
              <p class="font-weight-600 text-h3 text-typo mb-0">Alerts</p>
            </div>
            <v-card-text class="card-padding">
              <v-alert
                v-for="item in alerts"
                :key="item.type"
                close-icon="fas fa-times font-size-root"
                dismissible
                icon="ni-like-2"
                :color="item.color"
                :class="{ 'alert-secondary': item.type === 'secondary' }"
                dark
              >
                <span v-if="item.type === 'secondary'" class="text-darker"
                  ><strong>{{ capitalize(item.type) }}!</strong> This is a
                  {{ item.type }} alert—check it out!</span
                >
                <span v-else
                  ><strong>{{ capitalize(item.type) }}!</strong> This is a
                  {{ item.type }} alert—check it out!</span
                >
              </v-alert>
            </v-card-text>
          </v-card>

          <v-card class="card-shadow mb-30">
            <div class="card-header-padding card-border-bottom">
              <p class="font-weight-600 text-h3 text-typo mb-0">Modals</p>
            </div>
            <v-card-text class="card-padding">
              <v-row>
                <v-col>
                  <v-dialog width="500">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        block
                        elevation="0"
                        :ripple="false"
                        height="43"
                        class="
                          font-weight-600
                          text-capitalize
                          btn-ls btn-primary
                          py-3
                          px-4
                          rounded-sm
                        "
                        color="#5e72e4"
                        >Default</v-btn
                      >
                    </template>

                    <template v-slot:default="dialog">
                      <v-card class="card-shadow">
                        <div
                          class="
                            card-header-padding
                            d-flex
                            align-center
                            justify-space-between
                            pb-10
                          "
                        >
                          <v-card-title
                            class="pa-0 text-h3 font-weight-600 text-typo"
                            >Type your modal title</v-card-title
                          >
                          <v-btn
                            icon
                            @click="dialog.value = false"
                            elevation="0"
                            :ripple="false"
                            height="38"
                            min-width="38"
                            width="38"
                            class="
                              font-weight-600
                              text-capitalize
                              btn-ls btn-dark-hover
                              rounded-sm
                            "
                            color="rgba(0,0,0,.3)"
                          >
                            <v-icon size="13">fas fa-times</v-icon>
                          </v-btn>
                        </div>
                        <v-card-text class="card-padding">
                          <p
                            class="
                              text-body
                              font-size-root font-weight-light
                              mb-5
                            "
                          >
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean. <br /><br />
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                        </v-card-text>
                        <div
                          class="
                            card-padding
                            d-flex
                            align-center
                            justify-space-between
                          "
                        >
                          <v-btn
                            elevation="0"
                            max-width="136"
                            :ripple="false"
                            height="43"
                            class="
                              font-weight-600
                              text-capitalize
                              btn-primary
                              py-3
                              px-6
                              rounded-sm
                            "
                            color="#5e72e4"
                            >Save changes</v-btn
                          >
                          <v-btn
                            @click="dialog.value = false"
                            elevation="0"
                            max-width="136"
                            :ripple="false"
                            height="43"
                            class="
                              font-weight-600
                              text-capitalize text-primary
                              py-3
                              px-6
                              rounded-sm
                            "
                            color="transparent"
                            >Close</v-btn
                          >
                        </div>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
                <v-col>
                  <v-dialog width="538">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        block
                        elevation="0"
                        :ripple="false"
                        height="43"
                        class="
                          font-weight-600
                          text-capitalize
                          btn-ls btn-primary
                          py-3
                          px-4
                          rounded-sm
                        "
                        color="#fb6340"
                        >Notification</v-btn
                      >
                    </template>

                    <template v-slot:default="dialog">
                      <v-card class="card-shadow bg-gradient-danger">
                        <div
                          class="
                            card-header-padding
                            d-flex
                            align-center
                            justify-space-between
                            pb-10
                          "
                        >
                          <v-card-title
                            class="pa-0 text-h3 font-weight-600 text-white"
                            >Your Attention is required</v-card-title
                          >
                          <v-btn
                            icon
                            @click="dialog.value = false"
                            elevation="0"
                            :ripple="false"
                            height="38"
                            min-width="38"
                            width="38"
                            class="
                              font-weight-600
                              text-capitalize
                              btn-ls btn-hover
                              rounded-sm
                            "
                            color="rgba(255,255,255,.6)"
                          >
                            <v-icon size="13">fas fa-times</v-icon>
                          </v-btn>
                        </div>
                        <v-card-text class="card-padding pt-6 text-center">
                          <v-icon size="48" class="text-white"
                            >ni-bell-55</v-icon
                          >
                          <h4
                            class="
                              heading
                              mt-6
                              text-white
                              font-weight-600
                              text-uppercase
                            "
                          >
                            You should read this!
                          </h4>
                          <p
                            class="
                              text-white
                              font-size-root font-weight-thin
                              mt-3
                            "
                          >
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia.
                          </p>
                        </v-card-text>
                        <div
                          class="
                            card-padding
                            d-flex
                            align-center
                            justify-space-between
                          "
                        >
                          <v-btn
                            elevation="0"
                            max-width="136"
                            :ripple="false"
                            height="43"
                            class="
                              font-weight-600
                              text-capitalize
                              btn-secondary
                              py-3
                              px-6
                              rounded-sm
                            "
                            color="#fff"
                            >Ok, Got it</v-btn
                          >
                          <v-btn
                            @click="dialog.value = false"
                            elevation="0"
                            max-width="136"
                            :ripple="false"
                            height="43"
                            class="
                              font-weight-600
                              text-capitalize text-white
                              py-3
                              px-6
                              rounded-sm
                            "
                            color="transparent"
                            >Close</v-btn
                          >
                        </div>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
                <v-col>
                  <v-dialog width="380">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        block
                        elevation="0"
                        :ripple="false"
                        height="43"
                        class="
                          font-weight-600
                          text-capitalize
                          btn-ls btn-primary
                          py-3
                          px-4
                          rounded-sm
                        "
                        color="#172b4d"
                        >Form</v-btn
                      >
                    </template>

                    <v-card class="card-shadow bg-secondary">
                      <div
                        class="
                          card-header-padding
                          text-center
                          card-border-bottom
                          pb-12
                        "
                      >
                        <div class="text-muted text-center mt-3 mb-4">
                          <small>Sign in with</small>
                        </div>
                        <div class="btn-wrapper text-center">
                          <v-btn
                            elevation="0"
                            :ripple="false"
                            height="43"
                            class="
                              font-weight-600
                              text-capitalize
                              btn-neutral
                              py-3
                              px-6
                              rounded-sm
                              me-3
                            "
                            color="#fff"
                          >
                            <v-img
                              max-width="20"
                              max-height="20"
                              src="@/assets/img/common/github.svg"
                              class="me-3"
                            ></v-img>
                            Github
                          </v-btn>

                          <v-btn
                            elevation="0"
                            :ripple="false"
                            height="43"
                            class="
                              font-weight-600
                              text-capitalize
                              btn-neutral
                              py-3
                              px-6
                              rounded-sm
                            "
                            color="#fff"
                          >
                            <v-img
                              max-width="20"
                              max-height="20"
                              src="@/assets/img/common/google.svg"
                              class="me-3"
                            ></v-img>
                            Github
                          </v-btn>
                        </div>
                      </div>
                      <v-card-text class="pa-12 text-center font-size-root">
                        <small class="text-muted"
                          >Or sign in with credentials</small
                        >

                        <v-text-field
                          hide-details
                          outlined
                          background-color="rgba(255,255,255,.9)"
                          color="rgba(0,0,0,.6)"
                          light
                          placeholder="Email"
                          class="
                            font-size-input
                            placeholder-lighter
                            text-color-light
                            input-alternative
                            input-focused-alternative
                            input-icon
                            mt-6
                            mb-4
                          "
                        >
                          <template slot="prepend-inner">
                            <v-icon color="#adb5bd" size=".875rem"
                              >ni-email-83</v-icon
                            >
                          </template>
                        </v-text-field>

                        <v-text-field
                          hide-details
                          outlined
                          background-color="rgba(255,255,255,.9)"
                          color="rgba(0,0,0,.6)"
                          light
                          placeholder="Password"
                          class="
                            font-size-input
                            placeholder-lighter
                            text-color-light
                            input-alternative
                            input-focused-alternative
                            input-icon
                            mb-6
                          "
                        >
                          <template slot="prepend-inner">
                            <v-icon color="#adb5bd" size=".875rem"
                              >ni-lock-circle-open</v-icon
                            >
                          </template>
                        </v-text-field>

                        <v-checkbox
                          v-model="checkbox"
                          color="#5e72e4"
                          :ripple="false"
                          class="ma-0 checkbox-custom checkbox-thinner"
                          hide-details
                        >
                          <template v-slot:label>
                            <span class="text-muted text-body-2 ls-0"
                              >Remember me</span
                            >
                          </template>
                        </v-checkbox>

                        <v-btn
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
                            my-6
                          "
                          color="#5e72e4"
                          >Sign In</v-btn
                        >
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card class="card-shadow mb-30">
            <div class="card-header-padding card-border-bottom">
              <p class="font-weight-600 text-h3 text-typo mb-0">
                Notifications
              </p>
            </div>
            <v-card-text class="card-padding">
              <v-btn
                v-for="item in snackbars"
                :key="item.name"
                @click="SnackbarShow(item.name)"
                elevation="0"
                :ripple="false"
                height="43"
                class="
                  font-weight-600
                  text-capitalize
                  btn-default
                  py-3
                  px-6
                  rounded-sm
                  me-2
                  my-2
                "
                :color="item.color"
              >
                {{ item.name }}
              </v-btn>

              <v-snackbar
                top
                v-model="snackbar.visible"
                :color="snackbar.color"
                class="snackbar-shadow"
              >
                <div class="d-flex align-start alert-notify">
                  <v-icon size="24" class="text-white mr-5"
                    >ni ni-bell-55</v-icon
                  >
                  <p class="mb-0">
                    <span class="font-size-root font-weight-600"
                      >Vuetify Snackbar</span
                    >
                    <br />
                    Turning standard Vuetify alerts into awesome notifications
                  </p>
                </div>

                <template v-slot:action="{ attrs }">
                  <v-btn
                    icon
                    elevation="0"
                    max-width="136"
                    :ripple="false"
                    height="43"
                    class="font-weight-600 text-capitalize py-3 px-6 rounded-sm"
                    color="rgba(255,255,255, .85)"
                    @click="snackbar.visible = false"
                    v-bind="attrs"
                  >
                    <v-icon size="13">fas fa-times</v-icon>
                  </v-btn>
                </template>
              </v-snackbar>
            </v-card-text>
          </v-card>

          <v-card class="card-shadow mb-30">
            <div class="card-header-padding card-border-bottom">
              <p class="font-weight-600 text-h3 text-typo mb-0">Sweet Alerts</p>
            </div>
            <v-card-text class="card-padding">
              <v-btn
                v-for="item in sweetAlerts"
                :key="item.name"
                @click="showSwal(item.type)"
                elevation="0"
                :ripple="false"
                height="43"
                class="
                  font-weight-600
                  text-capitalize
                  btn-default
                  py-3
                  px-6
                  rounded-sm
                  me-2
                  my-2
                "
                :color="item.color"
              >
                {{ item.name }}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import swal from "sweetalert2";

export default {
  name: "notifcations",
  data() {
    return {
      checkbox: false,
      snackbar: {
        color: null,
        visible: false,
      },
      sweetAlerts: [
        {
          color: "#5e72e4",
          name: "Basic Alert",
          type: "basic",
        },
        {
          color: "#11cdef",
          name: "Info Alert",
          type: "info",
        },
        {
          color: "#2dce89",
          name: "Success alert",
          type: "success",
        },
        {
          color: "#fb6340",
          name: "Warning alert",
          type: "warning",
        },
        {
          color: "#172b4d",
          name: "Question",
          type: "question",
        },
      ],
      snackbars: [
        {
          color: "#172b4d",
          name: "Default",
        },
        {
          color: "#11cdef",
          name: "Info",
        },
        {
          color: "#2dce89",
          name: "Success",
        },
        {
          color: "#fb6340",
          name: "Warning",
        },
        {
          color: "#f5365c",
          name: "Danger",
        },
      ],
      alerts: [
        {
          type: "default",
          color: "#3c4d69",
        },
        {
          type: "primary",
          color: "#7889e8",
        },
        {
          type: "secondary",
          color: "#f8fbfc",
        },
        {
          type: "info",
          color: "#37d5f2",
        },
        {
          type: "success",
          color: "#4fd69c",
        },
        {
          type: "danger",
          color: "#f75676",
        },
        {
          type: "warning",
          color: "#fc7c5f",
        },
      ],
    };
  },
  methods: {
    capitalize(s) {
      return s[0].toUpperCase() + s.slice(1);
    },
    SnackbarShow(type) {
      if (!type) return;
      switch (type) {
        case "Default":
          this.snackbar = {
            color: "#172b4d",
            visible: true,
          };
          break;
        case "Info":
          this.snackbar = {
            color: "#11cdef",
            visible: true,
          };
          break;
        case "Success":
          this.snackbar = {
            color: "#2dce89",
            visible: true,
          };
          break;
        case "Warning":
          this.snackbar = {
            color: "#fb6340",
            visible: true,
          };
          break;
        case "Danger":
          this.snackbar = {
            color: "#f5365c",
            visible: true,
          };
          break;
      }
    },
    showSwal(type) {
      if (type === "basic") {
        swal.fire({
          title: `Here's a message!`,
          text: `A few words about this sweet alert ...`,
          buttonsStyling: false,
          customClass: {
            confirmButton: "sweet-btn-primary",
          },
        });
      } else if (type === "info") {
        swal.fire({
          icon: "info",
          title: `Info`,
          text: `A few words about this sweet alert ...`,
          buttonsStyling: false,
          customClass: {
            confirmButton: "sweet-btn-info",
          },
        });
      } else if (type === "success") {
        swal.fire({
          title: `Success`,
          text: "A few words about this sweet alert ...",
          buttonsStyling: false,
          customClass: {
            confirmButton: "sweet-btn-success",
          },
          icon: "success",
        });
      } else if (type === "warning") {
        swal.fire({
          title: `Warning`,
          text: "A few words about this sweet alert ...",
          buttonsStyling: false,
          customClass: {
            confirmButton: "sweet-btn-warning",
          },
          icon: "warning",
        });
      } else if (type === "question") {
        swal.fire({
          title: `Are you sure?`,
          text: "A few words about this sweet alert ...",
          buttonsStyling: false,
          customClass: {
            confirmButton: "sweet-btn-default",
          },
          icon: "question",
        });
      }
    },
  },
};
</script>
