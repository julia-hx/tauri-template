import { setAccentColorByString, defaultFilePath } from '../../globals.svelte';
import { LazyStore } from '@tauri-apps/plugin-store';

export async function _initSettings() {
	console.log("...loading settings...");
	let store = new LazyStore('settings.json');
	store.get("accentColor").then((value) => {
		let stringValue = value as string;
		setAccentColorByString(stringValue);
	});
	store.get("defaultFilePath").then((value) => {
		let stringValue = value as string;
		defaultFilePath.path = stringValue;
	})
};

export async function _storeDefaultFilepath(path:string) {
	let store = new LazyStore('settings.json');
	store.set("defaultFilePath", path);
}