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
  // Temporary client-review draft, served as a static file (not a real app
  // route) so it keeps its own standalone <html> document. Remove this
  // rewrite, the noindex header below, and public/homepage-draft.html once
  // the client review is done.
  async rewrites() {
    return [
      {
        source: "/homepage-draft",
        destination: "/homepage-draft.html",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/homepage-draft",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/homepage-draft.html",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
