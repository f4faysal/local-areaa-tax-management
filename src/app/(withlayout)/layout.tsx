"use client";

import Contents from "@/components/ui/Contents";
import { Drawer, Layout, Menu } from "antd";
import { useState } from "react";

import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebarItems";
import Sider from "antd/es/layout/Sider";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  // sider and drawer toggle
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  const onClose = () => {
    setToggled(false);
  };
  const role = USER_ROLE.ADMIN;
  return (
    <Layout hasSider>
      <>
        <Drawer
          placement="left"
          onClose={onClose}
          width={240}
          closable={false}
          open={isToggled}
          className="hideOnDesktop"
        >
          <Menu
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={sidebarItems(role)}
          />
        </Drawer>

        <Sider
          theme="light"
          trigger={null}
          collapsible
          // onCollapse={(value) => setCollapsed(value)}
          breakpoint="md"
          width={240}
          collapsed={collapsed}
          onBreakpoint={(broken) => {
            setToggled(broken);
          }}
          className="hideOnMobile site-layout"
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
      </>
      <Contents
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        setToggled={setToggled}
      >
        {children}
      </Contents>
    </Layout>
  );
};

export default DashboardLayout;
