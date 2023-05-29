<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row>
        <v-col lg="8" class="mx-auto mt-9">
          <h2 class="text-center text-h2 text-typo font-weight-bold">
            Sweet Alert
          </h2>
          <p class="text-center text-body font-weight-light">
            A beautiful plugin, that replace the classic alert. Please check out
            the
            <a
              href="https://github.com/avil13/vue-sweetalert2"
              target="_blank"
              class="text-decoration-none text-dark"
              >full documentation.</a
            >
          </p>
          <v-row class="mt-9">
            <v-col md="4" cols="12">
              <v-card class="card-shadow border-radius-xl text-center pa-5">
                <p class="text-body font-weight-light">Basic example</p>
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
                    text-xs
                  "
                  @click="showBasicAlert"
                >
                  Try me!</v-btn
                >
              </v-card>
            </v-col>
            <v-col md="4" cols="12">
              <v-card class="card-shadow border-radius-xl text-center pa-5">
                <p class="text-body font-weight-light">A success message</p>
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
                    text-xs
                  "
                  @click="showSuccessAlert"
                >
                  Try me!</v-btn
                >
              </v-card>
            </v-col>
            <v-col md="4" cols="12">
              <v-card class="card-shadow border-radius-xl text-center pa-5">
                <p class="text-body font-weight-light">
                  Custom HTML description
                </p>
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
                    text-xs
                  "
                  @click="showCustomHtmlAlert"
                >
                  Try me!</v-btn
                >
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="4" cols="12">
              <v-card class="card-shadow border-radius-xl text-center pa-5">
                <p class="text-body font-weight-light">Github avatar request</p>
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
                    text-xs
                  "
                  @click="showGithubAlert"
                >
                  Try me!</v-btn
                >
              </v-card>
            </v-col>
            <v-col md="4" cols="12">
              <v-card class="card-shadow border-radius-xl text-center pa-5">
                <p class="text-body font-weight-light">
                  A title with a text under
                </p>
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
                    text-xs
                  "
                  @click="showTitleTextAlert"
                >
                  Try me!</v-btn
                >
              </v-card>
            </v-col>
            <v-col md="4" cols="12">
              <v-card class="card-shadow border-radius-xl text-center pa-5">
                <p class="text-body font-weight-light">
                  A message with auto close
                </p>
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
                    text-xs
                  "
                  @click="showAutocloseAlert"
                >
                  Try me!</v-btn
                >
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="4" cols="12">
              <v-card class="card-shadow border-radius-xl text-center pa-5">
                <p class="text-body font-weight-light">
                  A warning message, with a function attached to the "Confirm"
                  Button...
                </p>
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
                    text-xs
                  "
                  @click="showWarningAlert"
                >
                  Try me!</v-btn
                >
              </v-card>
            </v-col>
            <v-col md="4" cols="12">
              <v-card class="card-shadow border-radius-xl text-center pa-5">
                <p class="text-body font-weight-light">
                  ...and by passing a parameter, you can execute something else
                  for "Cancel"
                </p>
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
                    text-xs
                  "
                  @click="showCancelAlert"
                >
                  Try me!</v-btn
                >
              </v-card>
            </v-col>
            <v-col md="4" cols="12">
              <v-card class="card-shadow border-radius-xl text-center pa-5">
                <p class="text-body font-weight-light">
                  Right-to-left support for Arabic, Persian, Hebrew, and other
                  RTL languages
                </p>
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
                    text-xs
                  "
                  @click="showRtlAlert"
                >
                  Try me!</v-btn
                >
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";

Vue.use(VueSweetalert2);

export default {
  name: "Alerts",
  methods: {
    showBasicAlert() {
      this.$swal("Any fool can use a computer");
    },
    showSuccessAlert() {
      this.$swal("Good job!", "You clicked the button!", "success");
    },
    showCustomHtmlAlert() {
      this.$swal({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html:
          "You can use <b>bold text</b>, " +
          '<a href="//sweetalert2.github.io" class="text-dark text-decoration-none">links</a> ' +
          "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        customClass: {
          confirmButton: "bg-gradient-success px-4 py-4 border-radius-md",
          cancelButton: "bg-gradient-danger px-4 py-4 border-radius-md",
        },
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Thumbs down",
      });
    },
    showGithubAlert() {
      this.$swal({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        customClass: {
          confirmButton: "btn bg-gradient-success",
          cancelButton: "btn bg-gradient-danger",
        },
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .catch((error) => {
              this.$swal.showValidationMessage(`Request failed: ${error}`);
            });
        },
        allowOutsideClick: () => !this.$swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url,
          });
        }
      });
    },
    showTitleTextAlert() {
      this.$swal({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageAlt: "Custom image",
        customClass: {
          confirmButton: "btn bg-gradient-success",
          cancelButton: "btn bg-gradient-danger",
        },
      });
    },
    showAutocloseAlert() {
      let timerInterval;
      this.$swal({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          this.$swal.showLoading();
          timerInterval = setInterval(() => {
            const content = this.$swal.getHtmlContainer();
            if (content) {
              const b = content.querySelector("b");
              if (b) {
                b.textContent = this.$swal.getTimerLeft();
              }
            }
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        console.log(result);
      });
    },
    showWarningAlert() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        customClass: {
          confirmButton: "btn bg-gradient-success",
          cancelButton: "btn bg-gradient-danger",
        },
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          this.$swal.fire("Deleted!", "Your file has been deleted.", "success");
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === this.$swal.DismissReason.cancel
        ) {
          this.$swal.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
    },
    showCancelAlert() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        customClass: {
          confirmButton: "btn bg-gradient-success",
          cancelButton: "btn bg-gradient-danger",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    showRtlAlert() {
      this.$swal({
        title: "هل تريد الاستمرار؟",
        icon: "question",
        iconHtml: "؟",
        confirmButtonText: "نعم",
        cancelButtonText: "لا",
        showCancelButton: true,
        showCloseButton: true,
        customClass: {
          confirmButton: "btn bg-gradient-success",
          cancelButton: "btn bg-gradient-danger",
        },
      });
    },
  },
};
</script>
