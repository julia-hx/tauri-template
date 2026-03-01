<script>
	import IconButton from './IconButton.svelte';
	import { IconType } from '../globals.svelte';
	import { open } from '@tauri-apps/plugin-dialog';
	import { defaultFilePath } from '../globals.svelte';

	class OpenFolderOptions {
		constructor() {
			this.title = "Pick Folder";
			this.defaultPath = defaultFilePath.path;
			this.multiple = false;
			this.directory = true;
		}
	}

	// $state({path: "..."}) state object, event, label
	let { pathState, onPathStateChanged, label } = $props();

	async function selectFolder() {
		let result = open(new OpenFolderOptions()).then((value) => {
			if (value === null) return;
			pathState.path = value;
			onPathStateChanged();
		});
	}

	async function resetFolder() {
		pathState.path = "-none-";
		onPathStateChanged();
	}
</script>

<div class="flex justify-center items-center flex-col">
	<div class="flex flex-row items-center">
		<IconButton iconType={IconType.Folder} onClick={selectFolder}/>
		<IconButton iconType={IconType.Trash} onClick={resetFolder}/>
		
		<div class="truncate ml-1 pt-1 pl-2 pr-2 h-7 min-w-10 max-w-80 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-400">
			<span>{pathState.path}</span>
		</div>
		
		{#if label.length > 0}
		<div class="label">
			<span>{label}</span>
		</div>
		{/if}
	</div>
</div>
