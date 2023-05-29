<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row>
        <v-col md="8" class="mx-auto mt-8">
          <v-card class="card-shadow border-radius-xl">
            <div class="pa-4">
              <h5 class="text-h5 text-typo font-weight-bold">Alerts</h5>
            </div>
            <v-card-text class="px-4">
              <v-alert
                :ripple="false"
                v-for="item in alerts"
                :key="item.type"
                close-icon="fas fa-times font-size-root font-weight-light text-white"
                :class="`alert alert-` + item.type"
                dismissible
                dark
              >
                <span class="text-sm">
                  A simple
                  {{ item.type }} alert with an
                  <a
                    href="javascript:;"
                    class="text-white font-weight-bold text-decoration-none"
                    >example link</a
                  >. Give it a click if you like.
                </span>
              </v-alert>
            </v-card-text>
          </v-card>

          <v-card class="card-shadow border-radius-xl mt-6">
            <div class="pa-4">
              <h5 class="text-h5 text-typo font-weight-bold">Notifications</h5>
              <p class="text-sm text-body mb-0">
                Notifications on this page use v-snackbar from Vuetify. Read
                more details
                <a
                  href="https://vuetifyjs.com/en/api/v-snackbar/"
                  class="text-dark text-decoration-none"
                  target="_blank"
                  >here</a
                >.
              </p>
            </div>
            <v-card-text class="px-4 pt-4">
              <v-row>
                <v-col
                  lg="3"
                  sm="6"
                  v-for="item in snackbars"
                  :key="item.color"
                >
                  <v-btn
                    :key="item.name"
                    @click="SnackbarShow(item.name)"
                    elevation="0"
                    height="50"
                    :ripple="false"
                    class="
                      font-weight-bold
                      text-uppercase
                      btn-primary
                      py-2
                      px-6
                      me-2
                      text-xs
                      w-100
                    "
                    :class="`bg-gradient-` + item.class"
                  >
                    {{ item.name }}
                    <br />
                    notification
                  </v-btn>
                </v-col>
              </v-row>
              <v-snackbar
                top
                v-model="snackbar.visible"
                :color="snackbar.color"
                class="snackbar-shadow"
              >
                <div class="d-flex align-start alert-notify">
                  <v-icon
                    size="24"
                    class="text-white me-3 mt-1 material-icons-round"
                    >notifications</v-icon
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "notifcations",
  data() {
    return {
      snackbar: {
        color: null,
        visible: false,
      },
      snackbars: [
        {
          color: "#2dce89",
          class: "success",
          name: "Success",
        },
        {
          color: "#11cdef",
          class: "info",
          name: "Info",
        },
        {
          color: "#fb6340",
          class: "warning",
          name: "Warning",
        },
        {
          color: "#f5365c",
          class: "danger",
          name: "Danger",
        },
      ],
      alerts: [
        {
          type: "primary",
        },
        {
          type: "secondary",
        },
        {
          type: "success",
        },
        {
          type: "danger",
        },
        {
          type: "warning",
        },
        {
          type: "info",
        },
        {
          type: "light",
        },
        {
          type: "dark",
        },
      ],
    };
  },
  methods: {
    SnackbarShow(type) {
      if (!type) return;
      switch (type) {
        case "Info":
          this.snackbar = {
            color: "#1A73E8",
            visible: true,
          };
          break;
        case "Success":
          this.snackbar = {
            color: "#4CAF50",
            visible: true,
          };
          break;
        case "Warning":
          this.snackbar = {
            color: "#fb8c00",
            visible: true,
          };
          break;
        case "Danger":
          this.snackbar = {
            color: "#F44335",
            visible: true,
          };
          break;
      }
    },
  },
};
</script>
