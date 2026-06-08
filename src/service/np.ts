import { apiFetch } from "@/lib/apiFetch";
import { ComboboxItem } from "@/types/types";

abstract class NpService {
    static async searchCity(search: string) {
        return apiFetch<ComboboxItem[]>(`/np/city?search=${search}`);
    }

    static async getWarehouses(city: string) {
        return apiFetch<ComboboxItem[]>(`/np/warehouse?city=${city}`);
    }
}

export { NpService };