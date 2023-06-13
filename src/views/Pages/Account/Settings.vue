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
      <v-col lg="3">
        <v-card class="card-shadow border-radius-xl position-sticky top-1">
          <div class="px-4 pt-3 pb-0">
            <v-list>
              <v-list-item-group class="border-radius-sm">
                <v-list-item
                  class="px-3 py-1 border-radius-lg mb-2"
                  v-for="item in menu"
                  :key="item.icon"
                >
                  <v-icon
                    size="18"
                    class="material-icons-round me-2 text-dark"
                    >{{ item.icon }}</v-icon
                  >
                  <v-list-item-content class="py-0">
                    <a href="#account/profile" class="text-decoration-none">
                      <div class="d-flex flex-column">
                        <span class="text-dark text-sm">{{ item.text }}</span>
                      </div>
                    </a>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </v-card>
      </v-col>
      <v-col lg="9">
        <v-card class="card-shadow px-4 py-4 overflow-hidden border-radius-xl">
          <v-row>
            <v-col cols="auto">
              <v-avatar width="74" height="74" class="shadow rounded-circle">
                <img
                  :src="this.user.photo"
                  alt="Avatar"
                  class="rounded-circle"
                />
              </v-avatar>
            </v-col>
            <v-col cols="auto" class="my-auto">
              <div class="h-100">
                <h5 class="mb-1 text-h5 text-typo font-weight-bold">
                  {{ this.user.username }}
                </h5>
                <p class="mb-0 font-weight-light text-body text-sm">
                  CEO / Co-Founder
                </p>
              </div>
            </v-col>
            <v-col
              lg="4"
              md="6"
              class="my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3"
            >
              <div class="d-flex align-center">
                <p
                  class="mb-0 text-body text-xs ms-auto"
                  v-if="switche == true"
                >
                  Switch to invisible
                </p>
                <p
                  class="mb-0 text-body text-xs ms-auto"
                  v-if="switche == false"
                >
                  Switch to visible
                </p>
                <v-switch
                  :ripple="false"
                  class="mt-0 pt-0 ms-3 switch"
                  v-model="switche"
                  hide-details
                ></v-switch>
              </div>
            </v-col>
          </v-row>
        </v-card>
        <basic-info></basic-info>
        <change-password></change-password>
        <two-factor></two-factor>
        <accounts></accounts>
        <notifications></notifications>
        <sessions></sessions>
        <delete-account></delete-account>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import BasicInfo from "./Widgets/BasicInfo.vue";
import ChangePassword from "./Widgets/ChangePassword.vue";
import TwoFactor from "./Widgets/TwoFactor.vue";
import Accounts from "./Widgets/Accounts.vue";
import Notifications from "./Widgets/Notifications.vue";
import Sessions from "./Widgets/Sessions.vue";
import DeleteAccount from "./Widgets/DeleteAccount.vue";
import UserService from "@/services/user.service";

export default {
  name: "Settings",
  components: {
    BasicInfo,
    ChangePassword,
    TwoFactor,
    Accounts,
    Notifications,
    Sessions,
    DeleteAccount,
  },
  data() {
    return {
      switche: true,
      menu: [
        {
          icon: "person",
          text: "Profile",
        },
        {
          icon: "receipt_long",
          text: "Basic Info",
        },
        {
          icon: "lock",
          text: "Change Password",
        },
        {
          icon: "security",
          text: "2FA",
        },
        {
          icon: "badge",
          text: "Accounts",
        },
        {
          icon: "campaign",
          text: "Notifications",
        },
        {
          icon: "settings_applications",
          text: "Sessions",
        },
        {
          icon: "delete",
          text: "Delete Account",
        },
      ],
      user: [],
    };
  },
  mounted() {
    UserService.getProfile().then(
      (response) => {
        this.user = response.data;
        this.user.photo = "http://localhost/uploads/avatars/" + this.user.photo;
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
