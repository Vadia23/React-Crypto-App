import { Layout } from "antd";

const headerStyle = {
  textAlign: "center",
  // color: "#fff",
  height: 60,
  // backgroundColor: "#4096ff",
  // width: "100%",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function AppHeader() {
  return <Layout.Header style={headerStyle}>Header</Layout.Header>;
}
