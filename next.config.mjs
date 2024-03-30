import _withMDX from "@next/mdx";

// Configure `pageExtensions` to include MDX files
// https://nextjs.org/docs/app/building-your-application/configuring/mdx
const withMDX = _withMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "ts", "mdx"],
};

export default withMDX(nextConfig);
