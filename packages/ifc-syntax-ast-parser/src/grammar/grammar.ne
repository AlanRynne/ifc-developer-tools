@preprocessor typescript

@{% 
import { lexer } from './tokens'
import { first } from './functions'
import * as Nodes from "../ast/nodes";
import { ASTType, ASTNode, ASTRange } from "../ast/index";

%}

@lexer lexer


# ----
# MAIN
# ----

# Resolves the complete IFC file
main_section -> tag_iso_open _ header_section _ data_section _ tag_iso_close
{% (data: any) => {
    return new Nodes.DocumentNode(
        data[0].value,
        [data[2], data[4]], 
        new ASTRange(
            data[0].offset, 
            data[6].offset + data[6].text.length,
            data[0].line,
            data[6].line))
}%}

# ----
# HEADER SECTION
# ----

# Resolves the complete header of the IFC file
header_section -> tag_header _ header_entities _ tag_end_sec 
{% (data) => {
    return new Nodes.SectionNode(
        data[0],
        data[2],
        new ASTRange(
            data[0].loc.start.character,
            data[4].loc.end.character,
            data[0].loc.end.line,
            data[4].loc.end.line
        )
    )
}%}


# Resolves a collection of header entities
header_entities -> header_entity | header_entities _ header_entity {% d => {
    var values = d[0]
    values.push(d[2])
    return values
}%}

# Resolves a header entity declaration
header_entity -> comment _ newline {% first %}
                | %word _ %lparen newline:? _ header_inputs _ %rparen %eol newline {% (data) => {
                        return new Nodes.FunctionNode(
                            data[0].value,
                            data[5],
                            new ASTRange(
                                data[2].offset,
                                data[7].offset + data[7].text.length,
                                data[2].line,
                                data[7].line))
}%}


# Unfolds the nested list of header inputs into a single list
header_inputs -> header_input {% d => Array.isArray(d[0]) ? d[0] : [d[0]] %} 
               | header_inputs spls:? _ %separator spls:? _ header_input {% d => {
                   var values = d[0]
                   values.push(d[6])
                   return values
               }%}


header_input -> singleline_cmnt _ header_input_raw {% (data) => [data[0],data[2]] %}
                | header_input_raw {% first %}


# Resolves all valid header inputs (currently just strings?)
# TODO: Fix resolver
header_input_raw -> %lparen spls:? _ header_inputs spls:? _ %rparen {% (data) => {
                        return new Nodes.ArrayNode(
                            data[3],
                            new ASTRange(
                                data[0].offset,
                                data[6].offset + data[6].text.length,
                                data[0].line,
                                data[6].line)
                        )
                    }%}
                    | null_node {% first %}
                    | string {% first %}

# ----
# DATA SECTION
# ----

# Resolves the complete data section of the IFC file
data_section -> tag_data _ data_entities:? _ tag_end_sec {% (data) => {
    return new Nodes.SectionNode(
        data[0],
        data[2],
        new ASTRange(
            data[0].loc.start.character,
            data[4].loc.end.character,
            data[0].loc.start.line,
            data[4].loc.end.line))
}%}


# Unfolds a nested list of entities into a single list
data_entities -> data_entity  | data_entities _ data_entity {% d => {
    var values = d[0]
    values.push(d[2])
    return values
}%}

# Resolves an IFC entity declaration
data_entity -> var _ %assign _ data_entity_constructor %eol (_ singleline_cmnt):? _ newline {% (data) => {
    return new Nodes.AssignmentNode(
        data[0],
        data[4],
        new ASTRange(
            data[0].loc.start.character,
            data[5].offset + data[5].text.length,
            data[0].loc.start.line,
            data[5].line)
    )
} %} | comment _ newline {% first %}


# Resolves an IFC constructor function
data_entity_constructor -> %word _ %lparen constructor_values %rparen {% (data) => {
    let name = new Nodes.StringNode(
        data[0]?data[0].text:null,
        new ASTRange(
            data[0].offset,
            data[0].offset + data[0].text.length,
            data[0].line,
            data[0].line)
        ) 
    return new Nodes.ConstructorNode(
        name,
        data[3],new ASTRange(
            data[0].offset,
            data[4].offset + data[4].text.length,
            data[0].line,
            data[4].line))
}%}


# Resolves the arguments of a constructor function (but could be any function if need be)
constructor_values -> constructor_value | constructor_values _ %separator _ constructor_value {% d => {
    var values = d[0]
    values.push(d[4])
    return values
}%}  | null



constructor_value -> singleline_cmnt _ constructor_value_raw  {% (data) => data[2] %} | constructor_value_raw {% first %}


# TODO: i thinks the memory leak is the circular reference between constructor_values and constructor_value
# TODO: Check solution in head and do the same (step by step rules)
# Resolves all valid values inside a constructor
constructor_value_raw -> (  null_node 
                            | string
                            | var 
                            | enum_member 
                            | number 
                            | data_entity_constructor 
                        ) {% (data) => data[0][0] %}
                        |%lparen constructor_values %rparen {% (data) => new Nodes.ArrayNode(
                            data[1],
                            new ASTRange(
                                data[0].offset,
                                data[2].offset + data[2].text.length,
                                data[0].line,
                                data[2].line)
)%}

