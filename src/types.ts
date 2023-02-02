export type NameItRightDatabase = Record<string, Service>;

export type Service = Record<string, Properties>;

export type Properties = Record<string, Property>;

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
