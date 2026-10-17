import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // wagmi 2's Base Account connector (@base-org/account) pulls in @coinbase/cdp-sdk on the
  // server (SSR) entry. cdp-sdk lazily imports its *optional* @x402/* peers, which Turbopack
  // can't resolve when bundling. Load these Node-only SDKs from node_modules at runtime instead
  // of bundling them; the optional x402 paths are never used by this app.
  serverExternalPackages: ["@base-org/account", "@coinbase/cdp-sdk"],
};

export default nextConfig;
