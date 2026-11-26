import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Local secrets (e.g. SSN_ENCRYPTION_KEY) come from .dev.vars, read
// automatically by wrangler -- the installed @opennextjs/cloudflare version
// hardcodes envFiles to [] internally, so an `envFiles` option here is
// silently ignored and .env.local is never read for Cloudflare bindings.
initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/plans",
        permanent: true,
      },
      {
        source: "/retirement-certainty-session",
        destination: "/self-directed-certainty-session",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
