import { serverEnv } from '@/config/env';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: `${serverEnv.WEB_URL}/sitemap.xml`,
  };
}
