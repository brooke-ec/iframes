<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import Navbar from "./Navbar.svelte";

	import "greset";
	import "$lib/style.scss";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	<Navbar />

	{@render children()}
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		height: 100vh;
	}
</style>
