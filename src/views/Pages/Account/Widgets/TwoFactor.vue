<template>
  <v-card class="card-shadow border-radius-xl mt-6" id="2fa">
    <div class="px-6 py-6 d-flex">
      <h5 class="text-h5 font-weight-bold text-typo">
        Two-factor authentication
      </h5>
      <v-btn
        elevation="0"
        small
        :ripple="false"
        height="21"
        class="
          border-radius-md
          font-weight-bolder
          px-3
          py-3
          badge-font-size
          ms-auto
          text-success
        "
        color="#bce2be"
        >Enabled</v-btn
      >
    </div>
    <div class="px-6 py-6">
      <div class="d-flex">
        <p class="my-auto text-body font-weight-light">Security keys</p>
        <p
          class="text-secondary font-weight-light text-sm ms-auto my-auto me-3"
        >
          No Security Keys
        </p>
        <v-btn
          elevation="0"
          color="#fff"
          class="font-weight-bolder btn-outline-default py-4 px-4"
          small
        >
          Add
        </v-btn>
      </div>
      <hr class="horizontal dark my-4" />
      <div class="d-flex">
        <p class="my-auto text-body font-weight-light">SMS Number</p>
        <p
          class="text-secondary font-weight-light text-sm ms-auto my-auto me-3"
        >
          +4012374423
        </p>
        <v-btn
          elevation="0"
          color="#fff"
          class="font-weight-bolder btn-outline-default py-4 px-4"
          small
        >
          Edit
        </v-btn>
      </div>
      <hr class="horizontal dark my-4" />
      <div class="d-flex">
        <p class="my-auto text-body font-weight-light">Authenticator app</p>
        <p
          class="text-secondary font-weight-light text-sm ms-auto my-auto me-3"
        >
          Not Configured
        </p>
        <v-btn
          elevation="0"
          color="#fff"
          class="font-weight-bolder btn-outline-default py-4 px-4"
          small
        >
          Set Up
        </v-btn>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "two-factor",
};
</script>
