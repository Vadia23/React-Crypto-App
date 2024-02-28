import { useContext, useState } from "react";
import CryptoContext from "../context/cryptoContext";
import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Flex,
  Form,
  Image,
  Input,
  InputNumber,
  Result,
  Select,
  Space,
  Typography,
} from "antd";
import CoinInfo from "./CoinInfo";

export default function AddAssetForm({ onClose }) {
  const [form] = Form.useForm();
  const { crypto } = useContext(CryptoContext);
  const [coin, setCoin] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Result
        status="success"
        title="New Asset Added"
        subTitle={`Added ${42} of ${coin.name} by price ${24}!`}
        extra={[
          <Button type="primary" key="console" onClick={onClose}>
            Close
          </Button>,
        ]}
      />
    );
  }

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

  const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} is not valid number",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  function onFinish(values) {
    setSubmitted(true);
    console.log(values);
  }
  function handleAmountChange(value) {
    const price = form.getFieldValue("price");
    form.setFieldsValue({
      total: +(value * price).toFixed(2),
    });
  }
  function handlePriceChange(value) {
    const amount = form.getFieldValue("amount");
    form.setFieldsValue({
      total: +(amount * value).toFixed(2),
    });
  }

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      style={{ maxWidth: 600 }}
      initialValues={{ price: +coin.price.toFixed(2) }}
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <CoinInfo coin={coin} />

      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            type: "number",
            min: 0,
            // message: "Please input your username!",
          },
        ]}
      >
        <InputNumber
          placeholder="Enter coin amount"
          onChange={handleAmountChange}
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            // required: true,
            type: "number",
            min: 0,
            message: "Please input price!",
          },
        ]}
      >
        <InputNumber onChange={handlePriceChange} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Date & Time"
        name="date"
        rules={[
          {
            required: true,
            // type: "number",
            // min: 0,
            message: "Please input price!",
          },
        ]}
      >
        <DatePicker showTime style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Total"
        name="total"
        rules={[
          {
            // required: true,
            type: "number",
            min: 0,
            message: "Please input price!",
          },
        ]}
      >
        <InputNumber disabled style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
