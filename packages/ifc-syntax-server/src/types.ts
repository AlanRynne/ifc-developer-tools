export interface IfcSyntaxSettings {
  diagnostics: {
    maxNumberOfProblems: number
  }
  parser: {
    maxLineLength: number
  }
}

export const DefaultSettings: IfcSyntaxSettings = {
  diagnostics: {
    maxNumberOfProblems: 1000
  },
  parser: {
    maxLineLength: 0  // 0 = unlimited; set >0 to skip very long lines (e.g. tessellated geometry)
  }
}
