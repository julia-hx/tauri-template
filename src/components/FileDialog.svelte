<script>
	import IconButton from './IconButton.svelte';
	import { defaultFilePath, IconType, FilePath } from '../globals.svelte';
	import { open } from '@tauri-apps/plugin-dialog';
	import { invoke } from '@tauri-apps/api/core';
	
	let { label } = $props();

	class OpenFileOptions {
		constructor() {
			this.title = "Open Files";
			this.defaultPath = defaultFilePath.path;
			this.multiple = true;
			this.directory = false;
		}
	}

	class OpenFolderOptions {
		constructor() {
			this.title = "Open Folder";
			this.defaultPath = defaultFilePath.path;
			this.multiple = false;
			this.directory = true;
		}
	}

	/**
     * @type {FilePath[]}
     */
	let paths = $state([new FilePath()]);
	let pathsLoaded = $state(false);
	let sourceFolder = $state("");

	/** @type {HTMLElement} */
	let scroller;
	/** @type {HTMLElement} */
	let placeholder;

	$effect(() => {
		scroller.hidden = !pathsLoaded;
		placeholder.hidden = pathsLoaded;
	});

	async function selectSourceFile() {
		open(new OpenFileOptions()).then((value) => {
			handleSourceFiles(value);
		});
	}

	/**
     * @param {string | null} data
     */
	function handleSourceFiles(data)
	{
		if(data === null) { return; }
		console.log("Files opened:");
		console.log(data);
		paths = [];
		pathsLoaded = false;
		for (let pathResult of data)
		{
			let path = new FilePath();
			path.set(pathResult);
			paths.push(path);
		}
		pathsLoaded = true;
	}

	async function selectSourceFolder() {
		let result = open(new OpenFolderOptions()).then((value) => {
			handleSourceFolder(value);
		});
	}

	function reset() {
		pathsLoaded = false;
		paths = [new FilePath()];
	}

	/**
     * @param {string | null} folderPath
     */
	async function handleSourceFolder(folderPath) {
		if (folderPath === null) return;
		sourceFolder = folderPath;
		console.log("source folder set: " + folderPath);
		await invoke("get_folder_contents", { folderPath }).then((files) => {
			console.log(files);
			handleSourceFiles(files);
		});
	}
</script>

<div class="flex flex-row space-x-0">
	<IconButton iconType={IconType.Document} onClick={selectSourceFile}/>
	<IconButton iconType={IconType.Folder} onClick={selectSourceFolder}/>
	<IconButton iconType={IconType.Trash} onClick={reset}/>
	{#if label.length > 0}
	<div class="label no-margins">
		{label}
	</div>
	{/if}
</div>

<div class="min-w-64 max-w-120 min-h-14 max-h-40 display">
	<ul class="overflow-auto text-sm min-w-64 max-w-120 min-h-14 max-h-38 p-2 pt-1 pb-1" bind:this={scroller}>
		{#each paths as path}
			<li class="m-0 p-0">{path.displayName}</li>
		{/each}
	</ul>
	
	<div class="flex flex-row justify-center items-center" bind:this={placeholder}>
		<span class="mt-3">-no files yet-</span>
	</div>
</div>
