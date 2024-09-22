/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: 'incremental',
      },
    ignoreBuildErrors: true,
};

export default nextConfig;
