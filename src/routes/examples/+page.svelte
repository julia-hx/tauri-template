<script>
	import Icon from "../../components/Icon.svelte";
	import { IconType, OptionConfig } from "../../globals.svelte";
	import AccentColorPicker from "../../components/AccentColorPicker.svelte";
	import FolderPicker from "../../components/FolderPicker.svelte";
	import FilePicker from "../../components/FilePicker.svelte";
	import FileDialog from "../../components/FileDialog.svelte";
	import OptionsDialog from "../../components/OptionsDialog.svelte";
	import IconButton from "../../components/IconButton.svelte";

	let exampleFolderPath = $state({path: "-none-"});
	let exampleFilePath = $state({path: "-none-"});
	let exampleOptionState = $state({value: "-none-"});
	let exampleOptions = [
		new OptionConfig("Lemons", "julia's favorite!", true),
		new OptionConfig("Apples", "similar to Pears, really", true),
		new OptionConfig("Pears"),
		new OptionConfig("Physalis", "too good", true),
		new OptionConfig("Strawberries", "sweet berries", true),
		new OptionConfig("Mango", "this is the fruit that has the uv-map color gradient", true)
	];
	let exampleOptionStateSimple = $state({value: "-none-"});
	let exampleOptionsSimple = [
		new OptionConfig("ok"),
		new OptionConfig("no thanks!"),
		new OptionConfig("huh?")
	]
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
		<div class="flex flex-row justify-center mt-2 space-x-1">
			<Icon type={IconType.ArrowLeft}/>
			<Icon type={IconType.Paintbrush}/>
			<Icon type={IconType.Photo}/>
			<Icon type={IconType.Heart}/>
			<Icon type={IconType.CogEight}/>
		</div>
		<p class="mt-2">There is also an <span class="font-bold">Icon Button</span> component:</p>
		<div class="flex flex-row justify-center mt-2 space-x-1">
			<div class="flex flex-row justify-center mt-0 space-x-1">
				<IconButton iconType={IconType.Heart} onClick={()=>{console.log("heart!")}}/>
				<IconButton iconType={IconType.Sparkles} onClick={()=>{console.log("sparkles!")}}/>
				<IconButton iconType={IconType.MusicalNote} onClick={()=>{console.log("music!")}}/>
			</div>
		</div>
	</div>

	<div class="text-xl font-sans mt-6">
		accent color
	</div>
	<div class="mt-2 flex flex-col justify-center items-center">
		<p>Use the <span class="font-bold">AccentColorPicker</span> component from anywhere:</p>
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
		<p><span class="font-bold">FolderPicker</span> component gets a single folder path from the system:</p>
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
		<p><span class="font-bold">FilePicker</span> gets a single file path:</p>
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
		<p><span class="font-bold">FileDialog</span> gets paths to files or folder contents on the system:</p>
		<div class="mt-2">
			<FileDialog label="file dialog"/>
		</div>
	</div>

	<div class="mt-2 flex flex-col items-center">
		<p><span class="font-bold">OptionDialog</span> consists of a button that opens a list of configured options:</p>
		<div class="mt-2 flex flex-row">
			<OptionsDialog
				id="usage-examples-options"
				label="options" 
				optionState={exampleOptionState}
				options={exampleOptions}
				onOptionStateChanged = {() => {
					// no-op in this example
				}}
			 />
			 <div class="display mt-0 ml-1">
				<span>{exampleOptionState.value}</span>
			 </div>
		</div>
		<p class="mt-1">Another one with simpler config:</p>
		<div class="mt-0 flex flex-row">
			<OptionsDialog 
				id="usage-examples-options-simple"
				label="simple options" 
				optionState={exampleOptionStateSimple }
				options={exampleOptionsSimple}
				centerOptions={true}
				onOptionStateChanged = {() => {
					// no-op in this example
				}}
			 />
			 <div class="display mt-0 ml-1">
				<span>{exampleOptionStateSimple.value}</span>
			 </div>
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
