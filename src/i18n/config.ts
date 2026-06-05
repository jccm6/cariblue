export const languages = {
	es: "Español",
	en: "English",
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = "es";

export function isLocale(locale: string | undefined): locale is Locale {
	return locale === "es" || locale === "en";
}

export function getLocale(locale: string | undefined): Locale {
	return isLocale(locale) ? locale : defaultLocale;
}

export function localizePath(path: string, locale: Locale): string {
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;

	if (locale === defaultLocale) {
		return normalizedPath;
	}

	if (normalizedPath === "/") {
		return `/${locale}/`;
	}

	return `/${locale}${normalizedPath}`;
}

export function getHomePath(locale: Locale): string {
	return localizePath("/", locale);
}
