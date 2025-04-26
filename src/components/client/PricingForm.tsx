"use client";

import React, {useState} from 'react';
import styles from "@/styles/components/PricingForm.module.css"
import stylesHome from "@/styles/pages/Home.module.css";
import {useTranslations} from "next-intl";
import Input from "@/components/Input";
import SelectList from "@/components/client/SelectList";
import classNames from "classnames";
import ArrowIcon from "@/components/icons/ArrowIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import {sendRequest} from "@/http/api/sendingApi";

interface IProps {
	currencySolutions: {
		currency: string;
		tariff: string;
		minMaxPayIn: string;
		minMaxPayOut: string;
		trafficType: string;
		settlementUSDT: string;
		settlementPeriod: string;
		methods: string;
	}[];
}

const PricingForm: React.FC<IProps> = ({ currencySolutions }) => {

	const t = useTranslations('HomePage');

	const types = [
		{ id: 1, name: t("form.connectionType") },
		{ id: 2, name: t("form.partnershipType") },
		{ id: 3, name: t("form.consultationType") },
		{ id: 4, name: t("form.employmentType") },
		{ id: 5, name: t("form.otherType") },
	];

	const tableColumn: {name: string, fieldName: string}[] = [
		{
			name: t("section5.pricingTable.tariff"),
			fieldName: 'tariff',
		},
		{
			name: t("section5.pricingTable.minMaxPayIn"),
			fieldName: 'minMaxPayIn',
		},
		{
			name: t("section5.pricingTable.minMaxPayOut"),
			fieldName: 'minMaxPayOut',
		},
		{
			name: t("section5.pricingTable.trafficType"),
			fieldName: 'trafficType',
		},
		{
			name: t("section5.pricingTable.settlementUsdt"),
			fieldName: 'settlementUSDT',
		},
		{
			name: t("section5.pricingTable.settlementPeriod"),
			fieldName: 'settlementPeriod',
		},
		{
			name: t("section5.pricingTable.methods"),
			fieldName: 'methods',
		},
	];

	const [projectName, setProjectName] = useState("");
	const [identifier, setIdentifier] = useState("");
	const [type, setType] = useState(types[0]);

	const setTypeValue = (id: string | number) => {
		const _type = types.find(e => e.id === id) || types[0];

		setType(_type);
	}

	const sendRequestData = async () => {
		if (projectName.length < 2 || identifier.length < 2) {
			alert("Project name and identifier must be at least 2 characters long");
			return;
		}

		const result = await sendRequest(projectName, identifier, type.name.toLowerCase());

		if (result.success) {
			setProjectName("");
			setIdentifier("");
			setType(types[0]);
			alert("Successfully");
		} else {
			alert("Service unavailable, try again later");
		}
	}

	return (
		<div className={`relative flex ${styles.tariffsBlock}`}>
			<div
				style={{zIndex: 0}}
				className={`absolute left-0 top-0 w-full h-full ${styles.tariffsBlockBackground}`}
			/>
			<div className={`flex flex-col ${styles.left}`} style={{zIndex: 1}}>
				<h3
					style={{ fontWeight: '600' }}
					className={`golos-text text-[color:var(--blue-color-1)] ${styles.pricingHeadText}`}
				>
					{t("section5.pricing")}
				</h3>
				<div
					className={`flex flex-col ${styles.inputs}`}
					style={{ zIndex: 2 }}
				>
					<Input
						inputAttributes={{
							type: "text",
							value: projectName,
							onChange: (e) => setProjectName(e.target.value),
							placeholder: t("form.projectNamePlaceholder"),
						}}
					/>
					<Input
						inputAttributes={{
							type: "text",
							value: identifier,
							onChange: (e) => setIdentifier(e.target.value),
							placeholder: t("form.identifierPlaceholder"),
						}}
					/>
					<SelectList
						setValue={setTypeValue}
						selectedValue={type.name}
						items={types}
					/>
				</div>
				<div>
					<button
						onClick={sendRequestData}
						className={classNames(
							"geologica group flex items-center text-white bg-[color:var(--blue-color-2)] border-none",
							stylesHome.startButton, styles.startButton
						)}
					>
						{t("form.submitApplication")}
						<ArrowIcon
							className={classNames(
								"transition-colors fill-[color:--gold-color-1] group-hover:fill-black",
								stylesHome.startButtonIcon,
							)}
						/>
					</button>
				</div>
			</div>
			<div
				className={`flex items-center justify-end ${styles.right}`}
				style={{zIndex: 0}}
			>
				<div className={`!border border-[color:var(--blue-color-3)] bg-[color:var(--dark-color-1)] ${styles.tableContainer}`}>
					<table className={`geologica text-white ${styles.fixedHeaderTable}`}>
						<thead>
							<tr className="flex">
								<th className={styles.fixedColumn}>
									<LocationIcon className="fill-white"/>
									GEO
								</th>
								{currencySolutions?.map((item, i) =>
									<th key={i}>{item.currency}</th>
								)}
							</tr>
						</thead>
						<tbody>
						{tableColumn.map((row, index) => (
							<tr key={index} style={{display: "inline-flex"}}>
								<td className={styles.fixedColumn}>{row.name}</td>
								{currencySolutions?.map((item: { [key: string]: string }, i) =>
									<td key={`td_${i}`}>
										{item[row.fieldName]}
									</td>
								)}
								{currencySolutions?.length < 6 && (
									<>
										{Array(5 - currencySolutions?.length || 0).fill(0).map((_, i) =>
											<td key={`td_1_${i}`}></td>
										)}
									</>
								)}
							</tr>
						))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default PricingForm;