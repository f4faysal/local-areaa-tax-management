"use client";
import { PicRightOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import UMBreadCrumb from "./UMBreadCrumb";

const { Content } = Layout;

const Contents = ({
  children,
  setToggled,
  setCollapsed,
  collapsed,
}: {
  children: React.ReactNode;
  setToggled: any;
  setCollapsed: any;
  collapsed: boolean;
}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const base = "admin";
  return (
    <Content className="content-layout">
      <Header
        style={{
          padding: "1rem",
          background: colorBgContainer,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
          borderRadius: "0.5rem",
        }}
      >
        <div className="hideOnMobile d-flex">
          <div>
            <Button
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              icon={<PicRightOutlined />}
              size={"large"}
            />
          </div>
          <div>
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
          </div>
        </div>

        <div className="hideOnDesktop">
          <Button
            onClick={() => setToggled(true)}
            type="text"
            icon={<PicRightOutlined />}
            size={"large"}
          />
        </div>
      </Header>

      {children}
    </Content>
  );
};

export default Contents;
