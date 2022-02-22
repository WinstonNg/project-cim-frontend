import React from "react";
import { Form, Input, Divider, Button, Row, Col } from "antd";
import "./styles.css";

const CustomerForm = (props) => {
  const { editData, editMode } = props;
  const { TextArea } = Input;

  const onActionDismiss = () => {
    if (props.onFormDismiss) {
      props.onFormDismiss();
    }
  };

  const onActionSubmit = (values) => {
    let formData = new FormData();

    appendFormData(values, formData);
    
    if (props.onFormSubmit) {
      props.onFormSubmit(values, formData, editMode);
    } 
  };

  const appendFormData = (values, formData) => {
    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);
    formData.append("contact_no", values.contact_no);
    formData.append("address", values.address);
    formData.append("city", values.city);
    formData.append("state", values.state);
    formData.append("email", values.email);
    formData.append("account_no", values.account_no);
    formData.append("account_type", values.account_type);
    formData.append("balance", values.balance);
  };

  return (
    <Form
      layout="vertical"
      preserve={false}
      onFinish={onActionSubmit}
      requiredMark={false}
    >
      {editMode ? (
        <Form.Item
          name="id"
          label="Customer ID"
          initialValue={editData ? editData.id || null : []}
        >
          <Input disabled />
        </Form.Item>
      ) : null}
      <Form.Item
        name="first_name"
        label="First Name"
        initialValue={editData ? editData.first_name || null : []}
        rules={[
          {
            required: true,
            message: "First name cannot be blank!",
          },
        ]}
      >
        <Input placeholder="Please enter customer first name" />
      </Form.Item>
      <Form.Item
        name="last_name"
        label="Last Name"
        initialValue={editData ? editData.last_name || null : []}
        rules={[
          {
            required: true,
            message: "Last name cannot be blank!",
          },
        ]}
      >
        <Input placeholder="Please enter customer last name" />
      </Form.Item>
      <Form.Item
        name="contact_no"
        label="Contact Number"
        initialValue={editData ? editData.contact_no || null : []}
        rules={[
          {
            required: true,
            message: "Contact number cannot be blank!",
          },
        ]}
      >
        <Input placeholder="Please enter contact number" />
      </Form.Item>
      <Form.Item
        name="address"
        label="Address"
        initialValue={editData ? editData.address || null : []}
        rules={[
          {
            required: true,
            message: "Address cannot be blank!",
          },
        ]}
      >
        <TextArea placeholder="Please enter address" />
      </Form.Item>
      <Form.Item
        name="city"
        label="City"
        initialValue={editData ? editData.city || null : []}
        rules={[
          {
            required: true,
            message: "City cannot be blank!",
          },
        ]}
      >
        <Input placeholder="Please enter customer city" />
      </Form.Item>
      <Form.Item
        name="state"
        label="State"
        initialValue={editData ? editData.state || null : []}
        rules={[
          {
            required: true,
            message: "State cannot be blank!",
          },
        ]}
      >
        <Input placeholder="Please enter customer state" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        initialValue={editData ? editData.email || null : []}
        rules={[
          {
            required: true,
            message: "Email cannot be blank",
          },
        ]}
      >
        <Input placeholder="Please enter customer email" />
      </Form.Item>
      <Form.Item
        name="account_no"
        label="Account Number"
        initialValue={editData ? editData.account_no || null : []}
        rules={[
          {
            required: true,
            message: "Account number cannot be blank",
          },
        ]}
      >
        <Input placeholder="Please enter customer account number" />
      </Form.Item>
      <Form.Item
        name="account_type"
        label="Account Type"
        initialValue={editData ? editData.account_type || null : []}
        rules={[
          {
            required: true,
            message: "Account type cannot be blank",
          },
        ]}
      >
        <Input placeholder="Please enter customer account type" />
      </Form.Item>
      <Form.Item
        name="balance"
        label="Balance"
        initialValue={editData ? editData.balance || null : []}
        rules={[
          {
            required: true,
            message: "Balance cannot be blank",
          },
        ]}
      >
        <Input placeholder="Please enter customer balance" />
      </Form.Item>
      <Divider />
      <Row justify="end">
        <Col span={6} className="cancel-col">
          <Button size="large" block onClick={onActionDismiss}>
            Cancel
          </Button>
        </Col>
        <Col span={6}>
          <Button type="primary" size="large" block htmlType="submit">
            Confirm
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CustomerForm;
