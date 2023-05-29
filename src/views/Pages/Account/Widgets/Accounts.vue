<template>
  <v-card class="card-shadow border-radius-xl mt-6" id="account">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-typo">Accounts</h5>
      <p class="text-sm text-body font-weight-lighter">
        Here you can setup and manage your integration settings.
      </p>
    </div>
    <div class="px-6 pb-6 pt-4">
      <div class="d-flex align-center">
        <v-avatar width="48" height="48" class="border-radius-lg me-4">
          <img src="@/assets/img/small-logos/logo-slack.svg" alt="Avatar" />
        </v-avatar>
        <div>
          <h5 class="mb-0 text-typo text-h5 font-weight-bold">Slack</h5>
          <a class="text-sm text-body text-decoration-none" href="javascript:;">
            Show less
            <i class="fas fa-chevron-up text-xs ms-1" aria-hidden="true"></i>
          </a>
        </div>
        <p
          class="mb-0 text-body text-sm font-weight-light ms-auto"
          v-if="switch1 == true"
        >
          Enabled
        </p>
        <p
          class="mb-0 text-body text-sm font-weight-light ms-auto"
          v-if="switch1 == false"
        >
          Disabled
        </p>
        <v-switch
          :ripple="false"
          class="mt-0 pt-0 ms-3 switch"
          v-model="switch1"
          hide-details
          color="#3a416ff2"
          inset
        ></v-switch>
      </div>
      <div class="ps-12 pt-5 ms-4">
        <p class="mb-0 text-sm text-body font-weight-light">
          You haven't added your Slack yet or you aren't authorized. Please add
          our Slack Bot to your account by clicking on
          <a href="javascript;" class="text-decoration-none text-dark">here</a>.
          When you've added the bot, send your verification code that you have
          received.
        </p>
        <div class="d-flex bg-gray-100 border-radius-lg pa-2 my-6">
          <p class="text-sm font-weight-bold text-body my-auto ps-sm-2 me-auto">
            Verification Code
          </p>
          <div
            class="pa-2 border border-radius-md text-xs text-body bg-white w-25"
          >
            1172913
          </div>
        </div>
        <div
          class="d-flex bg-gray-100 border-radius-lg pa-2 my-6 overflow-scroll"
        >
          <p class="text-sm font-weight-bold text-body my-auto ps-sm-2">
            Connected account
          </p>
          <h6
            class="
              text-sm
              ms-auto
              font-weight-bold
              text-typo
              me-3
              my-auto
              ms-auto
            "
          >
            hello@creative-tim.com
          </h6>
          <v-btn
            :elevation="0"
            color="#cb0c9f"
            class="
              font-weight-bolder
              btn-default
              bg-gradient-default
              py-4
              px-4
              mt-auto
            "
            small
          >
            Delete
          </v-btn>
        </div>
      </div>
      <hr class="horizontal dark mb-4" />
      <div class="d-flex align-center">
        <v-avatar width="48" height="48" class="border-radius-lg me-4">
          <img src="@/assets/img/small-logos/logo-spotify.svg" alt="Avatar" />
        </v-avatar>
        <div>
          <h5 class="mb-0 text-typo text-h5 font-weight-bold">Spotify</h5>
          <p class="text-sm text-body font-weight-light mb-0">Music</p>
        </div>
        <p class="mb-0 text-body text-xs ms-auto" v-if="switch2 == true">
          Enabled
        </p>
        <p class="mb-0 text-body text-xs ms-auto" v-if="switch2 == false">
          Disabled
        </p>
        <v-switch
          :ripple="false"
          class="mt-0 pt-0 ms-3 switch"
          v-model="switch2"
          hide-details
          color="#3a416ff2"
          inset
        ></v-switch>
      </div>
      <hr class="horizontal dark my-4" />
      <div class="d-flex align-center">
        <v-avatar width="48" height="48" class="border-radius-lg me-4">
          <img src="@/assets/img/small-logos/logo-atlassian.svg" alt="Avatar" />
        </v-avatar>
        <div>
          <h5 class="mb-0 text-typo text-h5 font-weight-bold">Atlassian</h5>
          <p class="text-sm text-body font-weight-light mb-0">Payment vendor</p>
        </div>
        <p class="mb-0 text-body text-xs ms-auto" v-if="switch3 == true">
          Enabled
        </p>
        <p class="mb-0 text-body text-xs ms-auto" v-if="switch3 == false">
          Disabled
        </p>
        <v-switch
          :ripple="false"
          class="mt-0 pt-0 ms-3 switch"
          v-model="switch3"
          hide-details
          color="#3a416ff2"
          inset
        ></v-switch>
      </div>
      <hr class="horizontal dark my-4" />
      <div class="d-flex align-center">
        <v-avatar width="48" height="48" class="border-radius-lg me-4">
          <img src="@/assets/img/small-logos/logo-asana.svg" alt="Avatar" />
        </v-avatar>
        <div>
          <h5 class="mb-0 text-typo text-h5 font-weight-bold">Asana</h5>
          <p class="text-sm text-body font-weight-light mb-0">
            Organize your team
          </p>
        </div>
        <p class="mb-0 text-body text-xs ms-auto" v-if="switch4 == true">
          Enabled
        </p>
        <p class="mb-0 text-body text-xs ms-auto" v-if="switch4 == false">
          Disabled
        </p>
        <v-switch
          :ripple="false"
          class="mt-0 pt-0 ms-3 switch"
          v-model="switch4"
          hide-details
          color="#3a416ff2"
          inset
        ></v-switch>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "accounts",
  data() {
    return {
      switch1: true,
      switch2: true,
      switch3: true,
      switch4: false,
    };
  },
};
</script>
