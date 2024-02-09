import { Card, Layout } from "antd";

const siderStyle = {
  padding: "1rem",
};

export default function AppSider() {
  return (
    <Layout.Sider width="25%" style={siderStyle}>
      <Card></Card>
    </Layout.Sider>
  );
}
