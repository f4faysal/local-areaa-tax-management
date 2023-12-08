"use client";

import { ConfigProvider, theme } from "antd";
import StyledComponentsRegistry from "./AntdRegistry";
import palette from "@/styles/palette.module.scss";

// const themeConfig = {
//   token: {
//     components: {
//       Button: {
//         fontFamily: futura.style.fontFamily,
//       },
//       Input: {
//         fontFamily: lato.style.fontFamily,
//       },
//     },

//     // typography
//     fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
//   },
// };

// palette
const colours = {
  lucid: {
    colorInfo: palette["cyan"],
    colorError: palette["red"],
    colorPrimary: palette["blue"],
    colorWarning: palette["orange"],
    colorSuccess: palette["green"],

    colorBgLayout: palette["light"],
  },
  muted: {
    colorInfo: palette["muted-cyan"],
    colorError: palette["muted-red"],
    colorPrimary: palette["muted-blue"],
    colorWarning: palette["muted-orange"],
    colorSuccess: palette["muted-green"],

    colorBgLayout: palette["dark"],
  },
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { token } = theme.useToken();
  // const lightThemed = usePrefersColorScheme();
  const preference = colours[true ? "lucid" : "muted"];
  return (
    <ConfigProvider theme={{ ...themeConfig, ...preference }}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
    </ConfigProvider>
  );
};

export default Providers;
