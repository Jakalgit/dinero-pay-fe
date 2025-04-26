"use client"
import React from 'react';
import stylesBlock from "@/styles/components/advantages-block/Advantages.module.css";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import {useTranslations} from "next-intl";
import { whereNumeric } from "iso-3166-1";

interface GeoProps {
	isoCodes: string[];
}

const Geo: React.FC<GeoProps> = ({ isoCodes }) => {
	countries.registerLocale(enLocale);

	const t = useTranslations('HomePage.section3.menuItems.i6');

	const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json";

	return (
		<div className={`flex flex-col bg-[color:var(--dark-color-1)] ${stylesBlock.descriptionBlock}`}>
			<h4 className={`golos-text text-[color:var(--blue-color-1)] font-semibold ${stylesBlock.largeText}`}>
				{t("head")}
			</h4>
			<p className={`geologica text-white ${stylesBlock.smallText}`}>
				{t('text')}
			</p>
			{isoCodes && (
				<ComposableMap projection="geoMercator" projectionConfig={{ scale: 147 }}>
					<Geographies geography={geoUrl}>
						{({ geographies }) =>
							geographies.map((geo) => {
								const isoA2 = whereNumeric(geo.id)?.alpha2;
								const isInclude = isoCodes.includes(isoA2 as string);

								return (
									<React.Fragment key={geo.rsmKey}>
										<Geography
											geography={geo}
											style={{
												default: { fill: isInclude ? "var(--blue-color-1)" : "var(--blue-color-3)" , stroke: "#FFF", strokeWidth: 0.75 },
												hover: { fill: "#F53", cursor: "pointer" },
												pressed: { fill: "#E42" },
											}}
										/>
									</React.Fragment>
								);
							})
						}
					</Geographies>
				</ComposableMap>
			)}
		</div>
	);
};

export default Geo;