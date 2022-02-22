import React, {useState, useEffect } from "react";
import PageLayout from "../../components/Layout";
import Dialog from "../../components/Dialog";
import CustomerForm from "../../components/CustomerForm";
import ActionButtons from "../../components/ActionButtons";
import { Table, Space, Tooltip, Button, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined, WarningOutlined } from "@ant-design/icons";
import {
  getData,
  storeData,
  updateData,
  deleteData,
} from "../../api/rest-api";
import _ from "lodash";
import "./styles.css";

const Customers = (props) => {
  const { title, breadcrumb } = props;
  const [customerData, setCustomerData] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState();

  // state to toggle useEffect to refetch data after CUD actions
  const [refetch, setRefetch] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const url = "customer";
      const response = await getData(url);
      if (!_.isEmpty(response)) {
        setCustomerData(response);
      }
    }
    fetchData();
  }, [refetch]);


  // ------------------------------------------------ Dialog Event
  const onDialogShow = () => {
    setShowDialog(!showDialog);
  };

  const onDialogDismiss = () => {
    if (editMode === true) {
      setEditMode(!editMode);
    }
    setShowDialog(!showDialog);
  };

  const onDialogSubmit = (values, formData, editMode) => {
    editMode
      ? onActionEdit(values, formData)
      : onActionCreate(values, formData);
  };

  // ------------------------------------------------ CRUD Event
  const onActionCreate = (values, formData) => {
    onDialogDismiss();
    const url = "customer";
    storeData(url, formData);
    setRefetch(refetch + 1);
  };

  const onActionEdit = (values, formData) => {
    const url = `customer/update/` + values.id;
    onDialogDismiss();
    updateData(url, formData);
    setRefetch(refetch + 1);
  };

  const onActionDelete = (values) => {
    const url = "customer/delete/" + values.id;
    deleteData(url);
    setRefetch(refetch + 1);
  };

  // ------------------------------------------------ Table Columns
  const columns = [
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Contact No",
      dataIndex: "contact_no",
      key: "contact_no",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "city",
    },
    {
      title: "Actions",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Tooltip title="Edit">
            <Button
              icon={<EditOutlined />}
              onClick={() => {
                setEditMode(!editMode);
                setEditData(record);
                onDialogShow();
              }}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Popconfirm
              title="Remove this customer permanently?"
              onConfirm={() => {
                onActionDelete(record);
              }}
              okText="Yes"
              icon={<WarningOutlined style={{ color: "red" }} />}
            >
              <Button icon={<DeleteOutlined />} danger />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <PageLayout headerTitle={title} breadcrumb={breadcrumb}>
      <ActionButtons
        createBtnTitle="Add Customer"
        onShowDialog={onDialogShow}
      />
      <div className="customers-container">
        <Table 
          columns={columns}
          dataSource={customerData}
          bordered
          rowKey={(record) => record.id}  
        />
        {editMode ? (
          <Dialog
            dialogTitle={"Edit Customer Data"}
            visibility={showDialog}
            onDismissDialog={onDialogDismiss}
          >
            <CustomerForm
              editMode={editMode}
              onFormDismiss={onDialogDismiss}
              onFormSubmit={onDialogSubmit}
              editData={editData || null}
            />
          </Dialog>
        ) : (
          <Dialog
            dialogTitle={"Add Customer"}
            visibility={showDialog}
            onDismissDialog={onDialogDismiss}
          >
            <CustomerForm
              editMode={editMode}
              onFormDismiss={onDialogDismiss}
              onFormSubmit={onDialogSubmit}
            />
          </Dialog>
        )}
              
      </div>
    </PageLayout>
  )
}

export default Customers