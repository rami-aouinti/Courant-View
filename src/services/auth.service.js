import axios from "axios";

const API_URL = "http://localhost/api/v1/auth/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "get_token", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          response.data.username = user.username;
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
