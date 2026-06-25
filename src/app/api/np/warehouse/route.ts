import { NextRequest, NextResponse } from "next/server";
import type { NpGetWarehousesResponse } from "@/types/np";
import { getWarehouseOptions, getConfig, NP_API_URL } from "@/lib/np";
import { cacheLife } from "next/cache";

async function fetchWarehousesCached(city: string) {
    "use cache";
    cacheLife("weeks");

    const config = getConfig({
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
            CityName: city,
        },
    });

    const res = await fetch(NP_API_URL, config);
    const { data } = (await res.json()) as NpGetWarehousesResponse;

    return getWarehouseOptions(data);
}

export async function GET(req: NextRequest) {
    const city = req.nextUrl.searchParams.get("city");

    if (!city) {
        return NextResponse.json({ message: "City is required" }, { status: 400 });
    }

    try {
        const data = await fetchWarehousesCached(city);
        return NextResponse.json(data);
    } catch {
        return NextResponse.json([]);
    }
}
