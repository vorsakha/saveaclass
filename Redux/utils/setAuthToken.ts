import axios from "axios";

const setAuthToken = (token?: string) => {
  if (token) {
    axios.defaults.headers.Authorization = token;
  } else {
    delete axios.defaults.headers.Authorization;
  }
};

export default setAuthToken;
