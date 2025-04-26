import {$host} from "@/http";

export const fetchInfo = async () => {
	const {data} = await $host.get(`/site-info/all`);
	return data;
}