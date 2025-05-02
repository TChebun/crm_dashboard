import { useState } from "react";
import { Outlet } from "react-router";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import HeaderPanel from "./Header";

const { Content } = Layout;

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <HeaderPanel collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content style={{ padding: "30px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
