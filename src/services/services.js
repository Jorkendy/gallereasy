import axios from "axios";

import config from "../config";

const { apiKey } = config;

const Axios = axios.create({
  headers: {
    "Content-Type": "application/json"
  },
  baseURL: "http://api.giphy.com/v1/gifs"
});

const services = {
  onSearch: (q, offset) => {
    const _config = {
      params: {
        q,
        apiKey,
        limit: 8,
        offset
      }
    };
    return Axios.get("/search", _config);
  }
};

export default services;
