# Tauri + SvelteKit + Tailwind Template

Template for a Rust app with a web technology UI layer.

Extends the auto-generated Tauri/Sveltekit template to include Tailwind CSS and Icons, and UI Mode toggle for dark/light mode.
Uses yarn to build and run.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer).

## To get started

```yarn```

```yarn tauri dev```

Most font / color styling can be edited in /src/app.css.
You can also set the text and background colors for light vs dark mode in /src/+layout.svelte.

From there, you can extend this template to your hearts desire!


## Icons

A selection of icon svg:s from [hero icons](https://heroicons.com/) is included.
Import in script:
```
import Icon from "./Icon.svelte";
import { IconType } from "../globals.svelte.js";
```
Usage in html:
```
<Icon type={IconType.Sparkles}/> 
```
... with optional params:
```
<Icon type={IconType.Heart} offset="-4" size="32"/> 
```
