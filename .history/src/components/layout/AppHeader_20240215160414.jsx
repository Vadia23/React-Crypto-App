import { Button, Layout, Select, Space } from "antd";
import { useCrypto } from "../../context/cryptoContext";

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 60,
  backgroundColor: "#4096ff",
  width: "100%",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const options = [
  {
    label: "China",
    value: "china",
    emoji: "🇨🇳",
    desc: "China (中国)",
  },
  {
    label: "USA",
    value: "usa",
    emoji: "🇺🇸",
    desc: "USA (美国)",
  },
  {
    label: "Japan",
    value: "japan",
    emoji: "🇯🇵",
    desc: "Japan (日本)",
  },
  {
    label: "Korea",
    value: "korea",
    emoji: "🇰🇷",
    desc: "Korea (韩国)",
  },
];

export default function AppHeader() {
  const { crypto } = useCrypto();

  function handleSelect(value) {
    console.log(value);
  }

  return (
    <Layout.Header style={headerStyle}>
      <Select
        // mode="multiple"
        style={{ width: 250 }}
        value={"Press to open"}
        // onChange={handleChange}
        onSelect={handleSelect}
        optionLabelProp="label"
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
      <Button type="primary">Add Asset</Button>
    </Layout.Header>
  );
}
