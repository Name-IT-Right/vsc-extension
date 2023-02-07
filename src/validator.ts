import { Diagnostic, DiagnosticSeverity, Range } from "vscode";
import { parseCfTemplateToGetStringLocations } from "./cf-parser";
import { rulesNameItRight } from './rules-name-it-right';
import { rulesPropertiesEnriched } from './rules-properties-enriched';
import { ParsingResult } from "./types";

export const validate = (doc: string) => {
	const stringLocations = parseCfTemplateToGetStringLocations(doc);

	const validationResults: Diagnostic[] = [];
	for (let location of stringLocations) {
		validationResults.push(...getDiagnosticForLocation(location));
	}
	return validationResults;
}

const getDiagnosticForLocation = (location: ParsingResult) => {
	const diagnosticForLocation: Diagnostic[] = [];
	try {
		const nameItRightValidationErrors = rulesNameItRight[location.type]?.properties[location.propertyName]?.validation.errors || [];
		// First, try to catch Name It Right errors
		for (let error of nameItRightValidationErrors) {
			const errorMatchingResult = location.value.match(error.regex);
			// If didn't match it means that the rule was broken
			if (errorMatchingResult === null) {
				diagnosticForLocation.push({
					severity: DiagnosticSeverity.Error,
					message: error.errorMessage,
					source: 'AWS Name It Right',
					range: new Range(location.startLine, location.startColumn, location.endLine, location.endColumn)
				});
			}
		}

		// If Name It Right didn't yield any errors, try to get errors based on the patterns in the Schema Registry

		// Get warnings from AWS Name It Right
		const nameItRightValidationWarnings = rulesNameItRight[location.type]?.properties[location.propertyName]?.validation.warnings || [];
		for (let warning of nameItRightValidationWarnings) {
			const warningMatchingResult = location.value.match(warning.regex);
			// If didn't match it means that the rule was broken
			if (warningMatchingResult === null) {
				diagnosticForLocation.push({
					severity: DiagnosticSeverity.Warning,
					message: warning.errorMessage,
					source: 'AWS Name It Right',
					range: new Range(location.startLine, location.startColumn, location.endLine, location.endColumn)
				});
			}
		}

	} catch (e) {
		console.error(e);
	}

	return diagnosticForLocation;
}
