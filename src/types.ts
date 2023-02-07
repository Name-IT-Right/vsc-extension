export type NameItRightDatabase = Record<string, NameItRightService>;

export type NameItRightService = {
  properties: NameItRightProperties
};

export type NameItRightProperties = Record<string, NameItRightProperty>;

export type NameItRightProperty = {
  validation: {
    errors: Rule[],
    warnings: Rule[]
  }
}

export type Rule = {
  id: string,
  errorMessage: string;
  regex: string;
}

export type Property = {
  description?: string;
  maxLength?: 63;
  minLength?: number;
  pattern?: string;
  type: string;
};

export interface ParsingResult {
  type: string;
  propertyName: string;
  value: string;
  startLine: number;
  startColumn: number;
  endLine: number;
  endColumn: number;
}
