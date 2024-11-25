import { Affix, Button, Layout } from "antd";
import React from "react";
import HomeScrenns from "../screens/HomeScrenns";
import SiderComponent from "../components/SiderComponent";
import HeaderComponent from "../components/HeaderComponent";
import AddProduct from "../screens/inventories/AddProduct";
import Categories from "../screens/categories/Categories";
import PromotionScreen from "../screens/PromotionScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ManageStore,
  Orders,
  ReportScreen,
  Suppliers,
  Inventories,
} from "../screens";
import CategoryDetail from "../screens/categories/CategoryDetail";
import ProductDetail from "../screens/inventories/ProductDetail";

const { Content, Footer, Header, Sider } = Layout;
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Affix offsetTop={0}>
          <SiderComponent />
        </Affix>
        <Layout
          style={{
            backgroundColor: "white !important",
          }}
        >
          <Affix offsetTop={0}>
            <HeaderComponent />
          </Affix>
          <Content className="pt-3 container-fluid">
            <Routes>
              <Route path="/" element={<HomeScrenns />} />
              <Route>
                <Route path="/inventory" element={<Inventories />} />
                <Route path="/inventory/add-product" element={<AddProduct />} />
                <Route
                  path="/inventory/detail/:slug"
                  element={<ProductDetail />}
                />
              </Route>
              <Route path="/report" element={<ReportScreen />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/orders" element={<Orders />} />
              <Route>
                <Route path="/categories" element={<Categories />} />
                <Route
                  path="/categories/detail/:slug"
                  element={<CategoryDetail />}
                />
              </Route>

              <Route path="/manage-store" element={<ManageStore />} />
              <Route path="/promotions" element={<PromotionScreen />} />
            </Routes>
          </Content>
          <Footer className="bg-white" />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default MainRouter;
