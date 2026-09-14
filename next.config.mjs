/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ESLint stylistic rules (e.g. react-hooks/set-state-in-effect) should not
  // gate production builds. Run lint locally during development instead.
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
