import React from 'react';
import stylesBlock from "@/styles/components/advantages-block/Advantages.module.css"
import styles from "@/styles/components/advantages-block/PersonalAccount.module.css"
import {useTranslations} from "next-intl";
import BoltIcon from "@/components/icons/BoltIcon";
import BarChatIcon from "@/components/icons/BarChatIcon";
import EncryptedIcon from "@/components/icons/EncryptedIcon";

const PersonalAccount = () => {

	const t = useTranslations('HomePage.section3.menuItems.i3');

	const icons = [
		<BoltIcon />,
		<BarChatIcon />,
		<BarChatIcon />,
		<BoltIcon />,
		<EncryptedIcon />,
	]

	return (
		<div className={`flex flex-col bg-[color:var(--dark-color-1)] ${stylesBlock.descriptionBlock}`}>
			<h4 className={`golos-text text-[color:var(--blue-color-1)] font-semibold ${stylesBlock.largeText}`}>
				{t("head")}
			</h4>
			<p className={`geologica text-white ${stylesBlock.smallText}`}>
				{t("text")}
			</p>
			<div className={`flex flex-wrap ${styles.blocks}`}>
				{icons.map((icon, i) =>
					<div key={i} className={`flex items-center bg-[color:var(--background)] !border border-[color:var(--blue-color-1)] ${styles.block}`}>
						{React.cloneElement(icon, { className: "fill-white" })}
						<p className={`geologica text-white ${stylesBlock.smallText}]`}>
							{t(`p${i + 1}`)}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default PersonalAccount;