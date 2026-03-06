<script lang="ts">
	import IconButton from "./IconButton.svelte";
	import Dialog from "./Dialog.svelte";
	import {
		IconType,
		OptionConfig,
	} from "../globals.svelte";
    import { dialogState } from "../scripts/dialogState.svelte";

	let {
		id = "OptionsDialog",
		size = "md",
		icon = IconType.BarsThree,
		label = "Options",
		optionState,
		onOptionStateChanged = () => {},
		options = [new OptionConfig("-none-")],
		orientation = "left",
	} = $props();

	function selectOption(value: String) {
		optionState.value = value;
		onOptionStateChanged();
		dialogState.hideActiveDialog();
	}
</script>

<div>
	<Dialog {id} {label} {size} {icon}>
		{#if orientation === "center"}
		<div class="flex flex-col items-center space-y-1 mt-2">
			{#each options as option}
				<div class="flex flex-row">
					<button class="optionButton"
						onclick={() => {
							selectOption(option.value);
						}}
					>
						{option.value}
					</button>
					{#if option.showTooltip}
						<div class="optionLabel">{option.tooltip}</div>
					{/if}
				</div>
			{/each}
		</div>
		{/if}
		{#if orientation === "left"}
		<div class="flex flex-col items-left space-y-1 mt-2">
			{#each options as option}
				<div class="inline">
					<button class="optionButton"
						onclick={() => {
							selectOption(option.value);
						}}
					>
						{option.value}
					</button>
					{#if option.showTooltip}
						<div class="optionLabel inline">{option.tooltip}</div>
					{/if}
				</div>
			{/each}
		</div>
		{/if}
	</Dialog>
</div>

<style>
	.optionButton {
		margin-right: 0px;
	}
	.optionLabel {
		z-index: 101;
		font-size: 0.9em;
		margin-top: 4px;
	}
</style>
