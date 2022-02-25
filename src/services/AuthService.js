import axios from "axios";

const API_URL = "http://localhost:8094/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("farmer", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("farmer");
  }

  register(username, email, password,roles) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      roles
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('farmer'));;
  }
}

export default new AuthService();