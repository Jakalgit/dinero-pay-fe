import {$host} from "@/http";

type sendRequestResponse = {
	success: boolean,
}

export const sendRequest = async (projectName: string, identifier: string, requestType: string): Promise<sendRequestResponse> => {
	const {data} = await $host.post(
		`/request/send`,
		{projectName, identifier, requestType},
	);
	return data;
}