import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { iframes } from "$lib";

export const load: PageLoad = async () => {
	redirect(301, `/${iframes[0].id}`);
};
