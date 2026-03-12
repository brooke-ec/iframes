import { iframes } from "$lib";
import { error } from "@sveltejs/kit";
import type { EntryGenerator, PageLoad } from "./$types";

export const entries: EntryGenerator = () => iframes.map(({ id }) => ({ iframe: id }));

export const load: PageLoad = async ({ params }) => {
	const iframe = iframes.find((i) => i.id === params.iframe);
	if (iframe === undefined) error(404, "Iframe not found");
	return { iframe };
};
