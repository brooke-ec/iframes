<script lang="ts">
	import { PUBLIC_TITLE } from "$env/static/public";

	let { data } = $props();
</script>

<svelte:head>
	<title>{PUBLIC_TITLE} - {data.iframe.label}</title>
</svelte:head>

<iframe src={data.iframe.url} title={data.iframe.label}></iframe>

<style lang="scss">
	iframe {
		border: none;
		height: 100%;
		width: 100%;
	}
</style>
