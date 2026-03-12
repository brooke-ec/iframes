<script lang="ts">
	import { fade } from "svelte/transition";
	import { icons, iframes } from "$lib";
	import { page } from "$app/state";
	import { watch } from "runed";
	import Fa from "svelte-fa";
	import { onNavigate } from "$app/navigation";
	import { PUBLIC_EXTRA_URL } from "$env/static/public";
	import { browser } from "$app/environment";

	let navbarWidth: number = $state(0);
	let windowWidth: number = $state(0);
	let mobile: boolean = $state(false);
	let open = $state(false);

	onNavigate(() => {
		open = false;
	});

	watch(
		() => windowWidth,
		() => {
			mobile = false;
			requestAnimationFrame(() => {
				mobile = windowWidth < navbarWidth;
			});
		},
	);
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#if mobile}
	<button class="hamburger" onclick={() => (open = !open)}>
		<Fa icon={icons.faBars} />
	</button>
{/if}

{#if !mobile || open}
	<nav bind:clientWidth={navbarWidth} class:mobile transition:fade={{ duration: 125 }}>
		{#each iframes as iframe}
			<a href="/{iframe.id}" class:active={page.url.pathname === `/${iframe.id}`}>
				<Fa icon={icons[iframe.icon]} />
				{iframe.label}
			</a>
		{/each}
		{#if PUBLIC_EXTRA_URL && !mobile && browser}
			{#await fetch(PUBLIC_EXTRA_URL) then response}
				{#await response.text() then text}
					<div class="extra">{text}</div>
				{/await}
			{/await}
		{/if}
	</nav>
{/if}

<style lang="scss">
	nav {
		min-width: fit-content;
		align-items: center;
		display: flex;
		padding: 10px;
		width: 100%;
		gap: 10px;
	}

	nav.mobile {
		background-color: var(--bg);
		flex-direction: column;
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0px;
		top: 0px;

		& > a {
			border: none;
			width: calc(100% - 60px);
		}
	}

	.hamburger {
		aspect-ratio: 1 / 1;
		position: absolute;
		z-index: 10;
		right: 10px;
		top: 10px;
	}

	.extra {
		padding-right: 10px;
		margin-left: auto;
	}
</style>
