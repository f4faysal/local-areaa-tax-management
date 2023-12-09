"use client";
import { Layout, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import UMBreadCrumb from "./UMBreadCrumb";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const base = "admin";
  return (
    <Content className="content-layout">
      <Header style={{ padding: 0, background: colorBgContainer }}>
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
      </Header>

      {children}
    </Content>
  );
};

export default Contents;
