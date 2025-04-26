import React from 'react';
import {useTranslations} from "next-intl";
import stylesBlock from "@/styles/components/advantages-block/Advantages.module.css";
import styles from "@/styles/components/advantages-block/SupportBot.module.css"
import CheckCircleIcon from "@/components/icons/CheckCircleIcon";

const SupportBot = () => {

	const t = useTranslations('HomePage.section3.menuItems.i4');

	return (
		<div className={`flex bg-[color:var(--dark-color-1)] ${stylesBlock.descriptionBlock} ${styles.block}`}>
			<div className={`flex flex-col ${styles.left}`}>
				<h4 className={`golos-text text-[color:var(--blue-color-1)] font-semibold ${stylesBlock.largeText}`}>
					{t("head")}
				</h4>
				<p className={`geologica text-white ${stylesBlock.smallText}`}>
					{t("text")}
				</p>
			</div>
			<div className={`flex items-center justify-center ${styles.right}`}>
				<div className={`relative ${styles.messageWrapper}`}>
					<div
						className={`absolute flex flex-col justify-between bg-[color:var(--blue-color-3)] !border border-[color:var(--blue-color-1)] ${styles.message} ${styles.messageAbsolute}`}
						style={{ boxShadow: '0 15px 50px rgba(249, 222, 220, .15)', zIndex: 1 }}
					>
						<p className={`geologica ${styles.messageHead}`}>
							Application #4138 has been processed!
						</p>
						<p className={`geologica opacity-50 ${styles.messageText}`}>
							The payment has been made to the specified details
						</p>
					</div>
					<div className={`flex flex-col justify-between bg-[color:var(--blue-color-5)] !border border-[color:var(--blue-color-1)] ${styles.message}`}>
						<div className={`flex items-start gap-2`}>
							<CheckCircleIcon className="fill-[color:var(--blue-color-1)]" />
							<div>
								<p className={`geologica text-[color:var(--blue-color-1)] ${styles.messageHead}`}>
									Application #4138
								</p>
								<span className={`geologica ${styles.messageText}`}>Created</span>
							</div>
						</div>
						<p className={`geologica opacity-50 ${styles.messageText}`}>
							Thank you for your application!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SupportBot;