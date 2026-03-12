import { iframes } from "$lib";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "../$types";

export const load: PageLoad = async ({ params }) => {
	const iframe = iframes.find((i) => i.id === params.iframe);
	if (iframe === undefined) error(404, "Iframe not found");
	return { iframe };
};
