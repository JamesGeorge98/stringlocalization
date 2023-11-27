
import * as vscode from 'vscode';



import getSelectedText from "./get-selected-text";


import vscode_1 from "vscode";


export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "stringlocalization" is now active!');

	console.log("dadada")
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('stringlocalization.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from stringlocalization!');


		const editor = vscode_1.window.activeTextEditor;
		console.log(editor);
	});



	const editor = vscode_1.window.activeTextEditor;
	console.log(editor);
	if (!editor)
		return [];
	const selectedText = editor.document.getText(getSelectedText(editor));
	console.log(selectedText);

	if (selectedText === "")
		return [];


	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
