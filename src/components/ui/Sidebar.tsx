"use client";

import { Layout, Menu } from "antd";
import { useState } from "react";

import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebarItems";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const role = USER_ROLE.ADMIN;

  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={240}
      className="site-layout"
      hidden={false}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        <p hidden style={{ fontSize: "22px", padding: "5px" }}>
          <span style={{ color: "#1890ff" }}>L</span>
          <span style={{ color: "#52c41a" }}>A</span>
          <span style={{ color: "#faad14" }}>T</span>
          <span style={{ color: "#f5222d" }}>M</span>
        </p>
      </div>
      <Menu
        theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
