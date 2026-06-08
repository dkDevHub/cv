/* eslint-disable @typescript-eslint/no-explicit-any */
class BinanceWSClient {
    private ws: WebSocket | null = null;
    private url: string;
    private onMessageCallback: (symbol: string, priceData: any) => void;
    private requestMap = new Map<string, string>();
    private requestIdCounter = 0;

    constructor(onMessage: (symbol: string, priceData: any) => void, isTestnet = false) {
        this.url = isTestnet
            ? "wss://ws-api.testnet.binance.vision/ws-api/v3"
            : "wss://ws-api.binance.com:9443/ws-api/v3";
        this.onMessageCallback = onMessage;
    }

    public connect(initialSymbols: string[] = []) {
        if (this.ws) return;

        this.ws = new WebSocket(this.url);

        this.ws.onopen = () => {
            console.log("🔌 Binance WS Connected");
            initialSymbols.forEach((symbol) => this.getTickerPrice(symbol));
        };

        this.ws.onmessage = (event) => {
            if (event.data === "ping" || (typeof event.data === "string" && event.data.includes("ping"))) {
                this.ws?.send(JSON.stringify({ pong: Date.now() }));
                return;
            }

            try {
                const data = JSON.parse(event.data);

                if (data.id && this.requestMap.has(data.id)) {
                    const symbol = this.requestMap.get(data.id)!;

                    if (data.status === 200 && data.result) {
                        const rawData = Array.isArray(data.result) ? data.result[0] : data.result;

                        this.onMessageCallback(symbol, rawData);
                    }

                    this.requestMap.delete(data.id);
                }
            } catch (error) {
                console.error("❌ WS parse error:", error);
            }
        };

        this.ws.onclose = () => {
            this.requestMap.clear();
            setTimeout(() => this.connect(initialSymbols), 5000);
        };
    }

    public getTickerPrice(symbol: string) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;

        this.requestIdCounter++;
        const requestId = `req_${Date.now()}_${this.requestIdCounter}`;
        const formattedSymbol = symbol.toUpperCase();

        this.requestMap.set(requestId, formattedSymbol);

        const request = {
            id: requestId,
            method: "ticker.price",
            params: { symbol: formattedSymbol },
        };

        this.ws.send(JSON.stringify(request));
    }

    public disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
        this.requestMap.clear();
    }
}

export { BinanceWSClient }
