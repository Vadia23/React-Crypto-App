import { Layout, Select, Space } from "antd";

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
  return (
    <Layout.Header style={headerStyle}>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="select one country"
        defaultValue={["china"]}
        // onChange={handleChange}
        optionLabelProp="label"
        options={options}
        optionRender={(option) => (
          <Space>
            <span role="img" aria-label={option.data.label}>
              {option.data.emoji}
            </span>
            {option.data.desc}
          </Space>
        )}
      />
    </Layout.Header>
  );
}
