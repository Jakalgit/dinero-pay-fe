import React from 'react';
import ClientHeader from "@/components/client/ClientHeader";
import {getLocale, getTranslations} from "next-intl/server";
import styles from "@/styles/components/Header.module.css";

const Header = async () => {

	const t = await getTranslations("routingLinks");
	const locale = await getLocale();

	const links = [
		{
			text: t('aboutUs'),
			href: `/${locale}#aboutUs`,
		},
		{
			text: t('advantages'),
			href: `/${locale}#advantages`,
		},
		{
			text: t('ourClients'),
			href: `/${locale}#ourClients`,
		},
		{
			text: t('pricing'),
			href: `/${locale}#pricing`,
		},
		{
			text: t('otherProjects'),
			href: `/${locale}#otherProjects`,
		},
		{
			text: t('privacyPolicy'),
			href: `/${locale}/privacy-policy`,
		},
		{
			text: t('termsAndConditions'),
			href: `/${locale}/terms-and-conditions`,
		}
	]

	return (
		<ClientHeader
			transition={{duration: 0.2}}
			className={`fixed z-[999] flex flex-col w-full top-0 backdrop-blur-[8px]`}
			links={links}
		>
			<a
				id="#cpName"
				href={`/${locale}`}
				className="gravitas-one font-bold text-white text-decoration-none"
			>
				DINERO
			</a>
			<div className={styles.lineLinks}>
				{links.map((link, i) =>
					<a
						key={i}
						href={link.href}
						className="geologica text-white text-decoration-none"
					>
						{link.text}
					</a>
				)}
			</div>
		</ClientHeader>
	);
};

export default Header;