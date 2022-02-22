import axios from "axios";

export const baseUrl = () => {
  let url = "http://localhost:8000/api";
  return url;
}

export const setAuthorizationToken = () => {
  const token = `Bearer 1|CPN6Y9PiLTlTe9SsPHbjdECcmORGOAP2m8tNVgld` || null

  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  }
}