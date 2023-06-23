import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost/api/v1/";

class ResumeService {
  generateResume() {
    return axios
      .get(API_URL + "resume", { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new ResumeService();
