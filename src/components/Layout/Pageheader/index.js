import React from "react";
import { Tooltip, Layout, Button, Row, Col } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./styles.css";

const PageHeader = (props) => {
  const { Header } = Layout;
  const { onCollapseSider, siderBtnClicked } = props;
  
  return (
    <Header className="page-header">
      <Row justify="space-between">
        <Col xs={3} md={3} lg={1} xl={1}>
          <Tooltip>
            <Button
              className="header-sidemenu-btn"
              type="text"
              size="large"
              onClick={siderBtnClicked}
            >
              {React.createElement(
                onCollapseSider ? MenuUnfoldOutlined : MenuFoldOutlined
              )}
            </Button>
          </Tooltip>
          
        </Col>
        <Col xs={14} md={7} lg={5} xl={4}>
          {props.children}
        </Col>
      </Row>
    </Header>
  );
};

export default PageHeader;
