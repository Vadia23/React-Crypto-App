import { Divider, Flex, Image, Typography } from "antd";

export default function CoinInfo({ coin, withSymbol }) {
  return (
    <>
      <Flex align="center">
        <Image src={coin.icon} alt={coin.name} style={{ width: 40 }} />
        <Typography.Title level={2} style={{ margin: "auto 0 auto 10px" }}>
          {withSymbol && <span>({coin.symbol})</span>} {coin.name}
        </Typography.Title>
      </Flex>
      <Divider />
    </>
  );
}
