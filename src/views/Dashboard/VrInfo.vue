<template>
  <div class="transform-scale-7">
    <v-container fluid class="py-6">
      <v-row class="pt-16 mt-16">
        <v-col md="1" class="ms-14 text-center">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-avatar
                v-bind="attrs"
                v-on="on"
                width="48px"
                class="border-radius-lg mx-auto mb-3 d-block"
                rounded
              >
                <img
                  src="@/assets/img/team-1.jpg"
                  alt="Avatar"
                  class="border-radius-lg"
                />
              </v-avatar>
            </template>
            <span>My profile</span>
          </v-tooltip>

          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                min-width="45"
                :ripple="false"
                height="45"
                width="45"
                class="
                  mt-2
                  px-2
                  py-2
                  mx-auto
                  shadow shadow-sm
                  border-radius-lg
                  d-block
                "
                color="white"
              >
                <v-icon size="18" class="material-icons-round">home</v-icon>
              </v-btn>
            </template>
            <span>Home</span>
          </v-tooltip>

          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                min-width="45"
                :ripple="false"
                height="45"
                width="45"
                class="
                  mt-3
                  px-2
                  py-2
                  mx-auto
                  shadow shadow-sm
                  border-radius-lg
                  d-block
                "
                color="white"
              >
                <v-icon size="18" class="material-icons-round">search</v-icon>
              </v-btn>
            </template>
            <span>Search</span>
          </v-tooltip>

          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                min-width="45"
                :ripple="false"
                height="45"
                width="45"
                class="
                  mt-3
                  px-2
                  py-2
                  mx-auto
                  shadow shadow-sm
                  border-radius-lg
                  d-block
                "
                color="white"
              >
                <v-icon size="18" class="material-icons-round"
                  >more_horiz</v-icon
                >
              </v-btn>
            </template>
            <span>Minimize</span>
          </v-tooltip>
        </v-col>
        <v-col lg="8" md="11" class="ms-0 text-center">
          <div class="d-flex">
            <div class="me-auto">
              <h1 class="display-h-1 font-weight-bold mt-n6 mb-0 text-white">
                28°C
              </h1>
              <h6
                class="
                  text-uppercase text-h6
                  font-weight-bold
                  text-white text-left
                  mb-0
                  ms-1
                "
              >
                Cloudy
              </h6>
            </div>
            <div class="ms-auto text-end">
              <img
                class="w-50 mt-lg-n4"
                src="@/assets/img/small-logos/icon-sun-cloud.png"
                alt="image sun"
              />
            </div>
          </div>
          <v-row class="mt-6">
            <v-col md="4">
              <v-card class="move-on-hover border-radius-xl overflow-hidden">
                <div class="px-6 py-6">
                  <div class="d-flex">
                    <h6 class="text-h6 text-typo font-weight-bold mb-0 me-3">
                      08:00
                    </h6>
                    <h6
                      class="
                        text-h6 text-typo
                        font-weight-bold
                        d-block
                        text-left
                        mb-0
                      "
                    >
                      Synk up with Mark
                      <small class="text-secondary font-weight-light d-block"
                        >Hangouts</small
                      >
                    </h6>
                  </div>
                  <hr class="horizontal dark my-4" />
                  <div class="d-flex">
                    <h6 class="text-h6 text-typo font-weight-bold mb-0 me-3">
                      09:30
                    </h6>
                    <h6
                      class="
                        text-h6 text-typo
                        font-weight-bold
                        d-block
                        text-left
                        mb-0
                      "
                    >
                      Gym
                      <small class="text-secondary font-weight-light d-block"
                        >World Class</small
                      >
                    </h6>
                  </div>
                  <hr class="horizontal dark my-4" />
                  <div class="d-flex">
                    <h6 class="text-h6 text-typo font-weight-bold mb-0 me-3">
                      11:00
                    </h6>
                    <h6
                      class="
                        text-h6 text-typo
                        font-weight-bold
                        d-block
                        text-left
                        mb-0
                      "
                    >
                      Design Review
                      <small class="text-secondary font-weight-light d-block"
                        >Zoom</small
                      >
                    </h6>
                  </div>
                </div>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      min-width="45"
                      elevation="0"
                      :ripple="false"
                      height="35"
                      width="45"
                      class="w-100 text-primary"
                      color="#f8f9fa"
                    >
                      <v-icon size="20" class="material-icons-round"
                        >expand_more</v-icon
                      >
                    </v-btn>
                  </template>
                  <span>Show More</span>
                </v-tooltip>
              </v-card>
            </v-col>
            <v-col md="4">
              <v-card
                class="
                  bg-gradient-default
                  move-on-hover
                  border-radius-xl
                  overflow-hidden
                "
              >
                <div class="px-6 py-6">
                  <div class="d-flex">
                    <h5 class="mb-0 text-h5 font-weight-bold text-white">
                      To Do
                    </h5>
                    <div class="ms-auto">
                      <h1
                        class="
                          text-white text-h1
                          font-weight-bold
                          text-end
                          mb-0
                          mt-n2
                        "
                      >
                        7
                      </h1>
                      <p class="text-sm mb-0 text-white font-weight-light">
                        items
                      </p>
                    </div>
                  </div>
                  <p class="text-white font-weight-light text-left mb-0">
                    Shopping
                  </p>
                  <p class="text-white font-weight-light text-left mb-0">
                    Meeting
                  </p>
                </div>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      min-width="45"
                      elevation="0"
                      :ripple="false"
                      height="35"
                      width="45"
                      class="w-100 text-white"
                      color="transparent"
                    >
                      <v-icon size="20" class="material-icons-round"
                        >expand_more</v-icon
                      >
                    </v-btn>
                  </template>
                  <span>Show More</span>
                </v-tooltip>
              </v-card>
              <v-card class="move-on-hover border-radius-xl mt-6">
                <div class="px-6 py-6">
                  <div class="d-flex align-center">
                    <p class="mb-0 text-body">Emails (21)</p>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          v-bind="attrs"
                          v-on="on"
                          text
                          large
                          class="text-capitalize ms-auto px-0 py-0"
                          color="#344767"
                          >Check</v-btn
                        >
                      </template>
                      <span>Check your emails</span>
                    </v-tooltip>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col md="4">
              <v-card
                class="move-on-hover border-radius-xl"
                :style="`background-image: url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'); background-size: cover;`"
              >
                <span class="mask bg-gradient-default opacity-8"></span>
                <div class="px-6 py-6 z-index-2 position-relative">
                  <h5
                    class="text-white text-h5 font-weight-bold text-left mb-0"
                  >
                    Night Jazz
                  </h5>
                  <p class="text-white text-sm font-weight-light text-left">
                    Gary Coleman
                  </p>
                  <div class="d-flex mt-10 text-left">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          v-bind="attrs"
                          v-on="on"
                          icon
                          outlined
                          rounded
                          color="#fff"
                          width="45px"
                          height="45px"
                        >
                          <v-icon size="18" class="material-icons-round"
                            >skip_previous</v-icon
                          >
                        </v-btn>
                      </template>
                      <span>Prev</span>
                    </v-tooltip>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          v-bind="attrs"
                          v-on="on"
                          icon
                          outlined
                          rounded
                          color="#fff"
                          width="45px"
                          height="45px"
                          class="mx-2"
                        >
                          <v-icon size="18" class="material-icons-round"
                            >play_arrow</v-icon
                          >
                        </v-btn>
                      </template>
                      <span>Pause</span>
                    </v-tooltip>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          v-bind="attrs"
                          v-on="on"
                          icon
                          outlined
                          rounded
                          color="#fff"
                          width="45px"
                          height="45px"
                        >
                          <v-icon size="18" class="material-icons-round"
                            >skip_next</v-icon
                          >
                        </v-btn>
                      </template>
                      <span>Next</span>
                    </v-tooltip>
                  </div>
                </div>
              </v-card>
              <v-card class="move-on-hover border-radius-xl mt-6">
                <div class="px-6 py-6">
                  <div class="d-flex">
                    <p class="my-auto text-body">Messages</p>
                    <div class="ms-auto">
                      <span class="avatar-group d-flex">
                        <v-tooltip top color="#212529">
                          <template v-slot:activator="{ on, attrs }">
                            <v-avatar v-bind="attrs" v-on="on" size="36">
                              <img src="@/assets/img/team-1.jpg" alt="Avatar" />
                            </v-avatar>
                          </template>
                          <span>2 New Messages</span>
                        </v-tooltip>
                        <v-tooltip top color="#212529">
                          <template v-slot:activator="{ on, attrs }">
                            <v-avatar v-bind="attrs" v-on="on" size="36">
                              <img src="@/assets/img/team-2.jpg" alt="Avatar" />
                            </v-avatar>
                          </template>
                          <span>1 New Message</span>
                        </v-tooltip>
                        <v-tooltip top color="#212529">
                          <template v-slot:activator="{ on, attrs }">
                            <v-avatar v-bind="attrs" v-on="on" size="36">
                              <img src="@/assets/img/team-3.jpg" alt="Avatar" />
                            </v-avatar>
                          </template>
                          <span>13 New Messages</span>
                        </v-tooltip>
                        <v-tooltip top color="#212529">
                          <template v-slot:activator="{ on, attrs }">
                            <v-avatar v-bind="attrs" v-on="on" size="36">
                              <img src="@/assets/img/team-4.jpg" alt="Avatar" />
                            </v-avatar>
                          </template>
                          <span>7 New Messages</span>
                        </v-tooltip>
                      </span>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Vr-info",
};
</script>
