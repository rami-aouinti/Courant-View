<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row>
        <v-col cols="12" class="text-center mx-auto">
          <h3 class="text-h3 text-typo font-weight-bold mt-9">
            Build Your Profile
          </h3>
          <h5 class="text-h5 text-secondary font-weight-normal">
            This information will let us know more about you.
          </h5>
        </v-col>
        <v-col lg="8" class="mx-auto">
          <v-card class="shadow border-radius-xl my-10 mx-auto">
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
                      mt-n4
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
                        >About</span
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
                        >Account</span
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
                        >Address</span
                      >
                    </v-stepper-step>
                  </v-stepper-header>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="mx-auto">
                  <v-stepper-items
                    class="border-radius-xl overflow-hidden mt-5"
                  >
                    <v-stepper-content
                      step="1"
                      class="bg-white border-radius-xl px-4 pt-4"
                    >
                      <v-card>
                        <div>
                          <v-row class="text-center">
                            <v-col cols="10" class="mx-auto">
                              <h5
                                class="
                                  text-h5 text-typo
                                  font-weight-normal
                                  mb-2
                                "
                              >
                                Let's start with the basic information
                              </h5>
                              <p class="text-body font-weight-light">
                                One thing I love about the later sunsets is the
                                chance to go for a walk through the neighborhood
                                woods before dinner
                              </p>
                            </v-col>
                          </v-row>
                          <v-row class="mt-2">
                            <v-col sm="4" cols="12" class="text-center">
                              <v-badge
                                bottom
                                color="bg-gradient-primary accent-4 text-white py-0 text-xxs border-radius-md shadow material-icons-round"
                                offset-x="12"
                                offset-y="12"
                                icon="edit"
                              >
                                <v-avatar rounded width="110" height="110">
                                  <img
                                    src="@/assets/img/team-2.jpg"
                                    alt="Avatar"
                                    class="border-radius-lg"
                                  />
                                </v-avatar>
                              </v-badge>
                            </v-col>
                            <v-col sm="8" cols="12">
                              <v-text-field
                                label="First Name"
                                color="#e91e63"
                                required
                                class="font-size-input input-style"
                              ></v-text-field>

                              <v-text-field
                                label="Last Name"
                                color="#e91e63"
                                required
                                class="font-size-input input-style"
                              ></v-text-field>

                              <v-text-field
                                label="Email Address"
                                color="#e91e63"
                                required
                                class="font-size-input input-style"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </div>
                        <div class="text-end">
                          <v-btn
                            :elevation="0"
                            class="
                              font-weight-bold
                              text-xs
                              btn-default
                              bg-gradient-default
                              py-5
                              px-6
                              mt-2
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
                      class="bg-white border-radius-xl px-4 pt-4"
                    >
                      <v-card>
                        <div>
                          <v-row class="text-center">
                            <v-col cols="10" class="mx-auto">
                              <h5
                                class="
                                  text-h5 text-typo
                                  font-weight-normal
                                  mb-2
                                "
                              >
                                What are you doing? (checkboxes)
                              </h5>
                              <p class="text-body font-weight-light">
                                Give us more details about you. What do you
                                enjoy doing in your spare time?
                              </p>
                            </v-col>
                          </v-row>
                          <v-row class="mt-2">
                            <v-col cols="12" class="text-center mx-auto">
                              <v-btn-toggle
                                v-model="toggle_exclusive"
                                tile
                                color="deep-purple accent-3 mx-auto"
                                class="d-sm-inline-flex d-block"
                                group
                              >
                                <v-btn
                                  class="
                                    border
                                    border-2
                                    border-secondary
                                    border-radius-md
                                    pa-15
                                    mb-12
                                  "
                                  value="left"
                                >
                                  <v-icon
                                    size="32"
                                    class="material-icons-round"
                                  >
                                    brush
                                  </v-icon>
                                  <div class="mt-16 position-absolute">
                                    <h6
                                      class="
                                        text-h6 text-typo
                                        font-weight-bold
                                        mb-n16
                                        mt-12
                                        text-capitalize
                                      "
                                    >
                                      Design
                                    </h6>
                                  </div>
                                </v-btn>

                                <v-btn
                                  class="
                                    border
                                    border-2
                                    border-secondary
                                    border-radius-md
                                    pa-15
                                    mb-12
                                  "
                                  value="left"
                                >
                                  <v-icon
                                    size="32"
                                    class="material-icons-round"
                                  >
                                    integration_instructions
                                  </v-icon>
                                  <div class="mt-16 position-absolute">
                                    <h6
                                      class="
                                        text-h6 text-typo
                                        font-weight-bold
                                        mb-n16
                                        mt-12
                                        text-capitalize
                                      "
                                    >
                                      Code
                                    </h6>
                                  </div>
                                </v-btn>

                                <v-btn
                                  class="
                                    border
                                    border-2
                                    border-secondary
                                    border-radius-md
                                    pa-15
                                  "
                                  value="left"
                                >
                                  <v-icon
                                    size="32"
                                    class="material-icons-round"
                                  >
                                    developer_mode
                                  </v-icon>
                                  <div class="mt-16 position-absolute">
                                    <h6
                                      class="
                                        text-h6 text-typo
                                        font-weight-bold
                                        mb-n16
                                        mt-12
                                        text-capitalize
                                      "
                                    >
                                      Develop
                                    </h6>
                                  </div>
                                </v-btn>
                              </v-btn-toggle>
                            </v-col>
                          </v-row>
                        </div>
                        <div class="d-flex mt-10">
                          <v-btn
                            :elevation="0"
                            class="
                              font-weight-bold
                              text-xs text-dark
                              shadow-none
                              bg-transparent
                              btn-outline-secondary
                              py-5
                              px-6
                              mt-6
                              mb-2
                              ms-2
                            "
                            @click="e1 = 1"
                          >
                            Prev
                          </v-btn>
                          <v-btn
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
                      class="bg-white border-radius-xl px-4 pt-4"
                    >
                      <v-card>
                        <div>
                          <v-row class="text-center">
                            <v-col cols="10" class="mx-auto">
                              <h5
                                class="
                                  text-h5 text-typo
                                  font-weight-normal
                                  mb-2
                                "
                              >
                                Are you living in a nice area?
                              </h5>
                              <p class="text-body font-weight-light">
                                One thing I love about the later sunsets is the
                                chance to go for a walk through the neighborhood
                                woods before dinner
                              </p>
                            </v-col>
                          </v-row>
                          <v-row class="mt-2">
                            <v-col md="8" cols="12">
                              <v-text-field
                                label="Street Name"
                                placeholder="Eg. Str. Creative Tim"
                                color="#e91e63"
                                required
                                class="font-size-input input-style"
                              ></v-text-field>
                            </v-col>
                            <v-col md="4" cols="12">
                              <v-text-field
                                label="Street No"
                                placeholder="Eg. 321"
                                color="#e91e63"
                                required
                                class="font-size-input input-style"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row class="mt-2">
                            <v-col md="7" cols="12">
                              <v-text-field
                                label="City"
                                placeholder="Eg. San Francisco"
                                color="#e91e63"
                                required
                                hide-details
                                class="font-size-input input-style mt-0"
                              ></v-text-field>
                            </v-col>
                            <v-col md="5" cols="12">
                              <v-select
                                :items="country"
                                placeholder="Country"
                                value="Argentina"
                                color="#e91e63"
                                class="
                                  font-size-input
                                  input-style
                                  text-light-input
                                  placeholder-light
                                  select-style
                                  mb-0
                                "
                                single-line
                                height="28"
                              >
                              </v-select>
                            </v-col>
                          </v-row>
                        </div>
                        <div class="d-flex">
                          <v-btn
                            :elevation="0"
                            class="
                              font-weight-bold
                              text-xs text-dark
                              btn-light
                              shadow-none
                              bg-transparent
                              btn-outline-secondary
                              py-5
                              px-6
                              mt-2
                              mb-2
                              ms-2
                            "
                            @click="e1 = 2"
                          >
                            Prev
                          </v-btn>
                          <v-btn
                            :elevation="0"
                            class="
                              font-weight-bold
                              text-xs
                              btn-default
                              bg-gradient-default
                              py-5
                              px-6
                              mt-2
                              mb-2
                              me-2
                              ms-auto
                            "
                            color="primary"
                          >
                            Finish
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
export default {
  name: "Wizard",
  data() {
    return {
      e1: 1,
      toggle_exclusive: 2,
      country: [
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Argentina",
        "Brasil",
      ],
    };
  },
};
</script>
