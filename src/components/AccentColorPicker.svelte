<script lang="ts">
	import { getAccentColorAsString, accentColor, AccentColor } from '../globals.svelte';
	import { LazyStore } from '@tauri-apps/plugin-store';

	async function _setAccentColor(color : AccentColor) {
		accentColor.color = color;
		let store = new LazyStore('settings.json');
		store.set("accentColor", getAccentColorAsString());
	}
</script>

<div class="flex flex-row items-center space-x-2">
	<button
		class="accent-color-btn size-6 indigo"
		title="indigo"
		onclick={() => {
			_setAccentColor(AccentColor.Indigo);
		}}
	>
	</button>
	<button
		class="accent-color-btn size-6 violet"
		title="violet"
		onclick={() => {
			_setAccentColor(AccentColor.Violet);
		}}
	>
	</button>
	<button
		class="accent-color-btn size-6 fuchsia"
		title="fuchsia"
		onclick={() => {
			_setAccentColor(AccentColor.Fuchsia);
		}}
	>
	</button>
	<button
		class="accent-color-btn size-6 rose"
		title="rose"
		onclick={() => {
			_setAccentColor(AccentColor.Rose);
		}}
	>
	</button>
	<button
		class="accent-color-btn size-6 amber"
		title="amber"
		onclick={() => {
			_setAccentColor(AccentColor.Amber);
		}}
	>
	</button>
	<button
		class="accent-color-btn size-6 green"
		title="green"
		onclick={() => {
			_setAccentColor(AccentColor.Green);
		}}
	>
	</button>
	<button
		class="accent-color-btn size-6 sky"
		title="sky"
		onclick={() => {
			_setAccentColor(AccentColor.Sky);
		}}
	>
	</button>
	<button
		class="accent-color-btn size-6 gray"
		title="gray"
		onclick={() => {
			_setAccentColor(AccentColor.Gray);
		}}
	>
	</button>
</div>

<style>
	.accent-color-btn {
		border-radius: 20px;
	}
	.accent-color-btn:hover {
		outline: solid;
	}
</style>
