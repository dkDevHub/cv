"use client";
import Combobox from "@/components/atomic/combobox/Combobox";
import { useNp } from "@/store/np";
import { Package } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    name?: string;
    id?: string;
    required?: boolean;
}

function NpWarehouse({ name, id, required }: Props) {
    const warehouses = useNp((state) => state.warehouses);
    const disabled = warehouses === null || warehouses.length === 0;
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setInputValue("");
    }, [warehouses]);

    return (
        <Combobox
            icon={Package}
            inputValue={inputValue}
            onInputValueChange={setInputValue}
            values={warehouses}
            items={warehouses || []}
            placeholder="Виберіть відділення Нової Пошти"
            name={name}
            id={id}
            required={required}
            disabled={disabled}
        />
    );
}

export default NpWarehouse;
