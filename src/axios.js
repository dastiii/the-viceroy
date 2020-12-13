import axios from "axios";

let domain =
  process.env.NODE_ENV === "production"
    ? "api.the-viceroy.in"
    : "api.the-viceroy.test";

axios.defaults.baseURL = `https://${domain}/`;

export default axios;
