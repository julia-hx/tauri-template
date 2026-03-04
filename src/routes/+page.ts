import type { PageLoad } from './$types';
import { _initSettings } from './settings/+page';
import { optionDialogState } from '../globals.svelte';
import { dialogState } from '../scripts/dialogState.svelte';

export const load: PageLoad = ({ params }) => {
	_initSettings();
	optionDialogState.reset();
	dialogState.reset();
};
