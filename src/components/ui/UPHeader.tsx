import { Button, theme } from "antd";
import { Header } from "antd/es/layout/layout";

import { PicRightOutlined } from "@ant-design/icons";

interface UPHeaderProps {
  setToggled: (value: boolean) => void;
  setCollapsed: (value: boolean) => void;
  collapsed: boolean;
}

const UPHeader: React.FC<UPHeaderProps> = ({
  setToggled,
  setCollapsed,
  collapsed,
}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{
        padding: "1rem",
        background: colorBgContainer,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "16px",
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
        {/* <div
          className="hideOnMobile"
          style={{
            background: "#ebeef3",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          <UPBreadCrumb
            items={[
              {
                label: `Admin`,
                link: `/Admin`,
              },
              {
                label: "Create Home",
                link: `/Admin/create-home`,
              },
            ]}
          />
        </div> */}
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
  );
};

export default UPHeader;
