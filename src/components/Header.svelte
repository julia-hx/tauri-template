<script>
	import { Icon, Sun, Moon } from "svelte-hero-icons";
	import { uiMode } from "../globals.svelte.js";

	/** @type {HTMLElement} */
	let moonIcon;
	/** @type {HTMLElement} */
	let sunIcon;

	function toggleDarkMode() {
		uiMode.isDarkMode = !uiMode.isDarkMode;
		console.log("mode toggle");
	}

	$effect(() => {
		moonIcon.hidden = uiMode.isDarkMode;
		sunIcon.hidden = !uiMode.isDarkMode;	
	});
</script>

<div class="flex mt-2 justify-center">
	<nav class="mr-2 mt-0.5">
		<a href="/">home</a>
		<a href="/about">about</a>
	</nav>
	<button id="uimode-toggle" onclick={toggleDarkMode}>
		<div id="uimode-icon">
			<div bind:this={sunIcon}><Icon src={Sun} id="sun" ></Icon></div>
			<div bind:this={moonIcon}><Icon src={Moon} id="moon"></Icon></div>
		</div>
	</button>
</div>

<style>
	#uimode-toggle {
		border-radius: 20px;
		width: 24px;
		height: 24px;
	}

	#uimode-icon {
		width: 18px;
		height: 18px;
		margin-left: -5px;
		margin-top: -1px;
	}
</style>
