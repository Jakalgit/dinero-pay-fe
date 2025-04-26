"use client";

import React from 'react';
import DollarIcon from "@/components/icons/DollarIcon";
import styles from "@/styles/components/DineroPayment.module.css";

interface IProps {
	wrapperAttrs?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
}

const DineroPayments: React.FC<IProps> = ({ wrapperAttrs }) => {

	const dollarIconsByRows = [5, 6, 5, 4, 2];

	return (
		<div {...wrapperAttrs}>
			<div className="flex flex-col items-center justify-center relative">
				{dollarIconsByRows.map((numberOfIcons, i) =>
					<div className="flex items-center justify-center" key={i}>
						{new Array(numberOfIcons).fill(0).map((_, i) =>
							<DollarIcon
								key={i}
								className={styles.icon}
							/>
						)}
					</div>
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