<script>
	function toggle() {

	}
</script>

<div class="toggle-background bg-gray-300 dark:bg-gray-800">
	<button class="toggle" title="toggle" onclick={()=>{ toggle(); }}></button>
</div>

<style>
.toggle-background {
	height: 26px;
	width: 44px;
	border-radius: 12px;
	border-width: 2px;
}
.toggle {
	height: 18px;
	width: 18px;
	border-radius: 8px;
	margin-top: 2px;
	margin-left: 2px;
}
</style>