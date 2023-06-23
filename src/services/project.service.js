import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost/api/v1/";

class ProjectService {
  getProjects() {
    return axios.get(API_URL + "projects", { headers: authHeader() });
  }
  addProject(project) {
    project.finishDate = new Date();
    return axios
      .post(API_URL + "projects/create", project, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  getProject(projectId) {
    return axios
      .get(API_URL + "projects/" + projectId, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  activateProject(project) {
    return axios
      .patch(API_URL + "projects/" + project + "/activate/", "", {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  deactivateProject(project) {
    return axios
      .patch(API_URL + "projects/" + project + "/close/", "", {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }

  addTask(project, task) {
    return axios
      .post(API_URL + "tasks/in-project/" + project + "/", task, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new ProjectService();
