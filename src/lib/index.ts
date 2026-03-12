import * as fortawesome from "@fortawesome/free-solid-svg-icons";
import { PUBLIC_IFRAMES } from "$env/static/public";
import kebabCase from "kebab-case";

export const iframes = PUBLIC_IFRAMES.split(";").map((iframe) => {
	const [icon, label, url] = iframe.split(",");
	return { icon, label, url, id: kebabCase(label) } as Iframe;
});

export interface Iframe {
	icon: keyof typeof icons;
	label: string;
	url: string;
	id: string;
}

export const icons = Object.fromEntries(
	Object.entries(fortawesome).filter(
		(entry): entry is [string, fortawesome.IconDefinition] =>
			typeof entry[1] === "object" && "iconName" in entry[1] && "icon" in entry[1],
	),
);
