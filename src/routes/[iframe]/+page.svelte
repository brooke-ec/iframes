<script lang="ts">
	import { PUBLIC_TITLE } from "$env/static/public";

	let { data } = $props();
</script>

<svelte:head>
	<title>{PUBLIC_TITLE} - {data.iframe.label}</title>
</svelte:head>
