import Link from 'next/link';

const Header = () => (
	<div className='bg-violet-500'>
		<header className="flex max-w-2xl p-3 mx-auto">
			<Link legacyBehavior href="/" >
				<a className="text-2xl font-bold tracking-tight text-white hover:underline">The AI Frontier</a>
			</Link>
		</header>
	</div>
);

export default Header;
