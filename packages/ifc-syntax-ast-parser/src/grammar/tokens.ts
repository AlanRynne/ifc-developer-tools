import * as moo from "moo"

export let lexer = moo.states({
  // Rules that apply to every state.
  $all: {
    space: /[ \t]+/,
    eol: { match: ";" },
    newline: { match: /[\n\r]/, lineBreaks: true },
    err: moo.error
  },
  // Main rules
  main: {
    isotag: { match: /ISO-\d{5}-\d{2}/, value: (x: string) => x.slice(4) },
    isoclosetag: {
      match: /END-ISO-\d{5}-\d{2}/,
      value: (x: string) => x.slice(8)
    },
    headertag: { match: /HEADER/ },
    datatag: { match: /DATA/ },
    include: ["endsec", "cmnt_strt"],
    word: { match: /[A-Z\_0-9]+/ },
    lparen: { match: /\(/, push: "input" },
    ref: { match: /#\d+/, value: (x: string) => x.slice(1) },
    assign: { match: "=", push: "entity" }
  },
  cmnt_strt: {
    cmnt_strt: { match: /\/\*+/, push: "cmnt" }
  },
  cmnt: {
    cmnt_end: { match: /\*+\//, pop: 1 },
    cmnt_line: { match: /[^\s\\]+/ }
  },
  // IFC entity declaration
  entity: {
    word: { match: /[\w\d]+/ },
    lparen: { match: /\(/, push: "input" },
    eol: { match: ";", pop: 1 }
  },
  // Resolves anything inside the constructor parenthesis, including nested parenthesis.
  input: {
    include: ["cmnt_strt"],
    ".": ".",
    "-": "-",
    int: { match: /\d+/ },
    scisuff: { match: /[eE][-+]?\d+/ },
    separator: { match: /,/ },
    word: { match: /[\w\d]+/ },
    dollar: { match: "$", value: (x: string) => null },
    star: { match: "*", value: (x: string) => null },
    ref: { match: /#\d+/, value: (x: string) => x.slice(1) },
    snglquote: { match: /\'/, push: "snglqt_str" },
    dblquote: { match: /\"/, push: "dblqt_str" },
    lparen: { match: "(", push: "input" },
    rparen: { match: ")", pop: 1 }
  },
  // Resolves anything inside a parenthesis that is not the constructor parenthesis.
  // Close section tag "ENDSEC"
  endsec: {
    endtag: { match: /ENDSEC/, pop: 1 }
  },
  // Resolves anything inside single or double quotes.
  snglqt_str: {
    string: { match: /[^\']+/, lineBreaks: true },
    snglquote: { match: /\'/, pop: 1 }
  },
  dblqt_str: {
    string: { match: /[^\"]+/, lineBreaks: true },
    dblquote: { match: /\"/, pop: 1 }
  }
})

let inComment = true
lexer.next = (next => () => {
  let tok = next.call(lexer)
  if (tok.type === "cmnt_start") inComment = true
  if (tok.type === "cmnt_end") inComment = false
  while (inComment && (tok = next.call(lexer))) {
    if (tok.type === "cmnt_end") inComment = false
  }
  return tok
})(lexer.next)
