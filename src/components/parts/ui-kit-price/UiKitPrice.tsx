"use client"
import SliderRange from "@/components/atomic/slider-range/SliderRange";
import { useState } from "react";

function UiKitPrice() {
    const [price, setPrice] = useState<[number, number]>([150, 600]);
    
    return (
        <>
            <h3 className="h4">Range Select</h3>
            <div className="flex items-end justify-between">
                <span className="text-muted-foreground">Select price range</span>
                <div className="flex items-center gap-2">
                    <strong>{price[0]}$</strong>
                    <span>-</span>
                    <strong>{price[1]}$</strong>
                </div>
            </div>
            <SliderRange
                value={price}
                min={0}
                max={1000}
                onValueChange={(value) => setPrice(value as [number, number])}
            />
        </>
    );
};

export default UiKitPrice;