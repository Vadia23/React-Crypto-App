import { Button, Layout, Modal, Select, Space } from "antd";
import { useCrypto } from "../../context/cryptoContext";
import { useEffect, useState } from "react";

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
  const { crypto } = useCrypto();

  function handleSelect(value) {
    // setSelect((prev) => !prev);
    console.log(value);
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

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
        title="Basic Modal"
        open={modal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Layout.Header>
  );
}
