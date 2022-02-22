import React, { useState } from "react";
import Header from "./Pageheader";
import SideMenu from "./Sidemenu";
// import ContentHeader from "./ContentHeader";
import {
  Layout,
  Divider,
//   Row,
//   Col,
//   Button,
//   Avatar,
//   Dropdown,
//   Menu,
//   message,
} from "antd";
// import { UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./styles.css";

// todo: move logout handler to separate file

const PageLayout = (props) => {
  // React state variable, used to control the Sider (Open/Close)
  const { loading } = props;
  const [collapseSider, setCollapseSider] = useState(false);

  const { Content, Sider } = Layout;

  //   useEffect(() => {
  //     var username = getUsername().replace(/['"]+/g, "");
  //     setUsername(username);
  //     setAuthorizationToken();
  //   }, []);

  const onSiderClicked = () => {
    setCollapseSider(!collapseSider);
  };

  //   const onClick = ({ key }) => {
  //     key === "logout"
  //       ? onLogout()
  //       : message.info("You clicked on account settings");
  //   };

  //   const onLogout = () => {
  //     sessionStorage.clear();
  //     window.location.replace("/login");
  //   };

  //   const menu = (
  //     <Menu onClick={onClick}>
  //       <Menu.Item key="account-settings">
  //         <Button type="text" block>
  //           Settings
  //         </Button>
  //       </Menu.Item>
  //       <Menu.Item key="logout">
  //         <Button type="text" block danger>
  //           Logout
  //         </Button>
  //       </Menu.Item>
  //     </Menu>
  //   );

  return (
    <Layout className="page-layout">
      <Sider
        className="page-sidemenu"
        trigger={null}
        collapsed={collapseSider}
        breakpoint="lg"
      >
        <SideMenu onCollapsedSider={collapseSider} loading={loading} />
      </Sider>
      <Layout>
        <Header
          onCollapseSider={collapseSider}
          siderBtnClicked={onSiderClicked}
        >
          {/* <Dropdown overlay={menu}>
            <Button
              className="header-profile-btn"
              type="text"
              size="large"
              onClick={(e) => e.preventDefault()}
            >
              <Row align="middle" justify="start">
                <Col xs={8} md={8} lg={8} xl={10}>
                  <Avatar size="large" icon={<UserOutlined />} />
                </Col>
                <Col xs={8} md={8} lg={8} xl={9}>
                  <p>Test</p>
                </Col>
              </Row>
            </Button>
          </Dropdown> */}
        </Header>
        {/* <ContentHeader
          contentHeaderTitle={headerTitle}
          nestedCrumb={nestedCrumb}
          breadcrumb={breadcrumb}
          link={link}
        /> */}
        <Content className="page-content">{props.children}</Content>
        <Divider className="footer-divider" />
        {/* <Footer /> */}
      </Layout>
    </Layout>
  );
};

export default PageLayout;
