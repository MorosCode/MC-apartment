import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config"

class mcRequest {
  constructor(baseURL, timeout){
    this.instance = axios.create({
      baseURL,
      timeout
    }),

    this.instance.interceptors.response.use(res => {
      return res.data
    }, err => err)
  }

  request(config){
    return this.instance.request(config)
  }

  get(config){
    return this.instance.request({...config, method: "get"})
  }

  post(config){
    return this.instance.request({...config, method: "post"})
  }
}

export default new mcRequest(BASE_URL, TIMEOUT)