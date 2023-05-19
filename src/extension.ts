// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { exec } from 'child_process';
import path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "externalsvn" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	let a = vscode.commands.registerCommand('externalsvn.start', (e) => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const name = path.basename(e.path.substring(1));
		const paths = e.path.substring(1);
		exec("TortoiseProc /command:commit /path:%cd% /closeonend:{2}", {
			cwd: name.indexOf('.') !== -1 ? path.dirname(paths) : paths
		});
	})

	let b = vscode.commands.registerCommand('externalsvn.update', (e) => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const name = path.basename(e.path.substring(1));
		const paths = e.path.substring(1);
		exec("TortoiseProc /command:update /path:%cd% /closeonend:{2}", {
			cwd: name.indexOf('.') !== -1 ? path.dirname(paths) : paths
		});
	})

	context.subscriptions.push(
		a, b
	);
}

// this method is called when your extension is deactivated
export function deactivate() { }
