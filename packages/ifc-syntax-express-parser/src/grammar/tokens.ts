import moo from "moo"

export const lexer = moo.states({
  main: {
    space: { match: /\s+/, lineBreaks: true },
    ";": ";",
    ent_start: {
      match: ["ENTITY", "TYPE", "FUNCTION", "RULE"],
      push: "ifcEntity"
    },
    cmnt_start: { match: "(*", push: "comment" },
    word: {
      match: /[a-zA-Z0-9_]+/,
      type: moo.keywords({
        schema: "SCHEMA",
        schema_end: "END_SCHEMA"
      })
    }
  },
  ifcEntity: {
    space: { match: /\s+/, lineBreaks: true },
    number: /\d+/,
    punctuation: ["=", ";", ",", ":", "[", "]", "(", ")", "?"],
    "'": { match: "'", push: "string" },
    enum: { match: ["ENUMERATION", "SELECT"], push: "enumValues" },
    ent_end: {
      match: ["END_ENTITY", "END_TYPE", "END_FUNCTION", "END_RULE"],
      pop: 1
    },
    local: { match: ["LOCAL"], push: "local" },
    unsupported: {
      match: ["DERIVE", "WHERE", "CASE", "IF", "RETURN"],
      next: "unsupported"
    },
    word: {
      match: /\w+/,
      type: moo.keywords({
        list: ["LIST", "ARRAY", "BAG", "SET"],
        primitive: [
          "REAL",
          "BINARY",
          "LOGICAL",
          "BOOLEAN",
          "NUMBER",
          "INTEGER",
          "STRING"
        ],
        keywords: ["OF", "IN", "SELF", "OR", "INVERSE", "UNIQUE"]
      })
    }
  },
  local: {
    punctuation: [";", ",", ":", "(", ")", "[", "]"],
    space: { match: /\s+/, lineBreaks: true },
    ";": ";",
    local_end: {
      match: ["END_LOCAL"],
      pop: 1
    },
    word: {
      match: /\w+/,
      type: moo.keywords({
        list: ["LIST", "ARRAY", "BAG", "SET"],
        primitive: [
          "REAL",
          "BINARY",
          "LOGICAL",
          "BOOLEAN",
          "NUMBER",
          "INTEGER",
          "STRING"
        ],
        keywords: ["OF", "IN", "SELF", "OR", "INVERSE", "UNIQUE"]
      })
    }
  },
  string: {
    "'": { match: "'", pop: 1 },
    string: { match: /[^\']+/, lineBreaks: true }
  },
  comment: {
    cmnt_end: { match: "*)", pop: 1 },
    anything: { match: /[^*)]+/, lineBreaks: true }
  },
  unsupported: {
    ";": ";",
    str_start: { match: "'", push: "string" },
    ent_end: {
      match: ["END_ENTITY", "END_TYPE", "END_FUNCTION", "END_RULE"],
      pop: 1
    },
    space: { match: /\s+/, lineBreaks: true },
    anything: { match: /[^\s\'\;]+/, lineBreaks: true }
  },
  enumValues: {
    space: { match: /\s+/, lineBreaks: true },
    "(": "(",
    ",": ",",
    ")": { match: ")", pop: 1 },
    word: {
      match: /\w+/,
      type: moo.keywords({
        OF: "OF"
      })
    }
  }
})
