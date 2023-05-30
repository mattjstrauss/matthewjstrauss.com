import Link from 'next/link';

export interface IPost {
	id: string | number;
	uri: string;
	title: string;
}
export default function PostCard({ post }) {
	return (
		<Link href={post.uri} className={'card'}>
			<span className="card">
				<h3>{post.title} &rarr;</h3>
			</span>
		</Link>
	);
}
