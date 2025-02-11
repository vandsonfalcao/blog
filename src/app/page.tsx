import { Post } from "@/types/post";
import Link from "next/link";

export const revalidate = 3600 // invalidate every hour

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://vandsonfalcao.github.io/blog-content-api/");
  return await res.json();
}

export default async function Home() {
	const posts = await getPosts()
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1>Posts</h1>
				<div>
					{posts.map((post) => (
						<div key={post.slug}>
							<h2>{post.title}</h2>
							<p>
								{JSON.stringify(post, null, 2)}
							</p>
								<Link passHref href={`/posts/${post.slug}`}>
									ver
								</Link>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
