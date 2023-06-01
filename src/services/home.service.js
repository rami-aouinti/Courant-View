import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost/api/v1/";

class HomeService {
  getPosts() {
    return axios.get(API_URL + "post", { headers: authHeader() });
  }

  showPost(id) {
    return axios.get(API_URL + "post/" + id, { headers: authHeader() });

  }

  editPost() {}

  deletePost() {}

  showComments() {}

  addComment() {}

  editComment() {}

  deleteComment() {}

  likePost() {}

  dislikePost() {}

  likeComment() {}

  dislikeComment() {}
}

export default new HomeService();
