import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost/api/v1/";

class ArticleService {
  getPosts() {
    return axios.get(API_URL + "post", { headers: authHeader() });
  }

  showPost(id) {
    return axios.get(API_URL + "post/" + id, { headers: authHeader() });
  }

  editPost(post, i) {
    return axios
      .put(API_URL + "post/" + i, post, { headers: authHeader() })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
        }

        return response.data;
      });
  }

  deletePost() {}

  showComments() {}

  addComment(i) {
    return axios
      .post(API_URL + "comment/" + i, event, { headers: authHeader() })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
        }

        return response.data;
      });
  }

  editComment() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
        }

        return response.data;
      });
  }

  deleteComment() {}

  likePost() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
        }

        return response.data;
      });
  }

  dislikePost() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
        }

        return response.data;
      });
  }

  likeComment() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
        }

        return response.data;
      });
  }

  dislikeComment() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
        }

        return response.data;
      });
  }
}

export default new ArticleService();
