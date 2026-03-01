import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/routes/**.*.{js,ts,jsx,tsz,ndx}",
		"./src/components/**.*.{js,ts,jsx,tsz,ndx}",
		"./src/routes/**.*.{js,ts,jsx,tsz,ndx}",
	],
	plugins: [],
	theme: {
		extend: {
			colors: {
				accent: "var(--color-accent)",
				accentHeavy: "var(--color-accent-heavy)",
				accentLight: "var(--color-accent-light)"
			}
		}
	}
};

export default config;
