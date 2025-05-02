import React from "react";
import { useLocation } from "react-router";
import { Button, Layout, Flex } from "antd";
import { MenuOutlined, PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
const { Header } = Layout;

const HeaderPanel = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  return (
    <Header className="header">
      <Flex align="center" justify="space-between">
        <Flex align="center" gap={20}>
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: "#8b8b98" }} />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 30,
              height: 30,
              backgroundColor: "#F0F0F3",
            }}
          />
          <div className="header__title">{location?.state?.title ? location?.state?.title : "Dashboard"}</div>
        </Flex>
        <Flex align="center" gap={10}>
          <Button
            type="text"
            icon={<SearchOutlined style={{ color: "#8b8b98" }} />}
            style={{
              fontSize: "16px",
              width: 30,
              height: 30,
              backgroundColor: "#F0F0F3",
            }}
          />
          <Button
            type="text"
            icon={<PlusCircleOutlined style={{ color: "#8b8b98" }} />}
            style={{
              fontSize: "16px",
              width: 30,
              height: 30,
              backgroundColor: "#F0F0F3",
            }}
          />
        </Flex>
      </Flex>
    </Header>
  );
};

export default HeaderPanel;
