import React from 'react';

const CardsIcon: React.FC<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = ({ ...rest }) => {
	return (
		<img src="cards.png" alt="cards-icon" {...rest} />
	);
};

export default CardsIcon;