import React from "react";
import { Button, notification } from "antd";


export const invalidToken = () => {
  const errorMsg = "Invalid or Expired Token";
  const errorDesc = "Please login again to get a fresh token";
  const key = "authError";
  const btn = (
    <Button
      type="primary"
      size="small"
      onClick={() => {
        notification.close(key);
      }}
    >
        Ok
    </Button>
  );
  errorNotification(errorMsg, errorDesc, key, btn);
};

export const errorResponse = () => {
  const errorMsg = "No Response Received";
  const errorDesc = "Please check backend for errors.";
  const key = "errorResponse";
  const btn = (
    <Button
      type="primary"
      size="small"
      onClick={() => {
        notification.close(key);
      }}
    >
        Ok
    </Button>
  );
  errorNotification(errorMsg, errorDesc, key, btn);
};
  
export const errorRequest = () => {
  const errorMsg = "Error in request";
  const errorDesc = "Please check the API";
  const key = "errorRequest";
  const btn = (
    <Button
      type="primary"
      size="small"
      onClick={() => {
        notification.close(key);
      }}
    >
        Ok
    </Button>
  );
  errorNotification(errorMsg, errorDesc, key, btn);
};

const errorNotification = (errorMsg, errorDesc, key, btn) => {
  notification["error"]({
    message: errorMsg,
    description: errorDesc,
    key,
    btn,
  });
};