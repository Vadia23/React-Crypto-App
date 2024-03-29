import { Layout, Typography } from "antd";

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 60px)",
  color: "#fff",
  backgroundColor: "#001529",
};

export default function AppContent() {
  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ color: "#fff" }}>
        Portfolio: 12000$
      </Typography.Title>
    </Layout.Content>
  );
}
