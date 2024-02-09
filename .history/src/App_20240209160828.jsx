import { Layout } from "antd";
import AppHeader from "./components/layout/AppHeader";
import AppSider from "./components/layout/AppSider";
import AppContent from "./components/layout/AppConten";
import { CryptoContextProvider } from "./context/cryptoContext";

export default function App() {
  return <CryptoContextProvider></CryptoContextProvider>;
}
