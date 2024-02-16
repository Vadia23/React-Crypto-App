import { Flex, Image, Typography } from "antd";

export default function CoinInfoModal({ coin }) {
  return (
    <Flex>
      <Image src={coin.icon} alt={coin.name} />
    </Flex>
  );
}
