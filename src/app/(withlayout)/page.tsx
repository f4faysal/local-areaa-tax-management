import { Button, ConfigProvider } from "antd";

export default function Home() {
  return (
    <main>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#8dc5f8",
            borderRadius: 2,

            // Alias Token
            colorBgContainer: "#b7dcfa",
          },
        }}
      >
        <h1>Local Areaa Tax Management</h1>
        <Button
          type="primary"
          style={{
            color: "black",
          }}
        >
          Primary
        </Button>
        <br />
        <Button>Default</Button>
      </ConfigProvider>
    </main>
  );
}
