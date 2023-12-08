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
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={230}
      className="site-layout"
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
        <p style={{ fontSize: "22px", padding: "5px" }}>
          <span style={{ color: "#1890ff" }}>L</span>
          <span style={{ color: "#52c41a" }}>A</span>
          <span style={{ color: "#faad14" }}>T</span>
          <span style={{ color: "#f5222d" }}>M</span>
        </p>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;

// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { Menu } from "antd";
// import Sider from "antd/es/layout/Sider";

// interface SidebarProps {
//   collapsed: boolean;
// }

// const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
//   return (
//     <Sider trigger={null} collapsible collapsed={collapsed}>
//       <div className="demo-logo-vertical" />
//       <Menu
//         theme="dark"
//         mode="inline"
//         defaultSelectedKeys={["1"]}
//         items={[
//           {
//             key: "1",
//             icon: <UserOutlined />,
//             label: "nav 1",
//           },
//           {
//             key: "2",
//             icon: <VideoCameraOutlined />,
//             label: "nav 2",
//           },
//           {
//             key: "3",
//             icon: <UploadOutlined />,
//             label: "nav 3",
//           },
//         ]}
//       />
//     </Sider>
//   );
// };

// export default Sidebar;
