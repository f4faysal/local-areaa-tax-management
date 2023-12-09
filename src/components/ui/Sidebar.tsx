"use client";
import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebarItems";
import { Drawer, Layout, Menu } from "antd";

import SideBarNav from "./SideBarNav";

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
        width={290}
        closable={false}
        placement="left"
        onClose={onClose}
        open={isToggled}
        className="hideOnDesktop drawer-layout"
      >
        <SideBarNav />
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
        <SideBarNav collapsed={collapsed} />

        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["profile"]}
          mode="inline"
          items={sidebarItems(role)}
        />

        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            marginBottom: "1rem",
          }}
        >
          <Menu
            theme="light"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={sidebarItems("logout")}
          />
        </div>
      </Sider>
    </>
  );
};

export default SideBar;
