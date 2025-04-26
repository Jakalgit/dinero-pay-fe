import {defineRouting} from "next-intl/routing";
import {LOCALES} from "@/consts";
import {createNavigation} from "next-intl/navigation";

export const routing = defineRouting({
	locales: LOCALES,
	defaultLocale: "en",
});

export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);