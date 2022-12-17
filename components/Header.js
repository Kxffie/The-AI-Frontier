import Link from 'next/link';

const Header = () => (
	<div className='bg-violet-500'>
		<header className="flex items-center justify-between max-w-2xl p-3 mx-auto">
			<Link legacyBehavior href="/">
				<a className="text-2xl font-bold tracking-tight text-white hover:underline">The AI Frontier</a>
			</Link>
			<Link legacyBehavior href="/about" >
				<a className="text-lg font-bold tracking-tight text-white hover:underline">About</a>
			</Link>
		</header>
	</div>
);


export default Header;
