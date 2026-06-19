"use client";
import { NpService } from "@/service/np";
import { useService } from "@/hooks/useService";
import { useDebounceCallback } from "@/hooks/useDebounceCallback";
import { MapPin } from "lucide-react";
import Combobox from "@/components/atomic/combobox/Combobox";
import { useNp } from "@/store/np";

interface Props {
    name?: string;
    id?: string;
    required?: boolean;
}

function NpCity({ name, id, required }: Props) {
    const { data: cities, refetch, isPending } = useService((search: string) => NpService.searchCity(search), false);
    const debounced = useDebounceCallback((value: string) => {
        refetch(value);
    }, 300);

    const handleInputChange = (value: string) => {
        if (value === undefined || value === null || value.length < 3) return;
        debounced(value);
    }

    const setWarehouses = useNp((state) => state.setWarehouses);

    const handleValueChange = async (item: unknown) => {
        if (typeof item !== "object" || item === null || !("value" in item) || typeof item.value !== "string") return;

        const warehouses = await NpService.getWarehouses(item.value);
        setWarehouses(warehouses.data);
    };

    return (
        <Combobox
            isLoading={isPending}
            icon={MapPin}
            values={cities}
            filteredItems={cities || []}
            onInputValueChange={handleInputChange}
            onValueChange={handleValueChange}
            placeholder="Виберіть населений пункт"
            name={name}
            id={id}
            required={required}
            autoComplete="off"
        />
    );
}

export default NpCity;