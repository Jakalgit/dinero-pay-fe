import "@/styles/pages/Home.css";
import MotionMain from "@/components/client/MotionMain";
import styles from "@/styles/pages/Home.module.css";
import DineroPayments from "@/components/client/DineroPayments/DineroPayments";
import {Container, Row} from "react-bootstrap";
import {getTranslations} from "next-intl/server";
import ArrowIcon from "@/components/icons/ArrowIcon";
import classNames from "classnames";
import {BreakText} from "@/components/BreakText";
import DineroBackground from "@/components/client/DineroBackground";
import RocketLaunchIcon from "@/components/icons/RocketLaunchIcon";
import VerifiedIcon from "@/components/icons/VerifiedIcon";
import countries from "i18n-iso-countries";
import "i18n-iso-countries/langs/en.json";
import {InfiniteScroll} from "@/components/client/InifniteScroll";
import HomeForm from "@/components/client/HomeForm";
import HomeAdvantages from "@/components/client/HomeAdvantages";
import React from "react";
import BallIcon from "@/components/icons/BallIcon";
import GamePadIcon from "@/components/icons/GamePadIcon";
import CurrencyExchangeIcon from "@/components/icons/CurrencyExchangeIcon";
import DineroIcon from "@/components/icons/DineroIcon";
import LoveHeartIcon from "@/components/icons/LoveHeartIcon";
import BitcoinIcon from "@/components/icons/payment-solutions/BitcoinIcon";
import DollarIcon from "@/components/icons/payment-solutions/DollarIcon";
import EuroIcon from "@/components/icons/payment-solutions/EuroIcon";
import MoneyCashIcon from "@/components/icons/payment-solutions/MoneyCashIcon";
import P2PIcon from "@/components/icons/payment-solutions/P2PIcon";
import EthereumIcon from "@/components/icons/payment-solutions/EthereumIcon";
import TetherIcon from "@/components/icons/payment-solutions/TetherIcon";
import PricingForm from "@/components/client/PricingForm";
import CardsIcon from "@/components/icons/CardsIcon";
import {fetchInfo} from "@/http/api/infoApi";