var -> %ref 
{% data => {
    return new Nodes.VariableNode(
        data[0].value,
        new ASTRange(
            data[0].offset,
            data[0].offset+data[0].text.length,
            data[0].line,
            data[0].line))
}%}

null_node -> (%dollar | %star) 
{% data => {
    return new Nodes.NullNode(
        data[0][0].text, 
        new ASTRange(
            data[0][0].offset,
            data[0][0].offset+1,
            data[0][0].line,
            data[0][0].line))
}%}


# ----
# TAGS

tag_header -> %headertag %eol newline 
{% (data) => {
    return new Nodes.KeywordNode(
        data[0].value,
        new ASTRange(
            data[0].offset, 
            data[1].offset + data[1].text.length,
            data[0].line,
            data[1].line))
} %}

tag_data -> %datatag %eol newline 
{% (data) => {
    return new Nodes.KeywordNode(
        data[0].value,
        new ASTRange(
            data[0].offset, 
            data[1].offset + data[1].text.length,
            data[0].line,
            data[1].line))
} %}


tag_end_sec -> %endtag %eol newline 
{% (data) => {
    return new Nodes.KeywordNode(
        data[0].value,
        new ASTRange(
            data[0].offset, 
            data[1].offset + data[1].text.length,
            data[0].line,
            data[0].line))
} %}


tag_iso_open -> %isotag %eol newline 
{% first %}

tag_iso_close -> %isoclosetag %eol newline 
{% first %}


# ----
# BASICS
# ----

string -> single_quote_string {% first %} | double_quote_string {% first %}

comment -> multiline_cmnt {% first %} | singleline_cmnt {% first %}

double_quote_string -> %dblquote %string:? %dblquote 
{% data => { 
    return new Nodes.StringNode(
        data[1]?data[1].text:null, 
        new ASTRange(
            data[0].offset,
            data[2].offset + data[2].text.length,
            data[0].line,
            data[2].line)
        ) 
}%}

single_quote_string -> %snglquote %string:? %snglquote 
{% data => { 
    return new Nodes.StringNode(
        data[1]?data[1].text:null,
        new ASTRange(
            data[0].offset,
            data[2].offset + data[2].text.length,
            data[0].line,
            data[2].line)
        ) 
}%}

multiline_cmnt -> %cmnt_strt newline (cmnt_content newline):* %cmnt_end
{% (data) => {
    let d = ''
    for(let i in data[2]){
        d += data[2][i][0] + `\n`
    }
    return new Nodes.CommentNode(
        d,
        new ASTRange(
            data[0].offset, 
            data[3].offset + data[3].text.length,
            data[0].line,
            data[3].line)
    )
} %}

singleline_cmnt -> %cmnt_strt _ cmnt_content _ %cmnt_end
{% (data) => {
    return new Nodes.CommentNode(
        data[2],
        new ASTRange(
            data[0].offset,
            data[4].offset + data[4].text.length,
            data[0].line,
            data[4].line)
    )
} %}

cmnt_content -> %cmnt_line (_ %cmnt_line):* 
{% data => {
    var d = [data[0].text]
    for(let i in data[1]){
        if(data[1][i][0] == null) d.push(' ')
        d.push(data[1][i][1].text)
    }
    return d.join('');
} %}

enum_member -> "." %word "."
{% data => { 
    return new Nodes.EnumMemberNode(
        data[1].value, 
        new ASTRange(
            data[0].offset, 
            data[2].offset + data[2].text.length,
            data[0].line,
            data[2].line))
}%}

number -> "-":? (scinum | decimal | int) 
{% data => {
    let numAST = data[1][0]
    if(data[0]) {
        numAST.value = -numAST.value
    }
    return numAST
}%}

# Only positive numbers

scinum -> decimal %scisuff 
{% ([dec, suf]) => {
    let txt = dec.value + suf.value
    let num: number = +txt
    dec.value = num;
    dec.loc.end.character += suf.text.length
    return dec
}%}

decimal -> int "." int:? 
{% data => {
    let dec: string = data[2]? data[2].value : ""
    let text: string = data[0].value + "." + dec
    return new Nodes.NumberNode(
        parseFloat(text),
        new ASTRange(
            data[0].loc.start.character,
            data[2] ? data[2].loc.end.character : data[0].loc.end.character+1,
            data[1].line,
            data[1].line))
}%}

int -> %int 
{% ([token]) => new Nodes.NumberNode(
        parseFloat(token.value),
        new ASTRange(
            token.offset,
            token.offset+token.text.length,
            token.line,
            token.line)) 
%}


# One or many lines with leading space
spls -> spl:+
# Line char with leading space
spl -> _ %newline

newline -> %newline (_ %newline):* {% data => null %}

_ -> null | %space:+ {% data => null %} 
