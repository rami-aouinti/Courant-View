import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost/api/v1/";

class CrmService {
  getProjects() {
    return axios.get(API_URL + "projects", { headers: authHeader() });
  }

  getEvent(i) {
    return axios.get(API_URL + "event/" + i, { headers: authHeader() });
  }

  addEvent(event) {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  updateEvent(event) {
    return axios
      .put(API_URL + "event/" + event.id, event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  patchEvent(event) {
    return axios
      .patch(API_URL + "event/" + event.id, event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new CrmService();
