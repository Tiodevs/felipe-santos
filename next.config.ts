import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is for the hero portrait, the focal point of the page.
    qualities: [75, 90],
  },
  // The scheduling project went live as "leemia" before taking its real
  // name, so links to the old address still land on it.
  async redirects() {
    return [
      {
        source: "/:locale(pt|en)/projetos/leemia",
        destination: "/:locale/projetos/sistema-de-agendamentos",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
