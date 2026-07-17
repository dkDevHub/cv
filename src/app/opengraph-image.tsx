import { ImageResponse } from "next/og";

export const alt = "Dmytro, Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Dynamically generated OpenGraph card, matching the site's dark + lime theme. */
export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#0a0b0a",
                    padding: "72px",
                    position: "relative",
                }}
            >
                {/* glow */}
                <div
                    style={{
                        position: "absolute",
                        top: -160,
                        right: -120,
                        width: 520,
                        height: 520,
                        borderRadius: 9999,
                        background: "rgba(198,241,53,0.18)",
                        filter: "blur(60px)",
                        display: "flex",
                    }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div
                        style={{
                            width: 64,
                            height: 64,
                            borderRadius: 18,
                            background: "#c6f135",
                            color: "#0a0b0a",
                            fontSize: 40,
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        D
                    </div>
                    <div
                        style={{
                            color: "#8c917e",
                            fontSize: 26,
                            display: "flex",
                        }}
                    >
                        dmytro.dev
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            color: "#f2f4ef",
                            fontSize: 82,
                            fontWeight: 700,
                            lineHeight: 1.02,
                            letterSpacing: -2,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <span>Frontend developer</span>
                        <span>
                            who ships{" "}
                            <span style={{ color: "#c6f135" }}>fast.</span>
                        </span>
                    </div>
                    <div
                        style={{
                            marginTop: 28,
                            color: "#8c917e",
                            fontSize: 30,
                            display: "flex",
                        }}
                    >
                        TypeScript · Next.js · Tailwind · 2+ yrs · 20+ projects
                    </div>
                </div>
            </div>
        ),
        { ...size },
    );
}
