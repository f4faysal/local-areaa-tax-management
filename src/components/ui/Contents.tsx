"use client";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import UMBreadCrumb from "./UMBreadCrumb";

const { Content } = Layout;

interface ContentsProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  children: React.ReactNode;
}

const Contents: React.FC<ContentsProps> = ({
  children,
  setCollapsed,
  collapsed,
}) => {
  const base = "admin";

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
      </Header>
      <Content
        style={{
          minHeight: "100vh",
          color: "black",
        }}
      >
        <UMBreadCrumb
          items={[
            {
              label: `${base}`,
              link: `/${base}`,
            },
            {
              label: "student",
              link: `/${base}/student`,
            },
          ]}
        />
        {children}
      </Content>
    </>
  );
};

export default Contents;
