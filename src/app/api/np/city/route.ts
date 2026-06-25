import { NextRequest, NextResponse } from "next/server";
import type { NpGetSettlementsResponse } from "@/types/np";
import { getCityOptions, getConfig, NP_API_URL } from "@/lib/np";
import { fetchWithTimeout } from "@/lib/utils";
import { cacheLife } from "next/cache";

async function fetchSettlementsCached(search: string) {
    "use cache";
    cacheLife("weeks");

    const config = getConfig({
        modelName: "Address",
        calledMethod: "searchSettlements",
        methodProperties: {
            CityName: search,
            Limit: "30",
        },
    });

    const res = await fetchWithTimeout(NP_API_URL, config, 5000);
    const { data } = (await res.json()) as NpGetSettlementsResponse;
    const cities = data[0]?.Addresses ?? [];

    return getCityOptions(cities);
}

export async function GET(req: NextRequest) {
    const search = req.nextUrl.searchParams.get("search");

    if (!search) {
        return NextResponse.json({ message: "Search is required" }, { status: 400 });
    }

    const normalized = search.replace(/\d+/g, "");

    if (normalized.length < 3) {
        return NextResponse.json(
            { message: "Search string must be at least 3 characters long, numbers are not allowed" },
            { status: 400 },
        );
    }

    try {
        const data = await fetchSettlementsCached(normalized);
        return NextResponse.json(data);
    } catch {
        return NextResponse.json([]);
    }
}
