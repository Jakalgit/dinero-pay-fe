import React from 'react';
import DocumentPage from "@/components/client/DocumentPage";

export default async function Page() {
	const numberOfBlocks = 9;

	return (
		<DocumentPage
			pageRoute={"/en/privacy-policy"}
			numberOfBlocks={numberOfBlocks}
			translation={'PrivacyPolicyPage'}
		/>
	);
};