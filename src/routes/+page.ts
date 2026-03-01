import type { PageLoad } from './$types';
import { _initSettings } from './settings/+page';

export const load: PageLoad = ({ params }) => {
	_initSettings();
};
