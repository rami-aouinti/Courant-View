<template>
  <v-row>
    <div class="mb-1">
      <hr class="horizontal dark mt-1 mb-5" />
      <div v-for="comment in comments" :key="comment.id">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <v-avatar
              v-if="comment.author.photo"
              size="48"
              class="rounded-circle"
            >
              <img
                :src="getPhoto(comment.author.photo)"
                alt="profile-image"
                class="border-radius-lg"
              />
            </v-avatar>
            <Avatar
              v-else
              size="48"
              class="rounded-circle"
              :firstName="comment.author.firstName"
              :lastName="comment.author.lastName"
            />
          </div>
          <div class="flex-grow-1 ms-4">
            <h5 class="text-h5 text-typo font-weight-bold mt-0 mb-2">
              {{ comment.author.firstName }} {{ comment.author.lastName }}
            </h5>
            <p class="text-sm font-weight-light text-body">
              {{ comment.content }}
            </p>
            <div class="d-flex align-center">
              <v-icon
                size="14"
                class="material-icons-round me-1 text-body cursor-pointer"
                >thumb_up</v-icon
              >
              <span class="text-sm me-2 text-body">3 likes</span>
              <v-icon
                size="14"
                class="material-icons-round me-1 text-body cursor-pointer"
                >share</v-icon
              >
              <span class="text-sm me-2 text-body">2 shares</span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="newComment === true && postId === postRef">
        <div class="d-flex">
          <div class="flex-shrink-0">
            <v-avatar v-if="user.photo" size="48" class="rounded-circle">
              <img
                :src="user.photo"
                alt="profile-image"
                class="border-radius-lg"
              />
            </v-avatar>
            <Avatar
              v-else
              size="48"
              class="rounded-circle"
              :firstName="user.firstName"
              :lastName="user.lastName"
            />
          </div>
          <div class="flex-grow-1 ms-4">
            <h5 class="text-h5 text-typo font-weight-bold mt-0 mb-2">
              {{ user.firstName }} {{ user.lastName }}
            </h5>
            <p class="text-sm font-weight-light text-body">
              {{ commentData }}
            </p>
            <div class="d-flex align-center">
              <v-icon
                size="14"
                class="material-icons-round me-1 text-body cursor-pointer"
                >thumb_up</v-icon
              >
              <span class="text-sm me-2 text-body">3 likes</span>
              <v-icon
                size="14"
                class="material-icons-round me-1 text-body cursor-pointer"
                >share</v-icon
              >
              <span class="text-sm me-2 text-body">2 shares</span>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex mt-6">
        <div class="flex-shrink-0">
          <v-avatar v-if="user.photo" size="48" class="rounded-circle">
            <img
              :src="user.photo"
              alt="profile-image"
              class="border-radius-lg"
            />
          </v-avatar>
          <Avatar
            v-else
            size="48"
            class="rounded-circle"
            :firstName="user.firstName"
            :lastName="user.lastName"
          />
        </div>
        <div class="flex-grow-1 ms-4">
          <v-text-field
            placeholder="Write your comment"
            class="input-style mt-0 pt-0"
            color="#e91e63"
            v-model="commentText"
          >
          </v-text-field>
          <v-btn
            icon
            :ripple="false"
            :class="{ 'btn-dark-hover': true, 'btn-hover': true }"
            class="text-body"
            small
            @click="saveComment(postId)"
          >
            <v-icon class="material-icons-round me-sm-1" size="20">
              send
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </v-row>
</template>
<script>
import ArticleService from "@/services/article.service";
import Avatar from "@/views/Avatar.vue";
import UserService from "@/services/user.service";

export default {
  name: "article-comment",
  props: {
    comments: [],
    postId: String,
  },
  components: { Avatar },
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
    saveComment(slug) {
      ArticleService.addComment(slug, this.commentText).then(
        (response) => {
          console.log(response);
          this.commentData = this.commentText;
          this.newComment = true;
          this.commentText = "";
          this.postRef = slug;
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
      user: [],
      commentText: "",
      newComment: false,
      commentData: "",
      postRef: "",
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
