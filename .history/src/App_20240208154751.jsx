import { Layout } from "antd";
import AppHeader from "./components/layout/AppHeader";
import AppSider from "./components/layout/AppSider";

const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 60px)",
  color: "#fff",
  backgroundColor: "#001529",
};

export default function App() {
  // return <h1>React Crypto App</h1>;

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <Content style={contentStyle}>Content</Content>
      </Layout>
    </Layout>
  );
}
