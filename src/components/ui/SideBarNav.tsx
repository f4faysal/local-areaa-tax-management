import { Avatar, Tooltip } from "antd";
import React from "react";

import {
  AppstoreFilled,
  IeOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface SideBarNavProps {
  collapsed?: boolean;
}

const SideBarNav: React.FC<SideBarNavProps> = ({ collapsed }) => {
  return (
    <div
      style={{
        backgroundColor: "#f6ffed",
        borderRadius: "15px",
        marginBottom: "0.3rem",
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
          padding: "0.3rem 1rem 1.5rem 1rem",
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
            {/* <strong>Md Faysal Hossain</strong> */}
            <strong>Istiyak Ahamed Arman</strong>
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
            <Tooltip title="Setting">
              <SettingOutlined />
            </Tooltip>
            <AppstoreFilled /> <UserOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarNav;
