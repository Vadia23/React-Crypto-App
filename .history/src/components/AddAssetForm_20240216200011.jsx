import { useContext, useState } from "react";
import CryptoContext from "../context/cryptoContext";
import { Select, Space, Typography } from "antd";

export default function AddAssetForm() {
  const { crypto } = useContext(CryptoContext);
  const [coin, setCoin] = useState(null);

  if (!coin) {
    return (
      <Select
        style={{ width: "100%" }}
        placeholder="Select coin"
        onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img
              style={{ width: 20 }}
              src={option.data.icon}
              alt={option.data.label}
            />{" "}
            {option.data.label}
          </Space>
        )}
      />
    );
  }

  return (
    <form>
      <Typography.Title level={2} style={{ margin: 0 }}>
        {coin.name}
      </Typography.Title>
    </form>
  );
}
