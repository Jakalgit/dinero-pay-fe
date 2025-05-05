import React, {useEffect, useState} from 'react';
import styles from "@/styles/components/DineroPayment.module.css";
import DollarIcon from "@/components/icons/DollarIcon";

interface IProps {
	lineIndex: number;
	randomLineIndex: number;
	numberOfIcons: number;
}

const IconsLine: React.FC<IProps> = ({ lineIndex, randomLineIndex, numberOfIcons }) => {

	// Таймаут в мс
	const defaultTimeout = 200;

	return (
		<div className="flex items-center justify-center" key={lineIndex}>
			{new Array(numberOfIcons).fill(0).map((_, i) => {

				const [isActive, setIsActive] = useState(false);

				useEffect(() => {
					const startTimeout = defaultTimeout * i;

					if (randomLineIndex === lineIndex) {
						setTimeout(() => {
							setIsActive(true);
						}, startTimeout)

						setTimeout(() => {
							setIsActive(false);
						}, startTimeout + defaultTimeout * 1.6);
					}
				}, [randomLineIndex]);

				return (
					<DollarIcon
						key={i}
						className={`duration-300 ${styles.icon}`}
						style={isActive ? {fill: 'rgba(255, 255, 255, 0.7)'} : {}}
					/>
				)
			})}
		</div>
	);
};

export default IconsLine;