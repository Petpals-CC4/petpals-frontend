import axios from "axios";
import { TOKEN, HOST } from './constants'

axios.defaults.baseURL = HOST

const UNPROTECTED_PATHS = [
  "signin",
  // "signup"
]

const isUnprotectedPath = (url) => {
  for (let path of UNPROTECTED_PATHS) {
    if (url.includes(path)) {
      return true
    }
  }
  return false
}

axios.interceptors.request.use(
  async config => {

    if (isUnprotectedPath(config.url)) {
      return config
    }

    let token = sessionStorage.getItem(TOKEN);
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  async error => {
    throw error;
  },
);

// Redirect to login page in case of 401 response
axios.interceptors.response.use(
  async config => {
    return config;
  },
  async error => {
    if (error.request === undefined) throw error;

    let url = error.request.responseURL;
    if (error.request.status === 401 && isUnprotectedPath(url)) {
      throw error;
    }

    if (error.request.status === 401) {
      console.log("Session expire, redirect to login");
      alert("Session expire, redirect to login");

      sessionStorage.removeItem(TOKEN)
      window.appHistory.push("/signin")
    }

    throw error;
  },
);

export default axios