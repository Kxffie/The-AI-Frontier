import Head from 'next/head';

export default function About() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<Head>
				<title>The AI Frontier - About</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta content="The AI Frontier" property="og:title" />
				<meta content="Our blog covers the latest trends and developments in coding and AI. From programming languages to machine learning, we share insights and experiences on a wide range of topics. Whether you're a seasoned developer or just starting out, we hope you'll find our blog a valuable resource." property="og:description" />
				<meta content="https://the-ai-frontier.vercel.app/" property="og:url" />
				<meta content="https://the-ai-frontier.vercel.app/favicon.jpg" property="og:image" />
				<meta name="twitter:card" content="https://the-ai-frontier.vercel.app/favicon.jpg"></meta>
				<meta content="#8B5CF6" data-react-helmet="true" name="theme-color" />
			</Head>
			<h1 className='text-5xl'>Hello!</h1>
		</div>
	)
};