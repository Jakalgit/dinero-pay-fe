import React from 'react';
import stylesBlock from "@/styles/components/advantages-block/Advantages.module.css"
import styles from "@/styles/components/advantages-block/CustomizablePayment.module.css"
import {useTranslations} from "next-intl";
import SupportAgentIcon from "@/components/icons/SupportAgentIcon";
import SettingIcon from "@/components/icons/SettingIcon";

const CustomizablePayment = () => {

	const t = useTranslations('HomePage.section3.menuItems.i2');

	return (
		<div className={`flex flex-col bg-[color:var(--dark-color-1)] ${stylesBlock.descriptionBlock}`}>
			<h4 className={`golos-text text-[color:var(--blue-color-1)] font-semibold ${stylesBlock.largeText}`}>
				{t('head')}
			</h4>
			<p className={`geologica text-[color:--purple-color-1] ${stylesBlock.smallText}`}>
				{t('text1')}
			</p>
			<div className={`bg-[color:var(--blue-color-5)] w-full ${styles.line}`} />
			<div className={`flex ${styles.bottomBlock}`}>
				<div className={`flex items-start`}>
					<SupportAgentIcon className="fill-[color:--purple-color-1]" />
					<p className={`geologica text-[color:--purple-color-1] ${stylesBlock.smallText}`}>
						{t('text2')}
					</p>
				</div>
				<div className={`flex items-start`}>
					<SettingIcon className="fill-[color:--purple-color-1]" />
					<p className={`geologica text-[color:--purple-color-1] ${stylesBlock.smallText}`}>
						{t('text3')}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CustomizablePayment;