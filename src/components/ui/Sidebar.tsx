"use client";
import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebarItems";
import { Avatar, Drawer, Layout, Menu } from "antd";

import {
  AppstoreFilled,
  IeOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

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
        width={240}
        closable={false}
        placement="left"
        onClose={onClose}
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
            backgroundColor: "#f6ffed",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px 1rem 1rem 1rem",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                gap: "0.5rem",
              }}
            >
              <Avatar size="small" icon={<IeOutlined />} />
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "black",
                  backgroundColor: "#ebeef3",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  padding: "0.2rem 0.5rem",
                }}
                hidden={collapsed}
              >
                UP Tax Management
              </p>
              <p
                hidden={collapsed}
                style={{
                  fontSize: "0.7rem",
                  color: "#092b00",
                  backgroundColor: "#ebeef3",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  padding: "0.2rem 0.5rem",
                }}
              >
                1.0
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: "0.5rem",
              padding: "0.3rem 1rem",
            }}
          >
            <div>
              <Avatar size="large" icon={<UserOutlined />} />
            </div>
            <div style={{ width: "100%" }} hidden={collapsed}>
              <p
                style={{
                  paddingBottom: "0.2rem",
                }}
              >
                <strong>Md Faysal Hossain</strong>
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",

                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <small>
                  <strong>Admin</strong>
                </small>
                <SettingOutlined /> <AppstoreFilled /> <UserOutlined />
              </div>
            </div>
          </div>
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
