"use client";

import React, {ComponentProps, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Container} from "react-bootstrap";
import styles from "@/styles/components/Header.module.css";
import {useTranslations} from "next-intl";
import MenuIcon from "@/components/icons/MenuIcon";

interface IProps extends ComponentProps<typeof motion.header> {
	links?: {text: string, href: string}[],
	children?: React.ReactNode,
}

const ClientHeader: React.FC<IProps> = ({ links, children, ...rest }) => {

	const t = useTranslations("header");

	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const closeMenuAfterScroll = () => {
		setTimeout(() => setIsOpenMenu(false), 800);
	}

	return (
		<motion.header
			animate={isOpenMenu ? {height: '100vh'} : {height: 50}}
			{...rest}
		>
			<Container className={`flex items-center flex-shrink-0 justify-between ${styles.header}`}>
				{children}
				<button
					onClick={() => setIsOpenMenu(!isOpenMenu)}
					title={t("buttonOpenMenu.title")}
					aria-label={t("buttonOpenMenu.ariaLabel")}
					className={`items-center bg-transparent justify-center !border border-[color:var(--blue-color-2)] ${styles.button}`}
				>
					<MenuIcon className="fill-white"/>
				</button>
			</Container>
			<AnimatePresence>
				{isOpenMenu && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={`flex flex-col ${styles.columnLinks}`}
					>
						{links?.map((link, i) =>
							<a
								onClick={closeMenuAfterScroll}
								key={i}
								href={link.href}
								className="geologica text-white"
							>
								{link.text}
							</a>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default ClientHeader;