import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost/api/v1/";

class UserService {
  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }

  getProfile() {
    return axios.get(API_URL + "profile", { headers: authHeader() });
  }

  getSetting() {
    return axios.get(API_URL + "setting", { headers: authHeader() });
  }
}

export default new UserService();
