export const uiMode = $state({ isDarkMode: true });

export class FilePath {
	value:string;
	displayName:string;
	
	constructor(value: string = "", displayName: string = "-none-")
	{
		this.value = value;
		this.displayName = displayName;
	}

	set(path: string) : void {
		this.value = path;
		let segments = path.split('/');
		this.displayName = segments[segments.length - 1];
	}
}

export enum IconType {
	Document,
	Folder,
	Minus,
	MinusCircle,
	Plus,
	PlusCircle,
	Sun,
	Moon,
	ArrowLeft,
	ArrowRight,
	ArrowUp,
	ArrowDown,
	ArrowPath,
	BarsThree,
	Heart,
	Sparkles,
	Eye,
	Play,
	Stop,
	Pause,
	XMark,
	ExclamationTriangle,
	CogEight,
	Wrench,
	AdjustmentsHorizontal,
	AdjustmentsVertical,
	Microphone,
	Paintbrush,
	MusicalNote,
	Photo,
	Radio,
	Star,
	Trash,
	Fire,
}

export enum AccentColor {
	Violet,
	Fuchsia,
	Rose,
	Amber,
	Green,
	Sky,
	Indigo,
	Gray
}

export const accentColor = $state({ color: AccentColor.Violet })

export function getAccentColorAsString(): string {
	switch(accentColor.color)
	{
		case AccentColor.Violet:
			return "violet";
		case AccentColor.Fuchsia:
			return "fuchsia";
		case AccentColor.Rose:
			return "rose";
		case AccentColor.Amber:
			return "amber";
		case AccentColor.Green:
			return "green";
		case AccentColor.Sky:
			return "sky";
		case AccentColor.Indigo:
			return "indigo";
		case AccentColor.Gray:
			return "gray";
	}
}

export function setAccentColorByString(colorString: string) {
	switch(colorString)
	{
		case "violet":
			accentColor.color = AccentColor.Violet;
			break;
		case "fuchsia":
			accentColor.color = AccentColor.Fuchsia;
			break;
		case "rose":
			accentColor.color = AccentColor.Rose;
			break;
		case "amber":
			accentColor.color = AccentColor.Amber;
			break;
		case "green":
			accentColor.color = AccentColor.Green;
			break;
		case "sky":
			accentColor.color = AccentColor.Sky;
			break;
		case "indigo":
			accentColor.color = AccentColor.Indigo;
			break;
		case "gray":
			accentColor.color = AccentColor.Gray;
			break;
		default:
			accentColor.color = AccentColor.Violet;
	}
}

export const defaultFilePath = $state({path: "none"});
