import { Avatar, Card, Layout, List, Spin, Statistic, Typography } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { fakeFetchCrypto, fetchAssets } from "../../api";
import { capitalize, percentDifference } from "../../utils";
import CryptoContext from "../../context/cryptoContext";

const siderStyle = {
  padding: "1rem",
};

export default function AppSider() {
  const { assets } = useContext(CryptoContext);

  return (
    <Layout.Sider width="25%" style={{ padding: "1rem" }}>
      {assets.map((asset) => (
        <Card key={asset.id} style={{ marginBottom: "10px" }}>
          <Avatar size={64} src={asset.icon} style={{ marginBottom: "5px" }} />
          <Statistic
            title={capitalize(asset.id)}
            value={asset.growPercent}
            precision={2}
            valueStyle={{ color: asset.grow ? "#3f8600" : "#cf1322" }}
            prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            suffix="%"
          />
          <List
            size="small"
            dataSource={[
              {
                title: "Total Profit",
                value: (
                  <Typography.Text type={asset.grow ? "success" : "danger"}>
                    {asset.grow
                      ? "+" + asset.totalProfit + " $"
                      : asset.totalProfit + " $"}
                  </Typography.Text>
                ),
              },
              { title: "Asset Amount", value: asset.amount },
              { title: "Purchase price", value: asset.price + " $" },
            ]}
            renderItem={(item) => (
              <List.Item>
                <span>{item.title}</span>
                {}
                <span>{item.value}</span>
              </List.Item>
            )}
          />
        </Card>
      ))}
    </Layout.Sider>
  );
}
