<script>
	import Icon from "../../components/Icon.svelte";
	import { IconType, OptionConfig } from "../../globals.svelte";
	import AccentColorPicker from "../../components/AccentColorPicker.svelte";
	import FolderPicker from "../../components/FolderPicker.svelte";
	import FilePicker from "../../components/FilePicker.svelte";
	import FileDialog from "../../components/FileDialog.svelte";
	import OptionsDialog from "../../components/OptionsDialog.svelte";
	import IconButton from "../../components/IconButton.svelte";
	import Dialog from "../../components/Dialog.svelte";
	import Toggle from "../../components/Toggle.svelte";

	let exampleDialogSize = $state("md");

	let exampleFolderPath = $state({path: "-none-"});
	let exampleFilePath = $state({path: "-none-"});
	let exampleOptionState = $state({value: "-none-"});
	let exampleOptions = [
		new OptionConfig("Lemons", "julia's favorite!", true),
		new OptionConfig("Apples", "similar to Pears, really", true),
		new OptionConfig("Pears"),
		new OptionConfig("Physalis", "too good", true),
		new OptionConfig("Strawberries", "sweet berries", true),
		new OptionConfig("Mango", "fruit with a nice color gradient", true)
	];
	let exampleOptionStateSimple = $state({value: "-none-"});
	let exampleOptionsSimple = [
		new OptionConfig("ok"),
		new OptionConfig("no thanks!"),
		new OptionConfig("huh?")
	]
	let exampleOptionStatePile = $state({value: "-none-"});
	let exampleOptionsPile = [
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
		<div class="bg-accent w-24 h-10 rounded-2xl mt-1">
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
		files and folders
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

	<div class="text-xl font-sans mt-6">
		dialogs
	</div>

	<div class="mt-2 flex flex-col items-center">
		<p>The <span class="font-bold">Dialog</span> component can contain anything:</p>
		<div class="mt-2 flex flex-row">
			<Dialog id="example-dialog" 
				label="dialog" 
				icon={IconType.ArrowTopRightOnSquare} 
				size={exampleDialogSize}>

				<p>Apply some dialog sizes:</p>
				<div class="flex flex-col justify-center items-center">
					<div class="flex flex-row items-center space-x-2 md-2">
						<button onclick={()=>{exampleDialogSize="sm"}}>SM</button>
						<button onclick={()=>{exampleDialogSize="md"}}>MD</button>
						<button onclick={()=>{exampleDialogSize="lg"}}>LG</button>
					</div>
				</div>

				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel unde autem quia? Aperiam quam ipsum tenetur libero corrupti accusamus ipsa rerum, nisi, incidunt consequatur nesciunt. Dignissimos veritatis odio doloribus a adipisci eos aspernatur minima vero! Ut officia vitae tenetur. In non eveniet recusandae quisquam earum architecto? Repudiandae laboriosam quam quidem doloribus et magnam eaque aliquam asperiores dolor nobis, aperiam quas iste voluptates corrupti, rerum inventore est. Ducimus odit ex dicta asperiores delectus totam accusamus exercitationem? Corporis, dolore ratione! Ipsam, blanditiis perspiciatis. Laboriosam at expedita culpa, doloremque, hic veritatis autem magni esse cumque necessitatibus voluptates harum natus ut provident aliquid.</p>

			</Dialog>
		</div>
	</div>

	<div class="mt-2 flex flex-col items-center">
		<p>Dialog button icons can be overridden. Only one dialog can be open at the time.</p>
		<div class="mt-2 flex flex-row space-x-2">
			<Dialog id="dialog-eye" label="eye" icon={IconType.Eye} size="md">
				<p>The human eye is a sensory organ in the visual system that reacts to visible light allowing eyesight. Other functions include maintaining the circadian rhythm, and keeping balance. </p>
				<a href="https://en.wikipedia.org/wiki/Human_eye" target="_blank">wiki</a>
			</Dialog>

			<Dialog id="dialog-fire" label="fire" icon={IconType.Fire} size="lg">
				<p>Fire is the rapid oxidation of a fuel in the exothermic chemical process of combustion, releasing heat, light, and various reaction products. Flames, the most visible portion of the fire, are produced in the combustion reaction when the fuel reaches its ignition point temperature. Flames from hydrocarbon fuels consist primarily of carbon dioxide, water vapor, oxygen, and nitrogen. If hot enough, the gases may become ionized to produce plasma. The color and intensity of the flame depend on the type of fuel and composition of the surrounding gases.</p>
				<a href="https://en.wikipedia.org/wiki/Control_of_fire_by_early_humans" target="_blank">wiki</a>
			</Dialog>

			<Dialog id="dialog-tools" label="tools" icon={IconType.WrenchScrewdriver} size="xl">
				<p>Common ravens (Corvus corax) are one of only a few species who make their own toys. They have been observed breaking off twigs to play with socially. A corvid has been filmed sliding repeatedly down a snow-covered roof while balancing on a lid or tray. Another incidence of play in birds has been filmed showing a corvid playing with a table tennis ball in partnership with a dog, a rare example of tool use for the purposes of play. Blue jays, like other corvids, are highly curious and are considered intelligent birds. Young blue jays playfully snatch brightly coloured or reflective objects, such as bottle caps or pieces of aluminium foil, and carry them around until they lose interest. </p>
				<a href="https://en.wikipedia.org/wiki/Tool_use_by_non-humans" target="_blank">wiki</a>
			</Dialog>
		</div>
	</div>

	<div class="mt-2 flex flex-col items-center">
		<p>Dialog buttons can be set to display the dialog label.</p>
		<div class="mt-2 flex flex-row space-x-2">
			<Dialog id="dialog-labeled" labeledButton={true} size="sm" label="LABELED">
				<div class="flex flex-col justify-center items-center mt-16">
					<Icon type={IconType.Heart}/>
				</div>
			</Dialog>
		</div>
	</div>

	<div class="text-xl font-sans mt-6">
		options dialogs
	</div>

	<div class="mt-2 flex flex-col justify-center items-center">
		<p>The <span class="font-bold">OptionsDialog</span> is a specialized dialog component for setting a state value from a set of configured options:</p>
		<div class="mt-2 flex flex-row space-x-2">
			<OptionsDialog id="example-options-dialog"
				optionState={exampleOptionState}
				options={exampleOptions}
				label="yummy"
			/>
			<span class="display">
				{exampleOptionState.value}
			</span>
		</div>
	</div>

	<div class="mt-2 flex flex-col justify-center items-center">
		<p>A simpler options config in size xs, with "centered" and "labeledButton" set to true:</p>
		<div class="mt-2 flex flex-row space-x-2">
			<OptionsDialog id="options-simple"
				optionState={exampleOptionStateSimple}
				options={exampleOptionsSimple}
				label="choice?"
				labeledButton={true}
				size="xs"
				centered={true}
			/>
		</div>
		<div class="mt-2 flex flex-row space-x-2">
			<span class="display">
				{exampleOptionStateSimple.value}
			</span>
		</div>
	</div>

	<div class="text-xl font-sans mt-6">
		toggles
	</div>

	<div class="mt-2 flex flex-col justify-center items-center">
		<p>The <span class="font-bold">Toggle</span> component is used to toggle a state between true or false:</p>
		<div class="mt-2 flex flex-row space-x-2">
			<Toggle/>
		</div>
	</div>
</div>

<style>
</style>
