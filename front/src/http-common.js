import axios from "axios";

export default axios.create({
  //local
  // baseURL: "http://localhost:8088/api",
  //server
  baseURL: "http://106.15.5.29:8088/api",

  headers: {
    "Content-type": "application/json"
  }
});