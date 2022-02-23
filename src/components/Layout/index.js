import React, { useState } from "react";
import Header from "./Pageheader";
import SideMenu from "./Sidemenu";
import {
  Layout
} from "antd";
import "./styles.css";


const PageLayout = (props) => {
  const [collapseSider, setCollapseSider] = useState(false);

  const { Content, Sider } = Layout;

  const onSiderClicked = () => {
    setCollapseSider(!collapseSider);
  };

  return (
    <Layout className="page-layout">
      <Sider
        className="page-sidemenu"
        trigger={null}
        collapsed={collapseSider}
        breakpoint="lg"
      >
        <SideMenu onCollapsedSider={collapseSider} />
      </Sider>
      <Layout>
        <Header
          onCollapseSider={collapseSider}
          siderBtnClicked={onSiderClicked}
        >
        </Header>
        <Content className="page-content">{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
