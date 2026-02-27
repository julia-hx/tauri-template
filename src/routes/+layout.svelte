<script>
	let { children } = $props();
	import Header from "../components/Header.svelte";
	import { uiMode } from "../globals.svelte";
	import Footer from "../components/Footer.svelte";
	import "../app.css"

	/** @type {HTMLElement} */
	let main;

	$effect(() => {	
		if(uiMode.isDarkMode) {
			main.className = "dark";
		} else {
			main.className = "";
		}
	});
</script>

<main class="" bind:this={main}>
	<div class="min-h-screen flex flex-col text-black bg-white dark:text-gray-100 dark:bg-gray-950">
		<Header></Header>

		<div class="grow p-4">
			{@render children()}
		</div>
		
		<Footer></Footer>
	</div>
</main>
