import axios from "axios";
import { setAuthorizationToken } from "../utils/common";
import { baseUrl } from "../utils/common";
import { invalidToken, errorResponse, errorRequest } from "../utils/error";
import { successNotification } from "../utils/api-success";


export const getData = (url) => {
  setAuthorizationToken();

  const response = axios
    .get(`${baseUrl()}/${url}`, {
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods": "GET,POST",
      }
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response ? error.response.status === 401 : null) {
        invalidToken();
      } else if (error.request) {
        errorResponse();
      } else {
        errorRequest();
      }
    });
  
  return response;
};

export const getSpecifiedData = (url) => {
  setAuthorizationToken();
  
  const response = axios
    .post(`${baseUrl()}/${url}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response ? error.response.status === 401 : null) {
        invalidToken();
      } else if (error.request) {
        errorResponse();
      } else {
        errorRequest();
      }
    });
  
  return response;
};

export const storeData = (url, formData) => {
  setAuthorizationToken();
  axios
    .post(`${baseUrl()}/${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(() => {
      const successMsg = "Data created";
      const successDesc = "New data has been created!";
      successNotification(successMsg, successDesc);
    })
    .catch((error) => {
      if (error.response ? error.response.status === 401 : null) {
        invalidToken();
      } else if (error.request) {
        errorResponse();
      } else {
        errorRequest();
      }
    });
};

export const updateData = (url, formData) => {
  setAuthorizationToken();
  axios
    .post(`${baseUrl()}/${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(() => {
      const successMsg = "Data updated";
      const successDesc = "The selected data has been updated!";
      successNotification(successMsg, successDesc);
    })
    .catch((error) => {
      if (error.response ? error.response.status === 401 : null) {
        invalidToken();
      } else if (error.request) {
        errorResponse();
      } else {
        errorRequest();
      }
    });
};

export const deleteData = (url, formData) => {
  setAuthorizationToken();
  
  const response = axios
    .post(`${baseUrl()}/${url}`, formData, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(() => {
      const msg = "Data deleted or inactivated";
      const desc = "The specified data has been deleted or inactivated";
      successNotification(msg, desc);
    })
    .catch((error) => {
      if (error.response ? error.response.status === 401 : null) {
        invalidToken();
      } else if (error.request) {
        errorResponse();
      } else {
        errorRequest();
      }
    });
  
  return response;
};