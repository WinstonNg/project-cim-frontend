import React from "react";
import { Modal } from "antd";

const Dialog = (props) => {
  const { dialogTitle, visibility, onDismissDialog, dialogWidth } = props;

  return (
    <Modal
      title={dialogTitle}
      visible={visibility}
      footer={null}
      maskClosable={false}
      onCancel={onDismissDialog}
      destroyOnClose
      width={dialogWidth}
    >
      {props.children}
    </Modal>
  );
};

export default Dialog;
