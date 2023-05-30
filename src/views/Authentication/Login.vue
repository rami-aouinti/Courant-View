<template>
  <v-row class="align-center d-flex h-100">
    <v-col lg="4" md="7" class="mx-auto">
      <v-card class="card-shadow border-radius-xl py-1">
        <div
          class="
            card-padding
            text-center
            mt-n7
            bg-gradient-warning
            shadow-success
            border-radius-lg
            mx-4
          "
        >
          <h4 class="text-h4 text-white font-weight-bold">Login</h4>
          <v-row class="mt-3">
            <v-col cols="2" class="ms-auto d-flex justify-center">
              <v-btn
                icon
                outlined
                rounded
                color="transparent"
                class="text-center border-radius-md"
              >
                <i class="fab fa-facebook-f text-white text-lg"></i>
              </v-btn>
            </v-col>
            <v-col cols="2" class="d-flex justify-center">
              <v-btn
                icon
                outlined
                rounded
                color="transparent"
                class="text-center border-radius-md"
              >
                <i class="fab fa-github text-white text-lg"></i>
              </v-btn>
            </v-col>
            <v-col cols="2" class="me-auto d-flex justify-center">
              <v-btn
                icon
                outlined
                rounded
                color="transparent"
                class="text-center border-radius-md"
              >
                <i class="fab fa-google text-white text-lg"></i>
              </v-btn>
            </v-col>
          </v-row>
        </div>
        <div class="mt-2 position-relative text-center">
          <p
            class="
              text-sm
              font-weight-bold
              mb-2
              text-secondary text-border
              d-inline
              z-index-2
              bg-white
              px-3
            "
          >
            or
          </p>
        </div>
        <div class="card-padding">
          <v-form validate-on="submit lazy" @submit.prevent="handleLogin">
            <v-text-field
              label="Name"
              placeholder="Name"
              color="#e91e63"
              required
              class="font-size-input input-style"
              v-model="user.username"
              v-validate="'required'"
              type="text"
              name="username"
            >
              <div
                v-if="errors.has('username')"
                class="alert alert-danger"
                role="alert"
              >
                Username is required!
              </div>
            </v-text-field>

            <v-text-field
              label="Password"
              placeholder="Password"
              color="#e91e63"
              required
              type="password"
              class="font-size-input input-style"
              v-model="user.password"
              v-validate="'required'"
              name="password"
            >
              <div
                v-if="errors.has('password')"
                class="alert alert-danger"
                role="alert"
              >
                Password is required!
              </div>
            </v-text-field>

            <v-checkbox
              v-model="checkbox"
              color="#141727"
              :ripple="false"
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
              :loading="loading"
              type="submit"
              elevation="0"
              :ripple="false"
              height="43"
              class="
                font-weight-bold
                text-uppercase
                btn-default
                bg-gradient-default
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
            <p class="text-sm text-body mt-3 mb-0">
              Already have an account?
              <a
                href="javascript:;"
                class="text-dark text-decoration-none font-weight-bolder"
                >Sign in</a
              >
            </p>
          </v-form>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import User from "../../models/user";

export default {
  name: "Login",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",
      checkbox: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then((isValid) => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch("auth/login", this.user).then(
            () => {
              this.$store.state.auth.user.username = this.user.username;
              this.$router.push("/profile");
            },
            (error) => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    },
  },
};
</script>
