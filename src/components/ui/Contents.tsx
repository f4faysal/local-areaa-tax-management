"use client";
import { Layout, theme } from "antd";
import UPHeader from "./UPHeader";

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

  return (
    <Content className="content-layout">
      {/* Header component  */}
      <UPHeader
        setToggled={setToggled}
        setCollapsed={setCollapsed}
        collapsed={collapsed}
      />

      {children}
    </Content>
  );
};

export default Contents;
