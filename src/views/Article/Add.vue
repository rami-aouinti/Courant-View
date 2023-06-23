<template>
  <div>
    <v-dialog v-model="dialog" hide-overlay>
      <template v-slot:activator="{ props }">
        <v-avatar
          size="58"
          width="800px"
          rounded
          class="shadow-sm"
          @click="dialog = true"
          v-bind="props"
        >
          Was machst du gerade, {{ user.username }}
        </v-avatar>
      </template>

      <v-row justify="center">
        <v-card class="card-shadow border-radius-xl text-center pa-5">
          <v-card-title>
            <span class="text-h5">New Post</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    label="Title"
                    v-model="title"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    label="Summary"
                    hint="example of helper text only on focus"
                    v-model="summary"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    label="Content"
                    hint="example of persistent helper text"
                    v-model="content"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="savePost">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-dialog>
  </div>
</template>
<script>
import UserService from "@/services/user.service";
import ArticleService from "@/services/article.service";

export default {
  name: "article-create",
  props: {
    auth: Boolean,
  },
  methods: {
    getDate(date) {
      const today = new Date();
      var postDate = new Date(date);

      return this.getDifferenceDate(today, postDate);
    },
    getDifferenceDate(dateSup, dateInf) {
      const yyyy = dateSup.getFullYear();
      let mm = dateSup.getMonth() + 1; // Months start at 0!
      let dd = dateSup.getDate();
      let hh = dateSup.getHours();
      let min = dateSup.getMinutes();
      let sec = dateSup.getSeconds();

      const yyyyInf = dateInf.getFullYear();
      let mmInf = dateInf.getMonth() + 1; // Months start at 0!
      let ddInf = dateInf.getDate();
      let hhInf = dateInf.getHours();
      let minInf = dateInf.getMinutes();
      let secInf = dateInf.getSeconds();

      if (yyyy === yyyyInf) {
        if (mm === mmInf) {
          if (dd === ddInf) {
            if (hh === hhInf) {
              if (min === minInf) {
                return sec - secInf + " Seconds";
              } else {
                return min - minInf + " Minutes";
              }
            } else {
              return hh - hhInf + " Hours";
            }
          } else {
            return dd - ddInf + " Days";
          }
        } else {
          return mm - mmInf + " Months";
        }
      } else {
        return yyyy - yyyyInf + " Years";
      }
    },
    savePost() {
      let post = {
        title: this.title,
        summary: this.summary,
        content: this.content,
      };
      console.log(post);
      ArticleService.addPost(post).then(
        (response) => {
          console.log(response);
          this.title = "";
          this.summary = "";
          this.content = "";
          this.dialog = false;
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    getPhoto(photo) {
      return "http://localhost/uploads/avatars/" + photo;
    },
  },
  data() {
    return {
      dialog: false,
      title: "",
      summary: "",
      content: "",
      user: [],
    };
  },
  mounted() {
    UserService.getProfile().then(
      (response) => {
        this.user = response.data;
        this.user.photo = "http://localhost/uploads/avatars/" + this.user.photo;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
<style>
.v-dialog {
  /* border-radius: 0.375rem; */
  margin: 24px;
  overflow-y: hidden;
  pointer-events: auto;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 50%;
  /* z-index: inherit; */
  /* box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); */
}
</style>
