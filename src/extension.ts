// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


// Not perfect but should work for a lot of scenarios
async function shouldMark(cloudFormationTemplate: any, nameToCheck: string) {
	// if there is already a types package installed
	const allowedRegex = `^[a-z0-9][a-z0-9//.//-]*[a-z0-9]$`;
	const found = cloudFormationTemplate.name.match(allowedRegex);
	return found === null;
}


async function getDiagnostics(doc: vscode.TextDocument): Promise<vscode.Diagnostic[]> {
	const text = doc.getText(); //Hold all of the document text in it. f.e. CF Template
	const diagnostics = new Array<vscode.Diagnostic>();

	let cloudFormationTemplate;
	try {
		cloudFormationTemplate = JSON.parse(text);
	} catch(e) {
		return diagnostics;
	}
	
	for (const [key, value] of Object.entries(cloudFormationTemplate.Resources)) {
		let resourceType = key;
		let resource = value;
	}

	
	/////////////


	const textArr: string[] = text.split(/\r\n|\n/); //Turn the text into array
	const indexOfBucket = textArr.findIndex((value: string) => new RegExp(`\s*"BucketName"`).test(value)) + 1;

	if(indexOfBucket !== -1) {
		let i = indexOfBucket-1;
		let name = textArr[i];
		while (textArr.length > i && !/\s*}/.test(textArr[i])) {
			const arr = /\s*"(.*)"\s*:/.exec(textArr[i]);
			if(!arr) {
				i++;
				continue;
			}
			const key = arr[1];
			if (arr.includes("BucketName")) {
				const start = textArr[i].indexOf(key);
				const end = start + key.length;
				diagnostics.push({
					severity: vscode.DiagnosticSeverity.Information,
					message: `It's not a valid name`,
					//code: 'no-types-detected',
					source: 'NameIT',
					range: new vscode.Range(i, start, i, end)
				});
			}
			i++;
		}
	}

	return diagnostics;
}


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	const diagnosticCollection = vscode.languages.createDiagnosticCollection('types-installer');
	
	const handler = async (doc: vscode.TextDocument) => {
		if(!doc.fileName.endsWith('static-website.json')) {
			return;
		}
	
		const diagnostics = await getDiagnostics(doc);
		diagnosticCollection.set(doc.uri, diagnostics);
	};
	
	const didOpen = vscode.workspace.onDidOpenTextDocument(doc => handler(doc));
	const didChange = vscode.workspace.onDidChangeTextDocument(e => handler(e.document));
	
	// If we have an activeTextEditor when we open the workspace, trigger the handler
	if (vscode.window.activeTextEditor) {
		await handler(vscode.window.activeTextEditor.document);
	}
	
	// Push all of the disposables that should be cleaned up when the extension is disabled
	context.subscriptions.push(
		diagnosticCollection);
}


// This method is called when your extension is deactivated
export function deactivate() {}
