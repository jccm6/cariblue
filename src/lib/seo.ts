import { getRooms, type Room } from "../i18n/rooms";
import { defaultLocale, getLocalizedPath, type Locale } from "../i18n/config";

export const SITE_URL = "https://cariblue.com";
export const SITE_NAME = "Cariblue Beach & Jungle Resort";
export const DEFAULT_SOCIAL_IMAGE = "/favicon.webp";
export const BOOKING_URL = "https://book.cariblue.com/";

export type PageType = "website" | "article";

export interface SeoPage {
	path: string;
	changefreq: "weekly" | "monthly";
	priority: string;
}

const basePages: SeoPage[] = [
	{ path: "/", changefreq: "weekly", priority: "1.0" },
	{ path: "/habitaciones", changefreq: "weekly", priority: "0.95" },
	{ path: "/all-inclusive", changefreq: "weekly", priority: "0.9" },
	{ path: "/paquetes", changefreq: "weekly", priority: "0.85" },
	{ path: "/contacto", changefreq: "monthly", priority: "0.8" },
	{ path: "/como-llegar", changefreq: "monthly", priority: "0.75" },
	{ path: "/preguntas-frecuentes", changefreq: "monthly", priority: "0.75" },
	{ path: "/restaurante", changefreq: "monthly", priority: "0.7" },
	{ path: "/sushi-wave", changefreq: "monthly", priority: "0.7" },
	{ path: "/surya-spa", changefreq: "monthly", priority: "0.7" },
	{ path: "/day-pass", changefreq: "weekly", priority: "0.7" },
	{ path: "/actividades-caribe", changefreq: "monthly", priority: "0.65" },
	{ path: "/familias-cariblue", changefreq: "monthly", priority: "0.65" },
	{ path: "/eventos", changefreq: "monthly", priority: "0.65" },
	{ path: "/sustentabilidad", changefreq: "monthly", priority: "0.6" },
];

