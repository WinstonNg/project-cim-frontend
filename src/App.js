import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Customer from "./pages/customer";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route key="/customer" path="/customer" element={<Customer />} />
    </Routes>
  );
}

export default App;
