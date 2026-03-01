<script lang="ts">
	import { AccentColor } from '../../globals.svelte';
	import AccentColorPicker from '../../components/AccentColorPicker.svelte';
</script>

<div class="flex justify-center items-center flex-col">
	<div class="text-3xl font-sans flex flex-row">
		settings
	</div>

	<p class="mt-2 mb-4">
		User configuration for this app.
	</p>

	<div class="text-2xl font-sans flex flex-row">
		accent color
	</div>

	<AccentColorPicker/>

	<div class="text-2xl font-sans flex flex-row">
		default file path
	</div>
	
</div>