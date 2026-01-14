/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    domains: ['img.youtube.com', 'i.ytimg.com']
}
};

export default nextConfig;
