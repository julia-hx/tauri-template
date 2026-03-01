<script>
	import Icon from './Icon.svelte';
	import { defaultFilePath, IconType } from '../globals.svelte';
	import { open } from '@tauri-apps/plugin-dialog';
	import { invoke } from '@tauri-apps/api/core';
	
	class FilePath {
		constructor(index = 0) {
			this.index = index;
			this.value = "";
			this.displayName = "";
		}
	}

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
	let paths = $state([new FilePath(0)]);
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
		let index = 0;
		for (let pathResult of data)
		{
			let path = new FilePath(index);
			path.value = pathResult;
			let segments = pathResult.split('/');
			path.displayName = segments[segments.length - 1];
			paths.push(path);
			index = index + 1;
		}
		pathsLoaded = true;
	}

	async function selectSourceFolder() {
		let result = open(new OpenFolderOptions()).then((value) => {
			handleSourceFolder(value);
		});
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

<div class="flex justify-center items-center flex-col text-sm">
	<div class="flex flex-row items-center mt-2">
		<button class="size-7" onclick={selectSourceFile}>
			<div class="nudge-icon">
				<Icon type={IconType.Document}></Icon>
			</div>
		</button>
		<button class="size-7 ml-2" onclick={selectSourceFolder}>
			<div class="nudge-icon">
				<Icon type={IconType.Folder}></Icon>
			</div>
		</button>
	</div>
</div>

<div class="mt-2 min-w-64 max-w-120 min-h-16 max-h-36 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-400">
	<ul class="overflow-auto min-w-64 max-w-120 min-h-16 max-h-36 p-2 pt-1 pb-1" bind:this={scroller}>
		{#each paths as path}
			<li class="m-0 p-0">{path.displayName}</li>
		{/each}
	</ul>
	
	<div class="flex flex-row mt-5 justify-center" bind:this={placeholder}>
		<span >-no files yet-</span>
	</div>
</div>

<style>
.nudge-icon {
	margin-left: -6px;
	margin-top: -2px;
}
</style>