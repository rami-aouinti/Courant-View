<template>
  <v-container fluid>
    <v-row class="my-16">
      <v-col lg="8" cols="12" class="mx-auto my-auto my-16">
        <v-card class="shadow border-radius-xl my-10">
          <v-stepper
            alt-labels
            elevation="0"
            v-model="e1"
            class="bg-transparent overflow-visible"
          >
            <div class="pt-1">
              <v-stepper-header
                class="
                  bg-gradient-primary
                  shadow-primary
                  border-radius-lg
                  mx-4
                  mt-n10
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
                    >User Info</span
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
                    >Address</span
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
                    >Socials</span
                  >
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="4" color="#344767">
                  <span
                    class="
                      text-white
                      opacity-7
                      text-xs
                      font-weight-normal
                      text-uppercase
                    "
                    >Profile</span
                  >
                </v-stepper-step>
              </v-stepper-header>
            </div>
            <v-stepper-items class="border-radius-xl overflow-hidden mt-5">
              <v-stepper-content
                step="1"
                class="bg-white border-radius-xl px-7 pt-2"
              >
                <v-card>
                  <div>
                    <h5 class="font-weight-bolder text-h5 text-typo mb-0">
                      About me
                    </h5>
                    <p class="mb-0 text-sm text-body font-weight-light">
                      Mandatory informations
                    </p>
                    <v-row class="mt-2">
                      <v-col sm="6" cols="12" class="py-0">
                        <v-text-field
                          label="First Name"
                          color="#e91e63"
                          required
                          class="font-size-input input-style"
                        ></v-text-field>
                      </v-col>
                      <v-col sm="6" cols="12" class="py-0">
                        <v-text-field
                          label="Last Name"
                          color="#e91e63"
                          required
                          class="font-size-input input-style"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row class="mt-2">
                      <v-col sm="6" cols="12" class="py-0">
                        <v-text-field
                          label="Company"
                          color="#e91e63"
                          required
                          class="font-size-input input-style"
                        ></v-text-field>
                      </v-col>
                      <v-col sm="6" cols="12" class="py-0">
                        <v-text-field
                          label="Email Address"
                          color="#e91e63"
                          required
                          class="font-size-input input-style"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row class="mt-2">
                      <v-col sm="6" cols="12" class="py-0">
                        <v-text-field
                          label="Password"
                          color="#e91e63"
                          required
                          type="password"
                          class="font-size-input input-style"
                        ></v-text-field>
                      </v-col>
                      <v-col sm="6" cols="12" class="py-0">
                        <v-text-field
                          label="Repeat Password"
                          color="#e91e63"
                          required
                          type="password"
                          class="font-size-input input-style"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </div>
                  <div class="text-end">
                    <v-btn
                      :ripple="false"
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
                class="bg-white border-radius-xl px-7 pt-4"
              >
                <v-card>
                  <div>
                    <h5 class="font-weight-bolder text-h5 text-typo">
                      Address
                    </h5>
                    <p class="mb-0 text-sm text-body font-weight-light">
                      Tell us where are you living
                    </p>
                    <v-row class="mt-2">
                      <v-col cols="12" class="py-0">
                        <v-text-field
                          label="Address 1"
                          color="#e91e63"
                          required
                          class="font-size-input input-style"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="mt-2">
                      <v-col cols="12" class="py-0">
                        <v-text-field
                          label="Address 2"
                          color="#e91e63"
                          required
                          class="font-size-input input-style"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="mt-2">
                      <v-col sm="6" cols="12" class="py-0">
                        <v-text-field
                          label="City"
                          color="#e91e63"
                          required
                          class="font-size-input input-style"
                        ></v-text-field>
                      </v-col>
                      <v-col sm="3" cols="12" class="py-0">
                        <v-text-field
                          label="State"
                          color="#e91e63"
                          required
                          class="font-size-input input-style"
                        ></v-text-field>
                      </v-col>
                      <v-col sm="3" cols="12" class="py-0">
                        <v-text-field
                          label="Zip"
                          color="#e91e63"
                          required
                          class="font-size-input input-style"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </div>
                  <div class="d-flex">
                    <v-btn
                      :ripple="false"
                      :elevation="0"
                      class="
                        font-weight-bold
                        placeholder-lighter
                        text-xs text-dark
                        btn-outline-secondary
                        bg-transparent
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
                      :ripple="false"
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
                class="bg-white border-radius-xl px-7 pt-4"
              >
                <v-card>
                  <div>
                    <h5 class="font-weight-bolder text-h5 text-typo">
                      Socials
                    </h5>
                    <p class="mb-0 text-sm text-body font-weight-light">
                      Please provide at least one social link
                    </p>
                    <v-row class="mt-2">
                      <v-col cols="12" class="py-0">
                        <v-text-field
                          label="Twitter Handle"
                          color="#e91e63"
                          required
                          class="font-size-input input-style"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="mt-2">
                      <v-col cols="12" class="py-0">
                        <v-text-field
                          label="Facebook Account"
                          color="#e91e63"
                          required
                          class="font-size-input input-style"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="mt-2">
                      <v-col cols="12" class="py-0">
                        <v-text-field
                          label="Instagram Account"
                          color="#e91e63"
                          required
                          class="font-size-input input-style"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </div>
                  <div class="d-flex">
                    <v-btn
                      :ripple="false"
                      :elevation="0"
                      class="
                        font-weight-bold
                        placeholder-lighter
                        text-xs text-dark
                        btn-outline-secondary
                        bg-transparent
                        py-5
                        px-6
                        mt-6
                        mb-2
                        ms-2
                      "
                      @click="e1 = 2"
                    >
                      Prev
                    </v-btn>
                    <v-btn
                      :ripple="false"
                      :elevation="0"
                      class="
                        font-weight-bold
                        text-xs
                        btn-default
                        bg-gradient-default
                        py-5
                        px-6
                        mt-6
                        mb-0
                        ms-auto
                      "
                      color="primary"
                      @click="e1 = 4"
                    >
                      Next
                    </v-btn>
                  </div>
                </v-card>
              </v-stepper-content>

              <v-stepper-content
                step="4"
                class="bg-white border-radius-xl px-7 pt-4"
              >
                <v-card>
                  <div>
                    <h5 class="font-weight-bolder text-h5 text-typo">
                      Profile
                    </h5>
                    <p class="mb-0 text-sm text-body font-weight-light">
                      Optional informations
                    </p>
                    <v-row class="mt-2">
                      <v-col cols="12">
                        <v-textarea
                          placeholder="Say a few words about who you are or what you're working on."
                          color="#e91e63"
                          class="font-size-input input-style"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </div>
                  <div class="d-flex">
                    <v-btn
                      :ripple="false"
                      :elevation="0"
                      class="
                        font-weight-bold
                        placeholder-lighter
                        text-xs text-dark
                        btn-outline-secondary
                        bg-transparent
                        py-5
                        px-6
                        mt-6
                        mb-2
                        ms-2
                      "
                      @click="e1 = 3"
                    >
                      Prev
                    </v-btn>
                    <v-btn
                      :ripple="false"
                      :elevation="0"
                      class="
                        font-weight-bold
                        text-xs
                        bg-gradient-default
                        py-5
                        px-6
                        mt-6
                        mb-2
                        me-2
                        ms-auto
                        shadow-none
                      "
                      color="primary"
                      @click="e1 = 4"
                    >
                      Send
                    </v-btn>
                  </div>
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
};
</script>
