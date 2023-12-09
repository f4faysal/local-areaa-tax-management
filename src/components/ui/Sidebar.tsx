"use client";

import { Drawer, Layout, Menu } from "antd";

import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebarItems";

const { Sider } = Layout;

interface SideBarProps {
  onClose: () => void;
  isToggled: boolean;
  collapsed: boolean;
  setToggled: (value: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({
  onClose,
  isToggled,
  collapsed,
  setToggled,
}) => {
  const role = USER_ROLE.ADMIN;

  return (
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
  );
};

export default SideBar;
