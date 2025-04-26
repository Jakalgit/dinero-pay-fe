import React from 'react';
import stylesBlock from "@/styles/components/advantages-block/Advantages.module.css"
import styles from "@/styles/components/advantages-block/ApiIntegration.module.css"
import {useTranslations} from "next-intl";
import SettingIcon from "@/components/icons/SettingIcon";
import DownloadIcon from "@/components/icons/DownloadIcon";

const ApiIntegration = () => {

	const t = useTranslations('HomePage.section3.menuItems.i1');

	const codeLines = [
		{
			text: "curl -X POST \"https://d-pay.org/api\" \\",
			spaces: 4
		},
		{
			text: "-H \"Content-Type: application/x-www-form-urlencoded\" \\",
			spaces: 4
		},
		{
			text: "--data-urlencode \"paymentId=someId\" \\",
			spaces: 7
		},
		{
			text: "--data-urlencode \"amount=100000\" \\",
			spaces: 7
		},
		{
			text: "--data-urlencode \"currency=KZT\" \\",
			spaces: 7
		},
		{
			text: "--data-urlencode \"params.userId=76453@mail.com\" \\",
			spaces: 7
		},
		{
			text: "--data-urlencode \"returnUrl=https://return-url.com/\" \\",
			spaces: 7
		},
		{
			text: "--data-urlencode \"callbackUrl=https://return-url.com/\" \\",
			spaces: 7
		},
	]

	return (
		<div className={`flex flex-col bg-[color:var(--dark-color-1)] ${stylesBlock.descriptionBlock} ${styles.wrapper}`}>
			<h4 className={`golos-text text-[color:var(--blue-color-1)] font-semibold m-0 ${stylesBlock.largeText}`}>
				{t('head')}
			</h4>
			<div className={`flex ${styles.block}`}>
				<div className="flex flex-col">
					<div className={`flex items-start ${styles.smallTextBlock}`}>
						<SettingIcon className="fill-[color:--purple-color-1] flex-shrink-0" />
						<p className={`geologica text-[color:--purple-color-1] ${stylesBlock.smallText}`}>
							{t('text')}
						</p>
					</div>
					<div className={styles.downloadButtonWrapper}>
						<button
							className={`geologica text-white bg-transparent border-none flex items-center justify-center ${stylesBlock.smallText}`}>
							{t('download')}
							<DownloadIcon />
						</button>
					</div>
				</div>
				<div className="flex justify-end">
					<div className={`flex flex-col !border border-[color:var(--blue-color-3)] bg-[color:var(--background)] ${styles.codeBlock}`}>
						<div className="flex">
							<div className={`geologica bg-[color:var(--blue-color-1)] text-black ${styles.codeType}`}>
								cURL
							</div>
						</div>
						<code className={`${styles.code} text-white`}>
							{codeLines.map((line, i) =>
								<span style={{whiteSpace: "nowrap"}} key={`code-${i}`}>
									{i+1}{'\u00A0'.repeat(line.spaces)}{line.text}<br/>
								</span>
							)}
						</code>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApiIntegration;