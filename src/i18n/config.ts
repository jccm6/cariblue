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

export function getLocalizedPath(pathname: string, locale: Locale): string {
	const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

	if (locale === defaultLocale) {
		if (normalizedPath === "/en" || normalizedPath === "/en/") {
			return "/";
		}

		if (normalizedPath.startsWith("/en/")) {
			const path = normalizedPath.slice(3);
			return path === "" ? "/" : path;
		}

		return normalizedPath;
	}

	if (normalizedPath === "/") {
		return `/${locale}/`;
	}

	if (normalizedPath === `/${locale}` || normalizedPath === `/${locale}/`) {
		return `/${locale}/`;
	}

	if (normalizedPath.startsWith(`/${locale}/`)) {
		return normalizedPath;
	}

	return `/${locale}${normalizedPath}`;
}

export function getHomePath(locale: Locale): string {
	return localizePath("/", locale);
}
