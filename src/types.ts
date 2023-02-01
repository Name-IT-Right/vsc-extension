export type NameItRightDatabase = Record<string, Schema>;

export type Schema = Record<string, Properties>;

export type Properties = Record<string, Property>;

export type Property = {
  description?: string;
  maxLength?: 63;
  minLength?: number;
  pattern?: string;
  type: string;
};
