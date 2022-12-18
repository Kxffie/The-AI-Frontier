import Head from 'next/head';
import Link from 'next/link';

export default function About() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<Head>
				<title>The AI Frontier - About</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div class="h-screen w-screen flex items-center">
				<div class="container flex flex-col md:flex-row items-center justify-center text-black mx-auto">
					<div class="max-w-md">
						<div class="text-5xl font-dark font-bold text-violet-500">HTTP 404</div>
						<p class="text-2xl md:text-3xl font-light leading-normal">Sorry we couldn&apos;t find this page. </p>
						<p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
						<Link href="/" class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-violet-500">Back to Homepage</Link>
					</div>
				</div>
			</div>
		</div >
	)
};