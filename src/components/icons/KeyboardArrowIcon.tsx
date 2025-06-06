import React from 'react';

const KeyboardArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -960 960 960"
			{...rest}
		>
			<path
				d="M480-355.5q-8.96 0-17.15-3.1-8.2-3.1-14.92-9.81L264.17-552.17Q251.5-564.85 251.5-584t12.67-31.83Q276.85-628.5 296-628.5t31.83 12.67L480-463.65l152.17-152.18Q644.85-628.5 664-628.5t31.83 12.67Q708.5-603.15 708.5-584t-12.67 31.83L512.07-368.41q-6.72 6.71-14.92 9.81-8.19 3.1-17.15 3.1Z"/>
		</svg>
	);
};

export default KeyboardArrowIcon;