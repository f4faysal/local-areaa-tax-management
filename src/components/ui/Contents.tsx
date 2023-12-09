"use client";
import { PicRightOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import UMBreadCrumb from "./UMBreadCrumb";

const { Content } = Layout;

interface ContentsProps {
  setToggled: (value: boolean) => void;
  setCollapsed: (value: boolean) => void;
  collapsed: boolean;
  children: React.ReactNode;
}

const Contents: React.FC<ContentsProps> = ({
  children,
  setToggled,
  setCollapsed,
  collapsed,
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
          marginBottom: "1rem",
        }}
      >
        <div className="_d-flex">
          <div className="hideOnMobile">
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
