import { Markdown } from "./components/Markdown";

export type Post = {
	slug: string;
	title: string;
	date: string;
	content: string;
};

export async function generateStaticParams() {
	const res = await fetch("https://vandsonfalcao.github.io/blog-content-api/slugs/posts.json");
	const posts = await res.json();
	return posts;
}

type Props = {
	params: Promise<{ slug: string }>;
};
export default async function Post({ params }: Props) {
	async function getPost(slug: string): Promise<Post> {
		try {
			const res = await fetch(
				`https://vandsonfalcao.github.io/blog-content-api/posts/${slug}.json`
			);
			const post = await res.json();
			return post;
		} catch (error: unknown) {
			console.error({ error });
			throw new Error("Erro desconhecido");
		}
	}

	const slug = (await params).slug;
	const post = await getPost(slug);
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1>{post.title} posts</h1>
				<small>{post.date}</small>
				<Markdown content={post.content} />
			</main>
		</div>
	);
}
