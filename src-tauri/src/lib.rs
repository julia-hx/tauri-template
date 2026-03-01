use std::fs;

#[tauri::command]
fn print_message(message: &str) {
    println!("{}", &message);
}

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn get_folder_contents(folder_path: &str) -> Vec<String> {
	let mut result = vec![];
	let paths = fs::read_dir(folder_path).unwrap();
	for path in paths {
		let p = path.unwrap().path().clone();
		let path_str = p.to_str().clone();
		result.push(String::from(path_str.unwrap()));
	}
	return result;
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
			greet, 
			print_message,
			get_folder_contents,
		])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
