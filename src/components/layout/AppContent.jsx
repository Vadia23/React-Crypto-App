import { Layout, Typography } from "antd";
import { useCrypto } from "../../context/cryptoContext";
import PortfolioChart from "../PortfolioChart";
import AssetsTable from "../AssetsTable";

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 60px)",
  color: "#fff",
  backgroundColor: "#001529",
};

export default function AppContent() {
  const { assets, crypto } = useCrypto();
  const cryptoPriceMap = crypto.reduce((acc, c) => {
    acc[c.id] = c.price;
    return acc;
  }, {});

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ color: "#fff", textAlign: "left" }}>
        Portfolio:{" "}
        {assets
          .map((asset) => {
            // const coin = crypto.find((c) => c.id === asset.id);
            // return asset.amount * coin.price;
            return asset.amount * cryptoPriceMap[asset.id];
          })
          .reduce((acc, v) => acc + v, 0)
          .toFixed(2)}{" "}
        $
      </Typography.Title>
      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  );
}
