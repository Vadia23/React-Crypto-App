import { useContext, useState } from "react";
import CryptoContext from "../context/cryptoContext";
import { Select, Space } from "antd";

export default function AddAssetForm() {
  const { crypto } = useContext(CryptoContext);
  const [coin, setCoin] = useState(null);

  if (!coin) {
    return (
      <Select
        style={{ width: "40%" }}
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

  return <h2>{coin.name}</h2>;
}
