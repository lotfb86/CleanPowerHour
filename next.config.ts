import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.buzzsprout.com",
      },
      {
        protocol: "https",
        hostname: "www.buzzsprout.com",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ],
  },
  async redirects() {
    return [
      // cleanpowerhour.com → cleanpower.group redirects
      // These will be configured at the DNS/Vercel level for the actual domain
      // Listed here for reference and for any path-based redirects on cleanpower.group itself
      {
        source: "/episodes/:slug*",
        destination: "/podcast/:slug*",
        permanent: true,
      },
      {
        source: "/work-with-tim",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/happenings",
        destination: "/events",
        permanent: true,
      },
      {
        source: "/strategy",
        destination: "/services/ci-strategy",
        permanent: true,
      },
      {
        source: "/solarconsulting",
        destination: "/services/solar-consulting",
        permanent: true,
      },
      {
        source: "/careercoaching",
        destination: "/services/career-coaching",
        permanent: true,
      },
      {
        source: "/executivecoaching",
        destination: "/services/executive-coaching",
        permanent: true,
      },
      {
        source: "/cleanpower",
        destination: "/services/clean-power-method",
        permanent: true,
      },
      {
        source: "/cleantech",
        destination: "/services/mastermind",
        permanent: true,
      },
      {
        source: "/bookameeting",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/book-online",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/sponsors",
        destination: "/podcast/sponsors",
        permanent: true,
      },
      {
        source: "/media-kit",
        destination: "/about/media-kit",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/about/reviews",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
