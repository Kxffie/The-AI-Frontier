import { ArrowUp } from 'akar-icons';
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
			<button className='px-2 py-2 text-lg font-semibold text-white rounded-full shadow-lg bg-violet-500' onClick={handleClick}>
				<ArrowUp size={36} />
			</button>
		</div>
	) : null;
};

export default ScrollToTopButton;