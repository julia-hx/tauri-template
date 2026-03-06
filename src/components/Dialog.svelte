<script lang="ts">
	import IconButton from "./IconButton.svelte";
	import Icon from "./Icon.svelte";
	import { IconType } from "../globals.svelte";
	import { dialogState } from "../scripts/dialogState.svelte";

	let { 
		id = "Dialog",
		label = "Dialog",
		size = "md",
		noButton=false,
		labeledButton=false,
		icon=IconType.ArrowTopRightOnSquare
	} = $props();

	let showButton : HTMLElement;
	let hideButton : HTMLElement;
	let dialogContainer: HTMLElement;

	export function show() {
		showButton.hidden = true;
		hideButton.hidden = false;
		dialogContainer.hidden = false;

		if(dialogState.activeDialogId != id)
		{
			dialogState.hideActiveDialog();
		}
		dialogState.activeDialogId = id;
		dialogState.hideActiveDialog = () => { hide(); }	
	}
	export function hide() {
		showButton.hidden = false;
		hideButton.hidden = true;
		dialogContainer.hidden = true;
	}
</script>


<div class="{size}">
	<div hidden={noButton}>
		<div bind:this={showButton} class="flex flex-row items-center" >
			<IconButton iconType={icon} onClick={show}/>
			{#if labeledButton}
			<div class="label buttonLabel">
				<span>{label}</span>
			</div>
			{/if}
		</div>
		<div bind:this={hideButton} hidden class="flex flex-row items-center">
			<IconButton iconType={IconType.XMark} onClick={hide}/>
			{#if labeledButton}
			<div class="label buttonLabel">
				<span>{label}</span>
			</div>
			{/if}
		</div>
	</div>

	<div class="dialogContainer" bind:this={dialogContainer} hidden>
		<div class="dialogHeader flex flex-row items-center">
			<span class="dialogLabel">{label}</span>
			<button class="dialogExitButton" onclick={()=>{hide()}}>
				<Icon type={IconType.XMark} size=24 offset=0/>
			</button>
		</div>
		
		<div class="dialogScroller bg-gray-100 dark:bg-gray-900 overflow-auto">
			<div class="ml-2 mt-1">
				<slot />
			</div>
		</div>
	</div>
</div>


<style>
.buttonLabel {
	margin-left: -2px;
}

.dialogHeader {
	margin-top: 2px;
}

.dialogLabel {
	color: var(--color-gray-800);
	font-weight: 600;
	font-size: 1em;
	text-transform: uppercase;
	margin-top: 2px;
	margin-left:12px;
	width: 260px;
	white-space: nowrap;
}
.xs .dialogLabel {
	width: 112px;
}
.sm .dialogLabel {
	width: 162px;
}
.lg .dialogLabel {
	width: 362px;
}
.xl .dialogLabel {
	width: 462px;
}

.dialogExitButton {
	padding:0px;
}

.dialogContainer {
	background-color: var(--color-accent-light);
	z-index: 100;
	border-radius: 10px;
	position: fixed;
	top: 50%;
	left: 50%;

	width: 300px;
	height: 300px;
	margin-top: -150px;
	margin-left: -150px;
}
.xs .dialogContainer {
	width: 150px;
	height: 150px;
	margin-top: -75px;
	margin-left: -75px;
}
.sm .dialogContainer {
	width: 200px;
	height: 200px;
	margin-top: -100px;
	margin-left: -100px;
}
.lg .dialogContainer {
	width: 400px;
	height: 400px;
	margin-top: -200px;
	margin-left: -200px;
}
.xl .dialogContainer {
	width: 500px;
	height: 500px;
	margin-top: -250px;
	margin-left: -250px;
}

.dialogScroller {
	border-radius: 10px;
	top: 50%;
	left: 50%;

	width: 290px;
	height: 264px;
	margin-top: 2px;
	margin-left: 5px;
	padding-right: 5px;
}
.xs .dialogScroller {
	width: 140px;
	height: 114px;
}
.sm .dialogScroller {
	width: 190px;
	height: 164px;
}
.lg .dialogScroller {
	width: 390px;
	height: 364px;
}
.xl .dialogScroller {
	width: 490px;
	height: 464px;
	scroll-behavior: auto;
}
</style>
