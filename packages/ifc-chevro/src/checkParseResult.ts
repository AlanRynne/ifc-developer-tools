
export function checkParseResult(parseResult: any, expectedName: string) {
  expect(parseResult.cst.name).toBe(expectedName);
  expect(parseResult.lexErrors.length).toBe(0);
  expect(parseResult.parseErrors.length).toBe(0);
}
