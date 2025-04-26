"use client";

import React from 'react';
import styles from "@/styles/components/HomeAdvantages.module.css"
import {useTranslations} from "next-intl";
import {BreakText} from "@/components/BreakText";
import ArrowIcon from "@/components/icons/ArrowIcon";
import ApiIntegration from "@/components/client/advantages-block/ApiIntegration";
import CustomizablePayment from "@/components/client/advantages-block/CustomizablePayment";
import PersonalAccount from "@/components/client/advantages-block/PersonalAccount";
import SupportBot from "@/components/client/advantages-block/SupportBot";
import Conversion from "@/components/client/advantages-block/Conversion";
import Geo from "@/components/client/advantages-block/Geo";
import {motion} from "framer-motion";

interface IProps {
	countries: string[];
}

export const HomeAdvantages: React.FC<IProps> = ({ countries }) => {

	const t = useTranslations('HomePage.section3');

	const [selectedBlock, setSelectedBlock] = React.useState<number | null>(null);

	const blocks = [
		{
			id: 1,
			name: t("blocks.b1"),
			imgTop: 10,
			block: <CustomizablePayment />,
			classNameBlock: styles.b1,
			classNameSquare: styles.s1
		},
		{
			id: 2,
			name: t("blocks.b2"),
			imgTop: 18,
			block: <ApiIntegration />,
			classNameBlock: styles.b2,
			classNameSquare: styles.s2
		},
		{
			id: 3,
			name: t("blocks.b3"),
			imgTop: 23,
			block: <PersonalAccount />,
			classNameBlock: styles.b3,
			classNameSquare: styles.s3
		},
		{
			id: 4,
			name: t("blocks.b4"),
			imgTop: 0,
			block: <Conversion />,
			classNameBlock: styles.b4,
			classNameSquare: styles.s4
		},
		{
			id: 5,
			name: t("blocks.b5"),
			imgTop: 4,
			block: <SupportBot />,
			classNameBlock: styles.b5,
			classNameSquare: styles.s5
		},
		{
			id: 6,
			name: t("blocks.b6"),
			imgTop: 8,
			block: <Geo isoCodes={countries} />,
			classNameBlock: styles.b6,
			classNameSquare: styles.s6
		}
	];

	const expand = (id: number) => {
		if (id === selectedBlock)
			setSelectedBlock(null);
		else
			setSelectedBlock(id);
	}

	return (
		<>
			<div className={`grid ${styles.advantagesWrapper}`}>
				{blocks.map(({id, name, imgTop, block, classNameBlock, classNameSquare}) =>
					<React.Fragment key={id}>
						<div className={`flex relative overflow-hidden bg-[color:var(--blue-color-5)] ${styles.block} ${classNameSquare}`}>
							<img
								src={`/advantages/${id}.png`}
								alt={`advantages-${id}-icon`}
								style={{top: `${imgTop}%`}}
								className={`absolute left-0 w-full opacity-20 z-0`}
							/>
							<div className="flex flex-col items-center w-full z-1">
								<h4 className={`geologica text-[color:--purple-color-1]`}>
									<BreakText text={name}/>
								</h4>
								<div className="flex justify-center">
									<button
										className={`flex items-center geologica text-[color:var(--blue-color-1)] duration-300 hover:text-white bg-transparent
										border-none group ${styles.buttonFontSize} ${styles.buttonConnect}`}
									>
										{t("connect")}
										<ArrowIcon
											style={{ fill: 'var(--blue-color-1)' }}
											className="transition-colors duration-300 roup-hover:fill-white"
										/>
									</button>
								</div>
								<div className="flex justify-center mt-auto">
									<button
										onClick={() => expand(id)}
										className={`flex items-center geologica text-white bg-[color:var(--blue-color-2)] border-none
											duration-300 group ${styles.buttonFontSize} ${styles.buttonExpand}`}
									>
										{t("expand")}
										<ArrowIcon
											style={{transform: `rotate(${selectedBlock === id ? 90 : 0}deg)`}}
											className="group-hover:fill-black duration-300 fill-[color:--purple-color-1]"
										/>
									</button>
								</div>
							</div>
						</div>
						<motion.div
							className={classNameBlock}
							style={{ gridColumn: '1 / -1', overflow: 'hidden'}}
							initial={{ opacity: 0, height: 0 }}
							animate={selectedBlock === id ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
						>
							{block}
						</motion.div>
					</React.Fragment>
				)}
			</div>
		</>
	);
};

export default HomeAdvantages;