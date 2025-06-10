export type MarketItem = {
  id: string;
  name: string;
  pair: string;
  symbol: string;
  prevPrice: number;
  price: number;
  delta: number;
  rank: number;
  image: string;
};

export const ITEMS_PER_PAGE = 5;

export const initialData: MarketItem[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    pair: "BTC/USDT",
    symbol: "BTC",
    price: 68000,
    prevPrice: 68000,
    delta: 0,
    rank: 1,
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    pair: "ETH/USDT",
    symbol: "ETH",
    price: 3800,
    prevPrice: 3800,
    delta: 0,
    rank: 2,
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  },
  {
    id: "bnb",
    name: "BNB",
    pair: "BNB/USDT",
    symbol: "BNB",
    price: 600,
    prevPrice: 600,
    delta: 0,
    rank: 3,
    image: "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png",
  },
  {
    id: "solana",
    name: "Solana",
    pair: "SOL/USDT",
    symbol: "SOL",
    price: 170,
    prevPrice: 170,
    delta: 0,
    rank: 4,
    image: "https://assets.coingecko.com/coins/images/4128/large/Solana.png",
  },
  {
    id: "cardano",
    name: "Cardano",
    pair: "ADA/USDT",
    symbol: "ADA",
    price: 0.55,
    prevPrice: 0.55,
    delta: 0,
    rank: 5,
    image: "https://assets.coingecko.com/coins/images/975/large/cardano.png",
  },
  {
    id: "xrp",
    name: "XRP",
    pair: "XRP/USDT",
    symbol: "XRP",
    price: 0.62,
    prevPrice: 0.62,
    delta: 0,
    rank: 6,
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    pair: "DOGE/USDT",
    symbol: "DOGE",
    price: 0.13,
    prevPrice: 0.13,
    delta: 0,
    rank: 7,
    image: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png",
  },
  {
    id: "tron",
    name: "TRON",
    pair: "TRX/USDT",
    symbol: "TRX",
    price: 0.12,
    prevPrice: 0.12,
    delta: 0,
    rank: 8,
    image: "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png",
  },
  {
    id: "polkadot",
    name: "Polkadot",
    pair: "DOT/USDT",
    symbol: "DOT",
    price: 7.5,
    prevPrice: 7.5,
    delta: 0,
    rank: 9,
    image: "https://assets.coingecko.com/coins/images/12171/large/polkadot.png",
  },
  {
    id: "avax",
    name: "Avalanche",
    pair: "AVAX/USDT",
    symbol: "AVAX",
    price: 35,
    prevPrice: 35,
    delta: 0,
    rank: 10,
    image:
      "https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png",
  },
  {
    id: "matic",
    name: "Polygon",
    pair: "POL/USDT",
    symbol: "MATIC",
    price: 0.95,
    prevPrice: 0.95,
    delta: 0,
    rank: 11,
    image:
      "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png",
  },
  {
    id: "litecoin",
    name: "Litecoin",
    pair: "LTC/USDT",
    symbol: "LTC",
    price: 90,
    prevPrice: 90,
    delta: 0,
    rank: 12,
    image: "https://assets.coingecko.com/coins/images/2/large/litecoin.png",
  },
  {
    id: "chainlink",
    name: "Chainlink",
    pair: "LINK/USDT",
    symbol: "LINK",
    price: 16,
    prevPrice: 16,
    delta: 0,
    rank: 13,
    image:
      "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png",
  },
  {
    id: "internet-computer",
    name: "ICP",
    pair: "ICP/USDT",
    symbol: "ICP",
    price: 12,
    prevPrice: 68000,
    delta: 0,
    rank: 14,
    image:
      "https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png",
  },
  {
    id: "uniswap",
    name: "Uniswap",
    pair: "UNI/USDT",
    symbol: "UNI",
    price: 9.2,
    prevPrice: 68000,
    delta: 0,
    rank: 15,
    image:
      "https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png",
  },
];

export function getRandomDelta(value: number) {
  const factor = value * 0.02;
  return (Math.random() - 0.5) * factor;
}

export function shuffleRanks(data: MarketItem[]) {
  const shuffled = [...data].sort(() => Math.random() - 0.5);
  return shuffled.map((item, index) => ({
    ...item,
    rank: index + 1,
  }));
}
