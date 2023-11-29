
import * as vscode from 'vscode';







export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "stringlocalization" is now active!');



	let disposable = vscode.commands.registerCommand('stringlocalization.helloWorld', () => {

		let activeEditor = vscode.window.activeTextEditor;
		if (!activeEditor) {
			return;
		}

		const edit = new vscode.WorkspaceEdit();

		const document = activeEditor.document

		for (let i = 0; i < activeEditor.document.lineCount; i++) {


			const line = document.lineAt(i);



			var textRange = new vscode.Range(line.range.start, line.range.end);
			var wholeText = document.getText(textRange);
			var lineText = line.text;

			if (!wholeText.includes(`import 'package:`) && !wholeText.includes(`import "package:`)) {

				if (lineText.includes(`"`) || lineText.includes(`'`)) {

					const match = lineText.match(/["']([^"']*)["']/);

					if (match != null && match[1].length > 0) {

						let modifiedString = match[1].toLowerCase().replace(/\s+/g, '');

						let newString = `AppLocalizations.of(context).${modifiedString}`

						const currentPosition = new vscode.Position(i, 0);

						const openingQuoteIndex = lineText.indexOf('"');

						const closingQuoteIndex = lineText.lastIndexOf('"') + 1;


						if (openingQuoteIndex !== -1 && closingQuoteIndex !== -1) {

							const quoteStartPosition = new vscode.Position(currentPosition.line, openingQuoteIndex);

							const quoteEndPosition = new vscode.Position(currentPosition.line, closingQuoteIndex);


							// const position = new vscode.Position(quoteStartPosition, quoteEndPosition);


							edit.replace(document.uri, new vscode.Range(quoteStartPosition, quoteEndPosition), newString);
							// edit.replace(document.uri, new vscode.Range(quoteSingleStartPosition, quoteSingleEndPosition), newString);
						}



					}

				}

			}


		}

		vscode.workspace.applyEdit(edit);

	});






	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
