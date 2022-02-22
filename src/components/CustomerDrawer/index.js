import React from "react";
import { Row, Col, Divider } from "antd";

const CustomerDrawer = (props) => {
  const { dataSource } = props;
  const data = dataSource || [];

  const DescriptionItem = ({ title, content }) => (
    <div className="drawer-description-item-wrapper">
      <Row justify="start" align="top">
        <Col span={12}>
          <p className="description-item-label">{title}:</p>
        </Col>
        <Col span={12}>{content}</Col>
      </Row>
    </div>
  );

  return (
    <div className="user-drawer-container">
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Customer First Name"
            content={data.first_name || []}
          />
        </Col>
        <Col span={24}>
          <DescriptionItem title="Customer Last Name" content={data.last_name || []} />
        </Col>
        <Col span={24}>
          <DescriptionItem
            title="Customer Contact"
            content={data.contact_no || []}
          />
        </Col>
        <Col span={24}>
          <DescriptionItem title="Customer Address" content={data.address || []} />
        </Col>
        <Col span={24}>
          <DescriptionItem title="Customer City" content={data.city || []} />
        </Col>
        <Col span={24}>
          <DescriptionItem title="Customer State" content={data.state || []} />
        </Col>
        <Col span={24}>
          <DescriptionItem title="City" content={data.email || []} />
        </Col>
        <Col span={24}>
          <DescriptionItem title="Customer Account Number" content={data.account_no || []} />
        </Col>
        <Col span={24}>
          <DescriptionItem title="CUstomer Account Type" content={data.account_type || []} />
        </Col>
        <Col span={24}>
          <DescriptionItem title="Customer Account Balance" content={data.balance || []} />
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

export default CustomerDrawer