import { formatCryptoPrice } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import cl from "./CoinRow.module.css";
import Image from "next/image";

interface Props {
    coin: string;
    price: string | undefined;
    img: string
}

function CoinRow({ coin, price, img }: Props) {
    const [trendClass, setTrendClass] = useState<string>("");
    const prevPriceRef = useRef<number | null>(null);

    const ticker = coin.replace("USDT", "");
    const formatedPrice = formatCryptoPrice(price || "0");
    const link = `https://www.binance.com/ru-UA/trade/${ticker}_USDT?type=spot`;

    useEffect(() => {
        if (!price) return;
        const currentPrice = Number(price);

        if (prevPriceRef.current === null) {
            prevPriceRef.current = currentPrice;
            return;
        }

        const prevPrice = prevPriceRef.current;

        if (currentPrice !== prevPrice) {
            if (currentPrice > prevPrice) {
                setTrendClass("long");
            } else if (currentPrice < prevPrice) {
                setTrendClass("short");
            }

            prevPriceRef.current = currentPrice;
        }
    }, [price]);

    return (
        <div className={cl.row}>
            <Image className={cl.img} width={20} height={20} src={img} alt="" />
            <a href={link} className={cl.ticker} target="_blank" rel="noopener noreferrer">
                {ticker} / USDT
            </a>
            <span
                className={`${cl.price} ${trendClass ? cl[trendClass] : ""}`}
                onAnimationEnd={() => setTrendClass("")}
            >
                {price ? <>{formatedPrice}</> : <>Loading...</>}
            </span>
        </div>
    );
}

export default CoinRow