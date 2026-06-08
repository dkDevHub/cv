import { NextRequest, NextResponse } from "next/server";
import type { NpGetWarehousesResponse } from "@/types/np";
import { getWarehouseOptions, getConfig, NP_API_URL } from "@/lib/np";

export async function GET(req: NextRequest) {
    const city = req.nextUrl.searchParams.get("city");

    if (!city) {
        return NextResponse.json({ message: "City is required" }, { status: 400 });
    }

    try {
        const config = getConfig({
            modelName: "Address",
            calledMethod: "getWarehouses",
            methodProperties: {
                CityName: city,
            },
        });

        const res = await fetch(NP_API_URL, config);

        const { data } = (await res.json()) as NpGetWarehousesResponse;

        return NextResponse.json(getWarehouseOptions(data));
    } catch {
        return NextResponse.json([]);
    }
}
