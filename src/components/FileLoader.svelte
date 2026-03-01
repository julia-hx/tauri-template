<script>
	import Icon from './Icon.svelte';
	import { IconType } from '../globals.svelte';
	import { open } from '@tauri-apps/plugin-dialog';
	
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
			this.defaultPath = "/home/";
			this.multiple = true;
			this.directory = false;
		}
	}

	class OpenFolderOptions {
		constructor() {
			this.title = "Open Folder";
			this.defaultPath = "/home/";
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
		let result = open(new OpenFolderOptions()).then((value) => {handleSourceFolder(value)});
	}

	/**
     * @param {string | null} data
     */
	function handleSourceFolder(data) {
		if (data === null) return;
		sourceFolder = data;
		console.log("source folder set: " + data);
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

<div class="w-84 h-36 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-400 dropzone mt-2">
	<ul class="h-35 overflow-auto p-2 mt-2" bind:this={scroller}>
		{#each paths as path}
			<li class="m-0 p-0">{path.displayName}</li>
		{/each}
	</ul>
	
	<div class="flex flex-row pt-16 justify-center" bind:this={placeholder}>
		<span >-no files yet-</span>
	</div>
</div>

<style>
.nudge-icon {
	margin-left: -6px;
	margin-top: -2px;
}
</style>