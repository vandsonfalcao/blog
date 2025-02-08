import Link from "next/link";

export type Pagination = {
	currentPage: number;
	totalPages: number;
	totalPosts: number;
	hasNextPage: false;
	hasPrevPage: false;
};
type Post = {
	slug: string;
	title: string;
	date: string;
};

export async function getServerSideProps() {
  const res = await fetch("https://vandsonfalcao.github.io/blog-content-api");
  const { posts } = await res.json();

  return { props: { posts } };
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
