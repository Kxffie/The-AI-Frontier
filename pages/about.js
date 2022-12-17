import Head from 'next/head';

export default function About() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<Head>
				<title>The AI Frontier - About</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<h1 className='text-5xl'>Hello</h1>
		</div>
	)
};