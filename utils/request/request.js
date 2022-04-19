import axios from "axios";
import _ from "lodash";
import { baseUrl } from "../urls";

const request = (url, method, payload = {}) => {
  if (method == "get") {
    return new Promise(function (resolve, reject) {
      axios
        .get(`${baseUrl}${url}`, { params: payload })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  } else if (method == "post") {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${baseUrl}${url}`, { ...payload })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};

export default request;
