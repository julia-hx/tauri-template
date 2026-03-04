export class DialogState {
	activeDialogId:string;
	hideActiveDialog:Function;

	constructor()
	{
		this.activeDialogId = "NONE";
		this.hideActiveDialog = () => {};
	}

	reset(): void {
		this.hideActiveDialog();
		this.activeDialogId = "NONE";
		this.hideActiveDialog = () => {};
	}
}
export const dialogState = $state(new DialogState());
