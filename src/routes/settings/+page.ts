import { setAccentColorByString, defaultFilePath, uiMode } from '../../globals.svelte';
import { LazyStore } from '@tauri-apps/plugin-store';
import type { PageLoad } from './$types';

export async function _initSettings() {
	console.log("...loading settings...");

	let store = new LazyStore('settings.json');

	store.get("accentColor").then((value) => {
		setAccentColorByString(value as string);
	});
	store.get("defaultFilePath").then((value) => {
		defaultFilePath.path = value as string;
	})
	store.get("darkMode").then((value) => {
		uiMode.isDarkMode = value as boolean;
	})
};

export async function _storeDefaultFilepath(path:string) {
	let store = new LazyStore('settings.json');
	store.set("defaultFilePath", path);
}

export async function _storeDarkMode(darkMode:boolean) {
	let store = new LazyStore('settings.json');
	store.set("darkMode", darkMode)
}

export const load: PageLoad = ({ params }) => {
};
