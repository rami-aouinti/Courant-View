<template>
  <v-card class="mt-sm-8 mt-md-5 mt-7 bg-transparent">
    <div class="card-padding pb-0">
      <h4 class="text-h4 font-weight-bolder text-typo mb-2">Sign up</h4>
      <p class="mb-0 text-body font-weight-light">
        Enter your email and password to register
      </p>
    </div>
    <div class="card-padding pb-4">
      <v-text-field
        label="Name"
        color="#e91e63"
        outlined
        dense
        class="font-size-input input-style py-0"
      ></v-text-field>

      <v-text-field
        label="Email"
        color="#e91e63"
        outlined
        dense
        class="font-size-input input-style py-0"
      ></v-text-field>

      <v-text-field
        label="Password"
        color="#e91e63"
        outlined
        dense
        type="password"
        class="font-size-input input-style py-0"
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        color="#141727"
        :ripple="false"
        class="ma-0 checkbox-custom checkbox-thinner"
        hide-details
      >
        <template v-slot:label>
          <span class="text-body text-body-2 ls-0"
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
          btn-primary
          bg-gradient-primary
          py-2
          px-6
          me-2
          mt-7
          mb-2
          w-100
        "
        color="#5e72e4"
        small
        >Sign Up</v-btn
      >
      <div class="text-center">
        <p class="text-sm text-body font-weight-light mt-3 mb-0">
          Already have an account?
          <a
            href="javascript:;"
            class="
              text-primary text-gradient text-decoration-none
              font-weight-bold
            "
            >Sign in</a
          >
        </p>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "sign-up-illustration",
  data() {
    return {
      checkbox: false,
    };
  },
};
</script>
