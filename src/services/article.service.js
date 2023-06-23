import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost/api/v1/";

class ArticleService {
  getPosts() {
    return axios.get(API_URL + "article", { headers: authHeader() });
  }

  showPost(id) {
    return axios.get(API_URL + "post/" + id, { headers: authHeader() });
  }

  addPost(post) {
    return axios
      .post(API_URL + "article/new", post, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  editPost(post, i) {
    return axios
      .put(API_URL + "post/" + i, post, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  deletePost() {}

  showComments() {}

  addComment(slug, comment) {
    return axios
      .post(
        API_URL + "comment/" + slug + "/new",
        { comment: comment },
        {
          headers: authHeader(),
        }
      )
      .then((response) => {
        return response.data;
      });
  }

  editComment() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  deleteComment() {}

  likePost() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  dislikePost() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  likeComment() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  dislikeComment() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new ArticleService();
