import { Flex, Image, Typography } from "antd";

export default function CoinInfoModal({ coin }) {
  return (
    <Flex align="center">
      <Image src={coin.icon} alt={coin.name} style={{ width: 40 }} />
      <Typography.Title level={2} style={{ margin: "auto 0 auto 10px" }}>
        {coin.symbol} {coin.name}
      </Typography.Title>
    </Flex>
  );
}
