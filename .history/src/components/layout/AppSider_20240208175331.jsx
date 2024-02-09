import { Card, Layout } from "antd";

const siderStyle = {
  padding: "1rem",
};

export default function AppSider() {
  return (
    <Layout.Sider width="25%" style={siderStyle}>
      <Card
        size="small"
        title="Small size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Layout.Sider>
  );
}
