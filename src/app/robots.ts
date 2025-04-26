import { MetadataRoute } from 'next';
import { SITE_URL, LOCALES } from '@/consts';

const disallowedPages = ['/privacy-policy', '/terms-and-conditions'];

export default function robots(): MetadataRoute.Robots {
	const rules = [
		{
			userAgent: '*',
			allow: '/',
			disallow: LOCALES.flatMap((locale) => disallowedPages.map((page) => `/${locale}${page}`)),
		},
		{
			userAgent: 'Googlebot',
			allow: '/',
			disallow: LOCALES.flatMap((locale) => disallowedPages.map((page) => `/${locale}${page}`)),
		},
	];

	return {
		rules,
		sitemap: `${SITE_URL}/sitemap.xml`,
	};
}