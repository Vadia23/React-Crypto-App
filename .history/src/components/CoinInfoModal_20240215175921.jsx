import { Flex, Image, Typography } from "antd";

export default function CoinInfoModal({ coin }) {
  return (
    <Flex align="center" justify="center">
      <Image src={coin.icon} alt={coin.name} style={{ width: 40 }} />
      <Typography.Title level={2}>
        {coin.symbol} {coin.name}
      </Typography.Title>
    </Flex>
  );
}
