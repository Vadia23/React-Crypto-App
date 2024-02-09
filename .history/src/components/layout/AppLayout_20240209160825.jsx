import { Layout, Spin } from "antd";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import AppContent from "./AppConten";
import { useContext } from "react";
import CryptoContext from "../../context/cryptoContext";

export default function AppLayout() {
  const { isLoading } = useContext(CryptoContext);

  if (isLoading) {
    return <Spin spinning={isLoading} fullscreen />;
  }

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}
