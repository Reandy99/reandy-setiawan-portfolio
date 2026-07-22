import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/preview/", "/preview/layouts", "/preview/layouts/"],
    },
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
  };
}
