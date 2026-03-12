<script>
	import { icons, iframes } from "$lib";
	import { page } from "$app/state";
	import Fa from "svelte-fa";
</script>

<nav>
	{#each iframes as iframe}
		<a href="/{iframe.id}" class:active={page.url.pathname === `/${iframe.id}`}>
			<Fa icon={icons[iframe.icon]} />
			{iframe.label}
		</a>
	{/each}
</nav>

<style lang="scss">
	nav {
		display: flex;
		padding: 10px;
	}

	a {
		transition: background-color 250ms ease;
		color: inherit;
		font-size: 20px;
		border-radius: 10px;
		border: 3px solid #c6a0f6;
		padding: 10px 15px;

		&:hover,
		&.active {
			background-color: #c6a0f6;
		}
	}
</style>
