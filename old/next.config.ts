import type { NextConfig } from "next";

const crossOriginIsolationHeaders = [
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/stockfish/:path*",
        headers: [
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          ...crossOriginIsolationHeaders,
        ],
      },
      {
        source: "/:path*",
        headers: crossOriginIsolationHeaders,
      },
    ];
  },
};

export default nextConfig;
