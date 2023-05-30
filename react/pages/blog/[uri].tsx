import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';

/**
 * Interface for post title, content and excerpt
 */
interface ContentObject {
	//This property is always present
	rendered: string;
	//This property is only present in some contexts
	raw?: string;
}

/**
 * Interface for describing post content
 */
interface PostContent extends ContentObject {}
/**
 * Interface for describing post content
 */
interface PostExcerpt extends ContentObject {}

interface Author extends ContentObject {
	node: {
		firstName?: string;
		lastName?: string;
	};
}

/**
 * Interface describing a WordPress post
 */
interface IPost {
	post: {
		title: string;
		content: PostContent;
		date: string;
		author?: Author;
	};
}

const SlugPage = ({ post }: IPost) => {
	return (
		<div>
			<main>
				<div className="siteHeader">
					<h1 className="title">{post?.title}</h1>
					<p>
						✍️ &nbsp;&nbsp;
						{`${post?.author?.node?.firstName} ${post?.author?.node?.lastName}`}{' '}
						| 🗓️ &nbsp;&nbsp;{new Date(post?.date).toLocaleDateString()}
					</p>
				</div>
				<article dangerouslySetInnerHTML={{ __html: post?.content }}></article>
			</main>
		</div>
	);
};

export async function getStaticProps({ params }) {
	const GET_POST = gql`
		query GetPostByURI($id: ID!) {
			post(id: $id, idType: URI) {
				title
				content
				date
				author {
					node {
						firstName
						lastName
					}
				}
			}
		}
	`;
	//  the params argument for this function corresponds to the dynamic URL segments
	//  we included in our page-based route. So, in this case, the `params` object will have
	//  a property named `uri` that contains that route segment when a user hits the page
	console.log(params);
	const response = await client.query({
		query: GET_POST,
		variables: {
			id: `blog/${params.uri}`,
		},
	});
	const post = response?.data?.post;
	console.log(post);
	return {
		props: {
			post,
		},
	};
}

export async function getStaticPaths() {
	const paths = [];
	return {
		paths,
		fallback: 'blocking',
	};
}

export default SlugPage;
