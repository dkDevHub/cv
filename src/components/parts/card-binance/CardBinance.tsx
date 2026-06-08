"use client";
import CardBase from "@/components/atomic/card-base/CardBase";
import Image from "next/image";
import BinanceImg from "@/assets/brand/binance.png";
import { BinanceWSClient } from "@/service/binance";
import { useState, useRef, useEffect } from "react";
import CoinRow from "@/components/atomic/coin-row/CoinRow";
import BitcoinImg from "@/assets/coins/bitcoin.png"
import EthImg from "@/assets/coins/eth.png"
import BnbImg from "@/assets/coins/bnb.png";
import SolImg from "@/assets/coins/sol.png";

const coins = ["BTCUSDT", "ETHUSDT", "BNBUSDT", "SOLUSDT"];

const imgSet: Record<string, string> = {
    BTCUSDT: BitcoinImg.src,
    ETHUSDT: EthImg.src,
    BNBUSDT: BnbImg.src,
    SOLUSDT: SolImg.src,
};

function CardBinance() {
    const [prices, setPrices] = useState<Record<string, string>>({});
    const clientRef = useRef<BinanceWSClient | null>(null);

    useEffect(() => {
        const client = new BinanceWSClient((symbol, data) => {
            setPrices((prev) => {
                return {
                    ...prev,
                    [symbol]: data.price,
                };
            });
        });

        clientRef.current = client;
        client.connect(coins);

        const interval = setInterval(() => {
            coins.forEach((symbol) => {
                client.getTickerPrice(symbol);
            });
        }, 3000);

        return () => {
            client.disconnect();
            clearInterval(interval);
        };
    }, []);

    return (
        <CardBase>
            <div className="flex gap-2 items-center">
                <h3 className="h4">Binance Spot</h3>
                <Image className="w-6 h-6 accent-glow-sm" width={32} height={32} src={BinanceImg.src} alt="binance" />
            </div>
            <div className="flex flex-col gap-2">
                {coins.map((coin) => (
                    <CoinRow key={coin} coin={coin} price={prices[coin]} img={imgSet[coin]}/>
                ))}
            </div>
        </CardBase>
    );
}

export default CardBinance;
