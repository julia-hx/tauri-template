<svelte:options customElement="dialog-container" />

<script lang="ts">
	import IconButton from "../components/IconButton.svelte";
	import Icon from "../components/Icon.svelte";
	import { IconType } from "../globals.svelte";
    import { dialogState } from "../scripts/dialogState.svelte";

	let { id = "Dialog", label = "Dialog", size = "md", noButton=false, icon=IconType.Window} = $props();

	let showButton: HTMLElement;
	let hideButton: HTMLElement;
	let dialogContainer: HTMLElement;

	export function show() {
		if(dialogState.activeDialogId != id) {
			dialogState.hideActiveDialog();
		}

		showButton.hidden = true;
		hideButton.hidden = false;
		dialogContainer.hidden = false;

		dialogState.activeDialogId = id;
		dialogState.hideActiveDialog = () => { hide(); };
	}
	export function hide() {
		showButton.hidden = false;
		hideButton.hidden = true;
		dialogContainer.hidden = true;
	}
</script>


<div class="{size}">
	<div class="flex flex-row items-center hidden={noButton}">
		<div bind:this={showButton}>
			<IconButton iconType={icon} onClick={show}/>
		</div>
		<div bind:this={hideButton} hidden>
			<IconButton iconType={IconType.XMark} onClick={hide}/>
		</div>
	</div>

	<div class="dialogContainer drop-shadow-lg drop-shadow-gray-800/50 dark:drop-shadow-gray-900/50" bind:this={dialogContainer} hidden>
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
.dialogHeader {
	margin-top: 2px;
}

.dialogLabel {
	font-weight: 600;
	font-size: 1em;
	text-transform: uppercase;
	margin-top: 2px;
	margin-left:12px;
	width: 260px;
	white-space: nowrap;
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
	background-color: var(--color-accent);
	
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
