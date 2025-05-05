"use client";

import React, {useEffect, useState} from 'react';
import styles from "@/styles/components/DineroPayment.module.css";
import IconsLine from "@/components/client/DineroPayments/IconsLine";

interface IProps {
	wrapperAttrs?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
}

const DineroPayments: React.FC<IProps> = ({ wrapperAttrs }) => {

	const dollarIconsByRows = [5, 6, 5, 4, 2];

	const [randomLineIndex, setRandomLineIndex] = useState(-1);

	useEffect(() => {
		const interval = setInterval(() => {
			setRandomLineIndex(prevState => {
				if (prevState + 1 >= dollarIconsByRows.length) {
					return 0
				} else {
					return prevState + 1;
				}
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div {...wrapperAttrs}>
			<div
				className={`flex flex-col items-center justify-center relative ${styles.wrapper}`}
			>
				{dollarIconsByRows.map((numberOfIcons, i) =>
					<IconsLine
						key={i}
						numberOfIcons={numberOfIcons}
						lineIndex={i}
						randomLineIndex={randomLineIndex}
					/>
				)}
				<div className={`absolute flex flex-col items-center ${styles.textBlock}`}>
					<p className={`gravitas-one text-white ${styles.dineroText}`}>DINERO</p>
					<p className={`dancing-script text-white ${styles.paymentsText}`}>Payments</p>
				</div>
			</div>
		</div>
	);
};

export default DineroPayments;