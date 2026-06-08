import type { NpGetSettlementsResponseAddress, NpGetWarehousesResponseData, NpRequestConfig } from "@/types/np";

export const NP_API_URL = "https://api.novaposhta.ua/v2.0/json/";

export const getConfig = (options: NpRequestConfig) => {
    return {
        body: JSON.stringify({
            apiKey: null,
            modelName: options.modelName,
            calledMethod: options.calledMethod,
            methodProperties: options.methodProperties,
        }),
        method: "POST",
    };
};

export const getCityOptions = (
    addresses: NpGetSettlementsResponseAddress[]
) => {
    return addresses.map((item) => ({
        label: item.Present,
        value: item.MainDescription,
    }));
};

export const getWarehouseOptions = (data: NpGetWarehousesResponseData[]) => {
    return data.map((item) => ({
        label: `№ ${item.Number}, ${item.ShortAddress}`,
        value: `№ ${item.Number}, ${item.ShortAddress}`,
    }));
};