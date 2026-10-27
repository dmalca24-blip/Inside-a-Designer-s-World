/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // Required for static export on GitHub Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // Supports custom subpath or root domain
  trailingSlash: true,
};
export default nextConfig;
