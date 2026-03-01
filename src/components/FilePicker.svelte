<script>
	import IconButton from './IconButton.svelte';
	import { IconType, FilePath } from '../globals.svelte';
	import { open } from '@tauri-apps/plugin-dialog';
	import { defaultFilePath } from '../globals.svelte';

	class OpenFolderOptions {
		constructor() {
			this.title = "Pick File";
			this.defaultPath = defaultFilePath.path;
			this.multiple = false;
			this.directory = false;
		}
	}

	// $state({path: "..."}) state object, event, label
	let { pathState, onPathStateChanged, label } = $props();
	let filePath = $state(new FilePath());

	async function selectFile() {
		let result = open(new OpenFolderOptions()).then((value) => {
			if (value === null) return;
			pathState.path = value;
			let fp = new FilePath();
			fp.set(value);
			filePath = fp;
			onPathStateChanged();
		});
	}

	async function reset() {
		pathState.path = new FilePath();
		onPathStateChanged();
	}
</script>

<div class="flex justify-center items-center flex-col">
	<div class="flex flex-row items-center">
		<IconButton iconType={IconType.Document} onClick={selectFile}/>
		<IconButton iconType={IconType.Trash} onClick={reset}/>
		
		<div class="truncate ml-1 pt-1 pl-2 pr-2 h-7 min-w-10 max-w-80 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-400">
			<span>{filePath.displayName}</span>
		</div>
		
		{#if label.length > 0}
		<div class="label">
			<span>{label}</span>
		</div>
		{/if}
	</div>
</div>
