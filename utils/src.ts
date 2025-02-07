const isProd = process.env.NODE_ENV === "production";

export const src = (img: string) => {
	if (isProd) return `${process.env.NEXT_PUBLIC_BASE_URL}${img}`;
	return img;
};
