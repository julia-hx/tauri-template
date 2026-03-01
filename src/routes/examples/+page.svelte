<script>
	import Icon from "../../components/Icon.svelte";
	import { IconType } from "../../globals.svelte";
	import AccentColorPicker from "../../components/AccentColorPicker.svelte";
	import FolderPicker from "../../components/FolderPicker.svelte";
	import FilePicker from "../../components/FilePicker.svelte";
	import FileDialog from "../../components/FileDialog.svelte";

	let exampleFolderPath = $state({path: "-none-"});
	let exampleFilePath = $state({path: "-none-"});
</script>

<div class="flex justify-center items-center flex-col space-y-0">
	<span class="text-3xl font-sans">
		examples
	</span>
	
	<p class="mt-2">Examples of hexing-tauri template components and functionality.</p>
	<p>Implementation reference: ./src/routes/examples/+page.svelte.</p>

	<div class="text-xl font-sans mt-6">
		icons
	</div>
	<div class="mt-2 flex flex-col justify-center items-center">
		A selection of Tailwind Hero Icons are included, such as:
		<div class="flex flex-row justify-center mt-2">
			<Icon type={IconType.ArrowLeft}/>
			<Icon type={IconType.Paintbrush}/>
			<Icon type={IconType.Photo}/>
			<Icon type={IconType.Heart}/>
			<Icon type={IconType.CogEight}/>
		</div>
	</div>

	<div class="text-xl font-sans mt-6">
		accent color
	</div>
	<div class="mt-2 flex flex-col justify-center items-center">
		Use the AccentColorPicker component from anywhere:
		<AccentColorPicker/>
		
		<p class="mt-2">Elements can <span class="accent-light">use</span> <span class="accent">accent</span> <span class="accent-heavy">colors</span>,</p>
		<p>or react to them:</p>
		<div class="accent-bg w-24 h-10 rounded-2xl mt-1">
			<div class="flex flex-row justify-center pt-2
				violet:text-amber-200
				fuchsia:text-gray-900
				rose:text-gray-100
				amber:text-slate-600
				green:text-yellow-300
				sky:text-mauve-200
				indigo:text-emerald-300
			">
				<Icon type={IconType.Sparkles}/>
				<Icon type={IconType.Sparkles}/>
				<Icon type={IconType.Sparkles}/>
			</div>
		</div>
	</div>

	<div class="text-xl font-sans mt-6">
		pickers
	</div>

	<div class="mt-2 flex flex-col items-center">
		<p>FolderPicker component to get a single folder path from the system:</p>
		<div class="mt-2s">
			<FolderPicker 
				label="folder picker" 
				pathState={exampleFolderPath} 
				onPathStateChanged={() => {
					console.log("example folder picker path set.")
				}}
			/>
		</div>
	</div>

	<div class="mt-2 flex flex-col items-center">
		<p>FilePicker for a single file path:</p>
		<div class="mt-2s">
			<FilePicker 
				label="file picker" 
				pathState={exampleFilePath} 
				onPathStateChanged={() => {
					console.log("example file picker path set.")
				}}
			/>
		</div>
	</div>

	<div class="mt-2 flex flex-col items-center">
		<p>FileDialog component gets paths to files or folder contents on the system:</p>
		<div class="mt-2">
			<FileDialog label="file dialog"/>
		</div>
	</div>
</div>

<style>
	.accent {
		color: var(--color-accent);
	}
	.accent-light {
		color: var(--color-accent-light);
	}
	.accent-heavy {
		color: var(--color-accent-heavy);
	}
	.accent-bg {
		background-color: var(--color-accent);
	}
</style>
