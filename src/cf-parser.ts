import { ParsingResult } from "./types";

export const parseCfTemplateToGetStringLocations = (text: string) => {
  const results: ParsingResult[] = [];
  let inResources = false;

  let lineNumber = 0;
  let columnNumber = 0;
  let isIdentifierBeingRead = false;
  let identifier = "";

  let curlyBraces = 0;

  const inDocumentBase = function () { return curlyBraces === 1 };
  const inResourceBase = function () { return curlyBraces === 3 };
  const inPropertiesBase = function () { return curlyBraces === 4 };
  const isCharNumber = function (c: any) { return c >= '0' && c <= '9' };

  let lastEndedIdentifierWasType = false;
  let lastResourceType = "";
  let lastEndedIdentifierWasPropertyName = false;
  let lastPropertyName = "";

  for (let i = 0; i < text.length; i++) {

    if (text[i] === '\n') {
      lineNumber++;
      columnNumber = 0;
      continue;
    }

    columnNumber++;

    if (text[i] === "\"") {
      isIdentifierBeingRead = !isIdentifierBeingRead;
      if (isIdentifierBeingRead) {
        // only clear the identifier if it just started being read
        identifier = "";
      } else {
        // we just ended reading an identifier

        if (inDocumentBase()) {
          // for every new secion of the CF Template we set the variables to defaults
          lastEndedIdentifierWasType = false;
          lastResourceType = "";
          lastEndedIdentifierWasPropertyName = false;
          lastPropertyName = "";
          // additionaly, if we are in Resources section of the template, we set the flag
          inResources = identifier === "Resources";
          continue;
        }

        if (inResourceBase() && lastEndedIdentifierWasType) {
          lastResourceType = identifier;
          lastEndedIdentifierWasType = false;
        }

        if (inResourceBase() && identifier === "Type") {
          lastEndedIdentifierWasType = true;
        }

        if (inPropertiesBase() && lastEndedIdentifierWasPropertyName) {
          lastEndedIdentifierWasPropertyName = false;
          // console.log(lastResourceType, lastPropertyName, identifier);
          const result = {
            type: lastResourceType,
            propertyName: lastPropertyName,
            value: identifier,
            startLine: lineNumber,
            startColumn: columnNumber - identifier.length,
            endLine: lineNumber,
            endColumn: columnNumber
          };
          inResources && results.push(result);
          continue;
        }

        if (inPropertiesBase() && !lastEndedIdentifierWasPropertyName) {
          lastPropertyName = identifier;
          lastEndedIdentifierWasPropertyName = true;
        }

      }
      continue;
    }

    if (isIdentifierBeingRead) {
      identifier = identifier + text[i];
    }

    if (isCharNumber(text[i]) && inPropertiesBase()) {
      lastEndedIdentifierWasPropertyName = false;
      continue;
    }

    if (text[i] === "{") {
      if (inPropertiesBase()) {
        lastEndedIdentifierWasPropertyName = false;
      }
      curlyBraces++;
      continue;
    }

    if (text[i] === "}") {
      curlyBraces--;
      continue;
    }
  }

  return results;
}