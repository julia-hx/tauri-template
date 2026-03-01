<script>
	let { children } = $props();
	import Header from "../components/Header.svelte";
	import { uiMode, getAccentColorAsString} from "../globals.svelte";
	import Footer from "../components/Footer.svelte";
	import "../app.css"

	/** @type {HTMLElement} */
	let main;

	$effect(() => {
		let color = getAccentColorAsString();
		let darkMode = uiMode.isDarkMode ? "dark" : "";
		main.className = color + " " + darkMode
	});
</script>

<main class="" bind:this={main}>
	<div class="min-h-screen flex flex-col text-black bg-white dark:text-gray-100 dark:bg-gray-950">
		<div class="header bg-white dark:bg-gray-950 pb-2">
			<Header/>
		</div>
		

		<div class="grow">
			{@render children()}
		</div>
		
		<div class="footer bg-white dark:bg-gray-950">
			<Footer/>
		</div>
	</div>
</main>

<style>
	.header {
		position: sticky;
		top: 0;
	}
	.footer {
		position: sticky;
		bottom: 0;
	}
</style>
