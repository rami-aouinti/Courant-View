import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost/api/v1/";

class ChatService {
  getConversation() {
    return axios.get(API_URL + "conversations", { headers: authHeader() });
  }

  newConversation(user) {
    return axios
      .post(
        API_URL + "newConversations",
        { otherUser: user },
        {
          headers: authHeader(),
        }
      )
      .then((response) => {
        return response.data;
      });
  }

  getMessages(i) {
    return axios.get(API_URL + "messages/" + i, { headers: authHeader() });
  }

  newMessage(i, content) {
    return axios
      .post(
        API_URL + "newMessage/" + i,
        { content: content },
        {
          headers: authHeader(),
        }
      )
      .then((response) => {
        return response.data;
      });
  }

  getScores() {
    return axios.get(API_URL + "score", { headers: authHeader() });
  }
  addScore(score) {
    return axios
      .post(API_URL + "application/score", score, { headers: authHeader() })
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

export default new ChatService();
