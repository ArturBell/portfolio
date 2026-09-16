import { describe, test, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('File existence tests', () => {
  test('index.html should exist', () => {
    const indexPath = path.join(__dirname, '..', 'index.html');
    expect(fs.existsSync(indexPath)).toBe(true);
  });

  test('styles.css should exist', () => {
    const stylesPath = path.join(__dirname, '..', 'styles.css');
    expect(fs.existsSync(stylesPath)).toBe(true);
  });
});