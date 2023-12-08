"use client";

import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/Sidebar";
import { Layout } from "antd";
import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout hasSider>
      <SideBar collapsed={collapsed} />
      <Contents collapsed={collapsed} setCollapsed={setCollapsed}>
        {children}
      </Contents>
    </Layout>
  );
};

export default DashboardLayout;
