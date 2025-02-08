import Link from "next/link";

export type Pagination = {
	currentPage: number;
	totalPages: number;
	totalPosts: number;
	hasNextPage: false;
	hasPrevPage: false;
};
	
interface Post {  
id: string
  title: string
  content: string
}
 
// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60
 
// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = false // or false, to 404 on unknown paths
 
export async function generateStaticParams() {
  const res = await fetch("https://vandsonfalcao.github.io/blog-content-api");
  const { posts } = await res.json();

  return posts
}

type Props = {
 posts: Post[]
}
export default async function Home({ posts }: Props) {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1>Posts</h1>
				<div>
					{posts.map((post) => (
						<div key={post.slug}>
							<h2>{post.title}</h2>
							<p>
								<Link passHref href={`/posts/${post.slug}`}>
									{post.slug}
								</Link>{" "}
								- {post.date}
							</p>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
