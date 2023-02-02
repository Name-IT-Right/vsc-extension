import { readFileSync } from "fs";
import { join } from "path";

export const getDB = () => {
  const dbPath = join(__dirname, "database.json");
  console.log("dbPath", dbPath);
  try {
    const file = readFileSync(dbPath, "utf-8");
    // TODO: change type to something more useful
    return JSON.parse(file) as any;
  } catch (e) {
    throw new Error(`Unable to parse file: ${dbPath}`);
  }
}