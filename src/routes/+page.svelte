<script>
	import { invoke } from "@tauri-apps/api/core";

	let message = $state("Hello world!");

	async function printTestMessage() {
		await invoke("print_message", { message });
	}
</script>

<div class="flex justify-center items-center flex-col">
	<span class="text-2xl font-sans">Tauri Template</span>
	<form class="flex space-x-1.5 mt-2" onsubmit={printTestMessage}>
		<input bind:value={message}/>
		<button type="submit">Print</button>
	</form>
</div>
