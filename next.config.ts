import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: './', // важно для локального открытия
  basePath: '', // убедись что это пустая строка
};

export default nextConfig;
