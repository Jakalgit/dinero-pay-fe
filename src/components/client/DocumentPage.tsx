"use client";
import React from 'react';
import styles from "@/styles/pages/page-document.module.css"
import {Container} from "react-bootstrap";
import {BreakText} from "@/components/BreakText";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";
import {redirect, useParams} from "next/navigation";
import {LOCALES} from "@/consts";

interface IProps {
	numberOfBlocks: number;
	translation: string,
	pageRoute: string;
}

const DocumentPage: React.FC<IProps> = ({ pageRoute, numberOfBlocks, translation }) => {

	const params = useParams();
	const locale = params.locale as string;

	if (!LOCALES.includes(locale)) {
		redirect(pageRoute);
	}

	const t = useTranslations(translation);

	return (
		<motion.main
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			className={`flex flex-col ${styles.main}`}
		>
			<Container>
				<h1 className={`golos-text font-semibold text-[var(--blue-color-1)] ${styles.pageHead}`}>
					{t("head")}
				</h1>
				<div className={`flex flex-col ${styles.list}`}>
					{Array(numberOfBlocks).fill(0).map((_, index) =>
						<div
							key={index}
							className={`flex flex-col ${styles.listBlock}`}
						>
							<h2 className="golos-text text-[color:var(--blue-color-1)] font-semibold">
								{index + 1}. {t(`b${index + 1}.head`).toUpperCase()}
							</h2>
							<p className="geologica">
								<BreakText text={t(`b${index + 1}.text`)}/>
							</p>
						</div>
					)}
				</div>
			</Container>
		</motion.main>
	);
};

export default DocumentPage;