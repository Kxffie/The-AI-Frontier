import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return showButton ? (
		<div className='sticky bottom-0 flex justify-end w-full pb-3 pr-5 transition '>
			<button className='px-2 py-1 text-lg font-semibold text-white rounded-md shadow-lg bg-violet-500' onClick={handleClick}>
				Scroll to top
			</button>
		</div>
	) : null;
};

export default ScrollToTopButton;