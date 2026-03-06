import type { PageLoad } from './$types';
import { _initSettings } from './settings/+page';
import { dialogState } from '../scripts/dialogState.svelte';

export const load: PageLoad = ({ params }) => {
	_initSettings();
	dialogState.reset();
};
