import { removeUserInfo } from "@/services/auth.service";
import {
  AppstoreAddOutlined,
  CalendarOutlined,
  CodeSandboxOutlined,
  EyeInvisibleOutlined,
  HomeOutlined,
  IdcardOutlined,
  LaptopOutlined,
  LogoutOutlined,
  PaperClipOutlined,
  UnlockOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { message, type MenuProps } from "antd";
import Link from "next/link";
import { USER_ROLE } from "./role";
import { authKey } from "./storageKey";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <LaptopOutlined />,
      children: [
        {
          label: <Link href={`/dashboard`}>Analytics</Link>,
          icon: <CodeSandboxOutlined />,
          key: `/dashboard/analytics`,
        },
      ],
    },
    {
      label: "Account",
      key: "account",
      icon: <IdcardOutlined />,
      children: [
        {
          label: <Link href={`/account/profile`}>Profile</Link>,
          key: `/account/profile`,
          icon: <UserOutlined />,
        },
        {
          label: <Link href={`/account/change-password`}>Change Password</Link>,
          icon: <EyeInvisibleOutlined />,
          key: `/account/change-password`,
        },
      ],
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Home",
      key: "home",
      icon: <HomeOutlined />,
      children: [
        {
          label: <Link href={`/home-register`}>Home Register</Link>,
          key: `/home-register`,
          icon: <PaperClipOutlined />,
        },
      ],
    },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreAddOutlined />,
      children: [
        {
          label: <Link href={`/management/colony`}>Create Colony</Link>,
          icon: <HomeOutlined />,
          key: `/management/colony`,
        },
        {
          label: (
            <Link href={`/management/financial-year`}>Financial Year</Link>
          ),
          icon: <CalendarOutlined />,
          key: `/management/financial-year`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...adminSidebarItems,

    {
      label: <Link href={`/account/admin`}>Create Admin</Link>,
      icon: <UsergroupAddOutlined />,
      key: `/account/admin`,
    },
    {
      label: <Link href={`/account/permission`}>Manage Permission</Link>,
      icon: <UnlockOutlined />,
      key: `/account/permission`,
    },
  ];

  const logout: MenuProps["items"] = [
    {
      label: (
        <p
          onClick={() => {
            removeUserInfo(authKey);
            window.location.href = "/auth/login";
            message.success("Logout successfully");
          }}
        >
          Log Out
        </p>
      ),
      icon: (
        <LogoutOutlined
          onClick={() => {
            message.success("Logout successfully");
          }}
        />
      ),
      key: `/logout`,
    },
  ];

  if (role === USER_ROLE.ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else return logout;
};
