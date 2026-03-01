<script>
	import { invoke } from "@tauri-apps/api/core";
	import Icon from "../components/Icon.svelte";
	import { IconType } from "../globals.svelte";

	let message = $state("Hello world!");

	async function printTestMessage() {
		console.log(message);
		await invoke("print_message", { message });
	}
</script>

<div class="flex justify-center items-center flex-col">
	<span class="text-3xl font-sans">
		hexing tauri
	</span>

	<div class="mt-2 flex flex-col justify-center items-center">
		<p>An app  template for Tauri / Svelte / Tailwind,</p>
		<p>using Rust backend and web frontend.</p>
	</div>

	<form class="flex space-x-1.5 mt-2" onsubmit={printTestMessage}>
		<input bind:value={message}/>
		<button type="submit">Print</button>
	</form>
</div>
