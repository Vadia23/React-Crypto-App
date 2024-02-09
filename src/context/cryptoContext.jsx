import { createContext, useEffect, useState } from "react";
import { fakeFetchCrypto, fetchAssets } from "../api";
import { percentDifference } from "../utils";

const CryptoContext = createContext({
  assets: [],
  crypto: [],
  isLoading: false,
});

export function CryptoContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function preload() {
      setIsLoading(true);
      const { result } = await fakeFetchCrypto();
      const assets = await fetchAssets();

      setCrypto(result);
      setAssets(
        assets.map((asset) => {
          const coin = result.find((c) => c.id === asset.id);

          return {
            grow: asset.price < coin.price, // boolean for color of statistic
            growPercent: percentDifference(asset.price, coin.price),
            totalAmount: asset.amount * coin.price,
            totalProfit: +(
              asset.amount * coin.price -
              asset.amount * asset.price
            ).toFixed(2),
            icon: coin.icon,
            ...asset,
          };
        })
      );
      setIsLoading(false);
    }
    preload();
  }, []);

  return (
    <CryptoContext.Provider value={{ isLoading, crypto, assets }}>
      {children}
    </CryptoContext.Provider>
  );
}

export default CryptoContext;
