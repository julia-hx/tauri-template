<script lang="ts">
	import AccentColorPicker from '../../components/AccentColorPicker.svelte';
	import FolderPicker from '../../components/FolderPicker.svelte';
	import { _storeDefaultFilepath } from './+page';
	import { defaultFilePath } from '../../globals.svelte';
</script>

<div class="flex justify-center items-center flex-col">
	<div class="text-3xl font-sans flex flex-row">
		settings
	</div>

	<p class="mt-2 mb-4">
		User configuration for this app.
	</p>

	<div class="text-lg font-sans flex flex-row">
		accent color
	</div>

	<AccentColorPicker/>

	<div class="text-lg font-sans flex flex-row mt-2">
		default file path
	</div>

	<FolderPicker pathState={defaultFilePath} onPathStateChanged={() => {
		_storeDefaultFilepath(defaultFilePath.path);
	}}/>
</div>
