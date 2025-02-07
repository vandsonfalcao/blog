const isProd = process.env.NODE_ENV === "production";

export const src = (url: string) => {
	if (isProd) return `${process.env.NEXT_PUBLIC_BASE_PATH}${url}`;
	return url;
};
