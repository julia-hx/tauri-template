import { setAccentColorByString, getAccentColorAsString, accentColor, AccentColor } from '../../globals.svelte';
import { LazyStore } from '@tauri-apps/plugin-store';

export async function _initSettings() {
	console.log("...loading settings...");
	let store = new LazyStore('settings.json');
	store.get("accentColor").then((value) => {
		let stringValue = value as string;
		setAccentColorByString(stringValue);
	});
};