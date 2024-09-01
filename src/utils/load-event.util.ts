import * as fs from 'fs';

export function loadEventContent(filePath: string): string {
  if (!fs.existsSync(filePath))
    throw new Error(`Event file not found: ${filePath}`);
  return fs.readFileSync(filePath, 'utf8');
}
