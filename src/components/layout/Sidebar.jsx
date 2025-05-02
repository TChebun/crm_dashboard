import React from "react";
import { NavLink } from "react-router";
import { Layout, Menu, Flex } from "antd";
import { DashboardOutlined, CarryOutOutlined, ShoppingOutlined } from "@ant-design/icons";

import logo from "../../assets/img/logo.png";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const menu = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: (
        <NavLink to="/" className="sider__link" state={{ title: "Dashboard" }}>
          Dashboard
        </NavLink>
      ),
      path: "/",
    },
    {
      key: "2",
      icon: <ShoppingOutlined />,
      label: (
        <NavLink to="/projects" className="sider__link" state={{ title: "Projects" }}>
          Projects
        </NavLink>
      ),
      path: "/projects",
    },
    {
      key: "3",
      icon: <CarryOutOutlined />,
      label: (
        <NavLink to="/tasks" className="sider__link" state={{ title: "Tasks" }}>
          Tasks
        </NavLink>
      ),
      path: "/tasks",
    },
  ];

  return (
    <Sider className="sider" trigger={null} collapsible collapsed={collapsed}>
      <Flex justify="center">
        <img src={logo} alt="Логотип" className="sider__logo" />
      </Flex>
      <div className="demo-logo-vertical" />
      <Menu mode="inline" defaultSelectedKeys={["1"]} items={menu} />
    </Sider>
  );
};

export default Sidebar;
