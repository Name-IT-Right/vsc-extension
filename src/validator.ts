import { Diagnostic } from "vscode";
import { parseCfTemplateToGetStringLocations } from "./cf-parser";
import { getDB } from "./database";

export const validate = (doc: string) => {
	console.log('validate!');
	const stringLocations = parseCfTemplateToGetStringLocations(doc);
	const db = getDB();
	console.log('DB loaded!');

	const validationResults: Diagnostic[] = [];
	for (let location of stringLocations) {
		// if it's an error or warning, then push to validationResults

		// TODO: implement validation logic depending on the structure of the DB
	}
	return validationResults;
}
