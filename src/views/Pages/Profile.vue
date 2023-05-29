<template>
  <div>
    <v-img
      src="@/assets/img/profile-cover.jpg"
      height="500"
      position="center top"
    >
      <div class="d-flex align-center h-100">
        <div class="mask bg-gradient-default opacity-9"></div>
        <v-container fluid class="z-index-1 px-6">
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <h1 class="display-h-2 text-white font-weight-600 mb-2">
                Hello Jesse
              </h1>
              <p class="text-white mt-0 mb-12 font-weight-thin">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p>
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
                >Edit Profile</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-img>
    <v-row class="px-6 mt-n16">
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="card-shadow mb-6 bg-gradient-info">
              <v-card-text class="card-stats-padding">
                <v-row no-gutters>
                  <v-col>
                    <div
                      class="font-weight-600 text-white text-uppercase text-h5"
                    >
                      Total Traffic
                    </div>
                    <p class="font-weight-600 text-h2 text-white mb-0">
                      350,897
                    </p>
                  </v-col>
                  <v-col class="text-right">
                    <v-avatar color="#fff">
                      <v-icon size="20" class="text-default">
                        ni-active-40
                      </v-icon>
                    </v-avatar>
                  </v-col>
                </v-row>

                <p
                  class="
                    mt-4
                    mb-0
                    text-white
                    font-weight-light
                    d-flex
                    align-center
                  "
                >
                  <v-icon class="text-white me-1">fa fa-arrow-up</v-icon>
                  <span class="text-white me-2">3.48%</span> Since last month
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="card-shadow bg-gradient-danger mb-6">
              <v-card-text class="card-stats-padding">
                <v-row no-gutters>
                  <v-col>
                    <div
                      class="font-weight-600 text-white text-uppercase text-h5"
                    >
                      Performance
                    </div>
                    <p class="font-weight-600 text-h2 text-white mb-0">
                      49,65%
                    </p>
                  </v-col>
                  <v-col class="text-right">
                    <v-avatar color="#fff">
                      <v-icon size="20" class="text-default">
                        ni-spaceship
                      </v-icon>
                    </v-avatar>
                  </v-col>
                </v-row>

                <p
                  class="
                    mt-4
                    mb-0
                    text-white
                    font-weight-light
                    d-flex
                    align-center
                  "
                >
                  <v-icon class="text-white me-1">fa fa-arrow-up</v-icon>
                  <span class="text-white me-2">3.48%</span> Since last month
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-card class="card-shadow mb-30">
          <div class="card-header-padding card-border-bottom">
            <v-row>
              <v-col>
                <p class="font-weight-600 text-h3 text-typo mb-0">
                  Edit Profile
                </p>
              </v-col>

              <v-col class="text-right">
                <v-btn
                  small
                  elevation="0"
                  :ripple="false"
                  height="28"
                  class="
                    font-weight-600
                    text-capitalize
                    btn-ls btn-primary
                    rounded-sm
                    px-2
                    py-1
                  "
                  color="#5e72e4"
                  >Settings</v-btn
                >
              </v-col>
            </v-row>
          </div>
          <v-card-text class="card-padding">
            <v-form>
              <h6
                class="
                  text-caption text-uppercase
                  font-weight-600
                  text-muted
                  mb-8
                "
              >
                User information
              </h6>
              <div class="ps-lg-5">
                <v-row>
                  <v-col>
                    <label
                      for=""
                      class="label-color font-weight-600 mb-2 d-block"
                      >Username</label
                    >
                    <v-text-field
                      hide-details
                      outlined
                      class="
                        input-style
                        font-size-input
                        text-light-input
                        placeholder-light
                      "
                      placeholder="lucky.jesse"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col>
                    <label
                      for=""
                      class="label-color font-weight-600 mb-2 d-block"
                      >Email address</label
                    >
                    <v-text-field
                      type="email"
                      hide-details
                      outlined
                      class="
                        input-style
                        font-size-input
                        text-light-input
                        placeholder-light
                      "
                      placeholder="lucky@example.com"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <label
                      for=""
                      class="label-color font-weight-600 mb-2 d-block"
                      >First name</label
                    >
                    <v-text-field
                      hide-details
                      outlined
                      class="
                        input-style
                        font-size-input
                        text-light-input
                        placeholder-light
                        mb-5
                      "
                      placeholder="Lucky"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col>
                    <label
                      for=""
                      class="label-color font-weight-600 mb-2 d-block"
                      >Last name</label
                    >
                    <v-text-field
                      hide-details
                      outlined
                      class="
                        input-style
                        font-size-input
                        text-light-input
                        placeholder-light
                        mb-5
                      "
                      placeholder="jesse"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </div>
            </v-form>

            <div class="border-bottom my-5"></div>

            <h6
              class="
                text-caption text-uppercase
                font-weight-600
                text-muted
                mb-8
                mt-8
              "
            >
              Contact information
            </h6>

            <div class="ps-lg-5">
              <v-row>
                <v-col>
                  <label for="" class="label-color font-weight-600 mb-2 d-block"
                    >Address</label
                  >
                  <v-text-field
                    hide-details
                    outlined
                    class="
                      input-style
                      font-size-input
                      text-light-input
                      placeholder-light
                    "
                    placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <label for="" class="label-color font-weight-600 mb-2 d-block"
                    >City</label
                  >
                  <v-text-field
                    hide-details
                    outlined
                    class="
                      input-style
                      font-size-input
                      text-light-input
                      placeholder-light
                    "
                    placeholder="New York"
                  >
                  </v-text-field>
                </v-col>

                <v-col>
                  <label for="" class="label-color font-weight-600 mb-2 d-block"
                    >Country</label
                  >
                  <v-text-field
                    hide-details
                    outlined
                    class="
                      input-style
                      font-size-input
                      text-light-input
                      placeholder-light
                    "
                    placeholder="New York"
                  >
                  </v-text-field>
                </v-col>

                <v-col>
                  <label for="" class="label-color font-weight-600 mb-2 d-block"
                    >Postal Code</label
                  >
                  <v-text-field
                    type="number"
                    hide-details
                    outlined
                    class="
                      input-style
                      font-size-input
                      text-light-input
                      placeholder-light
                    "
                    placeholder="Postal code"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </div>

            <div class="border-bottom my-5"></div>

            <h6
              class="
                text-caption text-uppercase
                font-weight-600
                text-muted
                mb-8
                mt-8
              "
            >
              About Me
            </h6>

            <div class="ps-lg-5">
              <v-row>
                <v-col>
                  <label for="" class="label-color font-weight-600 mb-2 d-block"
                    >About Me</label
                  >
                  <v-textarea
                    hide-details
                    class="
                      input-style
                      font-size-input
                      text-light-input
                      placeholder-light
                    "
                    dense
                    flat
                    filled
                    solo
                    height="106"
                    name="input-7-4"
                    placeholder="A beautiful premium dashboard for Bootstrap 4."
                  ></v-textarea>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <card-profile></card-profile>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import CardProfile from "../Components/Cards/CardProfile.vue";
export default {
  components: { CardProfile },
  name: "profile",
};
</script>
