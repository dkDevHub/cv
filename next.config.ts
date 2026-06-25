import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "github.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "bun.sh",
                pathname: "/**",
            },
        ],
    },
    experimental: {
        inlineCss: true,
    },
    cacheComponents: true,
};

export default nextConfig;
