import React from "react";
import { Drawer } from "antd";

const Sidedrawer = (props) => {
  const {
    visibility,
    drawerWidth,
    drawerTitle,
    onClose,
    destroyOnClose,
  } = props;

  return (
    <div className="sidedrawer-component">
      <Drawer
        visible={visibility}
        width={drawerWidth ? drawerWidth : "512px"}
        onClose={onClose}
        title={drawerTitle}
        destroyOnClose={destroyOnClose}
      >
        {props.children}
      </Drawer>
    </div>
  );
};

export default Sidedrawer;
