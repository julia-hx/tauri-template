# hexing tauri

An app template for Tauri / Svelte / Tailwind, using Rust backend and web frontend.

Extends the auto-generated Tauri/Sveltekit template to include Tailwind CSS and Icons, a UI Mode toggle for dark/light mode, and re-usable components.

Uses yarn to build and run.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer).

## To get started

```yarn```

```yarn tauri dev```

Most font / color styling can be edited in /src/app.css.
You can also set the text and background colors for light vs dark mode in /src/+layout.svelte.

From there, you can extend this template to your hearts desire!

## Tauri Plugins

Tauri plugins that are enabled by default:
* store - persistent key-value storage
* os information
* clipboard
* dialog - open folders / files, messages

## Settings

A settings page is included. By default it stores the users choice of accent color and a default file folder for pickers.

## Components

Go to *about > template usage examples* to get an overview of included components and elements, and how to use them.
