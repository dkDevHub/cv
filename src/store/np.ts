import { ComboboxItem } from "@/types/types";
import { create } from "zustand";

interface Store {
    warehouses: ComboboxItem[] | null;
    setWarehouses: (warehouses: ComboboxItem[] | null) => void;
};

export const useNp = create<Store>((set) => ({
    warehouses: null,
    setWarehouses: (warehouses) => set({ warehouses }),
}));