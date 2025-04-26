import React from 'react';

const EthereumIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => {
	return (
		<svg
			viewBox="0 0 44 44"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<g clipPath="url(#clip0_62_79)">
				<path
					d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
					fill="#627EEA"/>
				<path d="M22.6848 5.5V17.6962L32.9931 22.3025L22.6848 5.5Z" fill="white" fillOpacity="0.602"/>
				<path d="M22.6847 5.5L12.375 22.3025L22.6847 17.6962V5.5Z" fill="white"/>
				<path d="M22.6848 30.2059V38.4931L33 24.2219L22.6848 30.2059Z" fill="white" fillOpacity="0.602"/>
				<path d="M22.6847 38.4931V30.2045L12.375 24.2219L22.6847 38.4931Z" fill="white"/>
				<path d="M22.6848 28.2879L32.9931 22.3025L22.6848 17.699V28.2879Z" fill="white" fillOpacity="0.2"/>
				<path d="M12.375 22.3025L22.6847 28.2879V17.699L12.375 22.3025Z" fill="white" fillOpacity="0.602"/>
			</g>
			<defs>
				<clipPath id="clip0_62_79">
					<rect width="44" height="44" fill="white"/>
				</clipPath>
			</defs>
		</svg>

	);
};

export default EthereumIcon;