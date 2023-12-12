"use client";

import Contents from "@/components/ui/Contents";
import { Layout } from "antd";
import { useState } from "react";

import SideBar from "@/components/ui/Sidebar";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const { role, userId } = getUserInfo() as { role: string; userId: string };

  // sider and drawer toggle
  const [collapsed, setCollapsed] = useState(false);
  const [isToggled, setToggled] = useState(false);

  // const toggleTrueFalse = () => setToggled(!isToggled);

  const onClose = () => {
    setToggled(false);
  };

  // if (userId === undefined || role === undefined) {
  //   return router.push("/auth/login");
  // }

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
