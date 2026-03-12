<script lang="ts">
	import Navbar from "./Navbar.svelte";

	import "greset";
	import "$lib/style.scss";

	let { children } = $props();
</script>

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
