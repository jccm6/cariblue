import type { APIRoute } from "astro";
import {
	absoluteUrl,
	getAllSeoPages,
	getHrefLang,
	getSitemapLastMod,
	localizedPath,
	type SeoPage,
} from "../lib/seo";
import type { Locale } from "../i18n/config";

function escapeXml(value: string): string {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

function renderAlternate(page: SeoPage, locale: Locale | "x-default"): string {
	const path = locale === "x-default" ? localizedPath(page.path, "es") : localizedPath(page.path, locale);
	const hreflang = locale === "x-default" ? "x-default" : getHrefLang(locale);

	return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${escapeXml(absoluteUrl(path))}" />`;
}

export const GET: APIRoute = () => {
	const lastmod = getSitemapLastMod();
	const urls = getAllSeoPages()
		.flatMap((page) =>
			(["es", "en"] as Locale[]).map((locale) => {
				const url = absoluteUrl(localizedPath(page.path, locale));
				const alternates = [renderAlternate(page, "es"), renderAlternate(page, "en"), renderAlternate(page, "x-default")].join(
					"\n",
				);

				return `  <url>
    <loc>${escapeXml(url)}</loc>
${alternates}
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
			}),
		)
		.join("\n");

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

	return new Response(body, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
};
