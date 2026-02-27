<script>
	import { uiMode, IconType } from "../globals.svelte.js";
	import Icon from "./Icon.svelte";

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
			<div bind:this={sunIcon}>
				<Icon type={IconType.Sun} offset="-4" size="32"/>
			</div>
		</div>
		<div id="uimode-icon">
			<div bind:this={moonIcon}>
				<Icon type={IconType.Moon} offset="-4" size="32"/>
			</div>
		</div>
	</button>
</div>

<style>
	#uimode-toggle {
		border-radius: 20px;
		width: 24px;
		height: 24px;
		padding: 0px;
	}

	#uimode-icon {
		margin: 0px;
	}
</style>
