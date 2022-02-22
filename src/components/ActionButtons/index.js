import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Row, Col } from "antd";
import "./styles.css";

const ActionButtonsComponent = (props) => {
  const { onShowDialog, createBtnTitle, disabled } = props;
  return (
    <div className="action-buttons-component">
      <Row justify="start" align="middle">
        <Col span={6}>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={onShowDialog}
            disabled={disabled}
          >
            {createBtnTitle}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ActionButtonsComponent;
