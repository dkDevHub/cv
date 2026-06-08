"use client"
import { Minus, Plus } from "lucide-react";
import Button from "../button/Button";
import cl from "./Counter.module.css"
import { ChangeEvent, useState } from "react";
import Input from "../input/Input";

interface Props {
    initialValue?: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
}

function Counter({ initialValue, onChange, min = 1, max = 999 }: Props) {
    const [count, setCount] = useState(initialValue || 1);
    const [input, setInput] = useState(String(initialValue) || '1');

    const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const num = Number(value)
        
        if (value === "" || num < min) {
            setCount(min);
            setInput(String(min));
            if (onChange) onChange(min);
        } else {
            setCount(num);
            setInput(value);
            if (onChange) onChange(num);
        }

        if (num > max) {
            setCount(max);
            setInput(String(max));
            if (onChange) onChange(max);
        }
    };

    const changeCount = (value: number) => {
        if (value < min) {
            setCount(min);
            setInput(String(min));
            if (onChange) onChange(min);
        } else {
            setInput(String(value));
            setCount(value);
            if (onChange) onChange(value);
        }

        if (value > max) {
            setCount(max);
            setInput(String(max));
            if (onChange) onChange(max);
        }
    }
    
    return (
        <div className={cl.counter}>
            <Button className={cl.button} variant={"ghost"} size={"icon-xs"} onClick={() => changeCount(count + 1)} aria-label="counter plus">
                <Plus size={16} strokeWidth={2.5} />
            </Button>
            <Input
                type="number"
                className={cl.input}
                value={input}
                onChange={e => setInput(e.target.value)}
                onBlur={handleBlur}
                max={String(max)}
                min={String(min)}
                ignoreFilledStyle
                aria-label="counter input"
            />
            <Button className={cl.button} variant={"ghost"} size={"icon-xs"} onClick={() => changeCount(count - 1)} aria-label="counter minus">
                <Minus size={16} strokeWidth={2.5} />
            </Button>
        </div>
    );
};

export default Counter;