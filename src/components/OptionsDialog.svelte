<script lang="ts">
	import IconButton from "./IconButton.svelte";
	import { IconType, OptionConfig, optionDialogState } from "../globals.svelte";

	// $state({value: "..."}) state object, event, options string array, label
	let {
		optionState,
		onOptionStateChanged,
		label = "Options",
		options = [new OptionConfig("-none-")],
		centerOptions = false
	} = $props();

	let optionsContainer: HTMLElement;

	async function selectOption(value = "-none-") {
		optionState.value = value;
		onOptionStateChanged();
		optionsContainer.hidden = true;
	}

	async function showOptions() {
		if(optionDialogState.isActive) {
			optionDialogState.closeActiveDialog();
		}
		optionDialogState.isActive = true;
		optionDialogState.closeActiveDialog = () => { close(); }
		optionsContainer.hidden = false;
	}

	function close() {
		optionsContainer.hidden = true;
		optionDialogState.isActive = false;
	}
</script>

<div class="flex justify-center items-center flex-col">
	<div class="flex flex-row items-center">
		<IconButton iconType={IconType.BarsThree} onClick={showOptions} />

		<div bind:this={optionsContainer} hidden>
			<div class="optionPopup">
				<ul>
					{#if label.length > 0}
						<li class="optionsLabel flex flex-row justify-center mt-2">
							<span>{label}</span>
						</li>
					{/if}
					{#if centerOptions}
					<div class="optionsScroller overflow-auto flex flex-col items-center space-y-1">
						{#each options as option}
							<li>
								<div class="flex flex-row">
									<button onclick={() => {selectOption(option.value);}}>
										{option.value}
									</button>
									{#if option.showTooltip}
										<div class="optionLabel">{option.tooltip}</div>
									{/if}
								</div>
							</li>
						{/each}
					</div>
					{/if}
					{#if !centerOptions}
					<div class="optionsScroller overflow-auto flex flex-col items-left space-y-1">
						{#each options as option}
							<li>
								<div class="flex flex-row">
									<button onclick={() => {selectOption(option.value);}}>
										{option.value}
									</button>
									{#if option.showTooltip}
										<div class="optionLabel">{option.tooltip}</div>
									{/if}
								</div>
							</li>
						{/each}
					</div>
					{/if}
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	.optionsLabel {
		text-transform: uppercase;
	}
	.optionPopup {
		z-index: 1;
		border-radius: 10px;
		position: fixed;
		width: 320px;
		height: 200px;
		top: 50%;
		left: 50%;
		margin-top: -100px; /* Negative half of height. */
		margin-left: -160px; /* Negative half of width. */
		background-color: var(--color-accent-light);
	}
	.optionsScroller {
		width: 300px;
		height: 160px;
		padding: 10px;
		margin-left: 10px;
	}
	.optionLabel {
		font-size: 1.0em;
		margin-left: 4px;
		margin-top: 4px;
	}
</style>
