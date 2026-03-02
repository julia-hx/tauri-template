<script lang="ts">
	import AccentColorPicker from '../../components/AccentColorPicker.svelte';
	import FolderPicker from '../../components/FolderPicker.svelte';
	import { _storeDefaultFilepath } from './+page';
	import { defaultFilePath } from '../../globals.svelte';
</script>

<div class="flex justify-center items-center flex-col">
	<div class="text-3xl font-sans flex flex-row mb-1">
		settings
	</div>

	<div class="flex flex-col space-y-2 justify-center items-center">
		<span class="label no-margins pull-up-2">accent color</span>
		<AccentColorPicker/>
	
		<span class="label no-margins pull-up-2">default filepath</span>
		<FolderPicker label="" pathState={defaultFilePath} onPathStateChanged={() => {
			_storeDefaultFilepath(defaultFilePath.path);
		}}/>
	</div>
	
</div>