export default async function Home() {

	const t = await getTranslations("HomePage");

	const section1infoBlocks = [
		{
			value: t("section1.infoPart1.value"),
			text: t("section1.infoPart1.text"),
		},
		{
			value: t("section1.infoPart2.value"),
			text: t("section1.infoPart2.text"),
		},
		{
			value: t("section1.infoPart3.value"),
			text: t("section1.infoPart3.text"),
		}
	];

	const section4InfoBlocks = [
		[
			{
				icon: <GamePadIcon />
			},
			{
				icon: <BallIcon />
			},
		],
		[
			{
				icon: <CurrencyExchangeIcon />
			},
			{
				icon: <LoveHeartIcon />
			}
		]
	];

	const section6Links = [
		'https://dinero.casino',
		'https://d-exchange.org',
	];

	let info = null;
	try {
		info = await fetchInfo();
	} catch {}

	const countryBlocks: any[] = info?.countries.map((isoCode: string) => {
		const countryName = countries.getName(isoCode, "en", { select: "official" });

		return {
			name: countryName,
			code: isoCode,
		}
	});

	return (
		<MotionMain className="min-h-screen flex flex-col">
			<section className={`${styles.section1} relative`}>
				<DineroPayments
					wrapperAttrs={{className: `absolute ${styles.dineroLogo}`}}
				/>
				<Container>
					<Row>
						<h2
							style={{ fontWeight: '600' }}
							className={`golos-text text-[color:var(--blue-color-1)] ${styles.firstSectionLargeText}`}
						>
							<BreakText text={t("section1.largeText")}/>
						</h2>
						<p className={`geologica mediumText ${styles.firstSectionMediumText}`}>
							<BreakText text={t("section1.smallText")}/>
						</p>
						<div className={`flex ${styles.section1InfoBlock}`}>
							{section1infoBlocks.map((item, index) =>
								<div
									key={index}
									className={`flex flex-col ${styles.infoBlockItem}`}
								>
									<p
										className="golos-text text-[color:var(--blue-color-1)]"
										style={{ fontWeight: '600'}}
									>
										{item.value}
									</p>
									<p className="geologica">
										{item.text}
									</p>
								</div>
							)}
						</div>
						<div className="flex">
							<a
								href="#form1"
								className={classNames(
									"geologica group flex items-center text-white bg-[color:var(--blue-color-2)]",
									"hover:text-black hover:bg-[color:--gold-color-1] duration-300",
									styles.startButton,
								)}
							>
								{t("section1.startButton")}
								<ArrowIcon
									className={`transition-colors group-hover:fill-black ${styles.startButtonIcon}`}
								/>
							</a>
						</div>
					</Row>
				</Container>
			</section>
			<section className={`w-full relative ${styles.section2}`}>
				<DineroBackground />
				<CardsIcon
					className={`${styles.cardsImage} absolute`}
				/>
				<Container className={`relative ${styles.section2Padding}`}>
					<Row>
						<h2
							id="aboutUs"
							className={"geologica text-white sectionName"}
						>
							{t("section2.name")}
						</h2>
						<div className={styles.section2LargeTextMargin}>
							<p className={"largeText gravitas-one text-white"}>
								DINERO
								<span className="dancing-script">
									&nbsp;Payments
								</span>
							</p>
							<h3 className={"largeText golos-text text-[color:var(--blue-color-1)] font-semibold"}>
								{t("section2.largeText")}
							</h3>
						</div>
						<div className={classNames(styles.section2InfoBlock, "flex items-start")}>
							<VerifiedIcon className="fill-white"/>
							<p className={"mediumText geologica text-white"}>
								{t("section2.infoText1")}
							</p>
						</div>
						<div className={classNames(styles.section2InfoBlock, "flex items-start")}>
							<RocketLaunchIcon className="fill-white"/>
							<p className={"mediumText geologica text-white"}>
								<BreakText text={t("section2.infoText2")}/>
							</p>
						</div>
						{countryBlocks && countryBlocks.length !== 0 && (
							<div className={`flex flex-col ${styles.geographyOfWorkBlock}`}>
								<h3 className={`geologica text-white`}>
									{t("section2.geographyOfWork")}
								</h3>
								<InfiniteScroll items={
									countryBlocks.map((el, i) =>
										<div key={i} className={`flex items-center ${styles.geographyItem}`}>
											<img
												className={styles.geographyItemIcon}
												src={`https://flagcdn.com/${el.code.toLowerCase()}.svg`}
												alt="icon"
											/>
											<p className="geologica text-white">
												{el.name}
											</p>
										</div>
									)
								}/>
							</div>
						)}
						<div className="relative w-full">
							<HomeForm/>
						</div>
					</Row>
				</Container>
			</section>
			<section className={styles.section3}>
				<Container>
					<Row>
						<h2
							id="advantages"
							className={"geologica text-[color:--purple-color-1] sectionName"}
						>
							{t("section3.name")}
						</h2>
						<h3 className={`flex items-center text-[color:--gold-color-1] largeText`}>
              <span className={`geologica font-semibold`}>
                {t("section3.whyPay")}
              </span>
							<span className="gravitas-one">
                DINERO
              </span>
							<span className={`geologica largeText font-semibold`}>
                ?
              </span>
						</h3>
						<HomeAdvantages countries={info?.countries}/>
					</Row>
				</Container>
			</section>
			<section className={styles.section45}>
				<Container>
					<Row>
						<h2
							id="ourClients"
							className="geologica text-[color:--purple-color-1] sectionName"
						>
							{t("section4.name")}
						</h2>
						<div className={`flex ${styles.ibGap} ${styles.blocksWrapper}`}>
							<div className={`grid ${styles.ibGap} ${styles.smallBlocksWrapper}`}>
								{section4InfoBlocks[0].map((block, index) =>
									<div
										key={index}
										className={`flex items-start bg-[color:var(--blue-color-5)] ${styles.ibGap}
                      ${styles.pdSmallIb} ${styles.section4InfoBlock}`
										}
									>
										{React.cloneElement(block.icon, {style: {flexShrink: 0}})}
										<div className={`flex flex-col ${styles.section4InfoBlock}`}>
											<h3 className="golos-text text-[color:var(--blue-color-1)] font-semibold">
												{t(`section4.block${index + 1}.head`)}
											</h3>
											<p className="geologica">
												{t(`section4.block${index + 1}.description`)}
											</p>
										</div>
									</div>
								)}
							</div>
							<div className={`flex bg-[color:var(--blue-color-5)] ${styles.pdLargeIb} ${styles.section4InfoBlock}`}>
								<a href={"https://dinero.casino"}><DineroIcon/></a>
								<div>
									<h3 className="golos-text text-[color:var(--blue-color-1)] font-semibold">
										{t("section4.block3.head")}
									</h3>
									<p className="geologica">
										{t("section4.block3.description")}
									</p>
								</div>
							</div>
							<div className={`grid ${styles.ibGap} ${styles.smallBlocksWrapper}`}>
								{section4InfoBlocks[1].map((block, index) =>
									<div
										key={index}
										className={`flex items-start bg-[color:var(--blue-color-5)] ${styles.ibGap}
                      ${styles.pdSmallIb} ${styles.section4InfoBlock}`
										}
									>
										{React.cloneElement(block.icon, {style: {flexShrink: 0}})}
										<div className={`flex flex-col ${styles.section4InfoBlock}`}>
											<h3 className="golos-text text-[color:var(--blue-color-1)] font-semibold">
												{t(`section4.block${index + 4}.head`)}
											</h3>
											<p className="geologica text-[color:--purple-color-1]">
												{t(`section4.block${index + 4}.description`)}
											</p>
										</div>
									</div>
								)}
							</div>
						</div>
					</Row>
				</Container>
			</section>
			<section className={`flex flex-col items-center ${styles.section45}`}>
				<Container>
					<div className={`flex flex-col`}>
						<h2
							id="pricing"
							className={`golos-text text-[color:var(--blue-color-1)] largeText font-semibold text-center`}
						>
							{t("section5.paymentSolutions")}
							<span className="gravitas-one whitespace-nowrap text-white">
								&nbsp;DINERO
							</span>
						</h2>
						<p className={`geologica text-[color:--purple-color-1] sectionName text-center`}>
							<BreakText text={t("section5.solutionsDescription")}/>
						</p>
						<div className={`flex justify-center ${styles.paymentSolutionsBlock}`}>
							<BitcoinIcon/>
							<TetherIcon/>
							<EthereumIcon/>
							<DollarIcon/>
							<EuroIcon/>
							<MoneyCashIcon/>
							<P2PIcon/>
						</div>
					</div>
					<PricingForm currencySolutions={info?.currencySolutions}/>
				</Container>
			</section>
			<section className={styles.section45}>
				<Container>
					<h2
						id="otherProjects"
						className="geologica text-[color:--purple-color-1] sectionName"
					>
						{t("section6.name")}
						<span className="gravitas-one inline-flex items-center">
							&nbsp;DINERO
							<DineroIcon className={styles.dineroIcon} />
						</span>
					</h2>
					<div className={`flex flex-col ${styles.section6BlocksWrapper}`}>
						{section6Links.map((link, index) =>
							<div
								className={`flex flex-col !border border-[color:var(--blue-color-3)] bg-[color:var(--dark-color-1)] ${styles.projectDescriptionBlock}`}
								key={index}
							>
								<h3 className="dancing-script">
									{t(`section6.block${index + 1}.head`)}
								</h3>
								<p className="geologica">
									{t.rich(`section6.block${index + 1}.text`, {
										brand: (chunks) => (
											<span className="gravitas-one">{chunks}</span>
										),
										sub: (chunks) => (
											<span className="dancing-script">{chunks}</span>
										)
									})}
								</p>
								<div className="flex">
									<a
										href={link}
										className="flex items-center justify-center geologica ml-auto text-white bg-[color:var(--dark-color-1)]
										!border border-[color:var(--blue-color-2)] hover:bg-[color:var(--blue-color-2)] duration-300"
										title={t("section6.buttonLook.title")}
										aria-label={t("section6.buttonLook.ariaLabel")}
									>
										{t("section6.buttonLook.title")}
										<ArrowIcon />
									</a>
								</div>
							</div>
						)}
					</div>
				</Container>
			</section>
		</MotionMain>
	)
}