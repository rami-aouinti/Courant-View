<template>
  <v-row>
    <v-card v-for="post in posts" :key="post.id">
      <div class="border-bottom d-flex align-center px-4 py-4">
        <div class="d-flex align-center">
          <a href="javascript:" class="text-decoration-none">
            <v-avatar v-if="post.author.photo" size="48" class="rounded-circle">
              <img
                :src="getPhoto(post.author.photo)"
                alt="profile-image"
                class="border-radius-lg"
              />
            </v-avatar>
            <Avatar
              v-else
              size="48"
              class="rounded-circle"
              :firstName="post.author.firstName"
              :lastName="post.author.lastName"
            />
          </a>
          <div class="mx-4">
            <a
              href="javascript:"
              class="text-dark font-weight-600 text-sm text-decoration-none"
              >{{ post.author.firstName }} {{ post.author.lastName }}</a
            >
            <small class="d-block text-muted">{{
              getDate(post.publishedAt)
            }}</small>
          </div>
        </div>
        <div class="text-end ms-auto">
          <v-btn
            outlined
            color="#fff"
            class="font-weight-bolder bg-gradient-primary py-4 px-7"
            small
          >
            <v-icon size="8" class="material-icons-round pe-2">add</v-icon>
            Follow
          </v-btn>
        </div>
      </div>
      <div class="px-4 py-4">
        <v-list-item :to="{ path: '/post', query: { id: post.id } }">
          <h3>{{ post.title }}</h3>
        </v-list-item>

        <p class="mb-6 text-body font-weight-light">
          {{ post.summary }}
        </p>
        <v-img
          src="https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
          class="border-radius-lg shadow-lg"
        >
        </v-img>
        <v-row class="align-center px-2 mt-6 mb-2">
          <v-col sm="6">
            <div class="d-flex">
              <div class="d-flex align-center">
                <v-icon
                  size="14"
                  class="material-icons-round me-1 text-body cursor-pointer"
                  >thumb_up</v-icon
                >
                <span class="text-sm text-body me-4">150</span>
              </div>
              <div class="d-flex align-center">
                <v-icon
                  size="14"
                  class="material-icons-round me-1 text-body cursor-pointer"
                  >mode_comment</v-icon
                >
                <span class="text-sm text-body me-4">36</span>
              </div>
              <div class="d-flex align-center">
                <v-icon
                  size="14"
                  class="material-icons-round me-1 text-body cursor-pointer"
                  >forward</v-icon
                >
                <span class="text-sm text-body me-4">12</span>
              </div>
            </div>
          </v-col>
          <v-col sm="6">
            <div class="d-flex align-center">
              <div class="d-flex align-items-center ms-auto">
                <v-avatar size="24" class="border border-white ms-n2">
                  <img src="@/assets/img/team-5.jpg" alt="Avatar" />
                </v-avatar>
                <v-avatar size="24" class="border border-white ms-n2">
                  <img src="@/assets/img/team-2.jpg" alt="Avatar" />
                </v-avatar>
                <v-avatar size="24" class="border border-white ms-n2">
                  <img src="@/assets/img/team-1.jpg" alt="Avatar" />
                </v-avatar>
              </div>
              <small class="ps-2 font-weight-bold text-body text-sm"
                >and 30+ more</small
              >
            </div>
          </v-col>
        </v-row>
        <Comments :comments="post.comments.reverse()" :postId="post.id">
        </Comments>
      </div>
    </v-card>
  </v-row>
</template>
<script>
import ArticleService from "@/services/article.service";
import Avatar from "@/views/Avatar.vue";
import Comments from "@/views/Article/Comment.vue";
import UserService from "@/services/user.service";

export default {
  name: "article-list",
  components: { Avatar, Comments },
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
    getPhoto(photo) {
      return "http://localhost/uploads/avatars/" + photo;
    },
  },
  data() {
    return {
      posts: [],
      user: [],
      commentText: "",
      newComment: false,
      commentData: "",
      postRef: "",
    };
  },
  mounted() {
    ArticleService.getPosts().then(
      (response) => {
        this.posts = response.data.slice(0, 20);
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
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
