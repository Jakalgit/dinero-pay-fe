"use client";
import React, {useState} from 'react';
import styles from "@/styles/components/HomeForm.module.css";
import stylesInput from "@/styles/components/Input.module.css";
import Input from "@/components/Input";
import {useTranslations} from "next-intl";
import SelectList from "@/components/client/SelectList";
import ArrowIcon from "@/components/icons/ArrowIcon";
import {sendRequest} from "@/http/api/sendingApi";
// import {sendRequest} from "@/http/api/sendingApi";

const HomeForm = () => {

	const t = useTranslations('HomePage');

	const types = [
		{ id: 1, name: t("form.connectionType") },
		{ id: 2, name: t("form.partnershipType") },
		{ id: 3, name: t("form.consultationType") },
		{ id: 4, name: t("form.employmentType") },
		{ id: 5, name: t("form.otherType") },
	];

	const [projectName, setProjectName] = useState<string>("");
	const [identifier, setIdentifier] = useState<string>("");
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

		if (result?.success) {
			setProjectName("");
			setIdentifier("");
			setType(types[0]);
			alert("Successfully");
		} else {
			alert("Service unavailable, try again later");
		}
	}

	return (
		<div
			id="form1"
			className={`absolute z-10 flex flex-col justify-between ${styles.startForm} bg-[color:--purple-color-3] 
                !border border-[color:var(--blue-color-4)]`}
			style={{ backdropFilter: "blur(10px)" }}
		>
			<h3 className={`geologica text-white font-semibold text-center ${styles.formName}`}>
				{t("section2.formName")}
			</h3>
			<div className={`flex ${styles.inputs}`}>
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
				<button
					onClick={sendRequestData}
					className={`flex items-center justify-center text-white geologica bg-[color:var(--blue-color-2)] hover:brightness-[85%] duration-300 transition-all
					${styles.button} ${stylesInput.wrapper}`}
					style={{ outline: "none", border: "none" }}
				>
					{t("form.submitApplication")}
					<ArrowIcon />
				</button>
			</div>
		</div>
	);
};

export default HomeForm;