<template>
  <v-row class="align-center d-flex h-100 mt-md-n16">
    <v-col lg="4" md="7" class="mx-auto">
      <v-card class="card-shadow border-radius-xl py-1">
        <div
          class="
            card-padding
            text-center
            mt-n7
            bg-gradient-primary
            shadow-primary
            border-radius-lg
            mx-4
          "
        >
          <h4 class="text-h4 font-weight-bolder text-white mb-2">
            Join us today
          </h4>
          <p class="mb-1 text-white font-weight-light text-sm">
            Enter your email and password to register
          </p>
        </div>
        <div class="card-padding text-center">
          <v-text-field
            label="Name"
            color="#e91e63"
            outlined
            dense
            hide-details
            class="font-size-input input-style mb-5"
          ></v-text-field>

          <v-text-field
            label="Email"
            color="#e91e63"
            outlined
            dense
            hide-details
            class="font-size-input input-style mb-5"
          ></v-text-field>

          <v-text-field
            label="Password"
            color="#e91e63"
            outlined
            dense
            hide-details
            type="password"
            class="font-size-input input-style mb-5"
          ></v-text-field>

          <v-checkbox
            v-model="checkbox"
            color="#141727"
            class="ma-0 checkbox-custom checkbox-thinner"
            hide-details
          >
            <template v-slot:label>
              <span class="text-body text-sm ls-0"
                >I agree the
                <a
                  href="javascript:;"
                  class="text-dark font-weight-bolder text-decoration-none"
                  >Terms and Conditions</a
                ></span
              >
            </template>
          </v-checkbox>

          <v-btn
            elevation="0"
            :ripple="false"
            height="43"
            class="
              font-weight-bold
              text-uppercase
              btn-default
              bg-gradient-primary
              py-2
              px-6
              me-2
              mt-6
              mb-2
              w-100
            "
            color="#5e72e4"
            small
            >Sign Up</v-btn
          >
          <p class="text-body font-weight-light mt-3 mb-0">
            Already have an account?
            <a
              href="javascript:;"
              class="text-primary text-decoration-none font-weight-bolder"
              >Sign in</a
            >
          </p>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "sign-up-basic",
  data() {
    return {
      checkbox: false,
    };
  },
};
</script>