export function normalizePath(pathname: string): string {
	const withoutOrigin = pathname.replace(/^https?:\/\/[^/]+/i, "");
	const path = withoutOrigin.split(/[?#]/)[0] || "/";
	const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
	const withoutIndex = withLeadingSlash.replace(/\/index\.html$/, "/");

	if (withoutIndex !== "/" && withoutIndex.endsWith("/")) {
		return withoutIndex.slice(0, -1);
	}

	return withoutIndex;
}

export function localizedPath(path: string, locale: Locale): string {
	const normalized = normalizePath(path);

	if (locale === defaultLocale) {
		return normalized;
	}

	return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function absoluteUrl(path: string): string {
	const normalized = normalizePath(path);
	return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}

export function absoluteAssetUrl(path: string): string {
	if (/^https?:\/\//i.test(path)) {
		return path;
	}

	return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getCanonicalPath(pathname: string, locale: Locale): string {
	return localizedPath(getBasePath(pathname), locale);
}

export function getBasePath(pathname: string): string {
	const normalized = normalizePath(pathname);

	if (normalized === "/en") {
		return "/";
	}

	if (normalized.startsWith("/en/")) {
		return normalizePath(normalized.slice(3));
	}

	return normalized;
}

export function getAlternateUrls(pathname: string): Record<Locale | "x-default", string> {
	const basePath = getBasePath(pathname);

	return {
		es: absoluteUrl(localizedPath(basePath, "es")),
		en: absoluteUrl(localizedPath(basePath, "en")),
		"x-default": absoluteUrl(localizedPath(basePath, "es")),
	};
}

export function getAllSeoPages(): SeoPage[] {
	const roomPages = getRooms("es").map((room) => ({
		path: `/room/${room.slug}`,
		changefreq: "weekly" as const,
		priority: "0.9",
	}));

	return [...basePages, ...roomPages];
}

export function getLocaleSeoPages(): Array<SeoPage & { locale: Locale; urlPath: string }> {
	return getAllSeoPages().flatMap((page) =>
		(["es", "en"] as Locale[]).map((locale) => ({
			...page,
			locale,
			urlPath: localizedPath(page.path, locale),
		})),
	);
}

export function getRoomFromPath(pathname: string, locale: Locale): Room | undefined {
	const basePath = getBasePath(pathname);
	const match = basePath.match(/^\/room\/([^/]+)$/);

	if (!match) {
		return undefined;
	}

	return getRooms(locale).find((room) => room.slug === match[1]);
}

export function getBreadcrumbSchema(pathname: string, locale: Locale): Record<string, unknown> | undefined {
	const basePath = getBasePath(pathname);

	if (basePath === "/") {
		return undefined;
	}

	const room = getRoomFromPath(pathname, locale);
	const labels: Record<string, Record<Locale, string>> = {
		habitaciones: { es: "Habitaciones", en: "Rooms" },
		"all-inclusive": { es: "All Inclusive", en: "All Inclusive" },
		paquetes: { es: "Paquetes", en: "Packages" },
		contacto: { es: "Contacto", en: "Contact" },
		"como-llegar": { es: "Cómo Llegar", en: "How to Get Here" },
		"preguntas-frecuentes": { es: "Preguntas Frecuentes", en: "Frequently Asked Questions" },
		restaurante: { es: "Restaurante La Jungla", en: "La Jungla Restaurant" },
		"sushi-wave": { es: "Sushi Wave", en: "Sushi Wave" },
		"surya-spa": { es: "Surya Spa", en: "Surya Spa" },
		"day-pass": { es: "Day Pass", en: "Day Pass" },
		"actividades-caribe": { es: "Actividades del Caribe", en: "Caribbean Activities" },
		"familias-cariblue": { es: "Familias Cariblue", en: "Families at Cariblue" },
		eventos: { es: "Eventos", en: "Events" },
		sustentabilidad: { es: "Sustentabilidad", en: "Sustainability" },
	};

	const items = [
		{
			"@type": "ListItem",
			position: 1,
			name: locale === "es" ? "Inicio" : "Home",
			item: absoluteUrl(localizedPath("/", locale)),
		},
	];

	if (room) {
		items.push({
			"@type": "ListItem",
			position: 2,
			name: locale === "es" ? "Habitaciones" : "Rooms",
			item: absoluteUrl(localizedPath("/habitaciones", locale)),
		});
		items.push({
			"@type": "ListItem",
			position: 3,
			name: room.title,
			item: absoluteUrl(localizedPath(basePath, locale)),
		});
	} else {
		const slug = basePath.split("/").filter(Boolean)[0];
		items.push({
			"@type": "ListItem",
			position: 2,
			name: labels[slug]?.[locale] ?? slug,
			item: absoluteUrl(localizedPath(basePath, locale)),
		});
	}

	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items,
	};
}

export function getGlobalStructuredData(locale: Locale): Record<string, unknown>[] {
	const home = absoluteUrl(localizedPath("/", locale));
	const logo = absoluteAssetUrl("/logo.webp");

	return [
		{
			"@context": "https://schema.org",
			"@type": "Hotel",
			"@id": `${SITE_URL}/#hotel`,
			name: SITE_NAME,
			url: home,
			logo,
			image: absoluteAssetUrl(DEFAULT_SOCIAL_IMAGE),
			description:
				locale === "es"
					? "Resort de playa y jungla en Playa Cocles, Puerto Viejo de Talamanca, Costa Rica."
					: "Beach and jungle resort in Playa Cocles, Puerto Viejo de Talamanca, Costa Rica.",
			telephone: "+506 2750 0035",
			email: "reservations@cariblue.com",
			address: {
				"@type": "PostalAddress",
				streetAddress: "Cocles Beach, 1.5 Km. South Puerto Viejo",
				postalCode: "70403",
				addressLocality: "Puerto Viejo",
				addressRegion: "Limón",
				addressCountry: "CR",
			},
			geo: {
				"@type": "GeoCoordinates",
				latitude: 9.650190490438069,
				longitude: -82.74184302332371,
			},
			priceRange: "$$",
			checkinTime: "15:00",
			checkoutTime: "12:00",
			petsAllowed: false,
			amenityFeature: [
				{ "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
				{ "@type": "LocationFeatureSpecification", name: "Pool", value: true },
				{ "@type": "LocationFeatureSpecification", name: "Spa", value: true },
				{ "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
				{ "@type": "LocationFeatureSpecification", name: "Parking", value: true },
			],
			sameAs: [
				"https://www.facebook.com/caribluehotel",
				"https://www.instagram.com/caribluehotel/",
				"https://www.youtube.com/@caribluehotelcocles",
				"https://www.tiktok.com/@caribluehotelcr",
				"https://www.tripadvisor.es/Hotel_Review-g309265-d302968-Reviews-Cariblue_Beach_Jungle_Resort-Puerto_Viejo_de_Talamanca_Province_of_Limon.html",
			],
			potentialAction: {
				"@type": "ReserveAction",
				target: BOOKING_URL,
			},
		},
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"@id": `${SITE_URL}/#organization`,
			name: SITE_NAME,
			url: home,
			logo,
			owns: { "@id": `${SITE_URL}/#hotel` },
			contactPoint: {
				"@type": "ContactPoint",
				telephone: "+506 2750 0035",
				contactType: "reservations",
				email: "reservations@cariblue.com",
				availableLanguage: ["Spanish", "English"],
			},
		},
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"@id": `${SITE_URL}/#website`,
			name: SITE_NAME,
			url: home,
			inLanguage: locale === "es" ? "es-CR" : "en",
			publisher: { "@id": `${SITE_URL}/#organization` },
			about: { "@id": `${SITE_URL}/#hotel` },
		},
	];
}

export function getRoomSchema(room: Room, locale: Locale): Record<string, unknown> {
	const path = localizedPath(`/room/${room.slug}`, locale);

	return {
		"@context": "https://schema.org",
		"@type": "HotelRoom",
		"@id": `${absoluteUrl(path)}#room`,
		name: room.title,
		description: room.description,
		image: room.image,
		url: absoluteUrl(path),
		occupancy: {
			"@type": "QuantitativeValue",
			maxValue: Number(room.guests),
		},
		floorSize: {
			"@type": "QuantitativeValue",
			value: Number.parseInt(room.acreage, 10),
			unitCode: "MTK",
		},
		bed: room.beds,
		containedInPlace: { "@id": `${SITE_URL}/#hotel` },
		potentialAction: {
			"@type": "ReserveAction",
			target: BOOKING_URL,
		},
	};
}

const faqSchemaItems: Record<Locale, Array<{ question: string; answer: string }>> = {
	es: [
		{
			question: "¿A qué distancia se encuentra Cariblue de Puerto Viejo?",
			answer: "Cariblue Beach and Jungle Resort se encuentra a 2 kilómetros del centro de Puerto Viejo, frente a Playa Cocles.",
		},
		{
			question: "¿Qué se necesita para reservar?",
			answer: "Puedes reservar tu estancia por medio de nuestra página web disponible las 24 horas o contactar al equipo por teléfono o WhatsApp.",
		},
		{
			question: "¿Cuentan con restaurante?",
			answer: "Sí, el resort cuenta con Restaurante La Jungla, Sushi Wave frente a Playa Cocles y el Wetbar Congo en el área de piscina.",
		},
		{
			question: "¿Cuentan con WiFi en las habitaciones?",
			answer: "Sí, el resort ofrece WiFi de alta velocidad gratuito en habitaciones, terrazas y áreas comunes.",
		},
	],
	en: [
		{
			question: "How far is Cariblue from Puerto Viejo?",
			answer: "Cariblue Beach and Jungle Resort is located 2 kilometers from downtown Puerto Viejo, in front of Playa Cocles.",
		},
		{
			question: "What do I need to book?",
			answer: "You can book your stay through the website 24 hours a day or contact the team by phone or WhatsApp.",
		},
		{
			question: "Do you have a restaurant?",
			answer: "Yes, the resort offers La Jungla Restaurant, Sushi Wave in front of Playa Cocles, and Congo Wet Bar by the pool.",
		},
		{
			question: "Do you have WiFi in the rooms?",
			answer: "Yes, the resort offers free high-speed WiFi in rooms, terraces and common areas.",
		},
	],
};

export function getFaqSchema(locale: Locale): Record<string, unknown> {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqSchemaItems[locale].map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};
}

export function truncateDescription(description: string, maxLength = 160): string {
	if (description.length <= maxLength) {
		return description;
	}

	const truncated = description.slice(0, maxLength - 1);
	const lastSpace = truncated.lastIndexOf(" ");
	return `${truncated.slice(0, lastSpace > 120 ? lastSpace : maxLength - 1).trim()}.`;
}

export function toJsonLd(data: Record<string, unknown> | Record<string, unknown>[]): string {
	return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function getLocaleCode(locale: Locale): string {
	return locale === "es" ? "es_CR" : "en_US";
}

export function getHrefLang(locale: Locale): string {
	return locale === "es" ? "es-CR" : "en";
}

export function getSitemapLastMod(): string {
	return new Date().toISOString().split("T")[0];
}
