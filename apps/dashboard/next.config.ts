import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@warren/ui", "@warren/shared"],
};

export default nextConfig;
