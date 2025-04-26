import React from 'react';
import stylesBlock from "@/styles/components/advantages-block/Advantages.module.css";
import styles from "@/styles/components/advantages-block/Conversion.module.css"
import {useTranslations} from "next-intl";

const Conversion = () => {

	const t = useTranslations('HomePage.section3.menuItems.i5');

	return (
		<div className={`flex bg-[color:var(--dark-color-1)] ${stylesBlock.descriptionBlock} ${styles.block}`}>
			<div className={styles.left}>
				<h4
					style={{ marginBottom: 0 }}
					className={`golos-text text-white font-semibold ${stylesBlock.largeText}`}
				>
					{t.rich("head", {
						style: (chunks) => (
							<span className="text-[color:var(--blue-color-1)]">{chunks}</span>
						)
					})}
				</h4>
			</div>
			<div className={styles.left} />
		</div>
	);
};

export default Conversion;