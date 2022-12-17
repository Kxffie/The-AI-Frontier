import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import Head from 'next/head';
import GoBackButton from '../components/GoBack';

const Post = (props) => {
	return (
		<div className="max-w-3xl p-4 mx-auto mb-4 text-2xl font-bold prose text-gray-800 lg:prose-xl">
			<Head>
				<title>{props.post.data.title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<GoBackButton />
			<h1 className="mb-4 text-4xl font-bold text-gray-800">{props.post.data.title}</h1>
			<div className="text-gray-700" dangerouslySetInnerHTML={{ __html: marked(props.post.content) }} />
		</div>
	);
};

export async function getStaticPaths() {
	const postsDirectory = path.join(process.cwd(), 'posts');
	const filenames = fs.readdirSync(postsDirectory);

	return {
		paths: filenames.map((filename) => ({
			params: {
				slug: filename.replace('.md', ''),
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postsDirectory = path.join(process.cwd(), 'posts');
	const filePath = path.join(postsDirectory, `${params.slug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf8');
	const { data, content } = matter(fileContent);

	return {
		props: {
			post: {
				data,
				content,
			},
		},
	};
}

export default Post;