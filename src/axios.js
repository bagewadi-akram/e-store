import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-store-f8f5b/us-central1/api",
});

export default instance;