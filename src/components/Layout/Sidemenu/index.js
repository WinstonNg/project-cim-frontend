import React, { useState } from "react";
import { Menu, Row } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./styles.css";

const Sider = (props) => {
  const { onCollapseSider } = props;
  const [openKeys] = useState(["report", "redemption-mode"]);

  return (
    <div className="page-side-menu">
      <div className="logo">
        <Link to="/dashboard">
          <Row align="middle" justify={onCollapseSider ? "start" : "center"}>
            {props.children}
          </Row>
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        inlineIndent={12}
        defaultOpenKeys={openKeys}
      >
        <Menu.Item
          key="/"
          icon={<DashboardOutlined />}
          
        >
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="/customer" icon={<UserOutlined />} >
          <Link to="/customer">Customers</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sider;
