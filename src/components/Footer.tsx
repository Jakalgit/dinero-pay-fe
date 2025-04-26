import React from 'react';
import styles from "@/styles/components/Footer.module.css";
import {Container} from "react-bootstrap";
import {BreakText} from "@/components/BreakText";
import TelegramIcon from "@/components/icons/TelegramIcon";
import MailIcon from "@/components/icons/MailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import Link from "next/link";
import "@/styles/globals.css";
import {getLocale, getTranslations} from "next-intl/server";

interface FooterProps {
	contacts: {
		telegramAccount: string,
		contactEmail: string,
		address: string,
	}
}

const Footer: React.FC<FooterProps> = async ({contacts}) => {

	const linksT = await getTranslations('routingLinks');
	const t = await getTranslations('footer');
	const locale = await getLocale();

	const links = [
		{
			text: linksT("aboutUs"),
			href: `/${locale}#aboutUs`,
		},
		{
			text: linksT("advantages"),
			href: `/${locale}#advantages`,
		},
		{
			text: linksT("ourClients"),
			href: `/${locale}#ourClients`,
		},
		{
			text: linksT("pricing"),
			href: `/${locale}#pricing`,
		},
		{
			text: linksT("otherProjects"),
			href: `/${locale}#otherProjects`,
		}
	]

	return (
		<footer className={`flex flex-col bg-[color:var(--dark-color-1)] ${styles.footer}`}>
			<div className={`flex items-center border-b border-b-[color:var(--blue-color-3)] ${styles.footerLine}`}>
				<Container className={`flex justify-between ${styles.footerLineContainer}`}>
					<p className={`gravitas-one font-bold ${styles.name}`}>
						DINERO
						<span className="dancing-script">
							&nbsp;Payments
						</span>
					</p>
					<div className={`flex items-center ${styles.links}`}>
						{links.map(link =>
							<a
								key={link.href}
								href={link.href}
								className="geologica text-white"
							>
								{link.text}
							</a>
						)}
					</div>
				</Container>
			</div>
			<Container>
				<div className={`flex ${styles.middleLine}`}>
					<div className={styles.leftMiddle}>
						<p
							style={{ fontWeight: '600' }}
							className={`golos-text text-[color:var(--blue-color-1)] largeText`}
						>
							<BreakText text={t('largeText')} />
						</p>
						<p className={`geologica ${styles.smallText}`}>
							<span className={`gravitas-one font-semibold`}>
								DINERO
								<span className="dancing-script">&nbsp;Payments&nbsp;</span>
							</span>
							{t("smallText")}
						</p>
					</div>
					<div className={`flex items-center flex-1 ${styles.rightMiddle}`}>
						<div className={`grid w-full ${styles.contacts}`}>
							<a
								className={`flex items-center bg-[color:var(--blue-color-5)] !border border-[color:var(--blue-color-3)] 
									text-white ${styles.firstContact} ${styles.contactBlock}`}
								href={`https://t.me/${contacts?.telegramAccount.replace('@', '')}`}
								target="_blank"
							>
								<TelegramIcon/>
								<div className="geologica flex flex-col justify-between min-w-0">
									<p className={`text-white-50 ${styles.smallContactText}`}>
										Connect
									</p>
									<p className={styles.largeContactText}>
										{contacts?.telegramAccount}
									</p>
								</div>
							</a>
							<a
								className={`flex items-center bg-[color:var(--blue-color-5)] !border border-[color:var(--blue-color-3)] 
									text-white ${styles.secondContact} ${styles.contactBlock}`}
								href={`mailto:${contacts?.contactEmail}`}
							>
								<MailIcon/>
								<div className="geologica flex flex-col justify-between min-w-0">
									<p className={`text-white-50 ${styles.smallContactText}`}>
										Connect
									</p>
									<p className={styles.largeContactText}>
										{contacts?.contactEmail}
									</p>
								</div>
							</a>
							<div
								className={`flex items-center bg-[color:var(--blue-color-5)] !border border-[color:var(--blue-color-3)] 
									${styles.thirdContact} ${styles.contactBlock}`}
							>
								<MailIcon/>
								<div className="geologica flex flex-col justify-between min-w-0">
									<p className={`text-white-50 ${styles.smallContactText}`}>
										Address
									</p>
									<p className={styles.largeContactText}>
										{contacts?.address}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<div className={`flex items-center border-t border-t-[color:var(--blue-color-3)] ${styles.footerLine} ${styles.bottomLine}`}>
				<Container className={`flex items-center ${styles.description}`}>
					<p className={`geologica`}>
						© 2025&nbsp;
						<span className="gravitas-one font-semibold">
							DINERO
						</span>
						&nbsp;- All rights reserved.
					</p>
					<Link
						href={`/${locale}/privacy-policy`}
						className="geologica text-white"
					>
						{linksT("privacyPolicy")}
					</Link>
					<Link
						href={`/${locale}/terms-and-conditions`}
						className="geologica text-white"
					>
						{linksT("termsAndConditions")}
					</Link>
					<div className="ml-auto">
						<button className={`flex items-center geologica text-white bg-transparent border-none ${styles.langButton}`}>
							<LocationIcon />
							English
						</button>
					</div>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;