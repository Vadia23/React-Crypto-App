import { Button, Layout, Modal, Select, Space } from "antd";
import { useCrypto } from "../../context/cryptoContext";
import { useEffect, useState } from "react";
import CoinInfoModal from "../CoinInfoModal";

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 60,
  // backgroundColor: "#4096ff",
  width: "100%",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function AppHeader() {
  const [select, setSelect] = useState(false);
  const [modal, setModal] = useState(false);
  const [coin, setCoin] = useState(null);
  const { crypto } = useCrypto();

  function handleSelect(value) {
    setModal(true);
    setCoin(crypto.find((c) => c.id === value));
    // const coin = crypto.findIndex((coin) => coin.id === value);
    // setCoin(crypto[coin]);
    console.log(coin);
    console.log(crypto[coin]);
  }

  useEffect(() => {
    const keypress = (event) => {
      if (event.key === "/") {
        setSelect((prev) => !prev);
      }
    };

    document.addEventListener("keypress", keypress);
    return () => document.removeEventListener("keypress", keypress);
  }, []);

  return (
    <Layout.Header style={headerStyle}>
      <Select
        open={select}
        // mode="multiple"
        style={{ width: 250 }}
        onClick={() => setSelect((prev) => !prev)}
        value={"Press / to open"}
        onSelect={handleSelect}
        // optionLabelProp="label"
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

      <Modal
        open={modal}
        onCancel={() => {
          setModal(false), setCoin(null), console.log(coin);
        }}
        footer={null}
      >
        <CoinInfoModal coin={coin} />
      </Modal>
    </Layout.Header>
  );
}
