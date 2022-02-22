import React from "react";
import { Button, notification } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

// Displays Success Notification if CRUD actions are successful
export const successNotification = (msg, desc) => {
  const key = "success";
  const btn = (
    <Button
      type="primary"
      size="small"
      onClick={() => {
        notification.close(key);
        close();
      }}
    >
      Confirm
    </Button>
  );

  notification.open({
    message: msg,
    description: desc,
    btn,
    key,
    onClose: close,
    icon: <InfoCircleOutlined style={{ color: "#90ee90" }} />,
  });
};

const close = () => {
  notification.close();
};
