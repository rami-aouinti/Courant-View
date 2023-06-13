import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost/api/v1/";

class AdminService {
  getItems(path) {
    return axios.get(API_URL + path, { headers: authHeader() });
  }
  getItem(i, path) {
    return axios.get(API_URL + path + "/" + i, { headers: authHeader() });
  }
  addItem(item, path) {
    return axios
      .post(API_URL + path, item, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  editItem(item, path) {
    return axios
      .put(API_URL + path + "/" + item.id, item, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  deleteItem(item, path) {
    return axios
      .delete(API_URL + path + "/" + item.id, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new AdminService();
