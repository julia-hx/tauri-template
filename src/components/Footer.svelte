<script>
	import Icon from "./Icon.svelte";
	import { IconType } from "../globals.svelte.js";
</script>

<div class="flex flex-row justify-center items-center space-x-1 mt-4 text-sm text-gray-400 dark:text-gray-500">
	<span>made with</span> 
	<Icon type={IconType.Heart} offset="-4" size="32"/> 
	<span>by <a href="https://linktr.ee/julia.hx" target="_blank">julia.hx</a></span>
</div>
