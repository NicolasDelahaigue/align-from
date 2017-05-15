'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {

        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }
        vscode.commands.executeCommand('actions.find', 'from').then(() => {
            vscode.commands.executeCommand('editor.action.selectAllMatches').then(() => {
                vscode.commands.executeCommand('cursorLeft').then(() => {
                    vscode.commands.executeCommand('extension.align').then(() => {
                        vscode.commands.executeCommand('closeFindWidget');
                        vscode.commands.executeCommand('removeSecondaryCursors');
                    });
                });                
            });
        });
        /*
        vscode.commands.executeCommand('editor.action.selectHighlights').then(() => {
            vscode.commands.executeCommand('cursorLeft').then(() => {
               vscode.commands.executeCommand('extension.align').then(() => {});
            });
        });
        */
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}