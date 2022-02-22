import React from "react";
import PageLayout from "../../components/Layout";
import "antd/dist/antd.css";
import "./styles.css";

// Contents of each pages is passed as props to <PageLayout /> component

const Dashboards = (props) => {
  const { title } = props;

  return (
    <PageLayout headerTitle={title}>
      <div className="dashboard-content-box">
        <p>Test</p>
      </div>
    </PageLayout>
  );
};

export default Dashboards;
