import { Diagnostic, DiagnosticSeverity, Range } from "vscode";
import { getStringLocations } from "./cf-parser";
import { rulesNameItRight } from './rules-name-it-right';
import { rulesPropertiesEnriched } from './rules-properties-enriched';
import { ParsingResult, Rule } from "./types";

export const validate = (doc: string) => {
	const cfTemplateParsingResults = getStringLocations(doc);
	return getDiagnostics(cfTemplateParsingResults);
}

const getDiagnostics = (locations: ParsingResult[]) => {
	return locations.reduce((diagnostics, location) => diagnostics.concat(getDiagnostic(location)), [] as Diagnostic[]);
}

const getDiagnostic = (location: ParsingResult) => {
	const diagnosticForLocation: Diagnostic[] = [];

	// 1. Get NameItRight errors
	diagnosticForLocation.push(...getNameItRightErrors(location));

	// 2. If Name It Right didn't yield any errors, try to get errors based on the patterns in the Schema Registry
	// TODO: implement Schema Registry checks
	// if (diagnosticForLocation.length === 0) {
	// 	diagnosticForLocation.push(...getCFSchemaRegistryError(location));
	// }

	// 3. Get NameItRight warnings
	diagnosticForLocation.push(...getNameItRightWarnings(location));
	return diagnosticForLocation;
}

const getNameItRightErrors = (location: ParsingResult) => {
	const rules = rulesNameItRight[location.type]?.properties[location.propertyName]?.validation.errors || [];
	return getNameItRightDiagnostics(location, DiagnosticSeverity.Error, rules);
}

const getNameItRightWarnings = (location: ParsingResult) => {
	const rules = rulesNameItRight[location.type]?.properties[location.propertyName]?.validation.warnings || [];
	return getNameItRightDiagnostics(location, DiagnosticSeverity.Warning, rules);
}

const getNameItRightDiagnostics = (location: ParsingResult, severity: DiagnosticSeverity, rules: Rule[]) => {
	const result: Diagnostic[] = [];
	rules.forEach(rule => {
		console.log(location.value, rule.id)
		const ruleMatchingResult = location.value.match(rule.regex);
		// If didn't match it means that the rule was broken
		if (ruleMatchingResult === null) {
			result.push({
				severity,
				message: rule.errorMessage,
				source: 'Name IT Right',
				code: location.value,
				range: new Range(location.startLine, location.startColumn, location.endLine, location.endColumn)
			});
		}
	});
	return result;
}
