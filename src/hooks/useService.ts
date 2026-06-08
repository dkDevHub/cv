/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResult } from "@/lib/apiFetch";
import { useState, useEffect, useCallback, useRef } from "react";

export function useService<T>(callback: (...args: any) => Promise<ApiResult<T>>, immediately = true) {
    const [data, setData] = useState<T | null>(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [isFetched, setIsFetched] = useState(false);

    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const refetch = useCallback(async (...args: any) => {
        setIsPending(true);
        setError(null);
        setIsFetched(true);

        try {
            const result = await callbackRef.current(...args);

            if ("data" in result) {
                setData(result.data as T);
            }

            if (result.error) {
                setError(result.error);
            }
        } catch (e: any) {
            setError(e instanceof Error ? e : new Error(String(e)));
        } finally {
            setIsPending(false);
        }
    }, []);

    useEffect(() => {
        if (!immediately) return;

        let isCancelled = false;

        const run = async () => {
            if (!isCancelled) {
                await refetch();
            }
        };

        run();

        return () => {
            isCancelled = true;
        };
    }, [refetch, immediately]);

    return {
        data,
        isPending,
        error,
        isFetched,
        refetch,
    };
}
