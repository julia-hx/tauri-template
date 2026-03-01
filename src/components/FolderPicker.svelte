<script>
	import IconButton from './IconButton.svelte';
	import { IconType } from '../globals.svelte';
	import { open } from '@tauri-apps/plugin-dialog';
	import { defaultFilePath } from '../globals.svelte';
	import { LazyStore } from '@tauri-apps/plugin-store';
    import { on } from 'svelte/events';

	class OpenFolderOptions {
		constructor() {
			this.title = "Open Folder";
			this.defaultPath = defaultFilePath.path;
			this.multiple = false;
			this.directory = true;
		}
	}

	// expect a $state({path: "..."}) state object
	let { pathState, onPathStateChanged } = $props();

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

<div class="flex justify-center items-center flex-col text-sm">
	<div class="flex flex-row items-center mt-2">
		<IconButton iconType={IconType.Folder} onClick={selectFolder}/>
		
		<div class="display ml-1 h-7 min-w-24 max-w-104 truncate">
			{pathState.path}
		</div>
		
		<IconButton iconType={IconType.Trash} onClick={resetFolder}/>
	</div>
</div>
