import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../screens";
import { Typography } from "antd";

const { Title } = Typography;

const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col d-none d-lg-block text-center"
          style={{ marginTop: "15%" }}
        >
          <div className="mb-4">
            <h1>Quyeluc</h1>
          </div>
          <div>
            <Title className="text-primary">BaiTapLon</Title>
          </div>
        </div>

        <div className="col content-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default AuthRouter;
