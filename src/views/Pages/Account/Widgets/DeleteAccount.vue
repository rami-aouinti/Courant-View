<template>
  <v-card class="card-shadow border-radius-xl mt-9" id="delete">
    <v-row>
      <v-col lg="6">
        <div class="px-6 py-6">
          <h5 class="text-h5 font-weight-bold text-typo mb-2">
            Delete Account
          </h5>
          <p class="text-sm text-body font-weight-light">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
        </div>
      </v-col>
      <v-col lg="6" class="my-auto">
        <div class="px-6 pt-0">
          <div class="d-sm-flex align-center ms-auto">
            <v-btn
              :ripple="false"
              elevation="0"
              color="#fff"
              class="font-weight-bolder btn-outline-secondary py-5 px-6 ms-auto"
              small
            >
              Deactivate
            </v-btn>
            <v-btn
              :ripple="false"
              elevation="0"
              color="#fff"
              class="
                font-weight-bolder
                btn-danger
                bg-gradient-danger
                py-5
                px-6
                ms-2
              "
              small
            >
              Delete Account
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "delete-account",
};
</script>
