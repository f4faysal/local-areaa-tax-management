"use client";

import Contents from "@/components/ui/Contents";
import { Layout } from "antd";
import { useState } from "react";

import SideBar from "@/components/ui/Sidebar";
import { USER_ROLE } from "@/constants/role";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // sider and drawer toggle
  const [collapsed, setCollapsed] = useState(false);
  const [isToggled, setToggled] = useState(false);

  // const toggleTrueFalse = () => setToggled(!isToggled);

  const onClose = () => {
    setToggled(false);
  };
  const role = USER_ROLE.ADMIN;
  return (
    <Layout hasSider>
      <SideBar
        collapsed={collapsed}
        setToggled={setToggled}
        onClose={onClose}
        isToggled={isToggled}
      />
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
