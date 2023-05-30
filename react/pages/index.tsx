import Head from 'next/head';
import { IPost } from '../components/PostCard';
import PostCard from '../components/PostCard';
import { client } from '../lib/apollo';

import { gql } from '@apollo/client';

interface IPosts {
	posts: IPost[];
}
export default function Home({ posts }: IPosts) {
	return (
		<div>
			<Head>
				<title>Headless WP Next Starter</title>
				<link rel="icon" href="favicon.ico"></link>
			</Head>

			<main>
				<h1 className="title">Headless WordPress Next.js Starter</h1>

				<p className="description">
					Get started by editing <code>pages/index.js</code>
				</p>

				<div className="grid">
					{posts.map((post) => {
						// @ts-ignore
						return <PostCard key={post.uri} post={post}></PostCard>;
					})}
				</div>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const GET_POSTS = gql`
		query GetAllPosts {
			posts {
				nodes {
					date
					title
					content
					uri
				}
			}
		}
	`;
	const response = await client.query({
		query: GET_POSTS,
	});
	const posts = response?.data?.posts?.nodes;
	return {
		props: {
			posts,
		},
	};
}
