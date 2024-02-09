import { Card, Layout, List, Spin, Statistic, Typography } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { fakeFetchCrypto, fetchAssets } from "../../api";
import { percentDifference } from "../../utils";

const siderStyle = {
  padding: "1rem",
};

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

export default function AppSider() {
  const [isLoading, setIsLoading] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function preload() {
      setIsLoading(true);
      const { result } = await fakeFetchCrypto();
      const assets = await fetchAssets();

      setCrypto(result);
      setAssets(
        assets.map((asset) => {
          const coin = result.find((c) => c.id === asset.id);

          return {
            grow: asset.price < coin.price, // boolean for color of statistic
            growPercent: percentDifference(asset.price, coin.price),
            totalAmount: asset.amount * coin.price,
            totalProfit: asset.amount * coin.price - asset.amount * asset.price,
            ...asset,
          };
        })
      );
      setIsLoading(false);
    }
    preload();
  }, []);
  console.log(isLoading);
  console.log(crypto);
  console.log(assets);

  if (isLoading) {
    return <Spin spinning={isLoading} fullscreen />;
  }

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      {assets.map(() => (
        <Card style={{ marginBottom: "10px" }}>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
          <List
            size="small"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
              </List.Item>
            )}
          />
        </Card>
      ))}
    </Layout.Sider>
  );
}
