import React from "react";
import DocumentPage from "@/components/client/DocumentPage";
import "@/styles/globals.css";

export default async function Page() {
	const numberOfBlocks = 14;

	return (
		<DocumentPage
			pageRoute={"/en/terms-and-conditions"}
			numberOfBlocks={numberOfBlocks}
			translation={'TermsAndConditionsPage'}
		/>
	)
}