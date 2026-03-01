<script>
	import Icon from "./Icon.svelte";

	// IconType and event
	let { iconType, onClick } = $props();
</script>

<button class="size-7 ml-1" onclick={onClick}>
	<div class="nudge-icon">
		<Icon type={iconType}></Icon>
	</div>
</button>

<style>
	.nudge-icon {
	margin-left: -6px;
	margin-top: -2px;
}
</style>