import axios from "axios";
const instance = axios.create({
  headers: {
    "Content-type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
        case 403:
          return Promise.reject(error);

        default:
          return Promise.reject(error);
      }
    }
  }
);

export default instance;
