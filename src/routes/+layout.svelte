<script lang="ts">
	import Navbar from "./Navbar.svelte";
	import { iframes } from "$lib";
	import { page } from "$app/state";
	import "greset";
	import "$lib/style.scss";

	let { children } = $props();
	let loadedIframes = $state<Record<string, true>>({});

	$effect(() => {
		const activeIframeId = page.url.pathname.slice(1);
		if (activeIframeId.length > 0) {
			loadedIframes[activeIframeId] = true;
		}
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

<main>
	<Navbar />

	{#each iframes as iframe}
		{#if loadedIframes[iframe.id] || page.url.pathname === `/${iframe.id}`}
			<iframe
				src={iframe.url}
				title={iframe.label}
				style:display={page.url.pathname === `/${iframe.id}` ? "block" : "none"}
			></iframe>
		{/if}
	{/each}

	{@render children()}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		height: 100vh;
	}

	iframe {
		border: none;
		flex: 1;
		width: 100%;
	}
</style>
